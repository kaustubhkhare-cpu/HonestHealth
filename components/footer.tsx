"use client"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex justify-center mb-10">
          {/* Social Media Icons Section */}
          <div className="flex gap-4 mt-5">
            <a
              href="#"
              className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center text-white no-underline transition-colors duration-300 hover:bg-orange-500"
            >
              📘
            </a>
            <a
              href="#"
              className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center text-white no-underline transition-colors duration-300 hover:bg-orange-500"
            >
              🐦
            </a>
            <a
              href="#"
              className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center text-white no-underline transition-colors duration-300 hover:bg-orange-500"
            >
              📷
            </a>
            <a
              href="#"
              className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center text-white no-underline transition-colors duration-300 hover:bg-orange-500"
            >
              🎵
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 pb-8 flex justify-between items-center flex-wrap gap-5">
          <div className="flex items-center gap-5">
            <a href="https://www.drmorepenhome.com/" className="flex items-center no-underline text-white">
              <div
                className="w-10 h-10 rounded-full mr-3 relative flex items-center justify-center"
                style={{
                  background: "conic-gradient(from 0deg, #ff6b35, #ff8c42, #ff6b35)",
                }}
              >
                <div className="absolute w-8 h-8 bg-gray-900 rounded-full"></div>
                <div
                  className="absolute w-5 h-5 rounded-full z-10"
                  style={{
                    background: "linear-gradient(45deg, #ff6b35, #ff8c42)",
                  }}
                ></div>
              </div>
              <span className="text-blue-600 text-lg font-semibold">Dr. Morepen HOME</span>
            </a>
            <div className="text-2xl font-light text-gray-500 tracking-wider">honest health</div>
          </div>

          <div className="flex gap-8 flex-wrap">
            <a
              href="#"
              className="text-gray-300 no-underline text-xs transition-colors duration-300 hover:text-orange-500"
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              className="text-gray-300 no-underline text-xs transition-colors duration-300 hover:text-orange-500"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-300 no-underline text-xs transition-colors duration-300 hover:text-orange-500"
            >
              Women
            </a>
            <a
              href="#"
              className="text-gray-300 no-underline text-xs transition-colors duration-300 hover:text-orange-500"
            >
              Telehealth Consent & Care Payment
            </a>
            <a
              href="#"
              className="text-gray-300 no-underline text-xs transition-colors duration-300 hover:text-orange-500"
            >
              Consumer Health Data Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-300 no-underline text-xs transition-colors duration-300 hover:text-orange-500"
            >
              Your privacy choices
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .footer-bottom {
            flex-direction: column;
            text-align: center;
            gap: 15px;
          }
          
          .logo-section {
            flex-direction: column;
            gap: 15px;
          }
          
          .footer-links {
            justify-content: center;
          }
          
          .honest-health {
            font-size: 24px;
          }
        }
      `}</style>
    </footer>
  )
}
