"use client"

import { useState } from "react"
import { Menu, X, Shield, Phone, Mail, Award, Lock, Truck, MessageCircle } from "lucide-react"
import { HomePage } from "./home-page"
import { ConsultationPage } from "./consultation-page"
import { PricingPage } from "./pricing-page"
import { FAQPage } from "./faq-page"
import { ContactPage } from "./contact-page"

const HonestHealthWebsite = () => {
  const [currentPage, setCurrentPage] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<string | null>(null)

  // Navigation handler
  const navigateTo = (page: string) => {
    setCurrentPage(page)
    setIsMobileMenuOpen(false)
    window.scrollTo(0, 0)
  }

  // FAQ toggle handler
  const toggleFaq = (index: string) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const Header = () => (
    <header className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => navigateTo("home")}>
            <div className="flex items-center">
              <img src="/images/honest-health-logo.png" alt="Honest Health" className="h-16 w-auto" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => navigateTo("categories")}
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
            >
              Health Solutions
            </button>
            <button
              onClick={() => navigateTo("how-it-works")}
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => navigateTo("pricing")}
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => navigateTo("about")}
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
            >
              About
            </button>
            <button
              onClick={() => navigateTo("faq")}
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
            >
              FAQ
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => navigateTo("consultation")}
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Start Private Consultation</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-teal-600 p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 bg-white">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => navigateTo("categories")}
                className="text-left text-gray-700 hover:text-teal-600 font-medium py-2 transition-colors"
              >
                Health Solutions
              </button>
              <button
                onClick={() => navigateTo("how-it-works")}
                className="text-left text-gray-700 hover:text-teal-600 font-medium py-2 transition-colors"
              >
                How It Works
              </button>
              <button
                onClick={() => navigateTo("pricing")}
                className="text-left text-gray-700 hover:text-teal-600 font-medium py-2 transition-colors"
              >
                Pricing
              </button>
              <button
                onClick={() => navigateTo("about")}
                className="text-left text-gray-700 hover:text-teal-600 font-medium py-2 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => navigateTo("faq")}
                className="text-left text-gray-700 hover:text-teal-600 font-medium py-2 transition-colors"
              >
                FAQ
              </button>
              <button
                onClick={() => navigateTo("consultation")}
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 w-fit transition-colors mt-4"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Start Private Consultation</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )

  // Trust Badges Component
  const TrustBadges = () => (
    <div className="flex flex-wrap justify-center items-center gap-6 py-4">
      <div className="flex items-center space-x-2">
        <Shield className="w-5 h-5 text-teal-600" />
        <span className="text-sm text-gray-600">Doctor-Reviewed</span>
      </div>
      <div className="flex items-center space-x-2">
        <Lock className="w-5 h-5 text-green-600" />
        <span className="text-sm text-gray-600">100% Confidential</span>
      </div>
      <div className="flex items-center space-x-2">
        <Award className="w-5 h-5 text-yellow-500" />
        <span className="text-sm text-gray-600">Licensed Doctors</span>
      </div>
      <div className="flex items-center space-x-2">
        <Truck className="w-5 h-5 text-orange-600" />
        <span className="text-sm text-gray-600">Discreet Delivery</span>
      </div>
    </div>
  )

  const Footer = () => (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <img
                src="/images/honest-health-logo.png"
                alt="Honest Health"
                className="h-10 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Science-backed health solutions with doctor-guided care and complete discretion. Your health, your
              privacy, our priority.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-teal-600 hover:bg-teal-700 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-teal-600 hover:bg-teal-700 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-teal-600 hover:bg-teal-700 rounded-lg flex items-center justify-center cursor-pointer transition-colors">
                <Mail className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-6 text-lg text-teal-400">Our Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <button onClick={() => navigateTo("ed-category")} className="hover:text-white transition-colors">
                  Men's Sexual Health
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo("weight-category")} className="hover:text-white transition-colors">
                  Weight Management
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo("consultation")} className="hover:text-white transition-colors">
                  Online Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-6 text-lg text-teal-400">Company</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <button onClick={() => navigateTo("about")} className="hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo("how-it-works")} className="hover:text-white transition-colors">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo("pricing")} className="hover:text-white transition-colors">
                  Pricing
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo("contact")} className="hover:text-white transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-6 text-lg text-teal-400">Legal & Support</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <button onClick={() => navigateTo("privacy")} className="hover:text-white transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo("terms")} className="hover:text-white transition-colors">
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo("telehealth-disclaimer")}
                  className="hover:text-white transition-colors"
                >
                  Telehealth Disclaimer
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo("faq")} className="hover:text-white transition-colors">
                  FAQ
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 Honest Health. All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">Licensed by Medical Council of India</span>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-teal-500" />
              <span className="text-gray-400 text-sm">Secure & Encrypted</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )

  // Main render function with page routing
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage navigateTo={navigateTo} TrustBadges={TrustBadges} />
      case "consultation":
        return <ConsultationPage navigateTo={navigateTo} />
      case "pricing":
        return <PricingPage navigateTo={navigateTo} />
      case "faq":
        return <FAQPage navigateTo={navigateTo} toggleFaq={toggleFaq} openFaq={openFaq} />
      case "contact":
        return <ContactPage navigateTo={navigateTo} />
      case "categories":
        return <CategoriesPage />
      case "how-it-works":
        return <HowItWorksPage />
      case "about":
        return <AboutPage />
      case "ed-category":
        return <EDCategoryPage />
      case "weight-category":
        return <WeightCategoryPage />
      default:
        return <HomePage navigateTo={navigateTo} TrustBadges={TrustBadges} />
    }
  }

  // Placeholder components that will be defined in other parts
  const CategoriesPage = () => <div>CategoriesPage Component - Will be defined in Part 3</div>
  const HowItWorksPage = () => <div>HowItWorksPage Component - Will be defined in Part 4</div>
  const AboutPage = () => <div>AboutPage Component - Will be defined in Part 6</div>
  const EDCategoryPage = () => <div>EDCategoryPage Component - Will be defined in Part 10</div>
  const WeightCategoryPage = () => <div>WeightCategoryPage Component - Will be defined in Part 11</div>

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  )
}

export default HonestHealthWebsite
