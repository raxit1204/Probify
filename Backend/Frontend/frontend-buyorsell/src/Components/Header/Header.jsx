import React from "react";

function Header() {
  return (
    <header className="bg-gradient-to-r from-primary-600 to-primary-500 p-5 md:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img
            src="https://cdn-icons-png.flaticon.com/128/8991/8991181.png"
            alt="Logo"
            className="h-10 w-10"
          />
          <span className="text-white text-2xl font-bold tracking-tight">
            Probify
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-white text-primary-500 px-6 py-2 rounded-full font-semibold shadow-soft hover:bg-primary-50 transition duration-200">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
