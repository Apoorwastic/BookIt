import React from "react";
import { useLocation, Link } from "react-router-dom";
import { CheckCircle } from "lucide-react"; // ✅ optional icon library (Lucide)

export default function Result() {
  const loc = useLocation();
  const state: any = (loc.state as any) || {};
  const booking = state.booking || {};

  if (state.success) {
    return (
      <div className="flex justify-center items-center min-h-[80vh] bg-gray-50">
        <div className="bg-white shadow-lg rounded-2xl p-8 text-center w-[90%] max-w-md border border-gray-100">
          <CheckCircle className="text-green-500 w-16 h-16 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-green-600">Booking Confirmed</h1>
          <p className="mt-2 text-gray-700">
            Your experience has been successfully booked!
          </p>

          <div className="mt-6 text-left bg-green-50 rounded-xl p-4">
            <p className="text-sm text-gray-700"><strong>Booking ID:</strong> {booking._id || "N/A"}</p>
            <p className="text-sm text-gray-700"><strong>Experience:</strong> {booking.experience?.title || "N/A"}</p>
            <p className="text-sm text-gray-700"><strong>Date:</strong> {booking.date || "N/A"}</p>
            <p className="text-sm text-gray-700"><strong>Time:</strong> {booking.time || "N/A"}</p>
            <p className="text-sm text-gray-700"><strong>Price:</strong> ₹{booking.experience?.price || "N/A"}</p>
          </div>

          <Link
            to="/"
            className="mt-6 inline-block bg-green-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-green-700 transition-all duration-200"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-gray-50">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center w-[90%] max-w-md border border-gray-100">
        <h1 className="text-3xl font-bold text-red-600">Booking Failed</h1>
        <p className="mt-3 text-gray-700">{state.error || "Unknown error occurred"}</p>
        <Link
          to="/"
          className="mt-6 inline-block bg-blue-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
