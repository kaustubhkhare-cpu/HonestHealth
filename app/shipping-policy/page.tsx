export default function ShippingPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Premium Header */}
      <div className="bg-gradient-to-r from-[#A67C52] to-[#8B7657] text-white text-center py-3 text-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        <span className="relative z-10">
          🏥 Licensed Medical Professionals • 📞 Free Consultation • 🔒 100% Confidential
        </span>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Shipping and Delivery Policy</h1>
          <p className="text-sm text-gray-600 mb-8">Effective Date: [Insert Date] | Last Updated: [Insert Date]</p>

          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-700">
                HonestHealth operates its own medication delivery network to ensure safe, secure, and timely delivery of
                prescription and over-the-counter medications to patients in Delhi NCR. This policy outlines our
                delivery procedures, timelines, and terms.
              </p>
            </div>

            {/* Service Coverage Area */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Coverage Area</h2>

              <div className="bg-green-50 p-6 rounded-lg mb-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Current Delivery Zones</h3>
                <p className="text-gray-700 mb-3">
                  <strong>We currently deliver to all areas within Delhi NCR, including:</strong>
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>New Delhi</li>
                    <li>Gurgaon (Gurugram)</li>
                    <li>Noida</li>
                    <li>Greater Noida</li>
                  </ul>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Faridabad</li>
                    <li>Ghaziabad</li>
                    <li>Delhi (All districts)</li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Service Area Verification</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Delivery availability checked during order placement</li>
                    <li>Pincode verification required for all orders</li>
                    <li>Same-day delivery available in select high-density areas</li>
                    <li>Express delivery options for urgent medications</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Future Expansion</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Service area expansion planned for additional regions</li>
                    <li>Updates communicated via platform notifications</li>
                    <li>Pre-registration available for upcoming service areas</li>
                    <li>Partnership opportunities for service expansion</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Delivery Options */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Delivery Options and Timelines</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Standard Delivery</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>
                      <strong>Timeline:</strong> 24-48 hours from order confirmation
                    </li>
                    <li>
                      <strong>Coverage:</strong> All Delhi NCR areas
                    </li>
                    <li>
                      <strong>Cost:</strong> [TO BE SPECIFIED]
                    </li>
                  </ul>
                  <div className="mt-3">
                    <p className="text-sm font-medium text-gray-800 mb-1">Features:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                      <li>Secure medication packaging</li>
                      <li>Real-time tracking</li>
                      <li>SMS and email updates</li>
                      <li>Signature confirmation required</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Express Delivery</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>
                      <strong>Timeline:</strong> 4-8 hours from order confirmation
                    </li>
                    <li>
                      <strong>Coverage:</strong> Select areas within Delhi NCR
                    </li>
                    <li>
                      <strong>Cost:</strong> [TO BE SPECIFIED] (Additional charges apply)
                    </li>
                  </ul>
                  <div className="mt-3">
                    <p className="text-sm font-medium text-gray-800 mb-1">Features:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                      <li>Priority processing</li>
                      <li>Dedicated delivery personnel</li>
                      <li>Direct communication with delivery executive</li>
                      <li>Ideal for urgent medications</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Same-Day Delivery</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>
                      <strong>Timeline:</strong> Within 4 hours if ordered before 2:00 PM
                    </li>
                    <li>
                      <strong>Coverage:</strong> High-density areas in Delhi NCR
                    </li>
                    <li>
                      <strong>Cost:</strong> [TO BE SPECIFIED] (Premium charges apply)
                    </li>
                  </ul>
                  <div className="mt-3">
                    <p className="text-sm font-medium text-gray-800 mb-1">Features:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                      <li>Emergency medication service</li>
                      <li>Cold chain maintenance for temperature-sensitive drugs</li>
                      <li>Direct pharmacist consultation if needed</li>
                      <li>Real-time delivery tracking</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Scheduled Delivery</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>
                      <strong>Timeline:</strong> Customer-chosen date and time slot
                    </li>
                    <li>
                      <strong>Coverage:</strong> All service areas
                    </li>
                    <li>
                      <strong>Cost:</strong> Standard delivery charges
                    </li>
                  </ul>
                  <div className="mt-3">
                    <p className="text-sm font-medium text-gray-800 mb-1">Features:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                      <li>Advance scheduling up to 7 days</li>
                      <li>Preferred time slot selection</li>
                      <li>Reminder notifications</li>
                      <li>Recurring delivery options for chronic medications</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery Process */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Delivery Process</h2>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Order Processing</h3>
                  <ol className="list-decimal list-inside text-gray-700 space-y-2">
                    <li>
                      <strong>Prescription Verification:</strong> Licensed pharmacist reviews all prescriptions
                    </li>
                    <li>
                      <strong>Medication Preparation:</strong> Medications selected, checked, and packaged
                    </li>
                    <li>
                      <strong>Quality Control:</strong> Final verification of medication accuracy and packaging
                    </li>
                    <li>
                      <strong>Dispatch Preparation:</strong> Order assigned to delivery executive
                    </li>
                    <li>
                      <strong>Customer Notification:</strong> Dispatch confirmation sent via SMS/email
                    </li>
                  </ol>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Packaging Standards</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Security Features:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                        <li>Tamper-evident packaging for all medications</li>
                        <li>Climate-controlled packaging for temperature-sensitive drugs</li>
                        <li>Discrete packaging to maintain patient privacy</li>
                        <li>Child-resistant packaging when required</li>
                        <li>Proper labeling with patient information and medication details</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Cold Chain Management:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                        <li>Temperature monitoring for vaccines and biologics</li>
                        <li>Insulated packaging with ice packs when required</li>
                        <li>Real-time temperature logging during transit</li>
                        <li>Specialized handling for insulin and other temperature-sensitive medications</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Safety and Quality */}
            <div className="bg-yellow-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Safety and Quality Assurance</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Delivery Personnel</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Background verification and police clearance</li>
                    <li>Training in medication handling and patient privacy</li>
                    <li>Knowledge of emergency protocols</li>
                    <li>Equipped with delivery tracking devices and safety equipment</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Safety Protocols</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Mandatory masks and sanitization for delivery personnel</li>
                    <li>Contactless delivery options available</li>
                    <li>Health screening for delivery executives</li>
                    <li>Vehicle sanitization between deliveries</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information and Support</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Delivery Support</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <strong>Email:</strong> delivery@honesthealth.com
                    </li>
                    <li>
                      <strong>Phone:</strong> [DELIVERY SUPPORT NUMBER]
                    </li>
                    <li>
                      <strong>WhatsApp:</strong> [DELIVERY WHATSAPP NUMBER]
                    </li>
                    <li>
                      <strong>Hours:</strong> 8:00 AM - 10:00 PM (Daily)
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Emergency Delivery Support</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <strong>24/7 Emergency Line:</strong> [EMERGENCY DELIVERY NUMBER]
                    </li>
                    <li>
                      <strong>Emergency WhatsApp:</strong> [EMERGENCY WHATSAPP]
                    </li>
                    <li>
                      <strong>Critical Medication Hotline:</strong> [CRITICAL MEDICATION NUMBER]
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-100 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Customer Commitment:</strong> HonestHealth is committed to providing safe, reliable, and timely
                medication delivery services while maintaining the highest standards of pharmaceutical care and customer
                service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
