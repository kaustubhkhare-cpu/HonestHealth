"use client"

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-200 pt-16 pb-0 mt-auto">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 border-b border-slate-600">
          <div className="lg:col-span-2 max-w-sm">
            <a href="/" className="text-2xl font-bold text-blue-500 no-underline mb-5 block">
              HonestHealth
            </a>
            <p className="text-slate-400 leading-relaxed mb-6">
              Providing safe, effective, and discreet online healthcare solutions. Licensed physicians delivering
              personalized treatment plans from the comfort of your home.
            </p>
            <div className="flex gap-4 mb-5">
              <a
                href="#"
                className="w-10 h-10 bg-slate-600 rounded-lg flex items-center justify-center text-slate-400 no-underline transition-all duration-300 hover:bg-blue-500 hover:text-white hover:-translate-y-0.5"
                aria-label="Facebook"
              >
                📘
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-600 rounded-lg flex items-center justify-center text-slate-400 no-underline transition-all duration-300 hover:bg-blue-500 hover:text-white hover:-translate-y-0.5"
                aria-label="Twitter"
              >
                🐦
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-600 rounded-lg flex items-center justify-center text-slate-400 no-underline transition-all duration-300 hover:bg-blue-500 hover:text-white hover:-translate-y-0.5"
                aria-label="Instagram"
              >
                📷
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-600 rounded-lg flex items-center justify-center text-slate-400 no-underline transition-all duration-300 hover:bg-blue-500 hover:text-white hover:-translate-y-0.5"
                aria-label="LinkedIn"
              >
                💼
              </a>
            </div>
            <div className="bg-slate-900 border border-slate-600 rounded-lg p-4 text-center">
              <div className="text-xs text-slate-400 mb-1">HIPAA COMPLIANT</div>
              <div className="text-sm text-green-400 font-semibold">✓ Secure & Private</div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-100 mb-5">Treatments</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/erectile-dysfunction"
                  className="text-slate-400 no-underline transition-colors duration-300 hover:text-blue-500"
                >
                  Erectile Dysfunction
                </a>
              </li>
              <li>
                <a
                  href="/premature-ejaculation"
                  className="text-slate-400 no-underline transition-colors duration-300 hover:text-blue-500"
                >
                  Premature Ejaculation
                </a>
              </li>
              <li>
                <a
                  href="/hair-loss"
                  className="text-slate-400 no-underline transition-colors duration-300 hover:text-blue-500"
                >
                  Hair Loss Treatment
                </a>
              </li>
              <li>
                <a
                  href="/testosterone"
                  className="text-slate-400 no-underline transition-colors duration-300 hover:text-blue-500"
                >
                  Testosterone Therapy
                </a>
              </li>
              <li>
                <a
                  href="/weight-management"
                  className="text-slate-400 no-underline transition-colors duration-300 hover:text-blue-500"
                >
                  Weight Management
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-100 mb-5">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  className="text-slate-400 no-underline transition-colors duration-300 hover:text-blue-500"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/how-it-works"
                  className="text-slate-400 no-underline transition-colors duration-300 hover:text-blue-500"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="/our-doctors"
                  className="text-slate-400 no-underline transition-colors duration-300 hover:text-blue-500"
                >
                  Our Doctors
                </a>
              </li>
              <li>
                <a
                  href="/reviews"
                  className="text-slate-400 no-underline transition-colors duration-300 hover:text-blue-500"
                >
                  Patient Reviews
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-slate-400 no-underline transition-colors duration-300 hover:text-blue-500"
                >
                  Health Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-100 mb-5">Support</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/contact"
                  className="text-slate-400 no-underline transition-colors duration-300 hover:text-blue-500"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="text-slate-400 no-underline transition-colors duration-300 hover:text-blue-500"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/patient-portal"
                  className="text-slate-400 no-underline transition-colors duration-300 hover:text-blue-500"
                >
                  Patient Portal
                </a>
              </li>
              <li>
                <a
                  href="/prescription-refills"
                  className="text-slate-400 no-underline transition-colors duration-300 hover:text-blue-500"
                >
                  Refill Prescription
                </a>
              </li>
              <li>
                <a
                  href="/insurance"
                  className="text-slate-400 no-underline transition-colors duration-300 hover:text-blue-500"
                >
                  Insurance Info
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="text-slate-500 text-sm">
            © 2025 HonestHealth. All rights reserved. Licensed healthcare provider.
          </div>
          <div className="flex flex-wrap gap-8 justify-center md:justify-end">
            <a
              href="/privacy-policy"
              className="text-slate-500 no-underline text-sm transition-colors duration-300 hover:text-blue-500"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="text-slate-500 no-underline text-sm transition-colors duration-300 hover:text-blue-500"
            >
              Terms of Service
            </a>
            <a
              href="/accessibility"
              className="text-slate-500 no-underline text-sm transition-colors duration-300 hover:text-blue-500"
            >
              Accessibility
            </a>
            <a
              href="/do-not-sell"
              className="text-slate-500 no-underline text-sm transition-colors duration-300 hover:text-blue-500"
            >
              Do Not Sell My Info
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
