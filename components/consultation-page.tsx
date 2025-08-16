"use client"

import type React from "react"
import { useState } from "react"
import {
  Lock,
  Shield,
  Clock,
  CheckCircle,
  Heart,
  Activity,
  Brain,
  MessageCircle,
  Phone,
  User,
  ArrowRight,
} from "lucide-react"

interface ConsultationPageProps {
  navigateTo: (page: string) => void
}

// Consultation Page Component - Replace the placeholder in Part 1
export const ConsultationPage: React.FC<ConsultationPageProps> = ({ navigateTo }) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    healthConcern: "",
    age: "",
    gender: "",
    symptoms: "",
    duration: "",
    previousTreatment: "",
    medications: "",
    allergies: "",
    medicalHistory: "",
    lifestyle: "",
    contactMethod: "whatsapp",
    phone: "",
    preferredTime: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const StepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {[1, 2, 3, 4, 5].map((step) => (
        <div key={step} className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
              currentStep >= step ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
            }`}
          >
            {step}
          </div>
          {step < 5 && <div className={`w-12 h-1 mx-2 ${currentStep > step ? "bg-blue-600" : "bg-gray-200"}`} />}
        </div>
      ))}
    </div>
  )

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Private Health Assessment</h1>
          <p className="text-xl text-gray-600">
            Complete your confidential assessment to connect with a licensed doctor
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border border-gray-200">
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
            <div className="flex items-center space-x-2">
              <Lock className="w-5 h-5 text-green-600" />
              <span className="text-gray-700">256-bit Encrypted</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700">Doctor-Patient Confidentiality</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-purple-600" />
              <span className="text-gray-700">5 Minutes to Complete</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-orange-600" />
              <span className="text-gray-700">Licensed Indian Doctors</span>
            </div>
          </div>
        </div>

        {/* Step Indicator */}
        <StepIndicator />

        {/* Form Container */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Basic Information</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">What brings you here today? *</label>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { value: "ed", label: "Men's Sexual Health (ED)", icon: Heart },
                      { value: "weight", label: "Weight Management", icon: Activity },
                      { value: "diabetes", label: "Diabetes Support", icon: Brain },
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleInputChange("healthConcern", option.value)}
                        className={`p-4 border rounded-lg text-left transition-colors ${
                          formData.healthConcern === option.value
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                      >
                        <option.icon
                          className={`w-6 h-6 mb-2 ${
                            formData.healthConcern === option.value ? "text-blue-600" : "text-gray-400"
                          }`}
                        />
                        <div className="font-medium text-gray-900">{option.label}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Age Range *</label>
                    <select
                      value={formData.age}
                      onChange={(e) => handleInputChange("age", e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select age range</option>
                      <option value="18-25">18-25 years</option>
                      <option value="26-35">26-35 years</option>
                      <option value="36-45">36-45 years</option>
                      <option value="46-55">46-55 years</option>
                      <option value="56-65">56-65 years</option>
                      <option value="65+">65+ years</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Gender *</label>
                    <select
                      value={formData.gender}
                      onChange={(e) => handleInputChange("gender", e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Symptoms & Duration */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Symptoms & Duration</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Describe your symptoms or health concerns *
                  </label>
                  <textarea
                    value={formData.symptoms}
                    onChange={(e) => handleInputChange("symptoms", e.target.value)}
                    rows={4}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Please describe your symptoms in detail. The more information you provide, the better our doctors can help you."
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    This information is completely confidential and will only be seen by licensed medical professionals.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How long have you been experiencing these symptoms? *
                  </label>
                  <select
                    value={formData.duration}
                    onChange={(e) => handleInputChange("duration", e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select duration</option>
                    <option value="less-than-week">Less than a week</option>
                    <option value="1-2-weeks">1-2 weeks</option>
                    <option value="1-month">About 1 month</option>
                    <option value="2-3-months">2-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-12-months">6-12 months</option>
                    <option value="more-than-year">More than a year</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Have you tried any treatments for this condition before?
                  </label>
                  <textarea
                    value={formData.previousTreatment}
                    onChange={(e) => handleInputChange("previousTreatment", e.target.value)}
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Please list any previous treatments, medications, or therapies you've tried for this condition."
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Medical History */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Medical History</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current medications and supplements *
                  </label>
                  <textarea
                    value={formData.medications}
                    onChange={(e) => handleInputChange("medications", e.target.value)}
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="List all medications, vitamins, and supplements you're currently taking. Include dosages if known. Write 'None' if not taking any."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Known allergies or adverse reactions *
                  </label>
                  <textarea
                    value={formData.allergies}
                    onChange={(e) => handleInputChange("allergies", e.target.value)}
                    rows={2}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="List any known allergies to medications, foods, or other substances. Write 'None' if no known allergies."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Other medical conditions</label>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    {[
                      "Diabetes",
                      "High Blood Pressure",
                      "Heart Disease",
                      "Kidney Disease",
                      "Liver Disease",
                      "Depression/Anxiety",
                      "Thyroid Issues",
                      "Other",
                    ].map((condition) => (
                      <label key={condition} className="flex items-center">
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-sm text-gray-700">{condition}</span>
                      </label>
                    ))}
                  </div>
                  <textarea
                    value={formData.medicalHistory}
                    onChange={(e) => handleInputChange("medicalHistory", e.target.value)}
                    rows={2}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Please provide details about any selected conditions or other medical history."
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Lifestyle Information */}
          {currentStep === 4 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Lifestyle Information</h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Exercise frequency</label>
                    <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="">Select frequency</option>
                      <option value="never">Never/Rarely</option>
                      <option value="1-2">1-2 times per week</option>
                      <option value="3-4">3-4 times per week</option>
                      <option value="5-6">5-6 times per week</option>
                      <option value="daily">Daily</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Smoking status</label>
                    <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="">Select status</option>
                      <option value="never">Never smoked</option>
                      <option value="former">Former smoker</option>
                      <option value="occasional">Occasional smoker</option>
                      <option value="regular">Regular smoker</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Alcohol consumption</label>
                    <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="">Select frequency</option>
                      <option value="never">Never</option>
                      <option value="rarely">Rarely (special occasions)</option>
                      <option value="weekly">1-3 times per week</option>
                      <option value="daily">Daily</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Sleep quality</label>
                    <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="">Select quality</option>
                      <option value="excellent">Excellent (7-9 hours, restful)</option>
                      <option value="good">Good (6-8 hours, mostly restful)</option>
                      <option value="fair">Fair (5-7 hours, sometimes restless)</option>
                      <option value="poor">Poor (less than 6 hours or restless)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Stress levels and other lifestyle factors
                  </label>
                  <textarea
                    value={formData.lifestyle}
                    onChange={(e) => handleInputChange("lifestyle", e.target.value)}
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Please describe your stress levels, work environment, diet, or any other lifestyle factors that might be relevant to your health concern."
                  />
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-blue-900">Privacy Notice</h4>
                      <p className="text-sm text-blue-700 mt-1">
                        All information you provide is encrypted and protected by doctor-patient confidentiality. This
                        information will only be used by our licensed medical professionals to provide you with
                        appropriate care.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Contact & Scheduling */}
          {currentStep === 5 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact & Scheduling</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Preferred consultation method *
                  </label>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      {
                        value: "whatsapp",
                        label: "WhatsApp Chat",
                        icon: MessageCircle,
                        description: "Text-based consultation",
                      },
                      { value: "phone", label: "Phone Call", icon: Phone, description: "Voice consultation" },
                      { value: "video", label: "Video Call", icon: User, description: "Face-to-face consultation" },
                    ].map((method) => (
                      <button
                        key={method.value}
                        onClick={() => handleInputChange("contactMethod", method.value)}
                        className={`p-4 border rounded-lg text-left transition-colors ${
                          formData.contactMethod === method.value
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                      >
                        <method.icon
                          className={`w-6 h-6 mb-2 ${
                            formData.contactMethod === method.value ? "text-blue-600" : "text-gray-400"
                          }`}
                        />
                        <div className="font-medium text-gray-900">{method.label}</div>
                        <div className="text-sm text-gray-600">{method.description}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone number *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+91 Enter your phone number"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    We'll use this number for your consultation and important updates.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred consultation time</label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => handleInputChange("preferredTime", e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select preferred time</option>
                    <option value="asap">As soon as possible</option>
                    <option value="morning">Morning (9 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                    <option value="evening">Evening (4 PM - 8 PM)</option>
                    <option value="night">Night (8 PM - 10 PM)</option>
                  </select>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="font-semibold text-green-900 mb-3">What happens next?</h3>
                  <div className="space-y-2 text-sm text-green-800">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>Our medical team will review your assessment within 15 minutes</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>A licensed doctor will contact you via your preferred method</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>Prescription medicines (if appropriate) will be delivered discreetly</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>Ongoing support and follow-up care included</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Consultation Fee: ₹199</h4>
                  <p className="text-sm text-gray-600">
                    • Fully refunded if no prescription is issued
                    <br />• Includes complete medical assessment
                    <br />• Follow-up support included for 30 days
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                currentStep === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Previous
            </button>

            {currentStep < 5 ? (
              <button
                onClick={nextStep}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Continue
              </button>
            ) : (
              <button
                onClick={() => alert("Assessment submitted! You will be contacted by our medical team shortly.")}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2"
              >
                <span>Submit Assessment</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Progress Information */}
          <div className="mt-6 text-center text-sm text-gray-500">
            Step {currentStep} of 5 • Assessment typically takes 5-7 minutes
          </div>
        </div>

        {/* Bottom Trust Section */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 text-sm text-gray-600">
            <Lock className="w-4 h-4" />
            <span>Your information is encrypted and protected by doctor-patient confidentiality</span>
          </div>
        </div>
      </div>
    </div>
  )
}
