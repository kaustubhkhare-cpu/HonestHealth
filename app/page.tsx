"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import BenefitsPage from "@/components/benefits-page"
import WellnessSection from "@/components/wellness-section"
import ConvenienceSection from "@/components/convenience-section"
import ExperienceSection from "@/components/experience-section"
import USPBanner from "@/components/usp-banner"
import FAQSection from "@/components/faq-section"

const contentSets = [
  {
    headline: "Weight management",
    mainTitle: "delivered to your door",
    subtitle: "Science-backed weight loss solutions",
    color: "#ff6b6b",
  },
  {
    headline: "ED treatment",
    mainTitle: "discreetly delivered",
    subtitle: "Effective & confidential solutions",
    color: "#a8e6cf",
  },
]

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const router = useRouter()

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
    if (category === "ed") {
      router.push("/erectile-dysfunction")
    }
    if (category === "weight") {
      router.push("/weight-management")
    }
  }

  const currentContent = contentSets[currentIndex]

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(135deg, #f8f9ff 0%, #e8f2ff 100%)" }}>
      {/* Premium Header */}
      <div className="bg-gradient-to-r from-[#A67C52] to-[#8B7657] text-white text-center py-3 text-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        <span className="relative z-10">
          🏥 Licensed Medical Professionals • 📞 Free Consultation • 🔒 100% Confidential
        </span>
      </div>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <h1
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 lg:mb-6 min-h-[60px] sm:min-h-[80px] transition-all duration-700 ${
            isTransitioning ? "opacity-0 translate-y-5" : "opacity-100 translate-y-0"
          }`}
          style={{ color: currentContent.color }}
        >
          {currentContent.headline}
        </h1>

        <h2
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 sm:mb-6 lg:mb-8 transition-all duration-700 ${
            isTransitioning ? "opacity-0 translate-y-5" : "opacity-100 translate-y-0"
          }`}
          style={{ color: "#333" }}
        >
          {currentContent.mainTitle}
        </h2>

        <p
          className={`text-base sm:text-lg mb-8 sm:mb-12 lg:mb-16 transition-all duration-700 ${
            isTransitioning ? "opacity-0 translate-y-5" : "opacity-100 translate-y-0"
          }`}
          style={{ color: "#666" }}
        >
          {currentContent.subtitle}
        </p>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8 lg:mt-10">
          {/* Weight Management Card */}
          <div
            className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 text-center cursor-pointer group relative overflow-hidden transition-all duration-300 hover:-translate-y-2"
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
              className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 mx-auto mb-4 sm:mb-6 rounded-xl sm:rounded-2xl flex items-center justify-center text-3xl sm:text-4xl transition-all duration-500 group-hover:scale-110"
              style={{ background: "linear-gradient(135deg, #ff6b6b, #ff8e8e)" }}
            >
              💊
            </div>
            <div className="text-lg sm:text-xl font-semibold mb-2" style={{ color: "#333" }}>
              Weight <span style={{ color: "#ff6b6b" }}>management</span>
            </div>
            <div className="mb-4 sm:mb-5 text-sm sm:text-base" style={{ color: "#666" }}>
              Effective weight loss solutions
            </div>
            <div
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white mx-auto transition-all duration-300 group-hover:scale-110 text-sm sm:text-base"
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
            className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 text-center cursor-pointer group relative overflow-hidden transition-all duration-300 hover:-translate-y-2"
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
              className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 mx-auto mb-4 sm:mb-6 rounded-xl sm:rounded-2xl flex items-center justify-center text-3xl sm:text-4xl transition-all duration-500 group-hover:scale-110"
              style={{ background: "linear-gradient(135deg, #a8e6cf, #7fcdcd)" }}
            >
              🧪
            </div>
            <div className="text-lg sm:text-xl font-semibold mb-2" style={{ color: "#333" }}>
              Erectile <span style={{ color: "#a8e6cf" }}>dysfunction</span>
            </div>
            <div className="mb-4 sm:mb-5 text-sm sm:text-base" style={{ color: "#666" }}>
              Discreet & proven treatments
            </div>
            <div
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white mx-auto transition-all duration-300 group-hover:scale-110 text-sm sm:text-base"
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
      <div className="space-y-8 sm:space-y-12 lg:space-y-16">
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
      </div>
    </div>
  )
}
