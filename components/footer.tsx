"use client"

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-200 pt-12 sm:pt-16 pb-0 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10 pb-8 sm:pb-12 border-b border-slate-600">
          <div className="sm:col-span-2 lg:col-span-2 max-w-sm">
            <a href="/" className="text-xl sm:text-2xl font-bold text-blue-500 no-underline mb-4 sm:mb-5 block">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Honest%20Health%20Logo%20v1%20%28transparent%20bg%29-9zIvRD0EuakFnEAMmsVdKynHPApwL2.png"
                alt="HonestHealth"
                className="h-8 sm:h-10 w-auto"
              />
            </a>
            <p className="text-slate-400 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              Providing safe, effective, and discreet online healthcare solutions. Licensed physicians delivering
              personalized treatment plans from the comfort of your home.
            </p>
            <div className="flex gap-3 sm:gap-4 mb-4 sm:mb-5">
              <a
                href="#"
                className="w-11 h-11 sm:w-12 sm:h-12 bg-slate-600 rounded-lg flex items-center justify-center text-slate-400 no-underline transition-all duration-300 hover:bg-blue-500 hover:text-white hover:-translate-y-0.5 text-lg sm:text-xl"
                aria-label="Facebook"
              >
                📘
              </a>
              <a
                href="#"
                className="w-11 h-11 sm:w-12 sm:h-12 bg-slate-600 rounded-lg flex items-center justify-center text-slate-400 no-underline transition-all duration-300 hover:bg-blue-500 hover:text-white hover:-translate-y-0.5 text-lg sm:text-xl"
                aria-label="Twitter"
              >
                🐦
              </a>
              <a
                href="#"
                className="w-11 h-11 sm:w-12 sm:h-12 bg-slate-600 rounded-lg flex items-center justify-center text-slate-400 no-underline transition-all duration-300 hover:bg-blue-500 hover:text-white hover:-translate-y-0.5 text-lg sm:text-xl"
                aria-label="Instagram"
              >
                📷
              </a>
              <a
                href="#"
                className="w-11 h-11 sm:w-12 sm:h-12 bg-slate-600 rounded-lg flex items-center justify-center text-slate-400 no-underline transition-all duration-300 hover:bg-blue-500 hover:text-white hover:-translate-y-0.5 text-lg sm:text-xl"
                aria-label="LinkedIn"
              >
                💼
              </a>
            </div>
            <div className="bg-slate-900 border border-slate-600 rounded-lg p-3 sm:p-4 text-center">
              <div className="text-xs text-slate-400 mb-1">HIPAA COMPLIANT</div>
              <div className="text-sm font-semibold text-green-400">✓ Secure & Private</div>
            </div>
          </div>

          <div className="sm:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold text-slate-100 mb-4 sm:mb-5">Treatments</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="/erectile-dysfunction"
                  className="text-slate-400 no-underline transition-colors duration-300 hover:text-blue-500 text-sm sm:text-base py-1 block min-h-[44px] flex items-center"
                >
                  Erectile Dysfunction
                </a>
              </li>
              <li>
                <a
                  href="/premature-ejaculation"
                  className="text-slate-400 no-underline transition-colors duration-300 hover:text-blue-500 text-sm sm:text-base py-1 block min-h-[44px] flex items-center"
                >
                  Premature Ejaculation
                </a>
              </li>
              <li>
                <a
                  href="/hair-loss"
                  className="text-slate-400 no-underline transition-colors duration-300 hover:text-blue-500 text-sm sm:text-base py-1 block min-h-[44px] flex items-center"
                >
                  Hair Loss Treatment
                </a>
              </li>
              <li>
                <a
                  href="/testosterone"
                  className="text-slate-400 no-underline transition-colors duration-300 hover:text-blue-500 text-sm sm:text-base py-1 block min-h-[44px] flex items-center"
                >
                  Testosterone Therapy
                </a>
              </li>
              <li>
                <a
                  href="/weight-management"
                  className="text-slate-400 no-underline transition-colors duration-300 hover:text-blue-500 text-sm sm:text-base py-1 block min-h-[44px] flex items-center"
                >
                  Weight Management
                </a>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold text-slate-100 mb-4 sm:mb-5">Company</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="/about"
                  className="text-slate-400 no-underline transition-colors duration-300 hover:text-blue-500 text-sm sm:text-base py-1 block min-h-[44px] flex items-center"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/how-it-works"
                  className="text-slate-400 no-underline transition-colors duration-300 hover:text-blue-500 text-sm sm:text-base py-1 block min-h-[44px] flex items-center"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="/our-doctors"
                  className="text-slate-400 no-underline transition-colors duration-300 hover:text-blue-500 text-sm sm:text-base py-1 block min-h-[44px] flex items-center"
                >
                  Our Doctors
                </a>
              </li>
              <li>
                <a
                  href="/reviews"
                  className="text-slate-400 no-underline transition-colors duration-300 hover:text-blue-500 text-sm sm:text-base py-1 block min-h-[44px] flex items-center"
                >
                  Patient Reviews
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-slate-400 no-underline transition-colors duration-300 hover:text-blue-500 text-sm sm:text-base py-1 block min-h-[44px] flex items-center"
                >
                  Health Blog
                </a>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold text-slate-100 mb-4 sm:mb-5">Support</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="/contact"
                  className="text-slate-400 no-underline transition-colors duration-300 hover:text-blue-500 text-sm sm:text-base py-1 block min-h-[44px] flex items-center"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-slate-400 no-underline transition-colors duration-300 hover:text-blue-500 text-sm sm:text-base py-1 block min-h-[44px] flex items-center"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/patient-portal"
                  className="text-slate-400 no-underline transition-colors duration-300 hover:text-blue-500 text-sm sm:text-base py-1 block min-h-[44px] flex items-center"
                >
                  Patient Portal
                </a>
              </li>
              <li>
                <a
                  href="/prescription-refills"
                  className="text-slate-400 no-underline transition-colors duration-300 hover:text-blue-500 text-sm sm:text-base py-1 block min-h-[44px] flex items-center"
                >
                  Refill Prescription
                </a>
              </li>
              <li>
                <a
                  href="/insurance"
                  className="text-slate-400 no-underline transition-colors duration-300 hover:text-blue-500 text-sm sm:text-base py-1 block min-h-[44px] flex items-center"
                >
                  Insurance Info
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-4 sm:py-6 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-5">
          <div className="text-slate-500 text-xs sm:text-sm text-center md:text-left">
            © 2025 HonestHealth. All rights reserved. Licensed healthcare provider.
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8 justify-center md:justify-end">
            <a
              href="/privacy-policy"
              className="text-slate-500 no-underline text-xs sm:text-sm transition-colors duration-300 hover:text-blue-500 py-2 min-h-[44px] flex items-center"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="text-slate-500 no-underline text-xs sm:text-sm transition-colors duration-300 hover:text-blue-500 py-2 min-h-[44px] flex items-center"
            >
              Terms of Service
            </a>
            <a
              href="/accessibility"
              className="text-slate-500 no-underline text-xs sm:text-sm transition-colors duration-300 hover:text-blue-500 py-2 min-h-[44px] flex items-center"
            >
              Accessibility
            </a>
            <a
              href="/do-not-sell"
              className="text-slate-500 no-underline text-xs sm:text-sm transition-colors duration-300 hover:text-blue-500 py-2 min-h-[44px] flex items-center"
            >
              Do Not Sell My Info
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
