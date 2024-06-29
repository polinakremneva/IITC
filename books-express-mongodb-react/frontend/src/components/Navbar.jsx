import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-pink-50 flex justify-between items-center shadow-md sticky top-0 z-50 p-[3.5em] py-2">
      <Link to="/" className="text-gray-800 text-lg font-semibold">
        HOMEPAGE
      </Link>
    </div>
  );
}

export default Navbar;
