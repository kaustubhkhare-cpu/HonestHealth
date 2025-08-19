"use client"

import { useState, useEffect } from "react"

export default function GlobalHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (!target.closest(".mobile-menu") && !target.closest(".menu-toggle")) {
        setIsMobileMenuOpen(false)
      }
    }

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    window.addEventListener("resize", handleResize)

    return () => {
      document.removeEventListener("click", handleClickOutside)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-black/10 z-50 px-4 sm:px-6 lg:px-8 safe-area-inset-top">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 sm:h-18 lg:h-20">
        <a href="/" className="flex items-center text-[#2d2d2d] no-underline font-bold text-lg sm:text-xl lg:text-2xl">
          <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 bg-conic-gradient from-[#ff6b35] via-[#ff8c42] to-[#ff6b35] rounded-full mr-2 sm:mr-3 relative flex items-center justify-center">
            <div className="absolute w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-white rounded-full"></div>
            <div className="absolute w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 bg-gradient-to-br from-[#ff6b35] to-[#ff8c42] rounded-full z-10"></div>
          </div>
          <span className="text-[#2c5aa0] hidden sm:inline">Dr. Morepen HOME</span>
          <span className="text-[#2c5aa0] sm:hidden">Dr. Morepen</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 lg:gap-10">
          <ul className="flex items-center gap-4 lg:gap-8 list-none">
            <li>
              <a
                href="/erectile-dysfunction"
                className="text-[#2d2d2d] font-medium text-sm lg:text-base hover:text-[#c4956c] transition-colors duration-300 relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#c4956c] after:transition-all after:duration-300 hover:after:w-full"
              >
                Erectile Dysfunction
              </a>
            </li>
            <li>
              <a
                href="/weight-management"
                className="text-[#2d2d2d] font-medium text-sm lg:text-base hover:text-[#c4956c] transition-colors duration-300 relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#c4956c] after:transition-all after:duration-300 hover:after:w-full"
              >
                Weight Management
              </a>
            </li>
            <li>
              <a
                href="/diabetes"
                className="text-[#2d2d2d] font-medium text-sm lg:text-base hover:text-[#c4956c] transition-colors duration-300 relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#c4956c] after:transition-all after:duration-300 hover:after:w-full"
              >
                Diabetes
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
          <button className="p-2 sm:p-2.5 lg:p-3 rounded-full hover:bg-[#c4956c]/10 transition-colors duration-300 text-[#2d2d2d] text-lg sm:text-xl min-w-[44px] min-h-[44px] flex items-center justify-center">
            👤
          </button>
          <a
            href="#"
            className="bg-[#2d2d2d] text-white px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 rounded-full font-semibold cursor-pointer transition-all duration-300 text-xs sm:text-sm hover:bg-[#1a1a1a] hover:-translate-y-0.5 min-h-[44px] flex items-center"
          >
            Log in
          </a>
          <button
            className="menu-toggle md:hidden p-2 sm:p-2.5 text-[#2d2d2d] text-xl sm:text-2xl min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors duration-300"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className={`transform transition-transform duration-300 ${isMobileMenuOpen ? "rotate-90" : ""}`}>
              ☰
            </span>
          </button>
        </div>
      </div>

      <div
        className={`mobile-menu md:hidden bg-white border-t border-black/10 shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="list-none p-4 sm:p-5">
          <li className="mb-3 sm:mb-4">
            <a
              href="/erectile-dysfunction"
              className="block py-3 sm:py-4 text-base sm:text-lg border-b border-black/10 text-[#2d2d2d] hover:text-[#c4956c] transition-colors duration-300 min-h-[44px] flex items-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Erectile Dysfunction
            </a>
          </li>
          <li className="mb-3 sm:mb-4">
            <a
              href="/weight-management"
              className="block py-3 sm:py-4 text-base sm:text-lg border-b border-black/10 text-[#2d2d2d] hover:text-[#c4956c] transition-colors duration-300 min-h-[44px] flex items-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Weight Management
            </a>
          </li>
          <li className="mb-3 sm:mb-4">
            <a
              href="/diabetes"
              className="block py-3 sm:py-4 text-base sm:text-lg border-b border-black/10 text-[#2d2d2d] hover:text-[#c4956c] transition-colors duration-300 min-h-[44px] flex items-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Diabetes
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
