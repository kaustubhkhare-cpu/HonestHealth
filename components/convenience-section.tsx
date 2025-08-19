"use client"

import { useState, useEffect } from "react"

export default function ConvenienceSection() {
  const [chatMessages, setChatMessages] = useState([
    { type: "doctor", text: "Hello! How can I help with your health concerns today?" },
    { type: "patient", text: "I need guidance on my medication." },
    { type: "doctor", text: "I'll help you with proper medical advice and guidance." },
  ])

  const additionalMessages = [
    { type: "doctor", text: "What symptoms are you experiencing?" },
    { type: "patient", text: "I need guidance on my health plan." },
    { type: "doctor", text: "I will provide you with proper medical advice and support." },
    { type: "patient", text: "Thank you for your help!" },
  ]

  useEffect(() => {
    let messageIndex = 0
    const interval = setInterval(() => {
      if (messageIndex < additionalMessages.length) {
        setChatMessages((prev) => {
          const currentMessages = Array.isArray(prev) ? prev : []
          const newMessage = additionalMessages[messageIndex]
          if (newMessage && newMessage.type && newMessage.text) {
            const newMessages = [...currentMessages, newMessage]
            return newMessages.length > 6 ? newMessages.slice(-6) : newMessages
          }
          return currentMessages
        })
        messageIndex++
      } else {
        setChatMessages([
          { type: "doctor", text: "Hello! How can I help with your health concerns today?" },
          { type: "patient", text: "I need guidance on my medication." },
          { type: "doctor", text: "I'll help you with proper medical advice and guidance." },
        ])
        messageIndex = 0
      }
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="py-16 px-5" style={{ background: "#f8f9ff" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-left mb-12">
          <h1 className="text-5xl font-bold text-gray-800 leading-tight mb-2">100% online,</h1>
          <h2 className="text-5xl font-bold text-gray-800 leading-tight">100% convenient</h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Chat Feature */}
          <div className="bg-gray-100 rounded-2xl p-8 min-h-[450px] flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">
              Chat with a healthcare provider 24/7
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Connect with licensed medical professionals anytime. Get expert health guidance through secure chat
              consultations with qualified doctors.
            </p>

            <div className="flex-1 flex items-center justify-center">
              <div className="w-full max-w-xs bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Chat Header */}
                <div className="bg-gradient-to-r from-amber-600 to-amber-700 p-3 text-white flex items-center gap-3">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-sm">
                    👨‍⚕️
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">Dr. Archit</h4>
                    <p className="text-xs opacity-80">Licensed Medical Practitioner</p>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="p-4 h-48 overflow-y-auto">
                  {Array.isArray(chatMessages) &&
                    chatMessages.map((message, index) => {
                      if (!message || !message.type || !message.text) return null

                      return (
                        <div key={index} className={`mb-3 ${message.type === "doctor" ? "text-left" : "text-right"}`}>
                          <div
                            className={`inline-block px-3 py-2 rounded-2xl max-w-44 text-xs leading-tight ${
                              message.type === "doctor" ? "bg-gray-100 text-gray-800" : "bg-amber-600 text-white"
                            }`}
                          >
                            {message.text}
                          </div>
                        </div>
                      )
                    })}
                </div>

                {/* Chat Input */}
                <div className="p-3 border-t border-gray-100 flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-1.5 border border-gray-200 rounded-2xl text-xs"
                  />
                  <button className="w-6 h-6 bg-amber-600 text-white rounded-full flex items-center justify-center text-xs">
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Education Feature */}
          <div className="bg-gray-100 rounded-2xl p-8 min-h-[450px] flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">Health education and resources</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Access comprehensive health guides, educational articles, and expert tips. Stay informed about your health
              conditions and treatment options.
            </p>

            <div className="flex-1 flex items-center justify-center">
              <div className="w-full max-w-xs bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Education Header */}
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 text-white text-center">
                  <h4 className="text-base font-bold mb-1">📚 Health Resources</h4>
                  <p className="text-xs opacity-90">Educational content & guides</p>
                </div>

                {/* Resources Content */}
                <div className="p-4 h-48 overflow-y-auto">
                  {[
                    {
                      icon: "💊",
                      title: "Medication Guide",
                      desc: "Safe usage & side effects",
                      badge: "New",
                      color: "bg-green-500",
                    },
                    {
                      icon: "🍎",
                      title: "Nutrition Tips",
                      desc: "Healthy eating guidelines",
                      badge: "Popular",
                      color: "bg-orange-500",
                    },
                    {
                      icon: "🏃‍♂️",
                      title: "Exercise & Wellness",
                      desc: "Fitness for better health",
                      badge: "Updated",
                      color: "bg-blue-500",
                    },
                    {
                      icon: "🧠",
                      title: "Mental Health",
                      desc: "Stress management tips",
                      badge: "Guide",
                      color: "bg-purple-500",
                    },
                  ].map((resource, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-2.5 border border-gray-100 rounded-lg mb-2 hover:bg-blue-50 hover:border-amber-600 transition-all cursor-pointer group"
                    >
                      <div className="w-9 h-9 bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg flex items-center justify-center text-white text-base flex-shrink-0">
                        {resource.icon}
                      </div>
                      <div className="flex-1">
                        <h5 className="text-xs font-semibold text-gray-800">{resource.title}</h5>
                        <p className="text-xs text-gray-600">{resource.desc}</p>
                      </div>
                      <div className={`${resource.color} text-white text-xs px-1.5 py-0.5 rounded-lg font-semibold`}>
                        {resource.badge}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-3 border-t border-gray-100">
                  <button className="w-full py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold text-xs hover:-translate-y-0.5 hover:shadow-lg transition-all">
                    Browse All Resources
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Products Feature */}
          <div className="bg-gray-100 rounded-2xl p-8 min-h-[450px] flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">
              Licensed healthcare products available
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Access quality healthcare products through proper medical consultation. All products sourced from
              certified pharmaceutical partners.
            </p>

            <div className="flex-1 flex flex-col items-center justify-center gap-4">
              <div className="flex gap-4">
                {[
                  { icon: "💊", delay: "0s" },
                  { icon: "🧪", delay: "0.5s" },
                  { icon: "⚕️", delay: "1s" },
                ].map((product, index) => (
                  <div
                    key={index}
                    className="w-16 h-20 bg-gradient-to-br from-amber-700 to-amber-800 rounded-lg shadow-lg flex flex-col items-center justify-between p-2 text-white animate-bounce"
                    style={{ animationDelay: product.delay, animationDuration: "3s" }}
                  >
                    <div className="text-2xl mt-2">{product.icon}</div>
                    <div className="text-xs font-semibold text-center leading-tight">HonestHealth</div>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold text-amber-600">HonestHealth</div>
                <div className="text-xs text-gray-600">Licensed Healthcare Products</div>
              </div>
            </div>
          </div>

          {/* Delivery Feature */}
          <div className="bg-gray-100 rounded-2xl p-8 min-h-[450px] flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">Fast, discreet delivery nationwide</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Secure and confidential delivery across India. Professional packaging ensures complete privacy and
              maintains product integrity.
            </p>

            <div className="flex-1 flex flex-col items-center justify-center gap-4">
              <div className="w-32 h-20 bg-gradient-to-br from-amber-700 to-amber-800 rounded-xl shadow-lg flex flex-col items-center justify-center text-white animate-pulse">
                <div className="text-3xl mb-1">📦</div>
                <div className="text-xs font-semibold text-center leading-none px-1">
                  <div>HonestHealth</div>
                  <div className="mt-0.5">DISCREET PACKAGING</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-2xl text-amber-600">
                <span className="animate-pulse">🚚</span>
                <span>→</span>
                <span>🏠</span>
              </div>

              <div className="text-center">
                <div className="text-sm font-semibold text-amber-600">Discreet Delivery</div>
                <div className="text-xs text-gray-600">Secure & Confidential</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
