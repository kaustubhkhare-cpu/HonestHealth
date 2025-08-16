"use client"

import type React from "react"
import {
  Lock,
  Shield,
  CheckCircle,
  Truck,
  Phone,
  ChevronUp,
  ChevronDown,
  MessageCircle,
  User,
  Mail,
  Download,
  Calculator,
  Book,
} from "lucide-react"

interface FAQPageProps {
  navigateTo: (page: string) => void
  toggleFaq: (index: string) => void
  openFaq: string | null
}

// FAQ Page Component - Replace the placeholder in Part 1
export const FAQPage: React.FC<FAQPageProps> = ({ navigateTo, toggleFaq, openFaq }) => {
  const faqs = [
    {
      category: "Privacy & Confidentiality",
      questions: [
        {
          q: "How do you protect my personal information?",
          a: "We use bank-level encryption (256-bit SSL) to protect all your data. Your information is never shared with third parties without your consent, and our platform is GDPR-compliant for maximum privacy protection. All medical consultations are protected by doctor-patient confidentiality laws.",
        },
        {
          q: "Is my consultation really confidential?",
          a: "Absolutely. All consultations are protected by doctor-patient confidentiality. Your identity and medical information are kept strictly private and secure. Our doctors are bound by the same confidentiality standards as traditional healthcare providers.",
        },
        {
          q: "How discreet is the delivery?",
          a: "All medications are delivered in plain, unmarked packaging with no company logos or medical information visible on the outside. The delivery person will not know what's inside. We also offer flexible delivery timing to ensure privacy.",
        },
        {
          q: "Will my family/friends know about my consultation?",
          a: "No. We never contact family members or friends unless you specifically request it. All communications are directly with you through your chosen method (WhatsApp, email, or phone). Your medical information remains completely private.",
        },
      ],
    },
    {
      category: "Medical Safety",
      questions: [
        {
          q: "Are your doctors qualified?",
          a: "Yes, all our doctors are licensed by the Medical Council of India and have extensive experience in their specialties. We verify credentials and maintain high standards for all medical professionals on our platform. You can view doctor profiles and qualifications during consultation.",
        },
        {
          q: "How do you ensure prescription safety?",
          a: "Our doctors conduct thorough medical assessments before prescribing any medication. They consider your medical history, current conditions, and potential drug interactions. Prescriptions are only issued when clinically appropriate, following standard medical protocols.",
        },
        {
          q: "What if I experience side effects?",
          a: "If you experience any side effects, contact us immediately through our 24/7 support. Our doctors are available for emergency consultations and will adjust your treatment plan as needed. We provide detailed information about potential side effects before treatment.",
        },
        {
          q: "Are the medicines genuine?",
          a: "Yes, we only source medicines from licensed manufacturers and authorized distributors. All medications are genuine, properly stored, and within expiry dates. We maintain strict quality control standards throughout our supply chain.",
        },
      ],
    },
    {
      category: "Treatment Effectiveness",
      questions: [
        {
          q: "How effective are the treatments?",
          a: "Our treatments have high success rates: 92% of ED patients see improvement within 30 days, and 87% of weight management patients achieve their target goals. Results vary by individual and condition, but we use only clinically proven treatments.",
        },
        {
          q: "How long does it take to see results?",
          a: "This varies by condition: ED treatments typically show results within 1-2 weeks, weight management shows progress within 4-6 weeks, and diabetes management improvements can be seen within 2-4 weeks. Your doctor will set realistic expectations during consultation.",
        },
        {
          q: "What if the treatment doesn't work for me?",
          a: "If you don't see results, our doctors will adjust your treatment plan. We offer alternative medications and approaches. If you're still not satisfied, we provide a money-back guarantee within 30 days of starting treatment.",
        },
        {
          q: "Do you provide ongoing support?",
          a: "Yes, ongoing support is included in all treatment plans. You have access to follow-up consultations, dosage adjustments, and 24/7 medical support. Our goal is long-term health improvement, not just short-term treatment.",
        },
      ],
    },
    {
      category: "Ordering & Delivery",
      questions: [
        {
          q: "How long does delivery take?",
          a: "We offer free delivery within 24-48 hours in major cities, and 3-5 days in other locations across India. For urgent medications, we provide same-day delivery in metro areas for an additional charge.",
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept UPI payments (PhonePe, GPay, Paytm), credit/debit cards (Visa, Mastercard, RuPay), net banking, and EMI options. All payments are processed through secure, encrypted channels.",
        },
        {
          q: "Can I track my order?",
          a: "Yes, you'll receive tracking information via SMS and email once your order is dispatched. You can track your order status in real-time through our app or website. We also provide delivery notifications.",
        },
        {
          q: "What if I'm not satisfied with my order?",
          a: "We offer a 30-day money-back guarantee. If you're not satisfied with your treatment or service, contact us for a full refund. We also provide free replacements for damaged or incorrect orders.",
        },
      ],
    },
    {
      category: "Technology & Platform",
      questions: [
        {
          q: "How do online consultations work?",
          a: "After completing a health assessment, you'll be connected with a qualified doctor via WhatsApp, phone, or video call. The doctor will review your information, ask additional questions if needed, and provide a treatment plan if appropriate.",
        },
        {
          q: "Is the platform secure?",
          a: "Yes, our platform uses end-to-end encryption and follows international security standards (ISO 27001). All data is stored securely and protected against unauthorized access. We regularly undergo security audits.",
        },
        {
          q: "Do I need to download an app?",
          a: "No, our platform works through any web browser. However, we do offer a mobile app for added convenience. Most consultations can be conducted through WhatsApp, which you already have on your phone.",
        },
        {
          q: "What if I have technical issues?",
          a: "Our technical support team is available 24/7 to help with any issues. You can contact us via WhatsApp, phone, or email. We also provide step-by-step guides and video tutorials for using our platform.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">Find answers to common questions about our services</p>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for answers..."
              className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {faqs.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                {categoryIndex === 0 && <Lock className="w-5 h-5 text-blue-600" />}
                {categoryIndex === 1 && <Shield className="w-5 h-5 text-blue-600" />}
                {categoryIndex === 2 && <CheckCircle className="w-5 h-5 text-blue-600" />}
                {categoryIndex === 3 && <Truck className="w-5 h-5 text-blue-600" />}
                {categoryIndex === 4 && <Phone className="w-5 h-5 text-blue-600" />}
              </div>
              {category.category}
            </h2>
            <div className="space-y-4">
              {category.questions.map((faq, index) => {
                const faqIndex = `${categoryIndex}-${index}`
                return (
                  <div key={index} className="border border-gray-200 rounded-lg bg-white shadow-sm">
                    <button
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                      onClick={() => toggleFaq(faqIndex)}
                    >
                      <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                      {openFaq === faqIndex ? (
                        <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === faqIndex && (
                      <div className="px-6 pb-4 border-t border-gray-100">
                        <p className="text-gray-600 leading-relaxed pt-4">{faq.a}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}

        {/* Emergency Information */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-8 mb-12">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-red-900 mb-2">Medical Emergencies</h3>
              <p className="text-red-700 mb-4">
                For medical emergencies, please call your local emergency services immediately (108 or 102). Our
                platform is designed for non-emergency consultations and ongoing care management.
              </p>
              <p className="text-red-600 text-sm">
                <strong>Emergency Consultation:</strong> For urgent (non-life-threatening) medical concerns, call us at
                +91-98765-43210 or WhatsApp for immediate doctor consultation.
              </p>
            </div>
          </div>
        </div>

        {/* Still Have Questions */}
        <div className="text-center bg-blue-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-6">Our medical team is here to help with any concerns</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigateTo("contact")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Support</span>
            </button>
            <button
              onClick={() => navigateTo("consultation")}
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <User className="w-5 h-5" />
              <span>Talk to a Doctor</span>
            </button>
            <button
              onClick={() => navigateTo("contact")}
              className="border border-gray-300 text-gray-700 hover:border-gray-400 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Email Support</span>
            </button>
          </div>
          <div className="mt-6 text-sm text-gray-500">
            <p>Response times: WhatsApp (5 minutes) • Doctor consultation (15 minutes) • Email (2 hours)</p>
          </div>
        </div>

        {/* Helpful Resources */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Helpful Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Download className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Health Guides</h3>
              <p className="text-gray-600 text-sm mb-4">
                Download comprehensive guides for ED, weight management, and diabetes care.
              </p>
              <button className="text-green-600 hover:text-green-700 font-medium text-sm">Download Guides →</button>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Health Calculators</h3>
              <p className="text-gray-600 text-sm mb-4">
                BMI calculator, diabetes risk assessment, and other health tools.
              </p>
              <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">Try Calculators →</button>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Book className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Educational Blog</h3>
              <p className="text-gray-600 text-sm mb-4">
                Read doctor-written articles about health conditions and treatments.
              </p>
              <button
                onClick={() => navigateTo("blog")}
                className="text-purple-600 hover:text-purple-700 font-medium text-sm"
              >
                Read Articles →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
