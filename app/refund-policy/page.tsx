export default function RefundPolicyPage() {
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
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Return and Refund Policy</h1>
          <p className="text-sm text-gray-600 mb-8">Effective Date: [Insert Date] | Last Updated: [Insert Date]</p>

          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-700">
                HonestHealth is committed to providing fair and transparent refund policies for both our telemedicine
                consultations and pharmacy services. This policy outlines the terms and conditions for refunds, returns,
                and cancellations.
              </p>
            </div>

            {/* Telemedicine Consultation Refunds */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Telemedicine Consultation Refunds</h2>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Current Free Consultation Policy</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>All consultations are currently provided free of charge</li>
                  <li>No refunds applicable as no payment is required</li>
                  <li>When we introduce consultation fees in the future, this policy will be updated accordingly</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Future Full Refund Eligibility</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Cancellation made at least 30 minutes before scheduled consultation</li>
                    <li>Technical issues preventing consultation completion (from our end)</li>
                    <li>Doctor unavailability or emergency cancellation</li>
                    <li>Platform maintenance affecting scheduled consultations</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">No Refund Situations</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Cancellations made less than 30 minutes before appointment</li>
                    <li>Patient no-shows or failure to join consultation</li>
                    <li>Technical issues from patient's end (internet, device problems)</li>
                    <li>Consultations completed as scheduled</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Medication Return Policy */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Medication Return and Refund Policy</h2>

              <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Important Safety Notice</h3>
                <p className="text-gray-700">
                  <strong>
                    Medications generally cannot be returned due to safety and regulatory requirements under the Drugs
                    and Cosmetics Act, 1940.
                  </strong>{" "}
                  Once medications leave our pharmacy, we cannot accept returns for safety and contamination prevention.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Exceptional Return Circumstances</h3>
                <p className="text-gray-700 mb-4">We will provide refunds/replacements only in the following cases:</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Product Quality Issues:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                      <li>Damaged medications received (broken, crushed, leaked)</li>
                      <li>Expired medications delivered</li>
                      <li>Wrong medication dispensed</li>
                      <li>Incorrect dosage or quantity</li>
                      <li>Manufacturing defects or recalls</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Delivery Issues:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                      <li>Non-delivery despite confirmation</li>
                      <li>Delivery to wrong address due to our error</li>
                      <li>Package tampering or damage during transit</li>
                      <li>Cold chain medications delivered warm</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Prescription Errors:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                      <li>Doctor prescription changes before delivery</li>
                      <li>Medical contraindications discovered after ordering</li>
                      <li>Duplicate orders placed in error</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Non-Returnable Situations</h3>
                <p className="text-gray-700 mb-3">No refunds will be provided for:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Change of mind after delivery</li>
                  <li>Side effects or adverse reactions (consult doctor instead)</li>
                  <li>Duplicate orders due to patient error</li>
                  <li>Medications delivered to correct address per patient instructions</li>
                  <li>Properly dispensed medications per valid prescription</li>
                  <li>Patient unavailability during scheduled delivery</li>
                </ul>
              </div>
            </div>

            {/* Return Request Process */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Return Request Process</h2>

              <div className="border-l-4 border-blue-500 pl-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">To request a return/refund:</h3>
                <ol className="list-decimal list-inside text-gray-700 space-y-2">
                  <li>
                    <strong>Immediate Reporting:</strong> Contact us within 24 hours of delivery
                  </li>
                  <li>
                    <strong>Photo Evidence:</strong> Provide clear photos of damaged/incorrect items
                  </li>
                  <li>
                    <strong>Original Packaging:</strong> Keep medications in original sealed packaging
                  </li>
                  <li>
                    <strong>Prescription Copy:</strong> Provide copy of original prescription if applicable
                  </li>
                </ol>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Contact Methods</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <strong>Phone:</strong> [PHONE NUMBER] (Available 24/7)
                    </li>
                    <li>
                      <strong>Email:</strong> returns@honesthealth.com
                    </li>
                    <li>
                      <strong>WhatsApp:</strong> [WHATSAPP NUMBER]
                    </li>
                    <li>
                      <strong>In-App:</strong> Use the return request feature in your account
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Verification Process</h3>
                  <ol className="list-decimal list-inside text-gray-700 space-y-1 text-sm">
                    <li>
                      <strong>Initial Assessment:</strong> Customer service reviews request within 2 hours
                    </li>
                    <li>
                      <strong>Pharmacist Review:</strong> Licensed pharmacist evaluates eligibility
                    </li>
                    <li>
                      <strong>Photo Verification:</strong> Quality team reviews provided evidence
                    </li>
                    <li>
                      <strong>Decision Communication:</strong> Approval/denial communicated within 6 hours
                    </li>
                    <li>
                      <strong>Collection/Replacement:</strong> Approved returns collected and replacements dispatched
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Refund Processing */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Processing</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Approved Refund Timeline</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>
                      <strong>Return Approval:</strong> Within 6 hours of request
                    </li>
                    <li>
                      <strong>Quality Verification:</strong> 24-48 hours after product collection
                    </li>
                    <li>
                      <strong>Refund Processing:</strong> 2-3 business days after verification
                    </li>
                    <li>
                      <strong>Credit to Account:</strong> 3-7 business days depending on payment method
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Refund Methods</h3>
                  <div className="mb-3">
                    <h4 className="font-semibold text-gray-800 mb-1">Original Payment Method:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                      <li>Credit/Debit cards: 3-7 business days</li>
                      <li>UPI/Digital wallets: 1-3 business days</li>
                      <li>Net banking: 3-5 business days</li>
                      <li>Cash on delivery: Bank transfer within 7 days</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Alternative Options:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                      <li>HonestHealth wallet credit (instant)</li>
                      <li>Replacement medication of equal value</li>
                      <li>Store credit for future purchases</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Customer Service</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <strong>Email:</strong> support@honesthealth.com
                    </li>
                    <li>
                      <strong>Phone:</strong> [PHONE NUMBER]
                    </li>
                    <li>
                      <strong>Hours:</strong> 24/7 for urgent issues
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Specialized Support</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <strong>Refund Queries:</strong> refunds@honesthealth.com
                    </li>
                    <li>
                      <strong>Pharmacy Returns:</strong> returns@honesthealth.com
                    </li>
                    <li>
                      <strong>Escalation:</strong> grievance@honesthealth.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-yellow-100 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Important Note:</strong> This policy is subject to applicable Indian laws and regulations. In
                case of any conflict between this policy and regulatory requirements, the legal requirements will
                prevail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
