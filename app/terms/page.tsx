export default function TermsPage() {
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
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Terms and Conditions</h1>
          <p className="text-sm text-gray-600 mb-8">Effective Date: [Insert Date] | Last Updated: [Insert Date]</p>

          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction and Acceptance</h2>
              <p className="text-gray-700 mb-4">
                Welcome to HonestHealth, a telemedicine and pharmacy platform operating in Delhi NCR, India. These Terms
                and Conditions ("Terms") govern your use of our website, mobile application, and services.
              </p>
              <p className="text-gray-700">
                By accessing or using our platform, you agree to be bound by these Terms. If you disagree with any part
                of these terms, you may not access our services.
              </p>
            </div>

            {/* Service Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Description</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Telemedicine Services</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Video and text consultations with licensed healthcare providers</li>
                    <li>Medical advice and treatment recommendations</li>
                    <li>Digital prescription services</li>
                    <li>Follow-up care and monitoring</li>
                    <li>Health education and wellness guidance</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Pharmacy Services</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Prescription medication dispensing</li>
                    <li>Over-the-counter medication sales</li>
                    <li>Medication counseling and guidance</li>
                    <li>Home delivery of medications within Delhi NCR</li>
                    <li>Medication adherence support</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 p-4 bg-yellow-100 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Current Service Area</h3>
                <p className="text-gray-700">
                  Our services are currently available in Delhi NCR only. We reserve the right to expand or modify our
                  service areas with appropriate regulatory approvals.
                </p>
              </div>
            </div>

            {/* User Eligibility */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">User Eligibility and Registration</h2>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Age Requirements</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Users must be 18 years or older to create an account</li>
                    <li>Medical consultations for minors require parent/guardian consent and presence</li>
                    <li>Parent/guardian must create and manage accounts for users under 18</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Registration Requirements</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Provide accurate, current, and complete information</li>
                    <li>Verify identity through OTP and government-issued ID</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Notify us immediately of any unauthorized account access</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Account Responsibility</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>You are responsible for all activities under your account</li>
                    <li>Maintain confidentiality of login credentials</li>
                    <li>Provide truthful medical information for safe treatment</li>
                    <li>Update account information promptly when changes occur</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Medical Services and Limitations */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Medical Services and Limitations</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Scope of Services</h3>
                  <p className="text-gray-700 mb-2 text-sm">Our telemedicine services include:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Non-emergency medical consultations</li>
                    <li>Routine health assessments and monitoring</li>
                    <li>Prescription renewals and medication management</li>
                    <li>Follow-up care for existing conditions</li>
                    <li>Health education and preventive care guidance</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Service Limitations</h3>
                  <p className="text-gray-700 mb-2 text-sm">
                    <strong>We DO NOT provide:</strong>
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Emergency medical care or crisis intervention</li>
                    <li>Services requiring physical examination or procedures</li>
                    <li>Treatment for controlled substance prescriptions</li>
                    <li>Mental health crisis intervention</li>
                    <li>Diagnostic services requiring laboratory tests or imaging</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-red-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-red-800 mb-3">Emergency Protocol</h3>
                <p className="text-red-700 mb-3">
                  <strong>For medical emergencies:</strong>
                </p>
                <ul className="list-disc list-inside text-red-700 space-y-1">
                  <li>Call 102 (National Ambulance Service) immediately</li>
                  <li>Visit the nearest hospital emergency department</li>
                  <li>Contact local emergency services</li>
                  <li>Our platform is NOT suitable for emergency situations</li>
                </ul>
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">User Responsibilities</h2>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Medical Information</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Provide accurate and complete medical history</li>
                    <li>Disclose all current medications and allergies</li>
                    <li>Report adverse reactions or medication issues promptly</li>
                    <li>Follow prescribed treatment plans and medication schedules</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Platform Usage</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Use services only for legitimate medical purposes</li>
                    <li>Respect intellectual property rights</li>
                    <li>Not share account credentials with others</li>
                    <li>Report technical issues or security concerns promptly</li>
                  </ul>
                </div>

                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Prohibited Activities</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Users may not:</strong>
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Provide false medical information</li>
                    <li>Abuse, harass, or threaten healthcare providers</li>
                    <li>Use platform for illegal activities</li>
                    <li>Share or resell medications prescribed to you</li>
                    <li>Upload malicious software or content</li>
                    <li>Attempt to access unauthorized areas of the platform</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Privacy and Data Protection */}
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy and Data Protection</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Information Collection</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>We collect personal and medical information as detailed in our Privacy Policy</li>
                    <li>Information used only for providing medical services</li>
                    <li>Data shared only with healthcare providers involved in your care</li>
                    <li>Strict confidentiality maintained per medical ethics</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Data Security</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Industry-standard encryption for all data transmission</li>
                    <li>Secure storage of medical records and personal information</li>
                    <li>Regular security audits and updates</li>
                    <li>Limited access to authorized personnel only</li>
                  </ul>
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
                      <strong>Phone:</strong> [PHONE NUMBER - TO BE UPDATED]
                    </li>
                    <li>
                      <strong>Hours:</strong> 24/7 for urgent issues, business hours for general inquiries
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Legal and Compliance</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <strong>Email:</strong> legal@honesthealth.com
                    </li>
                    <li>
                      <strong>Address:</strong> [REGISTERED ADDRESS - TO BE UPDATED]
                    </li>
                    <li>
                      <strong>Medical Complaints:</strong> complaints@honesthealth.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-yellow-100 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Acknowledgment:</strong> By using HonestHealth services, you acknowledge that you have read,
                understood, and agree to be bound by these Terms and Conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
