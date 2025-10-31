import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const base64Logo =
    "data:image/png;base64,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";

  return (
    <nav className="bg-white shadow-md px-6 py-3 flex flex-wrap justify-between items-center sticky top-0 z-50 gap-3">
      {/* Left - Logo */}
      <div className="flex items-center space-x-3">
        <img src={base64Logo} alt="Highway Delite Logo" className="h-10 w-auto" />
        <span className="font-semibold text-lg text-gray-800">Highway Delite</span>
      </div>

      {/* Right - Navigation links */}
      <div className="space-x-6 text-sm sm:text-base">
        <Link to="/experiences" className="text-gray-700 hover:text-yellow-500">
          Experiences
        </Link>
        <Link to="/about" className="text-gray-700 hover:text-yellow-500">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
