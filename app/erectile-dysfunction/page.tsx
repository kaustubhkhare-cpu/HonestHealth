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

      <section className="bg-[#f8f6f3] py-32 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 relative">
          {/* Large Background Text */}
          <div
            className="text-[clamp(4rem,12vw,12rem)] font-light text-[#c4956c] leading-[0.9] tracking-[-0.02em] opacity-80 lowercase relative z-10"
            style={{ letterSpacing: "-0.02em" }}
          >
            you are not alone
          </div>

          {/* Overlay Card */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-[10px] rounded-3xl p-10 md:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-[#c4956c]/20 z-20 max-w-4xl w-[90%]">
            <div className="text-[clamp(2rem,5vw,3rem)] font-bold text-[#c4956c] mb-4">6 out of 10 men</div>
            <div className="text-[clamp(1.2rem,3vw,1.8rem)] text-[#1a1a1a] font-normal leading-relaxed mb-5">
              in India experience erectile dysfunction challenges at some point in their lives
            </div>
            <div className="text-base text-[#666] italic">- Indian Medical Research Studies</div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-[#c4956c] uppercase tracking-wider mb-4">Our Solutions</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6">
              Effective treatments for your confidence
            </h2>
            <p className="text-lg text-[#666] max-w-3xl mx-auto leading-relaxed">
              Clinically proven solutions designed to help you regain control and confidence in your intimate life.
            </p>
          </div>

          {/* Main Prescription Products */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Exygra Tablets */}
              <div className="bg-gradient-to-br from-[#f8f6f3] to-white rounded-3xl p-8 shadow-lg border border-[#f1ede6] relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-[#c4956c] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Prescription Required
                </div>
                <div className="text-6xl mb-6 text-center">💊</div>
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Exygra Tablets</h3>
                <p className="text-[#666] mb-6 leading-relaxed">
                  Fast-acting oral medication for reliable performance when you need it most.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Works within 30-60 minutes",
                    "Clinically proven effectiveness",
                    "Long-lasting results up to 4-6 hours",
                    "Discreet packaging and delivery",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center text-[#2d2d2d]">
                      <div className="w-2 h-2 bg-[#c4956c] rounded-full mr-3 flex-shrink-0"></div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/your-number"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#2d2d2d] to-[#1a1a1a] text-white px-6 py-3 rounded-full font-semibold hover:transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
                >
                  <div className="w-4 h-4 bg-[#25d366] rounded-full flex items-center justify-center text-xs">💬</div>
                  Get Started
                </a>
              </div>

              {/* Exygra Spray */}
              <div className="bg-gradient-to-br from-[#f8f6f3] to-white rounded-3xl p-8 shadow-lg border border-[#f1ede6] relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-[#c4956c] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Prescription Required
                </div>
                <div className="flex justify-center mb-6">
                  <svg width="60" height="60" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <rect x="35" y="25" width="20" height="50" fill="#2d2d2d" rx="3" />
                    <rect x="37" y="20" width="16" height="8" fill="#2d2d2d" rx="2" />
                    <line x1="55" y1="22" x2="75" y2="18" stroke="#666" strokeWidth="1.5" strokeDasharray="3,2" />
                    <line x1="55" y1="25" x2="78" y2="23" stroke="#666" strokeWidth="1.5" strokeDasharray="3,2" />
                    <line x1="55" y1="28" x2="75" y2="28" stroke="#666" strokeWidth="1.5" strokeDasharray="3,2" />
                    <line x1="55" y1="31" x2="72" y2="33" stroke="#666" strokeWidth="1.5" strokeDasharray="3,2" />
                    <line x1="55" y1="34" x2="70" y2="38" stroke="#666" strokeWidth="1.5" strokeDasharray="3,2" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Exygra Spray</h3>
                <p className="text-[#666] mb-6 leading-relaxed">
                  Topical spray solution for quick absorption and rapid onset of action.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Faster absorption than tablets",
                    "Easy to use application",
                    "Reduced side effects",
                    "Convenient and portable",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center text-[#2d2d2d]">
                      <div className="w-2 h-2 bg-[#c4956c] rounded-full mr-3 flex-shrink-0"></div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/your-number"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#2d2d2d] to-[#1a1a1a] text-white px-6 py-3 rounded-full font-semibold hover:transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
                >
                  <div className="w-4 h-4 bg-[#25d366] rounded-full flex items-center justify-center text-xs">💬</div>
                  Get Started
                </a>
              </div>
            </div>
          </div>

          {/* Supporting Products */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-[#1a1a1a] mb-4">Natural Support & Wellness</h3>
              <p className="text-[#666] max-w-2xl mx-auto">
                Complement your treatment with natural supplements for overall vitality
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Testo Boost */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#f1ede6] text-center hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="text-4xl mb-4">⚡</div>
                <h4 className="text-xl font-bold text-[#1a1a1a] mb-3">Testo Boost</h4>
                <p className="text-[#666] text-sm mb-6 leading-relaxed">
                  Natural testosterone support supplement to enhance energy, stamina, and overall male vitality.
                </p>
                <a
                  href="https://wa.me/your-number"
                  className="text-[#c4956c] font-semibold hover:text-[#a67c52] transition-colors"
                >
                  Learn More
                </a>
              </div>

              {/* Shilajit Capsules */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#f1ede6] text-center hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="text-4xl mb-4">🌿</div>
                <h4 className="text-xl font-bold text-[#1a1a1a] mb-3">Shilajit Capsules</h4>
                <p className="text-[#666] text-sm mb-6 leading-relaxed">
                  Pure Himalayan Shilajit in convenient capsule form for improved energy and sexual wellness.
                </p>
                <a
                  href="https://wa.me/your-number"
                  className="text-[#c4956c] font-semibold hover:text-[#a67c52] transition-colors"
                >
                  Learn More
                </a>
              </div>

              {/* Shilajit Resin */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#f1ede6] text-center hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="text-4xl mb-4">🏔️</div>
                <h4 className="text-xl font-bold text-[#1a1a1a] mb-3">Shilajit Resin</h4>
                <p className="text-[#666] text-sm mb-6 leading-relaxed">
                  Premium quality raw Shilajit resin for maximum potency and traditional wellness benefits.
                </p>
                <a
                  href="https://wa.me/your-number"
                  className="text-[#c4956c] font-semibold hover:text-[#a67c52] transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Professional Disclaimer */}
          <div className="bg-gradient-to-br from-[#f8f6f3] to-[#f1ede6] rounded-3xl p-8 text-center max-w-4xl mx-auto">
            <div className="text-5xl mb-4">👨‍⚕️</div>
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Professional Medical Consultation</h3>
            <p className="text-[#666] leading-relaxed">
              All treatments are prescribed following a comprehensive health assessment by our licensed medical
              professionals. Your personalized treatment plan will be determined based on your consultation form and
              expert medical review. Results may vary, and our doctors will recommend the most suitable option for your
              individual needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#f8f6f3] to-white overflow-hidden">
        <div className="relative">
          <div
            className="flex gap-8 items-center"
            style={{
              animation: "trustSlide 25s linear infinite",
              width: "calc(400px * 10)", // 10 items * 400px each
            }}
          >
            {/* Trust Items */}
            {[
              {
                icon: "🛡️",
                title: "Trusted",
                description: "Regulated by leading healthcare authorities and quality commissions.",
              },
              {
                icon: "⚕️",
                title: "Licensed Professionals",
                description: "Medications prescribed by qualified licensed clinicians.",
              },
              {
                icon: "📦",
                title: "Free, discreet delivery",
                description: "No names, no logos, no delivery fee. Complete privacy guaranteed.",
              },
              {
                icon: "🩺",
                title: "Ongoing clinical support",
                description: "Access expert clinicians and medical advice whenever you need it.",
              },
              {
                icon: "🔒",
                title: "100% Confidential",
                description: "Your privacy and personal information are completely secure with us.",
              },
              {
                icon: "⚡",
                title: "Fast & Effective",
                description: "Quick consultation process with proven, effective treatments.",
              },
              // Duplicate items for seamless loop
              {
                icon: "🛡️",
                title: "Trusted",
                description: "Regulated by leading healthcare authorities and quality commissions.",
              },
              {
                icon: "⚕️",
                title: "Licensed Professionals",
                description: "Medications prescribed by qualified licensed clinicians.",
              },
              {
                icon: "📦",
                title: "Free, discreet delivery",
                description: "No names, no logos, no delivery fee. Complete privacy guaranteed.",
              },
              {
                icon: "🩺",
                title: "Ongoing clinical support",
                description: "Access expert clinicians and medical advice whenever you need it.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[400px] bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 text-center hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{item.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes moveUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        
        @keyframes trustSlide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-400px * 6));
          }
        }
      `}</style>
    </div>
  )
}
