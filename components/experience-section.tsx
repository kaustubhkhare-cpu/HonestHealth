"use client"

import { useState, useEffect } from "react"

const centerContents = [
  {
    icon: "⚕️",
    title: "Professional Healthcare",
    subtitle: "Licensed doctors & quality care solutions for your health needs",
  },
  {
    icon: "🩺",
    title: "Expert Consultations",
    subtitle: "Qualified medical professionals providing personalized health guidance",
  },
  {
    icon: "💊",
    title: "Safe Medications",
    subtitle: "Licensed pharmaceutical products through proper medical consultation",
  },
  {
    icon: "📱",
    title: "Digital Health",
    subtitle: "Convenient online platform for all your healthcare requirements",
  },
]

export default function ExperienceSection() {
  const [currentContentIndex, setCurrentContentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)

      setTimeout(() => {
        setCurrentContentIndex((prev) => (prev + 1) % centerContents.length)
        setIsTransitioning(false)
      }, 500)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handleButtonClick = () => {
    console.log("[v0] Explore consultations button clicked")
  }

  const currentContent = centerContents[currentContentIndex]

  return (
    <div className="bg-[#f8f9ff] py-20 px-5">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center min-h-[70vh]">
        {/* Content Section */}
        <div className="max-w-[500px] mx-auto lg:mx-0">
          <div className="text-sm font-semibold text-[#c49b61] uppercase tracking-wider mb-5">
            The HonestHealth Experience
          </div>
          <h1 className="text-5xl font-bold text-[#333] leading-tight mb-6">Comprehensive, convenient healthcare</h1>
          <p className="text-lg text-[#666] leading-relaxed mb-10">
            Expert medical consultations, personalized health guidance, and quality healthcare solutions designed for
            your well-being and long-term optimal health.
          </p>
          <button
            onClick={handleButtonClick}
            className="bg-[#2dd4bf] text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 hover:bg-[#14b8a6] hover:-translate-y-0.5 shadow-[0_4px_15px_rgba(45,212,191,0.3)] hover:shadow-[0_8px_25px_rgba(45,212,191,0.4)]"
          >
            Explore consultations
          </button>
        </div>

        {/* Visual Section */}
        <div className="relative flex items-center justify-center h-[600px]">
          {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[10%] left-[10%] w-10 h-10 bg-[rgba(196,155,97,0.1)] rounded-full animate-[float_8s_ease-in-out_infinite]" />
            <div className="absolute top-[20%] right-[10%] w-10 h-10 bg-[rgba(196,155,97,0.1)] rounded-full animate-[float_8s_ease-in-out_infinite_2s]" />
            <div className="absolute bottom-[20%] left-[15%] w-10 h-10 bg-[rgba(196,155,97,0.1)] rounded-full animate-[float_8s_ease-in-out_infinite_4s]" />
            <div className="absolute bottom-[10%] right-[20%] w-10 h-10 bg-[rgba(196,155,97,0.1)] rounded-full animate-[float_8s_ease-in-out_infinite_6s]" />
          </div>

          {/* Orbit Container */}
          <div className="relative w-[500px] h-[500px] lg:w-[500px] lg:h-[500px] md:w-[400px] md:h-[400px]">
            {/* Orbiting Icons */}
            <div className="absolute w-20 h-20 bg-[rgba(196,155,97,0.1)] border-2 border-[rgba(196,155,97,0.2)] rounded-full flex items-center justify-center text-3xl text-[#c49b61] backdrop-blur-sm shadow-[0_8px_25px_rgba(196,155,97,0.15)] animate-[orbit_20s_linear_infinite] top-0 left-1/2 -translate-x-1/2">
              👨‍⚕️
            </div>
            <div
              className="absolute w-20 h-20 bg-[rgba(196,155,97,0.1)] border-2 border-[rgba(196,155,97,0.2)] rounded-full flex items-center justify-center text-3xl text-[#c49b61] backdrop-blur-sm shadow-[0_8px_25px_rgba(196,155,97,0.15)] animate-[orbit_20s_linear_infinite] top-1/2 right-0 -translate-y-1/2"
              style={{ animationDelay: "-5s" }}
            >
              💊
            </div>
            <div
              className="absolute w-20 h-20 bg-[rgba(196,155,97,0.1)] border-2 border-[rgba(196,155,97,0.2)] rounded-full flex items-center justify-center text-3xl text-[#c49b61] backdrop-blur-sm shadow-[0_8px_25px_rgba(196,155,97,0.15)] animate-[orbit_20s_linear_infinite] bottom-0 left-1/2 -translate-x-1/2"
              style={{ animationDelay: "-10s" }}
            >
              🩺
            </div>
            <div
              className="absolute w-20 h-20 bg-[rgba(196,155,97,0.1)] border-2 border-[rgba(196,155,97,0.2)] rounded-full flex items-center justify-center text-3xl text-[#c49b61] backdrop-blur-sm shadow-[0_8px_25px_rgba(196,155,97,0.15)] animate-[orbit_20s_linear_infinite] top-1/2 left-0 -translate-y-1/2"
              style={{ animationDelay: "-15s" }}
            >
              📋
            </div>
            <div
              className="absolute w-20 h-20 bg-[rgba(196,155,97,0.1)] border-2 border-[rgba(196,155,97,0.2)] rounded-full flex items-center justify-center text-3xl text-[#c49b61] backdrop-blur-sm shadow-[0_8px_25px_rgba(196,155,97,0.15)] animate-[orbit_20s_linear_infinite] top-[15%] right-[15%]"
              style={{ animationDelay: "-2.5s" }}
            >
              🧪
            </div>
            <div
              className="absolute w-20 h-20 bg-[rgba(196,155,97,0.1)] border-2 border-[rgba(196,155,97,0.2)] rounded-full flex items-center justify-center text-3xl text-[#c49b61] backdrop-blur-sm shadow-[0_8px_25px_rgba(196,155,97,0.15)] animate-[orbit_20s_linear_infinite] bottom-[15%] right-[15%]"
              style={{ animationDelay: "-7.5s" }}
            >
              📱
            </div>
            <div
              className="absolute w-20 h-20 bg-[rgba(196,155,97,0.1)] border-2 border-[rgba(196,155,97,0.2)] rounded-full flex items-center justify-center text-3xl text-[#c49b61] backdrop-blur-sm shadow-[0_8px_25px_rgba(196,155,97,0.15)] animate-[orbit_20s_linear_infinite] bottom-[15%] left-[15%]"
              style={{ animationDelay: "-12.5s" }}
            >
              🏥
            </div>
            <div
              className="absolute w-20 h-20 bg-[rgba(196,155,97,0.1)] border-2 border-[rgba(196,155,97,0.2)] rounded-full flex items-center justify-center text-3xl text-[#c49b61] backdrop-blur-sm shadow-[0_8px_25px_rgba(196,155,97,0.15)] animate-[orbit_20s_linear_infinite] top-[15%] left-[15%]"
              style={{ animationDelay: "-17.5s" }}
            >
              💬
            </div>

            {/* Center Content */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-[rgba(255,255,255,0.9)] border-2 border-[rgba(196,155,97,0.2)] rounded-full backdrop-blur-lg flex flex-col items-center justify-center text-center p-8 shadow-[0_15px_35px_rgba(0,0,0,0.1)] animate-[centerPulse_4s_ease-in-out_infinite]">
              <div
                className={`w-15 h-15 bg-gradient-to-br from-[#c49b61] to-[#a67c52] rounded-full flex items-center justify-center text-3xl text-white mb-4 animate-[iconRotate_6s_linear_infinite] transition-opacity duration-500 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
              >
                {currentContent.icon}
              </div>
              <div
                className={`text-base font-bold text-[#333] mb-2 transition-opacity duration-500 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
              >
                {currentContent.title}
              </div>
              <div
                className={`text-xs text-[#666] leading-relaxed transition-opacity duration-500 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
              >
                {currentContent.subtitle}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes orbit {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) translateX(200px) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) translateX(200px) rotate(-360deg);
          }
        }

        @keyframes centerPulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.05);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          }
        }

        @keyframes iconRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) scale(1.1);
            opacity: 0.6;
          }
        }

        @media (max-width: 768px) {
          .orbit-container {
            width: 400px !important;
            height: 400px !important;
          }
          
          .orbit-icon {
            width: 60px !important;
            height: 60px !important;
            font-size: 24px !important;
          }
          
          .center-content {
            width: 220px !important;
            height: 220px !important;
            padding: 20px !important;
          }
          
          @keyframes orbit {
            0% {
              transform: translate(-50%, -50%) rotate(0deg) translateX(150px) rotate(0deg);
            }
            100% {
              transform: translate(-50%, -50%) rotate(360deg) translateX(150px) rotate(-360deg);
            }
          }
        }

        @media (max-width: 480px) {
          .orbit-container {
            width: 320px !important;
            height: 320px !important;
          }
          
          .orbit-icon {
            width: 50px !important;
            height: 50px !important;
            font-size: 20px !important;
          }
          
          .center-content {
            width: 180px !important;
            height: 180px !important;
            padding: 15px !important;
          }
          
          .center-icon {
            width: 45px !important;
            height: 45px !important;
            font-size: 22px !important;
          }
          
          @keyframes orbit {
            0% {
              transform: translate(-50%, -50%) rotate(0deg) translateX(120px) rotate(0deg);
            }
            100% {
              transform: translate(-50%, -50%) rotate(360deg) translateX(120px) rotate(-360deg);
            }
          }
        }
      `}</style>
    </div>
  )
}
