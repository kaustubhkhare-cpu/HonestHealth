"use client"

import { useState, useEffect } from "react"
import BenefitsPage from "@/components/benefits-page"

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
    // Add navigation logic here
  }

  const currentContent = contentSets[currentIndex]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-5 py-4">
          <div className="text-3xl font-bold text-blue-700">HonestHealth</div>

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

          <button className="bg-blue-700 text-white px-5 py-2.5 rounded-md font-medium hover:bg-blue-800 transition-colors">
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
          className={`text-6xl font-light text-gray-800 mb-7.5 transition-all duration-700 ${
            isTransitioning ? "opacity-0 translate-y-5" : "opacity-100 translate-y-0"
          }`}
        >
          {currentContent.mainTitle}
        </h2>

        <p
          className={`text-lg text-gray-600 mb-15 transition-all duration-700 ${
            isTransitioning ? "opacity-0 translate-y-5" : "opacity-100 translate-y-0"
          }`}
        >
          {currentContent.subtitle}
        </p>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7.5 mt-10">
          {/* Weight Management Card */}
          <div
            className="bg-white rounded-2xl p-10 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
            onClick={() => handleCategoryClick("weight")}
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-red-400 to-red-500 flex items-center justify-center text-4xl transition-all duration-500 group-hover:scale-110">
              💊
            </div>
            <div className="text-xl font-semibold mb-2 text-gray-800">
              Weight <span className="text-red-400">management</span>
            </div>
            <div className="text-gray-600 mb-5">Effective weight loss solutions</div>
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white mx-auto group-hover:bg-blue-700 group-hover:scale-110 transition-all duration-300">
              →
            </div>
          </div>

          {/* ED Treatment Card */}
          <div
            className="bg-white rounded-2xl p-10 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
            onClick={() => handleCategoryClick("ed")}
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-teal-300 to-teal-400 flex items-center justify-center text-4xl transition-all duration-500 group-hover:scale-110">
              🧪
            </div>
            <div className="text-xl font-semibold mb-2 text-gray-800">
              Erectile <span className="text-teal-300">dysfunction</span>
            </div>
            <div className="text-gray-600 mb-5">Discreet & proven treatments</div>
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white mx-auto group-hover:bg-blue-700 group-hover:scale-110 transition-all duration-300">
              →
            </div>
          </div>

          {/* Diabetes Care Card */}
          <div
            className="bg-white rounded-2xl p-10 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
            onClick={() => handleCategoryClick("diabetes")}
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-400 flex items-center justify-center text-4xl transition-all duration-500 group-hover:scale-110">
              ⚕️
            </div>
            <div className="text-xl font-semibold mb-2 text-gray-800">
              Diabetes <span className="text-emerald-400">care</span>
            </div>
            <div className="text-gray-600 mb-5">Complete diabetes management</div>
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white mx-auto group-hover:bg-blue-700 group-hover:scale-110 transition-all duration-300">
              →
            </div>
          </div>
        </div>
      </main>

      {/* Benefits Section */}
      <BenefitsPage />

      <style jsx>{`
        @keyframes slideFeatures {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  )
}
