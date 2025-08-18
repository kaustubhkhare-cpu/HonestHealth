"use client"

import { useState, useEffect } from "react"

export default function ErectileDysfunctionPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const floatingCards = [
    // Column 1 cards
    [
      { icon: "👨‍⚕️", title: "Expert Doctors", text: "Licensed healthcare professionals", type: "doctor" },
      { icon: "💊", title: "FDA Approved", text: "Clinically proven medications", type: "product" },
      { icon: "😊", title: "Satisfied Customer", text: '"Discreet and professional service"', type: "testimonial" },
      { icon: "🏥", title: "Dr. Morepen", text: "Trusted healthcare brand", type: "branding" },
      { icon: "🚚", title: "Fast Delivery", text: "Discreet packaging guaranteed", type: "product" },
      { icon: "⭐", title: "5-Star Rating", text: '"Quick and effective treatment"', type: "testimonial" },
    ],
    // Column 2 cards
    [
      { icon: "🔒", title: "100% Confidential", text: "Your privacy is our priority", type: "product" },
      { icon: "⚡", title: "Quick Results", text: "Effective within 30-60 minutes", type: "doctor" },
      { icon: "👍", title: "Happy Customer", text: '"Life-changing experience!"', type: "testimonial" },
      { icon: "💝", title: "Discreet Box", text: "Plain packaging, no labels", type: "product" },
      { icon: "🎯", title: "Targeted Treatment", text: "Personalized for your needs", type: "branding" },
      { icon: "💪", title: "Confidence Restored", text: '"Back to feeling like myself"', type: "testimonial" },
    ],
  ]

  const getCardStyle = (type: string) => {
    switch (type) {
      case "doctor":
        return "bg-gradient-to-br from-[#c4956c] to-[#d4a574] text-white"
      case "testimonial":
        return "bg-gradient-to-br from-[#f8f6f3] to-white"
      case "product":
        return "bg-gradient-to-br from-white to-[#f8f6f3]"
      case "branding":
        return "bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] text-white"
      default:
        return "bg-white"
    }
  }

  return (
    <div className="min-h-screen overflow-hidden">
      <div className="pt-20 bg-gradient-to-br from-[#f8f6f3] to-[#f1ede6]">
        <section className="min-h-screen flex items-center py-20">
          <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-20 items-center">
            {/* Hero Content */}
            <div
              className={`max-w-xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-5 text-[#1a1a1a] tracking-tight">
                Effective ED treatment online,
                <span className="block text-2xl lg:text-4xl font-normal text-[#c4956c] mt-5 leading-relaxed">
                  delivered discreetly to your door
                </span>
              </h1>

              <ul className="space-y-6 mb-12">
                {[
                  { icon: "🔬", text: "Backed by science and clinical research" },
                  { icon: "🏠", text: "No awkward clinic visits required" },
                  { icon: "📦", text: "Treatment delivered to you discreetly" },
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-lg text-[#2d2d2d]">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#d4a574] to-[#c4956c] rounded-full flex items-center justify-center mr-5 text-xl text-white flex-shrink-0">
                      {feature.icon}
                    </div>
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/your-number"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#2d2d2d] to-[#1a1a1a] text-white px-9 py-5 rounded-full text-base font-semibold hover:transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <div className="w-5 h-5 bg-[#25d366] rounded-full flex items-center justify-center text-xs text-white">
                  💬
                </div>
                Start Confidential Consultation
              </a>
            </div>

            {/* Hero Visual */}
            <div className="relative h-[600px] lg:h-[600px] overflow-hidden">
              <div className="absolute inset-0">
                {floatingCards.map((column, columnIndex) => (
                  <div
                    key={columnIndex}
                    className={`absolute w-[45%] h-[200%] flex flex-col gap-5 ${
                      columnIndex === 0 ? "left-0" : "right-0"
                    }`}
                    style={{
                      animation: `moveUp 20s linear infinite`,
                      animationDelay: columnIndex === 0 ? "0s" : "-10s",
                    }}
                  >
                    {/* Duplicate cards for seamless loop */}
                    {[...column, ...column].map((card, cardIndex) => (
                      <div
                        key={cardIndex}
                        className={`${getCardStyle(card.type)} rounded-2xl p-5 shadow-lg backdrop-blur-sm border border-white/20 min-h-[160px] flex flex-col justify-center items-center text-center`}
                      >
                        <div className="text-3xl mb-3">{card.icon}</div>
                        <div className="text-sm font-semibold mb-2 leading-tight">{card.title}</div>
                        <div className="text-xs opacity-80 leading-snug max-w-[140px]">{card.text}</div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes moveUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
      `}</style>
    </div>
  )
}
