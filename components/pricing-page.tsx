"use client"

import type React from "react"
import {
  CheckCircle,
  Heart,
  Activity,
  Brain,
  User,
  Shield,
  Truck,
  MessageCircle,
  Phone,
  Lock,
  Calendar,
} from "lucide-react"

interface PricingPageProps {
  navigateTo: (page: string) => void
}

// Pricing Page Component - Replace the placeholder in Part 1
export const PricingPage: React.FC<PricingPageProps> = ({ navigateTo }) => (
  <div className="min-h-screen py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h1>
        <p className="text-xl text-gray-600">Upfront, honest pricing with no hidden fees</p>
      </div>

      {/* Consultation Fees */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Initial Consultation</h3>
          <div className="text-3xl font-bold text-blue-600 mb-2">₹199</div>
          <p className="text-gray-600 mb-4">Refunded if no prescription issued</p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Doctor review
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Health assessment
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Treatment plan
            </li>
          </ul>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow-up Consultation</h3>
          <div className="text-3xl font-bold text-green-600 mb-2">₹99</div>
          <p className="text-gray-600 mb-4">Ongoing support and monitoring</p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Progress review
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Dosage adjustments
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Side effect management
            </li>
          </ul>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Emergency Consultation</h3>
          <div className="text-3xl font-bold text-red-600 mb-2">₹299</div>
          <p className="text-gray-600 mb-4">24/7 urgent medical support</p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Immediate response
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              24/7 availability
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Crisis support
            </li>
          </ul>
        </div>
      </div>

      {/* Treatment Costs */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Treatment Costs (Per Month)</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-red-50 border border-red-200 rounded-xl p-8">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">ED Treatments</h3>
            <div className="text-2xl font-bold text-red-600 mb-4">Starting ₹899/month</div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Doctor consultation included</li>
              <li>Prescription medicine (if appropriate)</li>
              <li>Free delivery</li>
              <li>Ongoing support</li>
            </ul>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-8">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Activity className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Weight Management</h3>
            <div className="text-2xl font-bold text-green-600 mb-4">Starting ₹1,299/month</div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Comprehensive program</li>
              <li>Dedicated health coach</li>
              <li>Nutrition planning</li>
              <li>Progress monitoring</li>
            </ul>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Diabetes Support</h3>
            <div className="text-2xl font-bold text-blue-600 mb-4">Starting ₹699/month</div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Regular monitoring</li>
              <li>Medicine auto-delivery</li>
              <li>Specialist consultations</li>
              <li>Lifestyle guidance</li>
            </ul>
          </div>
        </div>
      </div>

      {/* What's Included */}
      <div className="bg-gray-50 rounded-2xl p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">What's Included in Every Plan</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: User, text: "Doctor consultation" },
            { icon: Shield, text: "Prescription medicine (if appropriate)" },
            { icon: Truck, text: "Free delivery" },
            { icon: MessageCircle, text: "Ongoing support" },
            { icon: Phone, text: "Mobile app access" },
            { icon: Lock, text: "Complete privacy" },
            { icon: CheckCircle, text: "Genuine medicines only" },
            { icon: Calendar, text: "Flexible scheduling" },
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-3">
              <item.icon className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Comparison */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Compare with Traditional Healthcare</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Traditional Clinic</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-blue-600">Honest Health</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900">Doctor Consultation</td>
                <td className="px-6 py-4 text-center text-sm text-gray-600">₹500-1000</td>
                <td className="px-6 py-4 text-center text-sm text-blue-600 font-semibold">₹199</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900">Wait Time</td>
                <td className="px-6 py-4 text-center text-sm text-gray-600">2-7 days</td>
                <td className="px-6 py-4 text-center text-sm text-blue-600 font-semibold">Same day</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900">Privacy</td>
                <td className="px-6 py-4 text-center text-sm text-gray-600">Limited</td>
                <td className="px-6 py-4 text-center text-sm text-blue-600 font-semibold">Complete</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900">Medicine Delivery</td>
                <td className="px-6 py-4 text-center text-sm text-gray-600">Self-pickup</td>
                <td className="px-6 py-4 text-center text-sm text-blue-600 font-semibold">Free home delivery</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-900">Follow-up Support</td>
                <td className="px-6 py-4 text-center text-sm text-gray-600">Extra charges</td>
                <td className="px-6 py-4 text-center text-sm text-blue-600 font-semibold">Included</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Insurance & Payment */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-blue-50 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Payment Options</h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
              <span className="text-gray-700">UPI payments (PhonePe, GPay, Paytm)</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
              <span className="text-gray-700">Credit/Debit cards (Visa, Mastercard, RuPay)</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
              <span className="text-gray-700">Net banking (all major banks)</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
              <span className="text-gray-700">EMI options available</span>
            </li>
          </ul>
        </div>
        <div className="bg-green-50 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Insurance & Benefits</h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
              <span className="text-gray-700">Mediclaim reimbursement support</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
              <span className="text-gray-700">Corporate health insurance accepted</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
              <span className="text-gray-700">Flexible spending account (FSA) eligible</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
              <span className="text-gray-700">Health savings account (HSA) compatible</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Money Back Guarantee */}
      <div className="text-center bg-blue-50 rounded-2xl p-12 mb-16">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Shield className="w-8 h-8 text-blue-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Money-Back Guarantee</h2>
        <p className="text-xl text-gray-600 mb-8">
          Satisfaction guaranteed or money back. No questions asked return policy.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 mb-2">30 Days</div>
            <div className="text-gray-600">Full refund period</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 mb-2">100%</div>
            <div className="text-gray-600">Money back guarantee</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 mb-2">No Questions</div>
            <div className="text-gray-600">Asked return policy</div>
          </div>
        </div>
        <button
          onClick={() => navigateTo("consultation")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
        >
          Start Your Consultation
        </button>
      </div>

      {/* FAQ Pricing */}
      <div className="bg-gray-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Pricing FAQ</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Why are consultation fees refunded?</h3>
            <p className="text-gray-600 text-sm mb-4">
              If our doctor determines that prescription medication is not clinically appropriate for you, we refund the
              full consultation fee. This ensures you only pay when you receive treatment.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Are there any hidden charges?</h3>
            <p className="text-gray-600 text-sm mb-4">
              No hidden charges. The prices shown include consultation, prescription (if appropriate), and free
              delivery. You pay exactly what you see.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-gray-600 text-sm mb-4">
              Yes, you can pause or cancel your treatment plan anytime. There are no long-term commitments or
              cancellation fees.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Do you accept insurance?</h3>
            <p className="text-gray-600 text-sm mb-4">
              We provide detailed receipts for insurance reimbursement. Many corporate health insurance plans cover
              telemedicine consultations.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)
