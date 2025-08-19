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
    <div className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl min-h-[600px] sm:min-h-[700px] text-white shadow-2xl"
          style={{
            background: "linear-gradient(135deg, #6b8e7d 0%, #4a6b5d 100%)",
          }}
        >
          {/* Background decorative elements */}
          <div
            className="absolute -top-16 sm:-top-20 -right-12 sm:-right-16 w-64 h-64 sm:w-96 sm:h-96 rounded-full opacity-5"
            style={{ background: "rgba(255,255,255,0.05)" }}
          />
          <div
            className="absolute -bottom-20 sm:-bottom-24 -left-8 sm:-left-10 w-56 h-56 sm:w-72 sm:h-72 rounded-full opacity-3"
            style={{ background: "rgba(255,255,255,0.03)" }}
          />

          {/* Main header */}
          <div className="text-center pt-8 sm:pt-12 pb-6 sm:pb-8 px-4 sm:px-8 lg:px-12 relative z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-3 sm:mb-5">
              Enhance your wellness journey with expert guidance
            </h2>
            <p className="text-sm sm:text-base lg:text-lg opacity-90 max-w-2xl mx-auto">
              Professional healthcare consultations to support your overall well-being and lifestyle improvements
            </p>

            {/* Hero visual */}
            <div className="flex justify-center my-6 sm:my-8 lg:my-10">
              <div
                className="w-64 h-48 sm:w-80 sm:h-64 rounded-xl sm:rounded-2xl border-2 sm:border-3 border-white/20 flex items-center justify-center relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)",
                  animation: "heartbeat 3s ease-in-out infinite",
                }}
              >
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Aug%2018%2C%202025%2C%2005_13_56%20PM-JfAjWtltgC26dz7Y7VkRr4GupYdTpp.png"
                  alt="Happy customer with HONEST HEALTH supplement bottle"
                  className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* CTA section */}
          <div className="text-center pb-6 sm:pb-8 px-4 sm:px-8 lg:px-12 relative z-10">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center">
              <button className="bg-white text-[#6b8e7d] px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base hover:transform hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300">
                Book consultation
              </button>
              <button
                className="bg-white text-[#6b8e7d] px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base hover:bg-white/90 hover:border-white/50 transition-all duration-300"
                onClick={() => router.push("/erectile-dysfunction")}
              >
                Explore wellness programs
              </button>
            </div>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 p-4 sm:p-6 lg:p-10 relative z-10">
            {/* Wellness expert card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10 hover:transform hover:-translate-y-1 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">
                Improve overall wellness with expert care
              </h3>
              <p className="text-white/90 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Connect with certified healthcare professionals for personalized wellness guidance and lifestyle
                improvement strategies.
              </p>
              <div className="flex justify-center my-4 sm:my-5">
                <div
                  className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-xl sm:rounded-2xl flex items-center justify-center relative shadow-lg overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #c49b61 0%, #a67c52 100%)",
                    animation: "wellness-float 3s ease-in-out infinite",
                    boxShadow: "0 8px 20px rgba(196, 155, 97, 0.3)",
                  }}
                >
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Aug%2018%2C%202025%2C%2005_35_37%20PM-BiMWLSWFa8h8A2ItAs7Az6XNV5gMeh.png"
                    alt="Professional healthcare doctor"
                    className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                  />
                </div>
              </div>
              <button className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm bg-white text-[#6b8e7d] hover:transform hover:-translate-y-0.5 hover:bg-white/90 transition-all duration-300">
                Start wellness journey
              </button>
            </div>

            {/* Consultation testimonials card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10 hover:transform hover:-translate-y-1 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">
                Professional consultation testimonials
              </h3>
              <p className="text-white/90 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                "The doctors helped me understand my health better and provided excellent guidance for my wellness
                goals. Highly recommend their professional approach."
              </p>
              <div className="flex justify-center my-4 sm:my-5">
                <div
                  className="w-40 h-24 sm:w-48 sm:h-32 rounded-xl sm:rounded-2xl relative flex items-center justify-center overflow-hidden shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)",
                    animation: "interface-glow 3s ease-in-out infinite",
                  }}
                >
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Aug%2018%2C%202025%2C%2005_46_47%20PM-BiMWLSWFa8h8A2ItAs7Az6XNV5gMeh.png"
                    alt="Professional medical team of doctors"
                    className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                  />
                </div>
              </div>
              <button className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm bg-white text-[#6b8e7d] hover:transform hover:-translate-y-0.5 hover:bg-white/90 transition-all duration-300">
                Read reviews
              </button>
            </div>

            {/* Dynamic card */}
            <div className="md:col-span-2 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10 text-center">
              <div
                className={`transition-all duration-700 ${isTransitioning ? "opacity-0 transform translate-y-5" : "opacity-100 transform translate-y-0"}`}
              >
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">{currentContent.title}</h3>
                <p className="text-white/90 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                  {currentContent.description}
                </p>
                <div className="flex justify-center my-4 sm:my-6">
                  <div className="flex gap-2 sm:gap-4 items-center">
                    {[
                      { emoji: "💪", label: "Fitness" },
                      { emoji: "🧘", label: "Meditation" },
                      { emoji: "🥗", label: "Nutrition" },
                      { emoji: "😴", label: "Sleep" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="w-10 h-8 sm:w-14 sm:h-10 rounded-lg bg-white flex items-center justify-center text-lg sm:text-2xl cursor-pointer transition-all duration-300 hover:scale-110 relative overflow-hidden"
                        style={{
                          animation: `item-float 4s ease-in-out infinite`,
                          animationDelay: `${index * 0.5}s`,
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = "rgba(255,255,255,0.9)"
                          e.target.style.transform = "scale(1.1)"
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = "white"
                          e.target.style.transform = "scale(1)"
                        }}
                      >
                        {item.emoji}
                      </div>
                    ))}
                  </div>
                </div>
                <button className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm bg-white text-[#6b8e7d] hover:transform hover:-translate-y-0.5 hover:bg-white/90 transition-all duration-300">
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
