"use client"

import { useState } from "react"

export default function GlobalHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMenu = () => {
    console.log("[v0] Menu toggle clicked, current state:", isMobileMenuOpen)
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  console.log("[v0] GlobalHeader rendering, menu open:", isMobileMenuOpen)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-black/10 z-50 px-4 sm:px-6 lg:px-8 safe-area-inset-top">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 sm:h-18 lg:h-20">
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="/"
              className="flex items-center text-[#2d2d2d] no-underline font-bold text-lg sm:text-xl lg:text-2xl"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 bg-conic-gradient from-[#ff6b35] via-[#ff8c42] to-[#ff6b35] rounded-full mr-2 sm:mr-3 relative flex items-center justify-center">
                <div className="absolute w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-white rounded-full"></div>
                <div className="absolute w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 bg-gradient-to-br from-[#ff6b35] to-[#ff8c42] rounded-full z-10"></div>
              </div>
              <span className="text-[#2c5aa0] hidden sm:inline">HonestHealth</span>
              <span className="text-[#2c5aa0] sm:hidden">HonestHealth</span>
            </a>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
            <button
              className="p-3 hover:bg-gray-100 rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center bg-red-100 border-2 border-red-500"
              onClick={() => console.log("[v0] User button clicked")}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-gray-800"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>
            <button
              className="p-3 hover:bg-gray-100 rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center bg-blue-100 border-2 border-blue-500"
              onClick={() => console.log("[v0] Cart button clicked")}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-gray-800"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </button>
            <button
              onClick={toggleMenu}
              className="p-3 hover:bg-gray-100 rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center bg-green-100 border-2 border-green-500"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-gray-800"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
            <a
              href="#"
              className="bg-[#2c5aa0] text-white px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 rounded-full font-semibold cursor-pointer transition-all duration-300 text-xs sm:text-sm hover:bg-[#1e3a8a] hover:-translate-y-0.5 min-h-[44px] flex items-center"
            >
              Log in
            </a>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {isMobileMenuOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMenu} />}

      {/* Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
          <button onClick={toggleMenu} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-gray-700"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Menu Content */}
        <div className="overflow-y-auto h-full pb-20">
          {/* Explore Section */}
          <div className="p-4">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">EXPLORE</h3>

            <div className="space-y-1">
              <a
                href="/weight-management"
                className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 rounded-lg transition-colors group"
                onClick={toggleMenu}
              >
                <span className="text-gray-800 font-medium">Weight Loss</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-400 group-hover:text-gray-600"
                >
                  <polyline points="9,18 15,12 9,6" />
                </svg>
              </a>

              <a
                href="/erectile-dysfunction"
                className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 rounded-lg transition-colors group"
                onClick={toggleMenu}
              >
                <span className="text-gray-800 font-medium">Erectile Dysfunction</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-400 group-hover:text-gray-600"
                >
                  <polyline points="9,18 15,12 9,6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Top Treatments Section */}
          <div className="p-4 border-t">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">TOP TREATMENTS</h3>

            <div className="grid grid-cols-2 gap-3">
              {/* Weight Loss Treatment */}
              <a
                href="/weight-management"
                className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors cursor-pointer"
                onClick={toggleMenu}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded font-medium">Rx</span>
                  <span className="text-xs bg-teal-500 text-white px-2 py-1 rounded font-medium">Popular</span>
                </div>
                <div className="w-12 h-12 bg-orange-200 rounded-full mb-3 flex items-center justify-center">
                  <div className="w-8 h-6 bg-orange-400 rounded-full"></div>
                </div>
                <h4 className="text-sm font-medium text-gray-800">Weight Loss Kits</h4>
              </a>

              {/* ED Treatment */}
              <a
                href="/erectile-dysfunction"
                className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors cursor-pointer"
                onClick={toggleMenu}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded font-medium">Rx</span>
                  <span className="text-xs bg-teal-500 text-white px-2 py-1 rounded font-medium">Popular</span>
                </div>
                <div className="w-12 h-12 bg-teal-200 rounded-full mb-3 flex items-center justify-center">
                  <div className="w-6 h-6 bg-teal-400 rounded"></div>
                </div>
                <h4 className="text-sm font-medium text-gray-800">ED Treatments</h4>
              </a>
            </div>
          </div>

          {/* Company Section */}
          <div className="p-4 border-t">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">COMPANY</h3>

            <div className="space-y-1">
              <button className="w-full text-left p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                About Us
              </button>
              <button className="w-full text-left p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                How It Works
              </button>
              <button className="w-full text-left p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                Medical Experts
              </button>
              <button className="w-full text-left p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                Contact Us
              </button>
            </div>
          </div>

          {/* Support Section */}
          <div className="p-4 border-t">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">SUPPORT</h3>

            <div className="space-y-1">
              <button className="w-full text-left p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                FAQ
              </button>
              <button className="w-full text-left p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                Help Center
              </button>
              <button className="w-full text-left p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                Track Order
              </button>
              <button className="w-full text-left p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                Live Chat
              </button>
            </div>
          </div>

          {/* Account Section */}
          <div className="p-4 border-t">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">ACCOUNT</h3>

            <div className="space-y-1">
              <button className="w-full text-left p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                Sign In
              </button>
              <button className="w-full text-left p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                My Profile
              </button>
              <button className="w-full text-left p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                Order History
              </button>
              <button className="w-full text-left p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
