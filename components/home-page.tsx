"use client"

import type React from "react"
import { useState, useEffect } from "react"
import type { JSX } from "react"
import {
  Menu,
  X,
  Shield,
  CheckCircle,
  Star,
  Users,
  Heart,
  Activity,
  Award,
  Lock,
  Truck,
  MessageCircle,
  ArrowRight,
  Play,
  FileText,
  Stethoscope,
} from "lucide-react"

interface HomePageProps {
  navigateTo: (page: string) => void
  TrustBadges: () => JSX.Element
}

export const HomePage: React.FC<HomePageProps> = ({ navigateTo, TrustBadges }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-rotate slides for hero carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  // Header Component
  const Header = () => (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Honest%20Health%20Logo%20v1%20%28transparent%20bg%29-9zIvRD0EuakFnEAMmsVdKynHPApwL2.png"
                alt="Honest Health"
                className="h-16 w-auto"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => navigateTo("home")}
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
            >
              Treatments
            </button>
            <a href="#how-it-works" className="text-gray-700 hover:text-teal-600 font-medium transition-colors">
              How it works
            </a>
            <button
              onClick={() => navigateTo("faq")}
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
            >
              About
            </button>
            <button
              onClick={() => navigateTo("contact")}
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors"
            >
              Support
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => navigateTo("consultation")}
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all transform hover:scale-105"
            >
              Get started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-teal-600"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => navigateTo("home")}
                className="text-gray-700 hover:text-teal-600 font-medium text-left"
              >
                Treatments
              </button>
              <a href="#how-it-works" className="text-gray-700 hover:text-teal-600 font-medium">
                How it works
              </a>
              <button
                onClick={() => navigateTo("faq")}
                className="text-gray-700 hover:text-teal-600 font-medium text-left"
              >
                About
              </button>
              <button
                onClick={() => navigateTo("contact")}
                className="text-gray-700 hover:text-teal-600 font-medium text-left"
              >
                Support
              </button>
              <button
                onClick={() => navigateTo("consultation")}
                className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2.5 rounded-full font-semibold w-fit"
              >
                Get started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )

  // Hero content for rotation
  const heroContent = [
    {
      title: "Science-backed health solutions",
      subtitle: "100% online, 100% convenient",
      description:
        "Get expert treatment for ED, weight management, and diabetes from licensed doctors. Private, effective, delivered.",
      cta: "Start consultation",
    },
    {
      title: "Lose weight, keep it off",
      subtitle: "Medically supervised programs",
      description: "Evidence-based weight management with ongoing clinical support. Real results that last.",
      cta: "Check eligibility",
    },
    {
      title: "Better intimacy starts here",
      subtitle: "Discreet ED treatment",
      description: "Clinically proven treatments with complete privacy. Get your confidence back.",
      cta: "Private consultation",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Modern Indian healthcare facility"
              className="w-full h-full object-cover opacity-5"
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium">
                  <Users className="w-4 h-4 mr-2" />
                  2,000,000+ members treated
                </div>

                <div className="space-y-6">
                  <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                    {heroContent[currentSlide].title.split(" ").map((word, i) => (
                      <span key={i} className={i === 0 ? "text-teal-500" : ""}>
                        {word}{" "}
                      </span>
                    ))}
                  </h1>
                  <h2 className="text-2xl lg:text-3xl text-gray-600 font-light">
                    {heroContent[currentSlide].subtitle}
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                    {heroContent[currentSlide].description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => navigateTo("consultation")}
                    className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <span>{heroContent[currentSlide].cta}</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="border-2 border-gray-300 hover:border-teal-500 text-gray-700 hover:text-teal-600 px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center justify-center space-x-2">
                    <Play className="w-5 h-5" />
                    <span>How it works</span>
                  </button>
                </div>

                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>95% love their experience</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span>Free and discreet shipping</span>
                  </div>
                </div>
              </div>

              {/* Hero Visual - Professional Medical Image */}
              <div className="relative">
                <div className="relative">
                  <div className="rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src="/indian-couple-embracing-wellness.png"
                      alt="Happy smiling Indian couple embracing"
                      className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Floating Card Overlay */}
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 max-w-sm">
                    <div className="text-center space-y-4">
                      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
                        <Stethoscope className="w-6 h-6 text-teal-600" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">Start your health journey</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Consultation</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-gray-400 line-through">₹99</span>
                            <span className="font-bold text-green-600 bg-green-50 px-2 py-1 rounded">Free</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Expert review</span>
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Discreet delivery</span>
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        </div>
                      </div>
                      <button
                        onClick={() => navigateTo("consultation")}
                        className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
                      >
                        Get started →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {heroContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? "bg-teal-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </section>

        {/* Trust Indicators - Numan Style */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3">Trusted</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Regulated by the Medical Council of India. Licensed doctors and certified pharmacy operations.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3">India licensed</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Medications and clinicians licensed by Indian regulatory authorities.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3">Free, discreet delivery</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  No names, no logos, no delivery fee. Complete privacy guaranteed.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3">Ongoing clinical support</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Access expert clinicians and medical advice throughout your treatment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Categories - Hero Style */}
        <section id="treatments" className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Happy Indian couple embracing outdoors"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/75 to-gray-900/85"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-bold mb-6">Doctor-guided treatments for your health goals</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Evidence-based care from licensed Indian doctors. Private consultations, genuine medications, discreet
                delivery.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Erectile Dysfunction */}
              <div className="group relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 hover:bg-white transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                <div className="absolute top-6 right-6">
                  <button
                    onClick={() => navigateTo("consultation")}
                    className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white group-hover:bg-red-500 transition-colors"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </div>

                <div className="w-20 h-20 bg-red-100 rounded-3xl flex items-center justify-center mb-6">
                  <div className="w-12 h-12 bg-red-500 rounded-full"></div>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-4">Improve intimacy</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Clinically proven erectile dysfunction treatments with complete privacy. Licensed urologists provide
                  personalized care to restore confidence and intimacy.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    <span>MCI-licensed urologists available</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    <span>FDA-approved medications available</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    <span>100% confidential packaging & delivery</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    <span>Prescription if clinically appropriate</span>
                  </div>
                </div>

                <div className="bg-red-50 rounded-2xl p-4">
                  <p className="text-sm text-red-700">
                    <strong>Important:</strong> This treatment requires medical consultation. Our doctors will assess
                    your condition and prescribe only if clinically appropriate.
                  </p>
                </div>
              </div>

              {/* Weight Management */}
              <div className="group relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 hover:bg-white transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                <div className="absolute top-6 right-6">
                  <button
                    onClick={() => navigateTo("consultation")}
                    className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white group-hover:bg-blue-500 transition-colors"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </div>

                <div className="w-20 h-20 bg-blue-100 rounded-3xl flex items-center justify-center mb-6">
                  <div className="w-8 h-12 bg-blue-500 rounded-lg transform rotate-12"></div>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-4">Achieve healthy weight</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Medically-supervised weight management programs with endocrinologist guidance. Science-backed
                  approaches for sustainable, long-term results.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    <span>Board-certified endocrinologists</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    <span>Personalized nutrition & exercise plans</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    <span>Regular progress monitoring</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    <span>Medication support if recommended</span>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-2xl p-4">
                  <p className="text-sm text-blue-700">
                    <strong>Note:</strong> Weight management requires comprehensive health assessment. Treatment plans
                    are individualized based on medical evaluation.
                  </p>
                </div>
              </div>

              {/* Diabetes Management */}
              <div className="group relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 hover:bg-white transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                <div className="absolute top-6 right-6">
                  <button
                    onClick={() => navigateTo("consultation")}
                    className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white group-hover:bg-green-500 transition-colors"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </div>

                <div className="w-20 h-20 bg-green-100 rounded-3xl flex items-center justify-center mb-6">
                  <div className="grid grid-cols-2 gap-1">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                    <div className="w-4 h-4 bg-green-300 rounded"></div>
                    <div className="w-4 h-4 bg-green-300 rounded"></div>
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-4">Control diabetes</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Comprehensive diabetes care with specialist guidance. Regular monitoring, medication management, and
                  lifestyle support for optimal blood sugar control.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    <span>Certified diabetologists & endocrinologists</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    <span>HbA1c & glucose monitoring</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    <span>Medication delivery & adherence support</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    <span>Diet & lifestyle counseling</span>
                  </div>
                </div>

                <div className="bg-green-50 rounded-2xl p-4">
                  <p className="text-sm text-green-700">
                    <strong>Medical Care:</strong> Diabetes management requires ongoing medical supervision. Our
                    specialists provide evidence-based treatment protocols.
                  </p>
                </div>
              </div>
            </div>

            {/* Compliance Notice */}
            <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <h4 className="text-xl font-semibold mb-4">Important Medical Disclaimer</h4>
              <p className="text-gray-300 leading-relaxed max-w-4xl mx-auto">
                All treatments are provided by licensed medical practitioners registered with the Medical Council of
                India. Medications are prescribed only after proper medical consultation and when clinically
                appropriate. This platform facilitates doctor-patient consultations and does not diagnose or treat
                medical conditions independently. Always consult your healthcare provider for medical emergencies.
              </p>
            </div>
          </div>
        </section>

        {/* Complete Care Section - Numan Style with Floating Icons */}
        <section className="py-20 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-teal-600 tracking-wider uppercase">
                    THE HONEST HEALTH EXPERIENCE
                  </p>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Complete, convenient care
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Address symptoms, treat root causes, and adjust your behaviours, for immediate relief and long-term
                    optimal health.
                  </p>
                </div>

                <button
                  onClick={() => navigateTo("consultation")}
                  className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105"
                >
                  See treatments
                </button>
              </div>

              {/* Right Animation Area */}
              <div className="relative">
                <div className="relative w-96 h-96 mx-auto">
                  {/* Central Product Display */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-teal-400 to-blue-500 rounded-3xl flex items-center justify-center shadow-2xl animate-pulse">
                      <div className="text-4xl text-white">💊</div>
                    </div>
                  </div>

                  {/* Floating Icons in Circular Motion */}
                  <div className="absolute inset-0">
                    {/* Icon 1 - Top */}
                    <div
                      className="absolute w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center shadow-lg animate-bounce"
                      style={{
                        top: "10%",
                        left: "42%",
                        animationDelay: "0s",
                        animationDuration: "3s",
                      }}
                    >
                      <Users className="w-8 h-8 text-gray-700" />
                    </div>

                    {/* Icon 2 - Top Right */}
                    <div
                      className="absolute w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center shadow-lg animate-bounce"
                      style={{
                        top: "20%",
                        right: "15%",
                        animationDelay: "0.5s",
                        animationDuration: "3s",
                      }}
                    >
                      <div className="w-6 h-6 bg-gray-700 rounded"></div>
                    </div>

                    {/* Icon 3 - Right */}
                    <div
                      className="absolute w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center shadow-lg animate-bounce"
                      style={{
                        top: "42%",
                        right: "5%",
                        animationDelay: "1s",
                        animationDuration: "3s",
                      }}
                    >
                      <Stethoscope className="w-8 h-8 text-gray-700" />
                    </div>

                    {/* Icon 4 - Bottom Right */}
                    <div
                      className="absolute w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center shadow-lg animate-bounce"
                      style={{
                        bottom: "20%",
                        right: "15%",
                        animationDelay: "1.5s",
                        animationDuration: "3s",
                      }}
                    >
                      <Activity className="w-8 h-8 text-gray-700" />
                    </div>

                    {/* Icon 5 - Bottom */}
                    <div
                      className="absolute w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center shadow-lg animate-bounce"
                      style={{
                        bottom: "10%",
                        left: "42%",
                        animationDelay: "2s",
                        animationDuration: "3s",
                      }}
                    >
                      <div className="grid grid-cols-2 gap-0.5">
                        <div className="w-2 h-2 bg-gray-700 rounded-sm"></div>
                        <div className="w-2 h-2 bg-gray-700 rounded-sm"></div>
                        <div className="w-2 h-2 bg-gray-700 rounded-sm"></div>
                        <div className="w-2 h-2 bg-gray-700 rounded-sm"></div>
                      </div>
                    </div>

                    {/* Icon 6 - Bottom Left */}
                    <div
                      className="absolute w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center shadow-lg animate-bounce"
                      style={{
                        bottom: "20%",
                        left: "15%",
                        animationDelay: "2.5s",
                        animationDuration: "3s",
                      }}
                    >
                      <MessageCircle className="w-8 h-8 text-gray-700" />
                    </div>

                    {/* Icon 7 - Left */}
                    <div
                      className="absolute w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center shadow-lg animate-bounce"
                      style={{
                        top: "42%",
                        left: "5%",
                        animationDelay: "3s",
                        animationDuration: "3s",
                      }}
                    >
                      <Heart className="w-8 h-8 text-gray-700" />
                    </div>

                    <div
                      className="absolute w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center shadow-lg animate-bounce"
                      style={{
                        top: "20%",
                        left: "15%",
                        animationDelay: "3.5s",
                        animationDuration: "3s",
                      }}
                    >
                      <div className="w-8 h-6 bg-gray-700 rounded-sm relative">
                        <div className="absolute top-1 left-1 w-2 h-1 bg-white rounded-sm"></div>
                        <div className="absolute top-3 left-1 w-3 h-1 bg-white rounded-sm"></div>
                        <div className="absolute top-5 left-1 w-1 h-1 bg-white rounded-sm"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - Traditional Section */}
        <section id="how-it-works" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">How it works</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From consultation to ongoing support, we're with you every step of your health journey.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
                  <MessageCircle className="w-10 h-10 text-teal-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Chat with a provider 24/7</h3>
                <p className="text-gray-600 leading-relaxed">
                  Connect with licensed doctors via WhatsApp, phone, or video. Get expert medical advice whenever you
                  need it.
                </p>
              </div>

              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <FileText className="w-10 h-10 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Manage goals in one place</h3>
                <p className="text-gray-600 leading-relaxed">
                  Track your progress, manage treatments, and stay connected with your care team through our secure
                  platform.
                </p>
              </div>

              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <Truck className="w-10 h-10 text-purple-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Fast, discreet shipping</h3>
                <p className="text-gray-600 leading-relaxed">
                  Genuine medications delivered in plain packaging. Free shipping across India with auto-refill options.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-20 bg-teal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Trusted by thousands across India</h2>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl font-bold text-teal-600 mb-2">92%</div>
                  <div className="text-gray-600">See improvement in 30 days</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">97%</div>
                  <div className="text-gray-600">Would recommend to a friend</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">4.9/5</div>
                  <div className="text-gray-600">Average satisfaction rating</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  text: "The convenience and online support made this journey sustainable for me. Lost 15kg and kept it off.",
                  name: "Priya S.",
                  location: "Mumbai",
                  image:
                    "https://images.unsplash.com/photo-1494790108755-2616b52fcaaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
                },
                {
                  text: "Finally, a service that understands privacy. Professional doctors and effective treatment.",
                  name: "Raj K.",
                  location: "Delhi",
                  image:
                    "https://images.unsplash.com/photo-1472099645785-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
                },
                {
                  text: "Managing my diabetes became so much easier. Regular monitoring and timely medicine delivery.",
                  name: "Amit P.",
                  location: "Bangalore",
                  image:
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
                },
              ].map((review, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{review.text}"</p>
                  <div className="flex items-center">
                    <img
                      src={review.image || "/placeholder.svg"}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{review.name}</div>
                      <div className="text-sm text-gray-600">{review.location}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Indian medical professionals team consultation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gray-900/85"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to start your health journey?</h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Join thousands of Indians getting confidential, science-backed healthcare. Your first consultation is
              free, with expert medical guidance and discreet delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigateTo("consultation")}
                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105"
              >
                Start consultation
              </button>
              <button className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-full font-semibold text-lg transition-all">
                Learn more
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-teal-400" />
                <span>Licensed doctors</span>
              </div>
              <div className="flex items-center space-x-2">
                <Lock className="w-5 h-5 text-green-400" />
                <span>100% confidential</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>4.8/5 rating</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Honest%20Health%20Logo%20v1%20%28transparent%20bg%29-9zIvRD0EuakFnEAMmsVdKynHPApwL2.png"
                alt="Honest Health"
                className="h-12 w-auto"
              />
              <p className="text-gray-600">Science-backed health solutions with complete discretion and expert care.</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Treatments</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <button
                    onClick={() => navigateTo("consultation")}
                    className="hover:text-teal-600 transition-colors text-left"
                  >
                    Men's Sexual Health
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateTo("consultation")}
                    className="hover:text-teal-600 transition-colors text-left"
                  >
                    Weight Management
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateTo("consultation")}
                    className="hover:text-teal-600 transition-colors text-left"
                  >
                    Diabetes Support
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <button onClick={() => navigateTo("faq")} className="hover:text-teal-600 transition-colors text-left">
                    About
                  </button>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-teal-600 transition-colors">
                    How it works
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => navigateTo("contact")}
                    className="hover:text-teal-600 transition-colors text-left"
                  >
                    Support
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateTo("contact")}
                    className="hover:text-teal-600 transition-colors text-left"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <a href="#" className="hover:text-teal-600 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-600 transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-600 transition-colors">
                    Medical Disclaimer
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">© 2024 Honest Health. All rights reserved.</p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0 text-sm text-gray-600">
              <span>Licensed by Medical Council of India</span>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span>Secure & Encrypted</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
