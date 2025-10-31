import React, { useEffect, useState } from "react";
import { api } from "../api";
import { Link } from "react-router-dom";

export default function Home() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    api
      .get("/experiences")
      .then((r) => {
        setItems(r.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Filtered items based on search
  const filteredItems = items.filter((i) =>
    i.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Experiences</h1>

      {/* 🔍 Search bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search experiences..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* 🧱 Grid Layout — more cards per row */}
      {filteredItems.length === 0 ? (
        <p>No experiences found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((i) => (
            <div
              key={i._id}
              className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 bg-white"
            >
              <img
                src={i.image}
                alt={i.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{i.title}</h2>
                <p className="text-sm text-gray-600 mt-1 line-clamp-3">
                  {i.description}
                </p>
                <div className="flex items-center justify-between mt-3">
                  <div className="font-bold text-gray-800">₹{i.price}</div>
                  <Link
                    to={`/details/${i._id}`}
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
