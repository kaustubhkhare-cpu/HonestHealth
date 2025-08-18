"use client"

import { useState, useEffect } from "react"

const dynamicContents = [
  {
    title: "Healthcare consultation made simple",
    description:
      "Connect with qualified doctors through secure video consultations for professional medical advice and health assessments.",
    icon: "👨‍⚕️",
    buttonText: "Book consultation",
    gradient: "from-amber-600 to-amber-700",
  },
  {
    title: "Your health data stays secure",
    description:
      "We follow strict data protection protocols to ensure your medical information remains confidential and protected.",
    icon: "🔒",
    buttonText: "Privacy policy",
    gradient: "from-amber-600 to-amber-700",
  },
  {
    title: "Expert support when you need it",
    description:
      "Access qualified healthcare professionals for medical guidance and follow-up consultations at your convenience.",
    icon: "💬",
    buttonText: "Contact us",
    gradient: "from-orange-500 to-orange-600",
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
    <div className="min-h-screen bg-slate-50 px-5 py-15">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-5 rounded-3xl overflow-hidden shadow-2xl">
          {/* Main Section */}
          <div className="bg-gradient-to-br from-amber-600 to-amber-700 p-12 lg:p-15 relative overflow-hidden text-white flex flex-col justify-between min-h-[600px]">
            <div className="absolute -top-1/2 -right-1/5 w-75 h-75 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-1/3 -left-1/10 w-50 h-50 bg-white/8 rounded-full"></div>
            <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-white/5 rounded-full animate-pulse"></div>

            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-5">
                Consult qualified doctors for personalized healthcare solutions
              </h2>
              <p className="text-lg opacity-90 mb-10 leading-relaxed">
                Connect with licensed medical professionals for evidence-based treatment recommendations and health
                guidance
              </p>

              <div className="flex justify-center my-10">
                <div className="w-35 h-40 rounded-2xl bg-gradient-to-br from-white/15 to-white/5 border-3 border-white/20 relative flex items-center justify-center animate-float">
                  <div className="text-6xl">👨‍⚕️</div>
                  <div className="absolute -bottom-2 -right-2 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center text-xl animate-pulse">
                    🩺
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 relative z-10">
              <button className="bg-white text-amber-600 px-8 py-4 rounded-xl font-semibold hover:transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                Book consultation
              </button>
              <button className="bg-transparent text-white px-8 py-4 border-2 border-white/30 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                Learn about services
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-5">
            <div className="bg-white p-10 rounded-2xl shadow-lg hover:transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full -translate-y-10 translate-x-10 opacity-50"></div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Stay active with expert guidance</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Get personalized fitness recommendations from certified health professionals to support your wellness
                journey safely.
              </p>
              <div className="flex justify-center my-5">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center text-4xl text-white animate-pulse relative shadow-lg">
                  🏃‍♂️
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 rounded-full animate-bounce"></div>
                </div>
              </div>
              <button className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 hover:transform hover:-translate-y-1 transition-all duration-300 shadow-md">
                Explore wellness
              </button>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-lg hover:transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full translate-y-8 -translate-x-8 opacity-50"></div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Nutrition guidance for better health</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Receive science-based dietary advice from qualified nutritionists to complement your healthcare routine.
              </p>
              <div className="grid grid-cols-4 gap-2 my-5">
                {["🥗", "🍎", "🥕", "🥑", "🫐", "🥦", "🍊", "🥒"].map((emoji, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-2xl text-white shadow-lg hover:scale-105 transition-transform duration-300"
                    style={{
                      animation: `foodFloat 4s ease-in-out infinite`,
                      animationDelay: `${index * 0.5}s`,
                    }}
                  >
                    {emoji}
                  </div>
                ))}
              </div>
              <button className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 hover:transform hover:-translate-y-1 transition-all duration-300 shadow-md">
                Get nutrition tips
              </button>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-lg hover:transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-1/2 right-0 w-24 h-24 bg-gradient-to-br from-amber-50 to-amber-100 rounded-full translate-x-12 opacity-30"></div>
              <div
                className={`transition-all duration-800 ${isTransitioning ? "opacity-0 transform translate-y-5" : "opacity-100 transform translate-y-0"}`}
              >
                <h3 className="text-3xl font-bold text-gray-800 mb-4">{currentContent.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{currentContent.description}</p>
                <div className="flex justify-center my-5">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${currentContent.gradient} rounded-2xl flex items-center justify-center text-4xl text-white shadow-lg relative hover:scale-105 transition-transform duration-300`}
                  >
                    {currentContent.icon}
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 rounded-full animate-ping"></div>
                  </div>
                </div>
                <button className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 hover:transform hover:-translate-y-1 transition-all duration-300 shadow-md">
                  {currentContent.buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes foodFloat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
