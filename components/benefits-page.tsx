"use client"

import { useState, useEffect } from "react"

const dynamicContents = [
  {
    title: "Healthcare consultation made simple",
    description:
      "Connect with qualified doctors through secure video consultations for professional medical advice and health assessments.",
    visual: (
      <div className="flex items-center justify-center my-5">
        <div className="relative w-20 h-20 bg-gradient-to-br from-[#c49b61] to-[#a67c52] rounded-full flex items-center justify-center text-4xl text-white shadow-lg animate-ping">
          👨‍⚕️
        </div>
      </div>
    ),
    buttonText: "Book consultation",
  },
  {
    title: "Your health data stays secure",
    description:
      "We follow strict data protection protocols to ensure your medical information remains confidential and protected.",
    visual: (
      <div className="flex items-center justify-center my-5">
        <div className="w-20 h-20 bg-gradient-to-br from-[#d4a574] to-[#b8956a] rounded-2xl flex items-center justify-center text-4xl text-white shadow-lg animate-secure">
          🔒
        </div>
      </div>
    ),
    buttonText: "Privacy policy",
  },
  {
    title: "Expert support when you need it",
    description:
      "Access qualified healthcare professionals for medical guidance and follow-up consultations at your convenience.",
    visual: (
      <div className="flex items-center justify-center my-5">
        <div className="relative w-20 h-20 bg-gradient-to-br from-[#8b6914] to-[#6b4e03] rounded-full flex items-center justify-center text-4xl text-white shadow-lg animate-ping">
          💬
        </div>
      </div>
    ),
    buttonText: "Contact us",
  },
]

export default function BenefitsPage() {
  const [currentContentIndex, setCurrentContentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentContentIndex((prev) => (prev + 1) % dynamicContents.length)
        setIsTransitioning(false)
      }, 400)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const currentContent = dynamicContents[currentContentIndex]

  return (
    <div className="bg-[#f8f9ff] px-5 py-15">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-5 rounded-3xl overflow-hidden shadow-2xl">
          <div
            className="p-12 lg:p-15 relative overflow-hidden text-white flex flex-col justify-between min-h-[600px]"
            style={{ background: "linear-gradient(135deg, #c49b61 0%, #a67c52 100%)" }}
          >
            {/* Background decorative elements */}
            <div className="absolute -top-1/2 -right-1/5 w-75 h-75 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-1/3 -left-1/10 w-50 h-50 bg-white/8 rounded-full"></div>

            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-5">
                Consult qualified doctors for personalized healthcare solutions
              </h2>
              <p className="text-lg opacity-90 mb-10 leading-relaxed">
                Connect with licensed medical professionals for evidence-based treatment recommendations and health
                guidance
              </p>

              <div className="flex justify-center my-10">
                <div className="relative w-35 h-40 rounded-2xl bg-gradient-to-br from-white/15 to-white/5 border-3 border-white/20 flex items-center justify-center animate-doctorFloat overflow-hidden">
                  <div className="text-6xl">👨‍⚕️</div>
                  <div className="absolute bottom-2 right-2 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center text-lg animate-pulse">
                    🩺
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10">
              <button className="bg-white text-[#c49b61] px-8 py-4 rounded-xl font-semibold hover:transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                Book consultation
              </button>
              <button className="bg-transparent text-white px-8 py-4 border-2 border-white/30 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                Learn about services
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {/* Fitness Card */}
            <div className="bg-white p-10 rounded-2xl shadow-lg hover:transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 relative overflow-hidden flex-1">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Stay active with expert guidance</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Get personalized fitness recommendations from certified health professionals to support your wellness
                journey safely.
              </p>
              <div className="flex justify-center my-5">
                <div className="relative w-20 h-20 bg-gradient-to-br from-[#d4a574] to-[#b8956a] rounded-2xl flex items-center justify-center text-4xl text-white animate-pulse shadow-lg">
                  🏃‍♂️
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#8b6914] rounded-full animate-bounce flex items-center justify-center text-xs">
                    ⭐
                  </div>
                </div>
              </div>
              <button className="bg-[#c49b61] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#a67c52] hover:transform hover:-translate-y-1 transition-all duration-300">
                Explore wellness
              </button>
            </div>

            {/* Nutrition Card */}
            <div className="bg-white p-10 rounded-2xl shadow-lg hover:transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 relative overflow-hidden flex-1">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Nutrition guidance for better health</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Receive science-based dietary advice from qualified nutritionists to complement your healthcare routine.
              </p>
              <div className="grid grid-cols-4 gap-2 my-5">
                {[
                  { emoji: "🥗", alt: "Salad" },
                  { emoji: "🍎", alt: "Apple" },
                  { emoji: "🥕", alt: "Carrot" },
                  { emoji: "🥑", alt: "Avocado" },
                  { emoji: "🫐", alt: "Blueberries" },
                  { emoji: "🥦", alt: "Broccoli" },
                  { emoji: "🍊", alt: "Orange" },
                  { emoji: "🥒", alt: "Cucumber" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8b6914] to-[#6b4e03] flex items-center justify-center shadow-lg animate-foodFloat text-2xl"
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    {item.emoji}
                  </div>
                ))}
              </div>
              <button className="bg-[#c49b61] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#a67c52] hover:transform hover:-translate-y-1 transition-all duration-300">
                Get nutrition tips
              </button>
            </div>

            {/* Dynamic Card */}
            <div className="bg-white p-10 rounded-2xl shadow-lg hover:transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 relative overflow-hidden flex-1">
              <div
                className={`transition-all duration-800 ${isTransitioning ? "opacity-0 transform translate-y-5" : "opacity-100 transform translate-y-0"}`}
              >
                <h3 className="text-3xl font-bold text-gray-800 mb-4">{currentContent.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{currentContent.description}</p>
                {currentContent.visual}
                <button className="bg-[#c49b61] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#a67c52] hover:transform hover:-translate-y-1 transition-all duration-300">
                  {currentContent.buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes doctorFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes bounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        @keyframes foodFloat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes secure {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-3deg); }
          75% { transform: rotate(3deg); }
        }
        .animate-doctorFloat {
          animation: doctorFloat 3s ease-in-out infinite;
        }
        .animate-foodFloat {
          animation: foodFloat 4s ease-in-out infinite;
        }
        .animate-secure {
          animation: secure 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
