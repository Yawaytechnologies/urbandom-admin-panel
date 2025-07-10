import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white px-6 py-3 flex flex-col md:flex-row justify-between items-center text-sm">
      {/* Left Section: Copyright */}
      <div className="mb-2 md:mb-0">
        © {new Date().getFullYear()} Urbandom. All rights reserved.
      </div>

      {/* Center Section: Quick Links */}
      <div className="flex space-x-4 mb-2 md:mb-0">
        <a href="#" className="hover:underline">
          Terms
        </a>
        <a href="#" className="hover:underline">
          Privacy
        </a>
        <a href="#" className="hover:underline">
          Support
        </a>
      </div>

      {/* Right Section: App Version */}
      <div className="text-gray-400">v1.0.0</div>
    </footer>
  );
}
