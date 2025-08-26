export default function HowItWorksPage() {
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
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">How It Works</h1>
          <p className="text-lg text-gray-600 mb-8">Simple Steps to Quality Healthcare</p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-8">
              Getting medical consultation through our platform is designed to be simple, secure, and efficient. Here's
              how you can access quality healthcare from the comfort of your home.
            </p>

            <div className="space-y-12">
              {/* Step 1 */}
              <div className="border-l-4 border-blue-500 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 1: Registration & Verification</h2>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Create Your Account</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Sign up with your mobile number and email</li>
                    <li>Complete your profile with basic demographic information</li>
                    <li>Verify your identity through OTP authentication</li>
                    <li>Accept our terms of service and privacy policy</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Medical History Setup</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Provide relevant medical history information</li>
                    <li>List current medications and allergies</li>
                    <li>Upload any existing medical reports (optional)</li>
                    <li>Set up emergency contact information</li>
                  </ul>
                </div>
              </div>

              {/* Step 2 */}
              <div className="border-l-4 border-green-500 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 2: Choose Your Consultation Type</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Video Consultation</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                      <li>Real-time face-to-face consultation with qualified doctors</li>
                      <li>Ideal for detailed discussions and physical examination guidance</li>
                      <li>Duration: 15-30 minutes depending on complexity</li>
                      <li>Requires stable internet connection and camera-enabled device</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Text Consultation</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                      <li>Written communication for non-urgent medical queries</li>
                      <li>Convenient for follow-up questions and clarifications</li>
                      <li>Response within 2-4 hours during operational hours</li>
                      <li>Suitable for prescription renewals and routine advice</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="border-l-4 border-purple-500 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 3: Select Your Doctor</h2>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Browse Available Doctors</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>View profiles of licensed medical practitioners</li>
                    <li>Check specializations, experience, and patient ratings</li>
                    <li>See real-time availability and consultation fees</li>
                    <li>Choose based on your specific medical needs</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Book Appointment</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Select preferred date and time slot</li>
                    <li>Choose consultation duration</li>
                    <li>Confirm appointment details</li>
                    <li>Make secure payment through multiple options</li>
                  </ul>
                </div>
              </div>

              {/* Step 4 */}
              <div className="border-l-4 border-orange-500 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 4: Prepare for Consultation</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Technical Preparation</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Test your device's camera and microphone</li>
                      <li>Ensure stable internet connection</li>
                      <li>Download our mobile app or use web browser</li>
                      <li>Have a well-lit, private space ready</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Medical Preparation</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Gather relevant medical documents</li>
                      <li>Prepare list of current symptoms</li>
                      <li>Note down questions you want to ask</li>
                      <li>Have current medications list ready</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="border-l-4 border-red-500 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 5: Attend Your Consultation</h2>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">During the Consultation</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Join the secure video call at scheduled time</li>
                    <li>Discuss your health concerns openly</li>
                    <li>Follow doctor's guidance for self-examination if needed</li>
                    <li>Ask questions and clarify doubts</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Consultation Features</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Secure, encrypted video calling</li>
                    <li>Screen sharing for document review</li>
                    <li>Real-time prescription generation</li>
                    <li>Session recording (with consent) for medical records</li>
                  </ul>
                </div>
              </div>

              {/* Step 6 */}
              <div className="border-l-4 border-teal-500 pl-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 6: Post-Consultation Care</h2>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Digital Prescription</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Receive digital prescription immediately after consultation</li>
                    <li>Download prescription in PDF format</li>
                    <li>Access prescription anytime from your account</li>
                    <li>Share with local pharmacies for medicine purchase</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Follow-up Care</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Schedule follow-up appointments if needed</li>
                    <li>Access consultation summary and doctor's notes</li>
                    <li>Upload test reports for doctor's review</li>
                    <li>Receive medication reminders and health tips</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Additional Sections */}
            <div className="mt-12 space-y-8">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Important Limitations</h2>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">What We Cannot Treat Online</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Medical emergencies requiring immediate intervention</li>
                  <li>Conditions requiring physical examination or procedures</li>
                  <li>Prescription of narcotic or controlled substances</li>
                  <li>Mental health crisis situations</li>
                </ul>

                <div className="mt-4 p-4 bg-red-100 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Emergency Protocol</h4>
                  <p className="text-red-700">
                    For medical emergencies, please call 102 (National Ambulance Service) or visit the nearest hospital
                    immediately. Our platform is designed for non-emergency consultations and routine healthcare needs.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Operational Guidelines</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Consultation Hours</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Monday to Sunday: 8:00 AM to 10:00 PM</li>
                      <li>Emergency guidance available 24/7</li>
                      <li>Holiday schedules announced in advance</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Geographic Coverage</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Available across all states and union territories of India</li>
                      <li>Specialized support for remote and rural areas</li>
                      <li>Multi-language support for better accessibility</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-gray-100 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Regulatory Note:</strong> All consultations are conducted in compliance with Telemedicine
                Practice Guidelines issued by the Board of Governors in supersession of MCI and applicable state
                regulations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
