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

          {/* Comprehensive weight loss medications section */}
          <div className="p-4 sm:p-6 lg:p-10 relative z-10">
            {/* Hero Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16 bg-white/10 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/10">
              <div className="text-left">
                <div className="bg-white/90 text-[#A67C52] px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4 lg:mb-6">
                  ✓ CDSCO Approved Treatments
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 lg:mb-5 leading-tight">
                  Lose Weight with Doctor-Prescribed Medications
                </h1>
                <p className="text-lg sm:text-xl text-white/90 mb-3 lg:mb-4 font-medium">
                  Clinically proven results for sustainable weight loss
                </p>
                <p className="text-sm sm:text-base text-white/80 mb-6 lg:mb-8 leading-relaxed">
                  Get access to the same weight loss medications trusted by doctors across India. Our medical team
                  provides personalized treatment plans with ongoing support to help you achieve lasting results.
                </p>

                <div className="flex flex-wrap gap-4 lg:gap-6 mb-6 lg:mb-8">
                  <div className="text-center">
                    <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-white block">85%</span>
                    <span className="text-xs sm:text-sm text-white/80">Success Rate</span>
                  </div>
                  <div className="text-center">
                    <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-white block">12kg</span>
                    <span className="text-xs sm:text-sm text-white/80">Average Loss</span>
                  </div>
                  <div className="text-center">
                    <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-white block">10,000+</span>
                    <span className="text-xs sm:text-sm text-white/80">Patients Treated</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button className="bg-white text-[#A67C52] px-6 lg:px-8 py-3 lg:py-4 rounded-full text-sm lg:text-base font-bold hover:transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                    Start Your Assessment
                  </button>
                  <button className="bg-transparent text-white border-2 border-white px-6 lg:px-8 py-3 lg:py-4 rounded-full text-sm lg:text-base font-bold hover:bg-white hover:text-[#A67C52] transition-all duration-300">
                    How It Works
                  </button>
                </div>
              </div>

              <div className="w-full h-64 sm:h-80 lg:h-96 bg-white/20 border-2 border-dashed border-white/50 rounded-2xl flex items-center justify-center text-white/70 text-sm sm:text-base text-center leading-relaxed">
                [Success Story Image]
                <br />
                Before/After Transformation
                <br />+ Patient Testimonial
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-white/95 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 mb-12 lg:mb-16 text-center">
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-[#A67C52] mb-6 lg:mb-8 font-bold">
                Trusted by Healthcare Professionals
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-[#A67C52]/10 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4 text-2xl lg:text-3xl text-[#A67C52]">
                    👨‍⚕️
                  </div>
                  <div className="text-base lg:text-lg text-gray-800 font-semibold mb-2">Board-Certified Doctors</div>
                  <div className="text-sm text-gray-600 leading-relaxed">
                    Licensed physicians with obesity medicine specialization
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-[#A67C52]/10 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4 text-2xl lg:text-3xl text-[#A67C52]">
                    🏥
                  </div>
                  <div className="text-base lg:text-lg text-gray-800 font-semibold mb-2">Medical Grade Treatment</div>
                  <div className="text-sm text-gray-600 leading-relaxed">
                    FDA-approved medications with proven safety profiles
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-[#A67C52]/10 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4 text-2xl lg:text-3xl text-[#A67C52]">
                    📊
                  </div>
                  <div className="text-base lg:text-lg text-gray-800 font-semibold mb-2">Clinical Evidence</div>
                  <div className="text-sm text-gray-600 leading-relaxed">
                    Backed by peer-reviewed research and real-world data
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-[#A67C52]/10 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4 text-2xl lg:text-3xl text-[#A67C52]">
                    🔒
                  </div>
                  <div className="text-base lg:text-lg text-gray-800 font-semibold mb-2">Secure & Private</div>
                  <div className="text-sm text-gray-600 leading-relaxed">
                    HIPAA-compliant platform with encrypted consultations
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="bg-white/95 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 mb-12 lg:mb-16 text-center">
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-[#A67C52] mb-6 lg:mb-10 font-bold">
                Real Results from Real People
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                <div className="bg-[#A67C52]/5 rounded-2xl p-5 lg:p-6 border-l-4 border-[#4CAF50]">
                  <p className="text-sm sm:text-base text-gray-800 leading-relaxed mb-4 italic">
                    "I've tried countless diets before, but this was different. With proper medical supervision and the
                    right medication, I finally broke through my plateau."
                  </p>
                  <div className="text-sm font-semibold text-[#A67C52] mb-1">Priya S., Mumbai</div>
                  <div className="text-sm text-[#4CAF50] font-semibold">Lost 18kg in 8 months</div>
                </div>
                <div className="bg-[#A67C52]/5 rounded-2xl p-5 lg:p-6 border-l-4 border-[#4CAF50]">
                  <p className="text-sm sm:text-base text-gray-800 leading-relaxed mb-4 italic">
                    "The doctor's guidance made all the difference. They helped me understand my body's needs and
                    provided a treatment plan that actually worked."
                  </p>
                  <div className="text-sm font-semibold text-[#A67C52] mb-1">Raj K., Delhi</div>
                  <div className="text-sm text-[#4CAF50] font-semibold">Lost 15kg in 6 months</div>
                </div>
                <div className="bg-[#A67C52]/5 rounded-2xl p-5 lg:p-6 border-l-4 border-[#4CAF50]">
                  <p className="text-sm sm:text-base text-gray-800 leading-relaxed mb-4 italic">
                    "What I loved most was the ongoing support. Every month, my doctor adjusted my plan based on my
                    progress. It felt truly personalized."
                  </p>
                  <div className="text-sm font-semibold text-[#A67C52] mb-1">Anita M., Bangalore</div>
                  <div className="text-sm text-[#4CAF50] font-semibold">Lost 22kg in 10 months</div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-12 lg:mb-16">
              {/* Exercise & Activity Card */}
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 text-center border-t-4 border-[#4CAF50] hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="w-48 h-56 sm:w-56 sm:h-64 lg:w-64 lg:h-72 bg-white/20 border-2 border-dashed border-white/50 rounded-2xl flex items-center justify-center text-white/70 text-sm text-center leading-relaxed mx-auto mb-6 lg:mb-8">
                  [Fitness Tracking App Image]
                  <br />
                  Mobile interface showing
                  <br />
                  workout progress
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl text-white mb-3 lg:mb-4 font-bold">Move Smart</h2>
                <h3 className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-4 lg:mb-6 font-medium">
                  burn calories effectively
                </h3>
                <p className="text-white/85 text-sm sm:text-base leading-relaxed mb-6 lg:mb-8">
                  Our AI-powered fitness companion creates workout plans that complement your medication for maximum
                  results.
                </p>
                <div className="bg-white/10 rounded-2xl p-4 lg:p-5 mb-6 lg:mb-8">
                  <ul className="text-left text-white/90 text-sm space-y-2 lg:space-y-3">
                    <li className="flex items-start">
                      <span className="text-[#4CAF50] font-bold text-base mr-2">✓</span>
                      Personalized exercise routines for Indian lifestyles
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4CAF50] font-bold text-base mr-2">✓</span>
                      Integration with popular fitness apps
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4CAF50] font-bold text-base mr-2">✓</span>
                      Real-time progress tracking
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4CAF50] font-bold text-base mr-2">✓</span>
                      Yoga and traditional movement practices
                    </li>
                  </ul>
                </div>
                <button className="bg-white text-[#A67C52] px-6 lg:px-8 py-3 lg:py-4 rounded-full text-sm lg:text-base font-bold hover:transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  Start Moving
                </button>
              </div>

              {/* Nutrition Card */}
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 text-center border-t-4 border-[#4CAF50] hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="w-48 h-56 sm:w-56 sm:h-64 lg:w-64 lg:h-72 bg-white/20 border-2 border-dashed border-white/50 rounded-2xl flex items-center justify-center text-white/70 text-sm text-center leading-relaxed mx-auto mb-6 lg:mb-8">
                  [Indian Meal Planning Image]
                  <br />
                  Healthy regional dishes
                  <br />
                  with portion guides
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl text-white mb-3 lg:mb-4 font-bold">Eat Strategic</h2>
                <h3 className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-4 lg:mb-6 font-medium">
                  fuel your transformation
                </h3>
                <p className="text-white/85 text-sm sm:text-base leading-relaxed mb-6 lg:mb-8">
                  Scientifically-designed meal plans featuring authentic Indian cuisine that supports your weight loss
                  medications.
                </p>
                <div className="bg-white/10 rounded-2xl p-4 lg:p-5 mb-6 lg:mb-8">
                  <ul className="text-left text-white/90 text-sm space-y-2 lg:space-y-3">
                    <li className="flex items-start">
                      <span className="text-[#4CAF50] font-bold text-base mr-2">✓</span>
                      Regional Indian meal plans (North, South, East, West)
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4CAF50] font-bold text-base mr-2">✓</span>
                      Macro-optimized recipes for weight loss
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4CAF50] font-bold text-base mr-2">✓</span>
                      Shopping lists and prep guides
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4CAF50] font-bold text-base mr-2">✓</span>
                      Restaurant and street food alternatives
                    </li>
                  </ul>
                </div>
                <button className="bg-white text-[#A67C52] px-6 lg:px-8 py-3 lg:py-4 rounded-full text-sm lg:text-base font-bold hover:transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  View Meal Plans
                </button>
              </div>
            </div>

            {/* Bottom Personalization Section */}
            <div className="bg-[#8b7657]/30 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
              <div className="bg-gradient-to-r from-[#4CAF50] to-[#45a049] text-white px-6 py-3 rounded-full inline-block mb-6 lg:mb-8 font-semibold text-sm shadow-lg">
                ⏰ Limited Time: Free Consultation for New Patients
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-3 lg:mb-5 font-bold">
                It's not just a treatment,
              </h2>
              <h3 className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-6 lg:mb-8 font-semibold">
                it's your personal health revolution
              </h3>

              <div className="w-64 h-48 sm:w-80 sm:h-56 lg:w-96 lg:h-64 bg-white/20 border-2 border-dashed border-white/50 rounded-2xl flex items-center justify-center text-white/70 text-sm text-center leading-relaxed mx-auto mb-6 lg:mb-8">
                [Doctor Consultation Image]
                <br />
                Virtual consultation
                <br />
                with specialist
              </div>

              <p className="text-white/85 text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl mx-auto mb-8 lg:mb-10">
                Every patient receives a completely personalized approach combining the latest in weight loss medicine
                with lifestyle coaching tailored to Indian culture and preferences. Our team of board-certified
                physicians has helped over 10,000 patients achieve sustainable weight loss with medical-grade
                treatments.
              </p>

              <button className="bg-white text-[#A67C52] px-8 lg:px-10 py-4 lg:py-5 rounded-full text-base lg:text-lg font-bold hover:transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 mb-8 lg:mb-12">
                Book Free Consultation
              </button>

              <div className="bg-white/10 rounded-2xl p-4 sm:p-5 lg:p-6 text-left text-white/70 text-xs sm:text-sm leading-relaxed">
                <strong className="text-white">Important Medical Information:</strong> All weight loss medications are
                prescribed and monitored by licensed physicians. Treatment plans are individualized based on medical
                history, current health status, and weight loss goals. This service is available to adults with BMI ≥27
                with weight-related health conditions or BMI ≥30. Results vary by individual. Common side effects may
                include nausea, decreased appetite, and digestive changes. Not suitable for pregnant or breastfeeding
                women. Our practice complies with all Indian medical regulations including MCI guidelines and CDSCO drug
                safety protocols. Consult with our medical team to determine if treatment is appropriate for you.
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
