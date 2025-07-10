import React from "react";
import { Bell, ChevronDown } from "lucide-react";

export default function Header({ pageTitle = "Dashboard", showDropdown, setShowDropdown }) {
  return (
    <header className="relative flex items-center justify-between bg-white px-6 py-4 border-b border-gray-200 shadow-sm h-16">
      {/* Logo on the left */}
      <div className="z-10 flex items-center gap-2">
        <img
          src="/logo.svg" // Replace with your logo path or use text if needed
          alt="Logo"
          className="h-8 w-auto"
        />
      </div>

      {/* Centered Page Title */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <h1 className="text-xl font-semibold text-gray-800">{pageTitle}</h1>
      </div>

      {/* Right Controls */}
      <div className="ml-auto flex items-center gap-6 z-10">
        <button className="relative text-gray-500 hover:text-gray-700">
          <Bell className="w-5 h-5" />
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full" />
        </button>

        <div className="relative">
          <button
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
            onClick={() => setShowDropdown((prev) => !prev)}
          >
            <img
              src="https://i.pravatar.cc/32"
              alt="Admin"
              className="w-8 h-8 rounded-full"
            />
            <span className="hidden sm:block">Admin</span>
            <ChevronDown className="w-4 h-4" />
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-50 border">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">
                My Profile
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">
                Change Password
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700">
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
