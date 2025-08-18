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
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-black/10 z-50 px-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
        <a href="/" className="flex items-center text-[#2d2d2d] no-underline font-bold text-2xl">
          <div className="w-9 h-9 bg-conic-gradient from-[#ff6b35] via-[#ff8c42] to-[#ff6b35] rounded-full mr-3 relative flex items-center justify-center">
            <div className="absolute w-6 h-6 bg-white rounded-full"></div>
            <div className="absolute w-4 h-4 bg-gradient-to-br from-[#ff6b35] to-[#ff8c42] rounded-full z-10"></div>
          </div>
          <span className="text-[#2c5aa0]">Dr. Morepen HOME</span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8 list-none">
            <li>
              <a
                href="/erectile-dysfunction"
                className="text-[#2d2d2d] font-medium text-base hover:text-[#c4956c] transition-colors duration-300 relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#c4956c] after:transition-all after:duration-300 hover:after:w-full"
              >
                Erectile Dysfunction
              </a>
            </li>
            <li>
              <a
                href="/weight-management"
                className="text-[#2d2d2d] font-medium text-base hover:text-[#c4956c] transition-colors duration-300 relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#c4956c] after:transition-all after:duration-300 hover:after:w-full"
              >
                Weight Management
              </a>
            </li>
            <li>
              <a
                href="/diabetes"
                className="text-[#2d2d2d] font-medium text-base hover:text-[#c4956c] transition-colors duration-300 relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#c4956c] after:transition-all after:duration-300 hover:after:w-full"
              >
                Diabetes
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-[#c4956c]/10 transition-colors duration-300 text-[#2d2d2d] text-xl">
            👤
          </button>
          <a
            href="#"
            className="bg-[#2d2d2d] text-white px-5 py-2.5 rounded-full font-semibold cursor-pointer transition-all duration-300 text-sm hover:bg-[#1a1a1a] hover:-translate-y-0.5"
          >
            Log in
          </a>
          <button className="menu-toggle md:hidden p-2 text-[#2d2d2d] text-2xl" onClick={toggleMobileMenu}>
            ☰
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu md:hidden bg-white border-t border-black/10 shadow-lg">
          <ul className="list-none p-5">
            <li className="mb-4">
              <a
                href="/erectile-dysfunction"
                className="block py-3 text-lg border-b border-black/10 text-[#2d2d2d] hover:text-[#c4956c] transition-colors duration-300"
              >
                Erectile Dysfunction
              </a>
            </li>
            <li className="mb-4">
              <a
                href="/weight-management"
                className="block py-3 text-lg border-b border-black/10 text-[#2d2d2d] hover:text-[#c4956c] transition-colors duration-300"
              >
                Weight Management
              </a>
            </li>
            <li className="mb-4">
              <a
                href="/diabetes"
                className="block py-3 text-lg border-b border-black/10 text-[#2d2d2d] hover:text-[#c4956c] transition-colors duration-300"
              >
                Diabetes
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
