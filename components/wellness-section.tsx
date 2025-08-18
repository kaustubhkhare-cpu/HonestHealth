"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function WellnessSection() {
  const router = useRouter()
  const [currentContentIndex, setCurrentContentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const dynamicContents = [
    {
      title: "How do you want to improve your health?",
      description:
        "Choose your wellness focus area and get personalized recommendations from our healthcare professionals.",
      icons: [
        "muscle strength fitness",
        "meditation mindfulness wellness",
        "healthy food nutrition",
        "sleep rest recovery",
      ],
      buttonText: "Take assessment",
    },
    {
      title: "Track your wellness progress effectively",
      description:
        "Monitor your health improvements with professional guidance and regular check-ins with certified healthcare providers.",
      icons: [
        "muscle strength fitness",
        "meditation mindfulness wellness",
        "healthy food nutrition",
        "sleep rest recovery",
      ],
      buttonText: "Start tracking",
    },
    {
      title: "Personalized health recommendations",
      description:
        "Receive customized wellness plans based on your health assessment and goals, created by experienced healthcare professionals.",
      icons: [
        "muscle strength fitness",
        "meditation mindfulness wellness",
        "healthy food nutrition",
        "sleep rest recovery",
      ],
      buttonText: "Get recommendations",
    },
  ]

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
    <div className="py-16 px-5 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div
          className="relative overflow-hidden rounded-3xl min-h-[700px] text-white shadow-2xl"
          style={{
            background: "linear-gradient(135deg, #6b8e7d 0%, #4a6b5d 100%)",
          }}
        >
          {/* Background decorative elements */}
          <div
            className="absolute -top-20 -right-16 w-96 h-96 rounded-full opacity-5"
            style={{ background: "rgba(255,255,255,0.05)" }}
          />
          <div
            className="absolute -bottom-24 -left-10 w-72 h-72 rounded-full opacity-3"
            style={{ background: "rgba(255,255,255,0.03)" }}
          />

          {/* Main header */}
          <div className="text-center pt-12 pb-8 px-12 relative z-10">
            <h2 className="text-5xl font-bold leading-tight mb-5">
              Enhance your wellness journey with expert guidance
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Professional healthcare consultations to support your overall well-being and lifestyle improvements
            </p>

            {/* Hero visual */}
            <div className="flex justify-center my-10">
              <div
                className="w-48 h-36 rounded-2xl border-3 border-white/20 flex items-center justify-center text-6xl text-white/90 relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
                  animation: "heartbeat 3s ease-in-out infinite",
                }}
              >
                👫
                <div
                  className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-lg"
                  style={{
                    animation: "pulse 2s ease-in-out infinite",
                  }}
                >
                  ❤️
                </div>
              </div>
            </div>
          </div>

          {/* CTA section */}
          <div className="text-center pb-8 px-12 relative z-10">
            <div className="flex gap-5 justify-center">
              <button className="bg-white text-[#6b8e7d] px-8 py-4 rounded-xl font-semibold text-base hover:transform hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300">
                Book consultation
              </button>
              <button
                className="bg-transparent text-white px-8 py-4 border-2 border-white/30 rounded-xl font-semibold text-base hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                onClick={() => router.push("/erectile-dysfunction")}
              >
                Explore wellness programs
              </button>
            </div>
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-2 gap-5 p-10 relative z-10">
            {/* Wellness expert card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:transform hover:-translate-y-1 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">Improve overall wellness with expert care</h3>
              <p className="text-white/90 leading-relaxed mb-6">
                Connect with certified healthcare professionals for personalized wellness guidance and lifestyle
                improvement strategies.
              </p>
              <div className="flex justify-center my-5">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl text-white relative shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, #c49b61 0%, #a67c52 100%)",
                    animation: "wellness-float 3s ease-in-out infinite",
                    boxShadow: "0 8px 20px rgba(196, 155, 97, 0.3)",
                  }}
                >
                  👨‍⚕️
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white/90 rounded-full flex items-center justify-center text-sm">
                    🌱
                  </div>
                </div>
              </div>
              <button
                className="px-6 py-3 rounded-lg font-semibold text-sm text-white hover:transform hover:-translate-y-0.5 transition-all duration-300"
                style={{ background: "#c49b61" }}
                onMouseEnter={(e) => (e.target.style.background = "#a67c52")}
                onMouseLeave={(e) => (e.target.style.background = "#c49b61")}
              >
                Start wellness journey
              </button>
            </div>

            {/* Consultation testimonials card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:transform hover:-translate-y-1 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">Professional consultation testimonials</h3>
              <p className="text-white/90 leading-relaxed mb-6">
                "The doctors helped me understand my health better and provided excellent guidance for my wellness
                goals. Highly recommend their professional approach."
              </p>
              <div className="flex justify-center my-5">
                <div
                  className="w-28 h-20 rounded-2xl relative flex items-center justify-center text-white/90"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)",
                    animation: "interface-glow 3s ease-in-out infinite",
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: "linear-gradient(135deg, rgba(107, 142, 125, 0.7) 0%, rgba(74, 107, 93, 0.7) 100%)",
                    }}
                  />
                  <div className="relative z-10 flex items-center gap-2 text-2xl">👩‍⚕️ 💬</div>
                  <div
                    className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#c49b61] rounded-full flex items-center justify-center text-sm"
                    style={{ animation: "chat-bounce 2s ease-in-out infinite" }}
                  >
                    💬
                  </div>
                </div>
              </div>
              <button
                className="px-6 py-3 rounded-lg font-semibold text-sm text-white hover:transform hover:-translate-y-0.5 transition-all duration-300"
                style={{ background: "#c49b61" }}
                onMouseEnter={(e) => (e.target.style.background = "#a67c52")}
                onMouseLeave={(e) => (e.target.style.background = "#c49b61")}
              >
                Read reviews
              </button>
            </div>

            {/* Dynamic card */}
            <div className="md:col-span-2 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
              <div
                className={`transition-all duration-700 ${isTransitioning ? "opacity-0 transform translate-y-5" : "opacity-100 transform translate-y-0"}`}
              >
                <h3 className="text-2xl font-bold mb-4">{currentContent.title}</h3>
                <p className="text-white/90 leading-relaxed mb-6">{currentContent.description}</p>
                <div className="flex justify-center my-6">
                  <div className="flex gap-4 items-center">
                    {[
                      { emoji: "💪", label: "Fitness" },
                      { emoji: "🧘", label: "Meditation" },
                      { emoji: "🥗", label: "Nutrition" },
                      { emoji: "😴", label: "Sleep" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="w-14 h-10 rounded-lg flex items-center justify-center text-2xl text-white cursor-pointer transition-all duration-300 hover:scale-110 relative overflow-hidden"
                        style={{
                          background: "linear-gradient(135deg, #8b6914 0%, #6b4e03 100%)",
                          animation: `item-float 4s ease-in-out infinite`,
                          animationDelay: `${index * 0.5}s`,
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = "linear-gradient(135deg, #a67c52 0%, #8b6914 100%)"
                          e.target.style.transform = "scale(1.1)"
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = "linear-gradient(135deg, #8b6914 0%, #6b4e03 100%)"
                          e.target.style.transform = "scale(1)"
                        }}
                      >
                        {item.emoji}
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  className="px-6 py-3 rounded-lg font-semibold text-sm text-white hover:transform hover:-translate-y-0.5 transition-all duration-300"
                  style={{ background: "#c49b61" }}
                  onMouseEnter={(e) => (e.target.style.background = "#a67c52")}
                  onMouseLeave={(e) => (e.target.style.background = "#c49b61")}
                >
                  {currentContent.buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        @keyframes wellness-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes interface-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,255,255,0.3); }
          50% { box-shadow: 0 0 0 8px rgba(255,255,255,0); }
        }
        @keyframes chat-bounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        @keyframes item-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
    </div>
  )
}
