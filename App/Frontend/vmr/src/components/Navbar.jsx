import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-white text-xl font-bold">
            Sravan
          </a>
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href="/admin/products"
              className="text-white px-3 py-2 rounded-md hover:bg-gray-700"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-white px-3 py-2 rounded-md hover:bg-gray-700"
            >
              About
            </a>
            <a
              href="/admin/"
              className="text-white px-3 py-2 rounded-md hover:bg-gray-700"
            >
              Admin
            </a>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu (Visible only when isOpen is true) */}
        <div
          className={`absolute top-16 left-0 w-full bg-gray-800 z-50 transition duration-300 ease-in-out ${
            isOpen ? "flex" : "hidden"
          } flex-row justify-around items-center space-x-4 sm:hidden`}
        >
          <a
            href="/admin/products"
            className="text-white px-3 py-2 rounded-md hover:bg-gray-700"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-white px-3 py-2 rounded-md hover:bg-gray-700"
          >
            About
          </a>
          <a
            href="/admin/"
            className="text-white px-3 py-2 rounded-md hover:bg-gray-700"
          >
            Admin
          </a>
        </div>
      </div>
    </nav>
  );
}
