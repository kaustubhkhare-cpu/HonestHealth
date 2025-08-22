export default function PrivacyPage() {
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
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-sm text-gray-600 mb-8">Effective Date: [Insert Date] | Last Updated: [Insert Date]</p>

          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 mb-4">
                HonestHealth ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of
                your personal and medical information. This Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you use our telemedicine platform and pharmacy services.
              </p>
              <p className="text-gray-700">
                This policy applies to all users of our website, mobile application, and services, including patients,
                healthcare providers, and other stakeholders.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>
                      <strong>Identity Information:</strong> Name, date of birth, gender, government-issued ID details
                    </li>
                    <li>
                      <strong>Contact Information:</strong> Phone number, email address, postal address
                    </li>
                    <li>
                      <strong>Authentication Data:</strong> Login credentials, security questions, OTP verification
                      details
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Medical Information</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>
                      <strong>Health Records:</strong> Medical history, current symptoms, chronic conditions, allergies
                    </li>
                    <li>
                      <strong>Consultation Data:</strong> Doctor-patient communications, diagnosis, treatment plans,
                      prescriptions
                    </li>
                    <li>
                      <strong>Medication Information:</strong> Current medications, dosage, frequency, medical adherence
                      data
                    </li>
                    <li>
                      <strong>Test Results:</strong> Laboratory reports, imaging studies, diagnostic test results
                      uploaded by patients
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Technical Information</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>
                      <strong>Device Information:</strong> IP address, device type, operating system, browser
                      information
                    </li>
                    <li>
                      <strong>Usage Data:</strong> Pages visited, time spent on platform, click patterns, search queries
                    </li>
                    <li>
                      <strong>Location Data:</strong> General location for service delivery (with consent)
                    </li>
                    <li>
                      <strong>Communication Records:</strong> Chat logs, video call metadata, customer service
                      interactions
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Payment Information</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>
                      <strong>Transaction Data:</strong> Payment method details, billing address, purchase history
                    </li>
                    <li>
                      <strong>Financial Information:</strong> Payment gateway transaction IDs, refund records
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Medical Services</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Providing telemedicine consultations and medical advice</li>
                    <li>Maintaining comprehensive medical records for continuity of care</li>
                    <li>Facilitating prescription services and medication delivery</li>
                    <li>Coordinating with healthcare providers for your treatment</li>
                    <li>Sending appointment reminders and follow-up notifications</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Platform Operations</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Creating and managing user accounts</li>
                    <li>Authenticating user identity and preventing fraud</li>
                    <li>Improving platform functionality and user experience</li>
                    <li>Providing customer support and technical assistance</li>
                    <li>Conducting quality assurance and service improvement initiatives</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Legal and Regulatory Compliance</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Complying with Medical Council of India guidelines and telemedicine regulations</li>
                    <li>Maintaining records as required by Indian healthcare laws</li>
                    <li>Reporting adverse events or medication safety issues to relevant authorities</li>
                    <li>Responding to legal requests and court orders</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Communication</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Sending service-related notifications and updates</li>
                    <li>Providing health tips, medication reminders, and wellness information</li>
                    <li>Marketing communications (with explicit consent only)</li>
                    <li>Emergency health alerts and important service announcements</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Information Sharing */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing and Disclosure</h2>

              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Healthcare Providers</h3>
                  <p className="text-gray-700 mb-2">We share your medical information with:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Licensed doctors on our platform for consultation purposes</li>
                    <li>Pharmacists for prescription fulfillment and medication counseling</li>
                    <li>Laboratory partners for test result integration (with consent)</li>
                    <li>Emergency contacts in case of medical emergencies</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Service Partners</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>
                      <strong>Pharmacy Network:</strong> Our affiliated pharmacies for medication dispensing
                    </li>
                    <li>
                      <strong>Delivery Partners:</strong> For secure medication delivery to your address
                    </li>
                    <li>
                      <strong>Payment Processors:</strong> For secure payment processing (limited financial data only)
                    </li>
                    <li>
                      <strong>Technology Vendors:</strong> Cloud storage providers, analytics services (anonymized data
                      only)
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">We Do Not Sell Personal Information</h3>
                  <p className="text-red-700">
                    <strong>
                      HonestHealth does not sell, rent, or trade your personal or medical information to third parties
                      for commercial purposes.
                    </strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Storage and Security</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Security Measures</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>
                      <strong>Encryption:</strong> All data transmission and storage uses industry-standard encryption
                      protocols
                    </li>
                    <li>
                      <strong>Access Controls:</strong> Role-based access restrictions and multi-factor authentication
                    </li>
                    <li>
                      <strong>Regular Audits:</strong> Periodic security assessments and vulnerability testing
                    </li>
                    <li>
                      <strong>Staff Training:</strong> Regular privacy and security training for all employees
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Data Storage</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    <li>Medical records are stored securely on [CLOUD PROVIDER - TO BE UPDATED]</li>
                    <li>Data backup and disaster recovery procedures are in place</li>
                    <li>Geographic location of data storage: [TO BE UPDATED]</li>
                    <li>Data retention periods comply with Indian healthcare regulations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights and Choices</h2>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Access and Control</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>
                      <strong>Access:</strong> Request copies of your personal and medical information
                    </li>
                    <li>
                      <strong>Correction:</strong> Update or correct inaccurate information in your profile
                    </li>
                    <li>
                      <strong>Deletion:</strong> Request deletion of your account and associated data (subject to legal
                      retention requirements)
                    </li>
                    <li>
                      <strong>Portability:</strong> Obtain your medical records in a structured, commonly used format
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Communication Preferences</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>
                      <strong>Marketing Communications:</strong> Opt-out of promotional emails and messages
                    </li>
                    <li>
                      <strong>Service Notifications:</strong> Essential service communications cannot be disabled
                    </li>
                    <li>
                      <strong>Push Notifications:</strong> Control mobile app notification settings
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Consent Management</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>
                      <strong>Withdrawal:</strong> Withdraw consent for data processing where applicable
                    </li>
                    <li>
                      <strong>Granular Control:</strong> Manage specific consent preferences for different data uses
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">For Privacy-Related Inquiries</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <strong>Email:</strong> privacy@honesthealth.com
                    </li>
                    <li>
                      <strong>Phone:</strong> [PHONE NUMBER - TO BE UPDATED]
                    </li>
                    <li>
                      <strong>Address:</strong> [REGISTERED ADDRESS - TO BE UPDATED]
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">For Medical Record Requests</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <strong>Email:</strong> records@honesthealth.com
                    </li>
                    <li>
                      <strong>Phone:</strong> [PHONE NUMBER - TO BE UPDATED]
                    </li>
                    <li>
                      <strong>General Support:</strong> support@honesthealth.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-100 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Response Timeline:</strong> We will acknowledge privacy complaints within 48 hours and provide
                resolution within 30 days. This Privacy Policy is governed by Indian law and any disputes will be
                subject to the jurisdiction of courts in [JURISDICTION - TO BE UPDATED].
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
