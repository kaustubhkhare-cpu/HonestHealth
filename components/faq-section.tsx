"use client"

import { useState } from "react"

const faqData = [
  {
    question: "What is HonestHealth?",
    answer: (
      <div>
        <p>
          HonestHealth is a digital healthcare platform connecting you with licensed medical professionals in India. We
          provide secure online consultations, health guidance, and access to quality healthcare products through proper
          medical supervision.
        </p>
        <p>
          Our platform focuses on convenience, privacy, and professional healthcare delivery, making it easier for you
          to access medical expertise from the comfort of your home.
        </p>
      </div>
    ),
  },
  {
    question: "How does HonestHealth work?",
    answer: (
      <div>
        <p>Getting healthcare through HonestHealth is simple:</p>
        <ul className="mt-2 ml-5 space-y-1">
          <li>
            <strong>Consultation:</strong> Connect with licensed doctors through our secure platform
          </li>
          <li>
            <strong>Assessment:</strong> Receive professional medical evaluation and guidance
          </li>
          <li>
            <strong>Treatment Plan:</strong> Get personalized health recommendations
          </li>
          <li>
            <strong>Follow-up:</strong> Ongoing support and monitoring of your health progress
          </li>
          <li>
            <strong>Delivery:</strong> Discreet delivery of any recommended healthcare products
          </li>
        </ul>
        <p className="mt-3">
          All services are provided by qualified healthcare professionals following Indian medical regulations.
        </p>
      </div>
    ),
  },
  {
    question: "Who are the healthcare providers at HonestHealth?",
    answer: (
      <div>
        <p>Our healthcare providers are:</p>
        <ul className="mt-2 ml-5 space-y-1">
          <li>Licensed medical doctors registered with Indian Medical Association (IMA)</li>
          <li>Qualified specialists with relevant medical degrees and certifications</li>
          <li>Healthcare professionals following Indian medical council guidelines</li>
          <li>Experienced practitioners in their respective fields</li>
        </ul>
        <p className="mt-3">
          All doctors undergo verification processes to ensure they meet Indian healthcare standards and regulations.
        </p>
      </div>
    ),
  },
  {
    question: "Is health insurance accepted for consultations?",
    answer: (
      <div>
        <p>
          We're working on partnerships with major Indian health insurance providers to make healthcare more accessible.
          Currently, we offer:
        </p>
        <ul className="mt-2 ml-5 space-y-1">
          <li>Transparent pricing for all consultation services</li>
          <li>Affordable consultation fees for quality healthcare</li>
          <li>Flexible payment options for your convenience</li>
          <li>Detailed receipts for potential insurance reimbursement</li>
        </ul>
        <p className="mt-3">
          Check with your insurance provider about coverage for telemedicine consultations, as policies are evolving to
          include digital healthcare services.
        </p>
      </div>
    ),
  },
  {
    question: "In which Indian states is HonestHealth available?",
    answer: (
      <div>
        <p>
          HonestHealth provides healthcare consultations across all Indian states and union territories. Our services
          include:
        </p>
        <ul className="mt-2 ml-5 space-y-1">
          <li>Online consultations available nationwide</li>
          <li>Healthcare product delivery in major cities and towns</li>
          <li>Regional language support for better communication</li>
          <li>Local healthcare provider network expansion</li>
        </ul>
        <p className="mt-3">
          We're continuously expanding our delivery network to serve remote areas and ensure healthcare accessibility
          for all Indians.
        </p>
      </div>
    ),
  },
  {
    question: "Are healthcare products sourced from licensed Indian suppliers?",
    answer: (
      <div>
        <p>Yes, all healthcare products are sourced through proper channels:</p>
        <ul className="mt-2 ml-5 space-y-1">
          <li>Licensed pharmaceutical distributors in India</li>
          <li>FDA-approved and CDSCO-regulated products</li>
          <li>Quality-assured medications from certified manufacturers</li>
          <li>Proper cold chain maintenance for temperature-sensitive products</li>
          <li>Batch tracking and expiry date verification</li>
        </ul>
        <p className="mt-3">
          We maintain strict quality standards and work only with authorized suppliers following Indian pharmaceutical
          regulations.
        </p>
      </div>
    ),
  },
  {
    question: "Are consultations regulated by Indian medical authorities?",
    answer: (
      <div>
        <p>Yes, HonestHealth operates in full compliance with Indian healthcare regulations:</p>
        <ul className="mt-2 ml-5 space-y-1">
          <li>Following Telemedicine Practice Guidelines issued by the Medical Council of India</li>
          <li>Compliance with Indian Medical Council (Professional Conduct, Etiquette and Ethics) Regulations</li>
          <li>Adherence to Digital Information Security in Healthcare Act guidelines</li>
          <li>Regular audits and quality assurance measures</li>
          <li>Data protection following Indian privacy laws</li>
        </ul>
        <p className="mt-3">
          Our platform ensures all consultations meet the standards set by Indian medical regulatory bodies for
          telemedicine practices.
        </p>
      </div>
    ),
  },
]

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(1) // Second FAQ is active by default

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index)
  }

  return (
    <section className="py-15 px-5" style={{ background: "#f8f9ff" }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Get answers to common questions about HonestHealth's healthcare services, consultations, and platform.
          </p>
        </div>

        {/* FAQ List */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`border-b border-gray-100 last:border-b-0 transition-all duration-300 ${
                activeIndex === index ? "bg-gradient-to-r from-blue-50 to-white" : "hover:bg-blue-50"
              }`}
            >
              {/* Question */}
              <button
                className="w-full flex justify-between items-center p-6 lg:p-8 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
                tabIndex={0}
              >
                <h3
                  className={`text-lg font-semibold pr-5 leading-snug transition-colors duration-300 ${
                    activeIndex === index ? "text-yellow-600" : "text-gray-800"
                  }`}
                >
                  {faq.question}
                </h3>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 flex-shrink-0 ${
                    activeIndex === index ? "bg-yellow-600 text-white transform rotate-45" : "bg-gray-100 text-gray-600"
                  }`}
                >
                  +
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-400 ease-in-out ${
                  activeIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
                style={{ background: "#f8f9ff" }}
              >
                <div className="p-6 lg:p-8 pt-0 text-gray-600 leading-relaxed">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
