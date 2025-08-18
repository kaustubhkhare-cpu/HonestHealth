"use client"

import { useState, useEffect } from "react"

export default function ErectileDysfunctionPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index)
  }

  const floatingCards = [
    // Column 1 cards
    [
      { icon: "👨‍⚕️", title: "Expert Doctors", text: "Licensed healthcare professionals", type: "doctor" },
      { icon: "💊", title: "FDA Approved", text: "Clinically proven medications", type: "product" },
      { icon: "😊", title: "Satisfied Customer", text: '"Discreet and professional service"', type: "testimonial" },
      { icon: "🏥", title: "Dr. Morepen", text: "Trusted healthcare brand", type: "branding" },
      { icon: "🚚", title: "Fast Delivery", text: "Discreet packaging guaranteed", type: "product" },
      { icon: "⭐", title: "5-Star Rating", text: '"Quick and effective treatment"', type: "testimonial" },
    ],
    // Column 2 cards
    [
      { icon: "🔒", title: "100% Confidential", text: "Your privacy is our priority", type: "product" },
      { icon: "⚡", title: "Quick Results", text: "Effective within 30-60 minutes", type: "doctor" },
      { icon: "👍", title: "Happy Customer", text: '"Life-changing experience!"', type: "testimonial" },
      { icon: "💝", title: "Discreet Box", text: "Plain packaging, no labels", type: "product" },
      { icon: "🎯", title: "Targeted Treatment", text: "Personalized for your needs", type: "branding" },
      { icon: "💪", title: "Confidence Restored", text: '"Back to feeling like myself"', type: "testimonial" },
    ],
  ]

  const getCardStyle = (type: string) => {
    switch (type) {
      case "doctor":
        return "bg-gradient-to-br from-[#c4956c] to-[#d4a574] text-white"
      case "testimonial":
        return "bg-gradient-to-br from-[#f8f6f3] to-white"
      case "product":
        return "bg-gradient-to-br from-white to-[#f8f6f3]"
      case "branding":
        return "bg-gradient-to-br from-[#2d2d2d] to-[#1a1a1a] text-white"
      default:
        return "bg-white"
    }
  }

  return (
    <div className="min-h-screen overflow-hidden">
      <div className="pt-20 bg-gradient-to-br from-[#f8f6f3] to-[#f1ede6]">
        <section className="min-h-screen flex items-center py-20">
          <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-20 items-center">
            {/* Hero Content */}
            <div
              className={`max-w-xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-5 text-[#1a1a1a] tracking-tight">
                Effective ED treatment online,
                <span className="block text-2xl lg:text-4xl font-normal text-[#c4956c] mt-5 leading-relaxed">
                  delivered discreetly to your door
                </span>
              </h1>

              <ul className="space-y-6 mb-12">
                {[
                  { icon: "🔬", text: "Backed by science and clinical research" },
                  { icon: "🏠", text: "No awkward clinic visits required" },
                  { icon: "📦", text: "Treatment delivered to you discreetly" },
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-lg text-[#2d2d2d]">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#d4a574] to-[#c4956c] rounded-full flex items-center justify-center mr-5 text-xl text-white flex-shrink-0">
                      {feature.icon}
                    </div>
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/your-number"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#2d2d2d] to-[#1a1a1a] text-white px-9 py-5 rounded-full text-base font-semibold hover:transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <div className="w-5 h-5 bg-[#25d366] rounded-full flex items-center justify-center text-xs text-white">
                  💬
                </div>
                Start Confidential Consultation
              </a>
            </div>

            {/* Hero Visual */}
            <div className="relative h-[600px] lg:h-[600px] overflow-hidden">
              <div className="absolute inset-0">
                {floatingCards.map((column, columnIndex) => (
                  <div
                    key={columnIndex}
                    className={`absolute w-[45%] h-[200%] flex flex-col gap-5 ${
                      columnIndex === 0 ? "left-0" : "right-0"
                    }`}
                    style={{
                      animation: `moveUp 20s linear infinite`,
                      animationDelay: columnIndex === 0 ? "0s" : "-10s",
                    }}
                  >
                    {[...column, ...column].map((card, cardIndex) => (
                      <div
                        key={cardIndex}
                        className={`${getCardStyle(card.type)} rounded-2xl p-5 shadow-lg backdrop-blur-sm border border-white/20 min-h-[160px] flex flex-col justify-center items-center text-center`}
                      >
                        <div className="text-3xl mb-3">{card.icon}</div>
                        <div className="text-sm font-semibold mb-2 leading-tight">{card.title}</div>
                        <div className="text-xs opacity-80 leading-snug max-w-[140px]">{card.text}</div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="bg-[#f8f6f3] py-32 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 relative">
          {/* Large Background Text */}
          <div
            className="text-[clamp(4rem,12vw,12rem)] font-light text-[#c4956c] leading-[0.9] tracking-[-0.02em] opacity-80 lowercase relative z-10"
            style={{ letterSpacing: "-0.02em" }}
          >
            you are not alone
          </div>

          {/* Overlay Card */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-[10px] rounded-3xl p-10 md:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-[#c4956c]/20 z-20 max-w-4xl w-[90%]">
            <div className="text-[clamp(2rem,5vw,3rem)] font-bold text-[#c4956c] mb-4">6 out of 10 men</div>
            <div className="text-[clamp(1.2rem,3vw,1.8rem)] text-[#1a1a1a] font-normal leading-relaxed mb-5">
              in India experience erectile dysfunction challenges at some point in their lives
            </div>
            <div className="text-base text-[#666] italic">- Indian Medical Research Studies</div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-[#c4956c] uppercase tracking-wider mb-4">Our Solutions</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6">
              Effective treatments for your confidence
            </h2>
            <p className="text-lg text-[#666] max-w-3xl mx-auto leading-relaxed">
              Clinically proven solutions designed to help you regain control and confidence in your intimate life.
            </p>
          </div>

          {/* Main Prescription Products */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Exygra Tablets */}
              <div className="bg-gradient-to-br from-[#f8f6f3] to-white rounded-3xl p-8 shadow-lg border border-[#f1ede6] relative overflow-hidden hover:transform hover:-translate-y-3 transition-all duration-300 hover:shadow-2xl">
                <div className="absolute top-4 right-4 bg-[#c4956c] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Prescription Required
                </div>
                <div className="text-6xl mb-6 text-center">💊</div>
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Exygra Tablets</h3>
                <p className="text-[#666] mb-6 leading-relaxed">
                  Fast-acting oral medication for reliable performance when you need it most.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Works within 30-60 minutes",
                    "Clinically proven effectiveness",
                    "Long-lasting results up to 4-6 hours",
                    "Discreet packaging and delivery",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center text-[#2d2d2d]">
                      <div className="w-2 h-2 bg-[#c4956c] rounded-full mr-3 flex-shrink-0"></div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/your-number"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#2d2d2d] to-[#1a1a1a] text-white px-6 py-3 rounded-full font-semibold hover:transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
                >
                  <div className="w-4 h-4 bg-[#25d366] rounded-full flex items-center justify-center text-xs">💬</div>
                  Get Started
                </a>
              </div>

              {/* Exygra Spray */}
              <div className="bg-gradient-to-br from-[#f8f6f3] to-white rounded-3xl p-8 shadow-lg border border-[#f1ede6] relative overflow-hidden hover:transform hover:-translate-y-3 transition-all duration-300 hover:shadow-2xl">
                <div className="absolute top-4 right-4 bg-[#c4956c] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Prescription Required
                </div>
                <div className="flex justify-center mb-6">
                  <svg width="60" height="60" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <rect x="35" y="25" width="20" height="50" fill="#2d2d2d" rx="3" />
                    <rect x="37" y="20" width="16" height="8" fill="#2d2d2d" rx="2" />
                    <line x1="55" y1="22" x2="75" y2="18" stroke="#666" strokeWidth="1.5" strokeDasharray="3,2" />
                    <line x1="55" y1="25" x2="78" y2="23" stroke="#666" strokeWidth="1.5" strokeDasharray="3,2" />
                    <line x1="55" y1="28" x2="75" y2="28" stroke="#666" strokeWidth="1.5" strokeDasharray="3,2" />
                    <line x1="55" y1="31" x2="72" y2="33" stroke="#666" strokeWidth="1.5" strokeDasharray="3,2" />
                    <line x1="55" y1="34" x2="70" y2="38" stroke="#666" strokeWidth="1.5" strokeDasharray="3,2" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Exygra Spray</h3>
                <p className="text-[#666] mb-6 leading-relaxed">
                  Topical spray solution for quick absorption and rapid onset of action.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Faster absorption than tablets",
                    "Easy to use application",
                    "Reduced side effects",
                    "Convenient and portable",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center text-[#2d2d2d]">
                      <div className="w-2 h-2 bg-[#c4956c] rounded-full mr-3 flex-shrink-0"></div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/your-number"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#2d2d2d] to-[#1a1a1a] text-white px-6 py-3 rounded-full font-semibold hover:transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
                >
                  <div className="w-4 h-4 bg-[#25d366] rounded-full flex items-center justify-center text-xs">💬</div>
                  Get Started
                </a>
              </div>
            </div>
          </div>

          {/* Supporting Products */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-[#1a1a1a] mb-4">Natural Support & Wellness</h3>
              <p className="text-[#666] max-w-2xl mx-auto">
                Complement your treatment with natural supplements for overall vitality
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Testo Boost */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#f1ede6] text-center hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="text-4xl mb-4">⚡</div>
                <h4 className="text-xl font-bold text-[#1a1a1a] mb-3">Testo Boost</h4>
                <p className="text-[#666] text-sm mb-6 leading-relaxed">
                  Natural testosterone support supplement to enhance energy, stamina, and overall male vitality.
                </p>
                <a
                  href="https://wa.me/your-number"
                  className="text-[#c4956c] font-semibold hover:text-[#a67c52] transition-colors"
                >
                  Learn More
                </a>
              </div>

              {/* Shilajit Capsules */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#f1ede6] text-center hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="text-4xl mb-4">🌿</div>
                <h4 className="text-xl font-bold text-[#1a1a1a] mb-3">Shilajit Capsules</h4>
                <p className="text-[#666] text-sm mb-6 leading-relaxed">
                  Pure Himalayan Shilajit in convenient capsule form for improved energy and sexual wellness.
                </p>
                <a
                  href="https://wa.me/your-number"
                  className="text-[#c4956c] font-semibold hover:text-[#a67c52] transition-colors"
                >
                  Learn More
                </a>
              </div>

              {/* Shilajit Resin */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#f1ede6] text-center hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="text-4xl mb-4">🏔️</div>
                <h4 className="text-xl font-bold text-[#1a1a1a] mb-3">Shilajit Resin</h4>
                <p className="text-[#666] text-sm mb-6 leading-relaxed">
                  Premium quality raw Shilajit resin for maximum potency and traditional wellness benefits.
                </p>
                <a
                  href="https://wa.me/your-number"
                  className="text-[#c4956c] font-semibold hover:text-[#a67c52] transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Professional Disclaimer */}
          <div className="bg-gradient-to-br from-[#f8f6f3] to-[#f1ede6] rounded-3xl p-8 text-center max-w-4xl mx-auto">
            <div className="text-5xl mb-4">👨‍⚕️</div>
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Professional Medical Consultation</h3>
            <p className="text-[#666] leading-relaxed">
              All treatments are prescribed following a comprehensive health assessment by our licensed medical
              professionals. Your personalized treatment plan will be determined based on your consultation form and
              expert medical review. Results may vary, and our doctors will recommend the most suitable option for your
              individual needs.
            </p>
          </div>
        </div>
      </section>

      {/* How ED Treatments Work Section */}
      <section className="py-20 bg-[#f8fcff]">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-[#64748b] uppercase tracking-[3px] mb-5">THE SCIENCE</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1e293b] mb-6 leading-tight">
              How do ED treatments work?
            </h2>
            <p className="text-xl text-[#64748b] max-w-2xl mx-auto leading-relaxed">
              Here's the breakdown of what happens in your body to restore natural function.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Oral Medication Card */}
            <div className="bg-white rounded-2xl p-10 shadow-lg border border-[#e2e8f0] hover:transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl">
              <div className="w-14 h-14 bg-gradient-to-br from-[#3b82f6] to-[#1d4ed8] rounded-2xl flex items-center justify-center text-2xl text-white mb-6">
                💊
              </div>
              <h3 className="text-xl font-bold text-[#1e293b] mb-4 leading-tight">
                Oral medication enhances natural response
              </h3>
              <p className="text-[#475569] leading-relaxed">
                When you take our ED medication, the active ingredients work by inhibiting specific enzymes in your
                body. This allows blood vessels to remain relaxed longer, supporting the natural physiological process
                that occurs during arousal.
              </p>
            </div>

            {/* Blood Flow Card */}
            <div className="bg-white rounded-2xl p-10 shadow-lg border border-[#e2e8f0] hover:transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl">
              <div className="w-14 h-14 bg-gradient-to-br from-[#06b6d4] to-[#0891b2] rounded-2xl flex items-center justify-center text-2xl text-white mb-6">
                🩸
              </div>
              <h3 className="text-xl font-bold text-[#1e293b] mb-4 leading-tight">
                Improved blood flow supports firmness
              </h3>
              <p className="text-[#475569] leading-relaxed">
                The medication helps maintain increased blood circulation to penile tissue by preventing the breakdown
                of chemicals that keep blood vessels open. This sustained blood flow is essential for achieving and
                maintaining quality erections.
              </p>
            </div>

            {/* Performance Card */}
            <div className="bg-white rounded-2xl p-10 shadow-lg border border-[#e2e8f0] hover:transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl">
              <div className="w-14 h-14 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-2xl flex items-center justify-center text-2xl text-white mb-6">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-[#1e293b] mb-4 leading-tight">
                Reliable results restore confidence
              </h3>
              <p className="text-[#475569] leading-relaxed">
                Our treatments work with your body's natural mechanisms to provide consistent, dependable results. Most
                patients experience improved performance within 30-60 minutes, lasting several hours for enhanced
                intimacy and renewed confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Journey Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="mb-16">
            <div className="inline-block bg-[#00d4aa] text-white px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-5">
              HOW IT WORKS
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">Your treatment journey</h2>
          </div>

          <div className="relative mt-12">
            {/* Timeline Line */}
            <div className="absolute top-[120px] left-0 right-0 h-[3px] bg-white/30 z-10 hidden lg:block">
              <div className="h-full bg-[#00d4aa] w-full rounded-sm"></div>
            </div>

            {/* Timeline Steps */}
            <div className="grid lg:grid-cols-4 gap-10 lg:gap-8 relative z-20">
              {[
                {
                  tag: "START HERE",
                  icon: "📱",
                  title: "Quick online assessment",
                  description:
                    "Complete a comprehensive medical questionnaire from the comfort of your home. Our licensed physicians review your health history and symptoms.",
                },
                {
                  tag: "WEEK ONE",
                  icon: "📦",
                  title: "Discreet delivery",
                  description:
                    "Your personalized treatment arrives in plain, unmarked packaging. All prescriptions include clear instructions and dosage guidelines for optimal results.",
                },
                {
                  tag: "MONTH ONE",
                  icon: "📈",
                  title: "Track your progress",
                  description:
                    "Monitor your treatment effectiveness through our patient portal. Adjust dosages as needed with guidance from your dedicated medical team.",
                },
                {
                  tag: "ONGOING",
                  icon: "👨‍⚕️",
                  title: "Continuous care",
                  description:
                    "Access ongoing support through secure messaging and telehealth consultations. Automatic refills ensure you never run out of medication.",
                },
              ].map((step, index) => (
                <div key={index} className="text-left lg:text-left relative">
                  {/* Timeline Dot */}
                  <div className="absolute top-[80px] left-[35px] w-3 h-3 bg-[#00d4aa] rounded-full border-[3px] border-white z-30 hidden lg:block"></div>

                  <div className="inline-block bg-[#00d4aa] text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase mb-5">
                    {step.tag}
                  </div>

                  <div className="w-20 h-20 bg-white/15 rounded-2xl flex items-center justify-center text-3xl mb-6 backdrop-blur-sm border border-white/20">
                    {step.icon}
                  </div>

                  <h3 className="text-xl lg:text-2xl font-bold mb-4 leading-tight">{step.title}</h3>

                  <p className="text-base opacity-90 leading-relaxed max-w-[300px]">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16 pt-10 border-t border-white/20">
            <div className="inline-flex items-center gap-3 text-base opacity-90">
              <span className="text-lg">ⓘ</span>
              <span>Cancel or modify your treatment plan at any time</span>
            </div>
          </div>
        </div>
      </section>

      {/* ED Treatment FAQ Section */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-5">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#3b82f6] text-white px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-5">
              FREQUENTLY ASKED
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1e293b] mb-6 leading-tight">ED Treatment Questions</h2>
            <p className="text-xl text-[#64748b] max-w-2xl mx-auto leading-relaxed">
              Get answers to the most common questions about erectile dysfunction treatment, safety, and effectiveness.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "What causes erectile dysfunction and who does it affect?",
                answer:
                  "Erectile dysfunction affects millions of men worldwide and can be caused by physical factors like diabetes, heart disease, or hormonal imbalances, as well as psychological factors including stress and anxiety. It's a common condition that becomes more prevalent with age, but can affect men of all ages.",
              },
              {
                question: "How effective are oral ED medications?",
                answer:
                  "Oral ED medications like sildenafil, tadalafil, and vardenafil are highly effective for most men, with success rates of 70-85%. These medications work by increasing blood flow to the penis during sexual arousal. Results can vary based on individual health factors and the underlying cause of ED.",
              },
              {
                question: "Are there any side effects I should be aware of?",
                answer:
                  "Common side effects are generally mild and may include headaches, flushing, nasal congestion, or upset stomach. Serious side effects are rare but can include prolonged erections or sudden vision/hearing loss. Always consult with a healthcare provider about your medical history and current medications to ensure safe treatment.",
              },
              {
                question: "How long do ED medications take to work?",
                answer:
                  "Most oral ED medications begin working within 30-60 minutes after taking them. Sildenafil and vardenafil typically last 4-6 hours, while tadalafil can remain effective for up to 36 hours. Taking the medication on an empty stomach may help it work faster.",
              },
              {
                question: "Can I take ED medication with other prescriptions?",
                answer:
                  "ED medications can interact with certain drugs, particularly nitrates used for heart conditions, which can cause dangerous drops in blood pressure. Blood pressure medications, alpha-blockers, and some antifungals may also interact. Always provide a complete list of your medications during consultation to ensure safe compatibility.",
              },
              {
                question: "Is online ED treatment as effective as in-person visits?",
                answer:
                  "Online ED treatment can be equally effective when conducted through licensed telemedicine platforms with qualified physicians. The key is thorough medical screening, proper dosing, and ongoing monitoring. Many patients prefer the convenience and privacy of online consultations while receiving the same quality of care.",
              },
              {
                question: "Will ED medication work if I have diabetes or heart disease?",
                answer:
                  "ED medications can often be used safely by men with diabetes or stable heart disease, though effectiveness may vary. These conditions can affect blood flow and nerve function, potentially impacting treatment results. Close medical supervision is important to adjust dosing and monitor for any complications with underlying health conditions.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-[#f8fafc] transition-colors duration-300"
                >
                  <span className="text-lg font-semibold text-[#1e293b] pr-4">{faq.question}</span>
                  <div
                    className={`w-6 h-6 rounded-full bg-[#3b82f6] text-white flex items-center justify-center text-sm font-bold transition-all duration-300 flex-shrink-0 ${activeFaq === index ? "rotate-45 bg-[#10b981]" : ""}`}
                  >
                    +
                  </div>
                </button>
                {activeFaq === index && (
                  <div className="px-6 pb-6 text-[#475569] leading-relaxed animate-fadeIn">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#f8f6f3] to-white overflow-hidden">
        <div className="relative">
          <div
            className="flex gap-8 items-center"
            style={{
              animation: "trustSlide 25s linear infinite",
              width: "calc(400px * 10)", // 10 items * 400px each
            }}
          >
            {/* Trust Items */}
            {[
              {
                icon: "🛡️",
                title: "Trusted",
                description: "Regulated by leading healthcare authorities and quality commissions.",
              },
              {
                icon: "⚕️",
                title: "Licensed Professionals",
                description: "Medications prescribed by qualified licensed clinicians.",
              },
              {
                icon: "📦",
                title: "Free, discreet delivery",
                description: "No names, no logos, no delivery fee. Complete privacy guaranteed.",
              },
              {
                icon: "🩺",
                title: "Ongoing clinical support",
                description: "Access expert clinicians and medical advice whenever you need it.",
              },
              {
                icon: "🔒",
                title: "100% Confidential",
                description: "Your privacy and personal information are completely secure with us.",
              },
              {
                icon: "⚡",
                title: "Fast & Effective",
                description: "Quick consultation process with proven, effective treatments.",
              },
              // Duplicate items for seamless loop
              {
                icon: "🛡️",
                title: "Trusted",
                description: "Regulated by leading healthcare authorities and quality commissions.",
              },
              {
                icon: "⚕️",
                title: "Licensed Professionals",
                description: "Medications prescribed by qualified licensed clinicians.",
              },
              {
                icon: "📦",
                title: "Free, discreet delivery",
                description: "No names, no logos, no delivery fee. Complete privacy guaranteed.",
              },
              {
                icon: "🩺",
                title: "Ongoing clinical support",
                description: "Access expert clinicians and medical advice whenever you need it.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[400px] bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20 text-center hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{item.title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes moveUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        
        @keyframes trustSlide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-400px * 6));
          }
        }

        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: translateY(-10px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease;
        }
      `}</style>
    </div>
  )
}
