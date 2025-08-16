"use client"

import type React from "react"
import type { JSX } from "react"
import { Heart, CheckCircle, Activity, Brain } from "lucide-react"

interface AffectsPageProps {
  navigateTo: (page: string) => void
  TrustBadges: () => JSX.Element
}

// Affects Page Component - Replace the placeholder in Part 1
export const AffectsPage: React.FC<AffectsPageProps> = ({ navigateTo, TrustBadges }) => (
  <div className="min-h-screen py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Health Conditions We Treat</h1>
        <p className="text-xl text-gray-600">
          Confidential, expert care for sensitive health concerns across multiple specialties
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {/* Men's Sexual Health */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
          <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
            <Heart className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Men's Sexual Health</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Erectile dysfunction affects 1 in 3 Indian men. Get confidential, doctor-guided treatment with proven
            medications and ongoing support. All consultations with complete privacy and discretion guaranteed.
          </p>
          <div className="space-y-3 mb-8">
            <div className="flex items-center text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Licensed urologists available
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              FDA-approved medications
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              92% success rate
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              100% confidential packaging
            </div>
          </div>
          <div className="space-y-3">
            <button
              onClick={() => navigateTo("ed-category")}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              Start Private Consultation
            </button>
            <button
              onClick={() => navigateTo("pricing")}
              className="w-full border border-red-600 text-red-600 hover:bg-red-50 py-3 rounded-lg font-semibold transition-colors"
            >
              View Treatment Options
            </button>
          </div>
        </div>

        {/* Weight Management */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
          <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
            <Activity className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Weight Management</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Medically-supervised weight loss with proven medications, personalized nutrition plans, and ongoing support.
            Safe, effective, and sustainable approach to achieving your health goals.
          </p>
          <div className="space-y-3 mb-8">
            <div className="flex items-center text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Endocrinologist-guided program
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Prescription weight loss medications
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Personalized nutrition coaching
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              87% achieve target weight
            </div>
          </div>
          <div className="space-y-3">
            <button
              onClick={() => navigateTo("weight-category")}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              Check Eligibility
            </button>
            <button
              onClick={() => navigateTo("pricing")}
              className="w-full border border-green-600 text-green-600 hover:bg-green-50 py-3 rounded-lg font-semibold transition-colors"
            >
              View Program Details
            </button>
          </div>
        </div>

        {/* Diabetes Support */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
          <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
            <Brain className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Diabetes Support</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Complete diabetes care with regular monitoring, medication management, lifestyle guidance, and specialist
            consultations. Take control of your diabetes with expert medical support.
          </p>
          <div className="space-y-3 mb-8">
            <div className="flex items-center text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Diabetologist consultations
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Regular HbA1c monitoring
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Medication auto-delivery
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Lifestyle coaching included
            </div>
          </div>
          <div className="space-y-3">
            <button
              onClick={() => navigateTo("diabetes-category")}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              Book Consultation
            </button>
            <button
              onClick={() => navigateTo("pricing")}
              className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 py-3 rounded-lg font-semibold transition-colors"
            >
              View Care Plans
            </button>
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="py-16 text-center">
        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Same trusted approach across all categories</h3>
          <TrustBadges />
        </div>
      </div>
    </div>
  </div>
)
