"use client"

import { useEffect, useRef } from "react"

const uspCards = [
  {
    icon: "🛡️",
    title: "Certified & Trusted",
    description: "Licensed healthcare providers regulated by Indian medical authorities.",
  },
  {
    icon: "🇮🇳",
    title: "India Licensed Doctors",
    description: "Qualified medical professionals and certified healthcare specialists.",
  },
  {
    icon: "📦",
    title: "Free, discreet delivery",
    description: "Confidential packaging, no branding, secure nationwide delivery.",
  },
  {
    icon: "🩺",
    title: "Ongoing medical support",
    description: "Access expert clinicians and continuous healthcare guidance.",
  },
  {
    icon: "🔒",
    title: "100% Confidential",
    description: "Complete privacy protection and secure health data management.",
  },
  {
    icon: "💊",
    title: "Quality assured medications",
    description: "Genuine pharmaceutical products from licensed Indian suppliers.",
  },
  {
    icon: "🕐",
    title: "24/7 Healthcare access",
    description: "Round-the-clock medical consultations and health support.",
  },
  {
    icon: "📱",
    title: "Digital health platform",
    description: "Modern telemedicine technology for convenient healthcare.",
  },
]

export default function USPBanner() {
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    let isVisible = false

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible = true
          slider.style.animationPlayState = "running"
        } else {
          isVisible = false
          slider.style.animationPlayState = "paused"
        }
      })
    })

    observer.observe(slider.parentElement!)

    const handleVisibilityChange = () => {
      if (document.hidden) {
        slider.style.animationPlayState = "paused"
      } else if (isVisible) {
        slider.style.animationPlayState = "running"
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      observer.disconnect()
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [])

  const handleCardClick = (title: string) => {
    console.log(`[v0] USP clicked: ${title}`)
  }

  return (
    <div className="py-10" style={{ background: "#f8f9ff" }}>
      <div
        className="mx-5 rounded-3xl py-10 relative overflow-hidden group"
        style={{
          background: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
        }}
        onMouseEnter={(e) => {
          const slider = e.currentTarget.querySelector(".banner-slider") as HTMLElement
          if (slider) slider.style.animationPlayState = "paused"
        }}
        onMouseLeave={(e) => {
          const slider = e.currentTarget.querySelector(".banner-slider") as HTMLElement
          if (slider) slider.style.animationPlayState = "running"
        }}
      >
        {/* Gradient fade edges */}
        <div
          className="absolute left-0 top-0 w-12 h-full z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, rgba(255,255,255,0.9), transparent)" }}
        />
        <div
          className="absolute right-0 top-0 w-12 h-full z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, rgba(255,255,255,0.9), transparent)" }}
        />

        <div
          ref={sliderRef}
          className="banner-slider flex gap-15 px-10"
          style={{
            animation: "slideUSP 30s linear infinite",
            minWidth: "fit-content",
          }}
        >
          {/* First set of cards */}
          {uspCards.map((card, index) => (
            <div
              key={index}
              className="flex items-center gap-5 p-5 bg-white rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-1 flex-shrink-0"
              style={{
                minWidth: "300px",
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
              }}
              onClick={() => handleCardClick(card.title)}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%)"
                e.currentTarget.style.borderLeft = "4px solid #c49b61"
                e.currentTarget.style.boxShadow = "0 15px 35px rgba(0, 0, 0, 0.15)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "white"
                e.currentTarget.style.borderLeft = "none"
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.1)"
              }}
            >
              <div
                className="w-15 h-15 rounded-full flex items-center justify-center text-2xl text-white flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, #c49b61 0%, #a67c52 100%)",
                  animation: `iconPulse 3s ease-in-out infinite ${index * 0.5}s`,
                }}
              >
                {card.icon}
              </div>
              <div className="flex-1">
                <div className="text-lg font-bold text-gray-800 mb-1 leading-tight">{card.title}</div>
                <div className="text-sm text-gray-600 leading-relaxed">{card.description}</div>
              </div>
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {uspCards.map((card, index) => (
            <div
              key={`duplicate-${index}`}
              className="flex items-center gap-5 p-5 bg-white rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-1 flex-shrink-0"
              style={{
                minWidth: "300px",
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
              }}
              onClick={() => handleCardClick(card.title)}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%)"
                e.currentTarget.style.borderLeft = "4px solid #c49b61"
                e.currentTarget.style.boxShadow = "0 15px 35px rgba(0, 0, 0, 0.15)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "white"
                e.currentTarget.style.borderLeft = "none"
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.1)"
              }}
            >
              <div
                className="w-15 h-15 rounded-full flex items-center justify-center text-2xl text-white flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, #c49b61 0%, #a67c52 100%)",
                  animation: `iconPulse 3s ease-in-out infinite ${index * 0.5}s`,
                }}
              >
                {card.icon}
              </div>
              <div className="flex-1">
                <div className="text-lg font-bold text-gray-800 mb-1 leading-tight">{card.title}</div>
                <div className="text-sm text-gray-600 leading-relaxed">{card.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUSP {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }

        @keyframes iconPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(196, 155, 97, 0.7);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 0 10px rgba(196, 155, 97, 0);
          }
        }

        @media (max-width: 768px) {
          .banner-slider {
            gap: 40px !important;
            padding: 0 20px !important;
          }

          .banner-slider > div {
            min-width: 280px !important;
            padding: 15px !important;
            gap: 15px !important;
          }

          .banner-slider .w-15 {
            width: 50px !important;
            height: 50px !important;
            font-size: 20px !important;
          }

          .banner-slider .text-lg {
            font-size: 16px !important;
          }

          .banner-slider .text-sm {
            font-size: 13px !important;
          }
        }

        @media (max-width: 480px) {
          .banner-slider > div {
            min-width: 260px !important;
            flex-direction: column !important;
            text-align: center !important;
            padding: 20px 15px !important;
          }

          .banner-slider .w-15 {
            margin-bottom: 10px !important;
          }
        }
      `}</style>
    </div>
  )
}
