"use client"

import { useState, useEffect } from "react"
import BenefitsPage from "@/components/benefits-page"
import WellnessSection from "@/components/wellness-section"
import ConvenienceSection from "@/components/convenience-section"
import ExperienceSection from "@/components/experience-section"
import USPBanner from "@/components/usp-banner"
import FAQSection from "@/components/faq-section"
import Footer from "@/components/footer"

const contentSets = [
  {
    headline: "Weight management",
    mainTitle: "delivered to your door",
    subtitle: "Science-backed weight loss solutions",
    color: "#ff6b6b",
  },
  {
    headline: "Diabetes care",
    mainTitle: "expertly managed",
    subtitle: "Comprehensive diabetes management",
    color: "#4ecdc4",
  },
  {
    headline: "ED treatment",
    mainTitle: "discreetly delivered",
    subtitle: "Effective & confidential solutions",
    color: "#a8e6cf",
  },
]

const features = [
  { icon: "🏥", text: "Licensed healthcare providers" },
  { icon: "📱", text: "100% online consultations" },
  { icon: "💬", text: "Unlimited doctor messaging" },
  { icon: "🇮🇳", text: "Made in India quality" },
  { icon: "⭐", text: "Trusted by 50K+ patients" },
  { icon: "🚚", text: "Free home delivery" },
  { icon: "🔒", text: "100% confidential" },
]

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % contentSets.length)
        setIsTransitioning(false)
      }, 500)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const handleCategoryClick = (category: string) => {
    console.log(`[v0] Clicked on ${category} category`)
  }

  const currentContent = contentSets[currentIndex]

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(135deg, #f8f9ff 0%, #e8f2ff 100%)" }}>
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50" style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
        <div className="max-w-6xl mx-auto flex justify-between items-center px-5 py-4">
          <div className="text-3xl font-bold" style={{ color: "#2c5aa0" }}>
            HonestHealth
          </div>

          {/* Features Slider */}
          <div className="hidden md:flex items-center overflow-hidden whitespace-nowrap w-96 lg:w-[600px] relative">
            <div className="flex gap-15 animate-[slideFeatures_25s_infinite_linear]">
              {[...features, ...features].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-gray-600 flex-shrink-0">
                  <span>{feature.icon}</span>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          <button
            className="text-white px-5 py-2.5 rounded-md font-medium hover:opacity-90 transition-all"
            style={{ background: "#2c5aa0" }}
          >
            Log in
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-5 py-15">
        <h1
          className={`text-6xl font-bold mb-2.5 min-h-[80px] transition-all duration-700 ${
            isTransitioning ? "opacity-0 translate-y-5" : "opacity-100 translate-y-0"
          }`}
          style={{ color: currentContent.color }}
        >
          {currentContent.headline}
        </h1>

        <h2
          className={`text-6xl font-light mb-7.5 transition-all duration-700 ${
            isTransitioning ? "opacity-0 translate-y-5" : "opacity-100 translate-y-0"
          }`}
          style={{ color: "#333" }}
        >
          {currentContent.mainTitle}
        </h2>

        <p
          className={`text-lg mb-15 transition-all duration-700 ${
            isTransitioning ? "opacity-0 translate-y-5" : "opacity-100 translate-y-0"
          }`}
          style={{ color: "#666" }}
        >
          {currentContent.subtitle}
        </p>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7.5 mt-10">
          {/* Weight Management Card */}
          <div
            className="bg-white rounded-2xl p-10 text-center cursor-pointer group relative overflow-hidden transition-all duration-300 hover:-translate-y-2"
            style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
            onClick={() => handleCategoryClick("weight")}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.15)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)"
            }}
          >
            <div
              className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center text-4xl transition-all duration-500 group-hover:scale-110"
              style={{ background: "linear-gradient(135deg, #ff6b6b, #ff8e8e)" }}
            >
              💊
            </div>
            <div className="text-xl font-semibold mb-2" style={{ color: "#333" }}>
              Weight <span style={{ color: "#ff6b6b" }}>management</span>
            </div>
            <div className="mb-5" style={{ color: "#666" }}>
              Effective weight loss solutions
            </div>
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white mx-auto transition-all duration-300 group-hover:scale-110"
              style={{ background: "#333" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#2c5aa0"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#333"
              }}
            >
              →
            </div>
          </div>

          {/* ED Treatment Card */}
          <div
            className="bg-white rounded-2xl p-10 text-center cursor-pointer group relative overflow-hidden transition-all duration-300 hover:-translate-y-2"
            style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
            onClick={() => handleCategoryClick("ed")}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.15)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)"
            }}
          >
            <div
              className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center text-4xl transition-all duration-500 group-hover:scale-110"
              style={{ background: "linear-gradient(135deg, #a8e6cf, #7fcdcd)" }}
            >
              🧪
            </div>
            <div className="text-xl font-semibold mb-2" style={{ color: "#333" }}>
              Erectile <span style={{ color: "#a8e6cf" }}>dysfunction</span>
            </div>
            <div className="mb-5" style={{ color: "#666" }}>
              Discreet & proven treatments
            </div>
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white mx-auto transition-all duration-300 group-hover:scale-110"
              style={{ background: "#333" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#2c5aa0"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#333"
              }}
            >
              →
            </div>
          </div>

          {/* Diabetes Care Card */}
          <div
            className="bg-white rounded-2xl p-10 text-center cursor-pointer group relative overflow-hidden transition-all duration-300 hover:-translate-y-2"
            style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
            onClick={() => handleCategoryClick("diabetes")}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.15)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)"
            }}
          >
            <div
              className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center text-4xl transition-all duration-500 group-hover:scale-110"
              style={{ background: "linear-gradient(135deg, #4ecdc4, #44a08d)" }}
            >
              ⚕️
            </div>
            <div className="text-xl font-semibold mb-2" style={{ color: "#333" }}>
              Diabetes <span style={{ color: "#4ecdc4" }}>care</span>
            </div>
            <div className="mb-5" style={{ color: "#666" }}>
              Complete diabetes management
            </div>
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white mx-auto transition-all duration-300 group-hover:scale-110"
              style={{ background: "#333" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#2c5aa0"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#333"
              }}
            >
              →
            </div>
          </div>
        </div>
      </main>

      {/* Wellness Section */}
      <WellnessSection />

      {/* Benefits Section */}
      <BenefitsPage />

      {/* Convenience Section */}
      <ConvenienceSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* USP Banner */}
      <USPBanner />

      {/* FAQ Section */}
      <FAQSection />

      <Footer />

      <style jsx>{`
        @keyframes slideFeatures {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        
        @media (max-width: 768px) {
          .hero-section {
            padding: 40px 20px;
          }
          
          h1 {
            font-size: 48px !important;
          }
          
          h2 {
            font-size: 48px !important;
          }
          
          .categories-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </div>
  )
}
