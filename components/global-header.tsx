"use client"

export default function GlobalHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-black/10 z-50 px-4 sm:px-6 lg:px-8 safe-area-inset-top">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 sm:h-18 lg:h-20">
        <a href="/" className="flex items-center text-[#2d2d2d] no-underline font-bold text-lg sm:text-xl lg:text-2xl">
          <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 bg-conic-gradient from-[#ff6b35] via-[#ff8c42] to-[#ff6b35] rounded-full mr-2 sm:mr-3 relative flex items-center justify-center">
            <div className="absolute w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-white rounded-full"></div>
            <div className="absolute w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 bg-gradient-to-br from-[#ff6b35] to-[#ff8c42] rounded-full z-10"></div>
          </div>
          <span className="text-[#2c5aa0] hidden sm:inline">HonestHealth</span>
          <span className="text-[#2c5aa0] sm:hidden">HonestHealth</span>
        </a>

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
  )
}
