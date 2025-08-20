"use client"

import { useState } from "react"

export default function GlobalHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-black/10 z-50 px-4 sm:px-6 lg:px-8 safe-area-inset-top">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 sm:h-18 lg:h-20">
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex flex-col justify-center items-center w-10 h-10 sm:w-12 sm:h-12 cursor-pointer hover:bg-gray-100 rounded-lg transition-colors p-2"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-1 bg-[#2d2d2d] transition-all duration-300 rounded-full ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              ></span>
              <span
                className={`block w-6 h-1 bg-[#2d2d2d] my-1 transition-all duration-300 rounded-full ${isMobileMenuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`block w-6 h-1 bg-[#2d2d2d] transition-all duration-300 rounded-full ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              ></span>
            </button>

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
            <a
              href="#"
              className="bg-[#2c5aa0] text-white px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 rounded-full font-semibold cursor-pointer transition-all duration-300 text-xs sm:text-sm hover:bg-[#1e3a8a] hover:-translate-y-0.5 min-h-[44px] flex items-center"
            >
              Log in
            </a>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsMobileMenuOpen(false)}>
          <div
            className="fixed top-0 left-0 w-80 h-full bg-white shadow-2xl z-50 transform transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-[#2d2d2d]">Menu</h2>
              <div className="flex items-center gap-3">
                <button className="w-8 h-8 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </button>
                <button className="w-8 h-8 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                </button>
                <button onClick={() => setIsMobileMenuOpen(false)} className="w-8 h-8 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Menu Content */}
            <div className="p-4">
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">EXPLORE</h3>
                <nav className="space-y-1">
                  <a
                    href="/erectile-dysfunction"
                    className="flex items-center justify-between py-3 px-2 text-[#2d2d2d] hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="font-medium">Sexual Health</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9,18 15,12 9,6" />
                    </svg>
                  </a>
                  <a
                    href="/weight-management"
                    className="flex items-center justify-between py-3 px-2 text-[#2d2d2d] hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="font-medium">Weight Loss</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9,18 15,12 9,6" />
                    </svg>
                  </a>
                </nav>
              </div>

              <div className="mb-6">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">MEET HONESTHEALTH</h3>
                <nav className="space-y-1">
                  <a
                    href="#"
                    className="block py-3 px-2 text-[#2d2d2d] hover:bg-gray-50 rounded-lg transition-colors font-medium"
                  >
                    About Us
                  </a>
                  <a
                    href="#"
                    className="block py-3 px-2 text-[#2d2d2d] hover:bg-gray-50 rounded-lg transition-colors font-medium"
                  >
                    How It Works
                  </a>
                  <a
                    href="#"
                    className="block py-3 px-2 text-[#2d2d2d] hover:bg-gray-50 rounded-lg transition-colors font-medium"
                  >
                    Medical Experts
                  </a>
                  <a
                    href="#"
                    className="block py-3 px-2 text-[#2d2d2d] hover:bg-gray-50 rounded-lg transition-colors font-medium"
                  >
                    FAQ
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
