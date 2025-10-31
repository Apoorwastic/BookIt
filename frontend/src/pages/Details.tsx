import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../api";

interface Slot {
  date: string;
  time: string;
  available: boolean;
}

interface Experience {
  _id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  slots: Slot[];
}

export default function Details() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [item, setItem] = useState<Experience | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  useEffect(() => {
    if (!id) return;
    api
      .get(`/experiences/${id}`)
      .then((r) => {
        setItem(r.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="p-6 text-gray-500">Loading...</div>;
  if (!item) return <div className="p-6 text-red-500">Experience not found</div>;

  const availableDates = Array.from(new Set(item.slots.map((s) => s.date)));
  const timesForDate = item.slots.filter(
    (s) => s.date === selectedDate && s.available
  );

  return (
    <div className="p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-600 hover:underline"
      >
        ← Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left section — image */}
        <div>
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Right section — details */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{item.title}</h1>
          <p className="mt-3 text-gray-600">{item.description}</p>

          <div className="mt-6">
            <label className="font-semibold text-gray-700 block mb-1">
              Select Date
            </label>
            <select
              value={selectedDate}
              onChange={(e) => {
                setSelectedDate(e.target.value);
                setSelectedTime("");
              }}
              className="border p-2 rounded w-full"
            >
              <option value="">-- Choose Date --</option>
              {availableDates.map((d) => (
                <option key={d} value={d}>
                  {new Date(d).toLocaleDateString("en-IN", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                  })}
                </option>
              ))}
            </select>

            {selectedDate && (
              <>
                <div className="font-semibold mt-4 text-gray-700">
                  Available Times
                </div>
                <div className="flex gap-2 mt-2 flex-wrap">
                  {timesForDate.length === 0 ? (
                    <div className="text-sm text-gray-500">Sold out</div>
                  ) : (
                    timesForDate.map((t) => (
                      <button
                        key={t.time}
                        onClick={() => setSelectedTime(t.time)}
                        className={`px-3 py-1 border rounded-md transition ${
                          selectedTime === t.time
                            ? "bg-blue-600 text-white border-blue-600"
                            : "hover:bg-blue-100"
                        }`}
                      >
                        {t.time}
                      </button>
                    ))
                  )}
                </div>
              </>
            )}

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="text-xl font-bold text-gray-800">
                Price: ₹{item.price}
              </div>
              <button
                disabled={!selectedDate || !selectedTime}
                onClick={() =>
                  navigate("/checkout", {
                    state: {
                      experience: item,
                      date: selectedDate,
                      time: selectedTime,
                    },
                  })
                }
                className={`mt-4 sm:mt-0 bg-green-600 text-white px-5 py-2 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-700`}
              >
                {selectedTime ? "Book Now" : "Select Time"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
