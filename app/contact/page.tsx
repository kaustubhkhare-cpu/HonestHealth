export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Premium Header */}
      <div className="bg-gradient-to-r from-[#A67C52] to-[#8B7657] text-white text-center py-3 text-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        <span className="relative z-10">
          🏥 Licensed Medical Professionals • 📞 Free Consultation • 🔒 100% Confidential
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-lg text-gray-600 mb-8">Get in Touch - We're Here to Help</p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-8">
              We're committed to providing you with exceptional support for all your healthcare needs. Whether you have
              questions about our services, need technical assistance, or want to provide feedback, our team is ready to
              assist you.
            </p>

            {/* Quick Contact Information */}
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Contact Information</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Customer Support Helpline</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <strong>Phone:</strong> +91-XXXX-XXXXXX (Available 24/7)
                    </li>
                    <li>
                      <strong>WhatsApp:</strong> +91-XXXX-XXXXXX (Quick support)
                    </li>
                    <li>
                      <strong>Email:</strong> support@honesthealth.com
                    </li>
                    <li>
                      <strong>Emergency Technical Support:</strong> +91-XXXX-XXXXXX
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Business Hours</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <strong>Patient Support:</strong> 24/7 (All days)
                    </li>
                    <li>
                      <strong>Administrative Inquiries:</strong> Monday to Saturday, 9:00 AM to 6:00 PM
                    </li>
                    <li>
                      <strong>Doctor Consultations:</strong> Daily, 8:00 AM to 10:00 PM
                    </li>
                    <li>
                      <strong>Technical Support:</strong> 24/7 (All days)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How Can We Help You */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How Can We Help You?</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">For Patients</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">General Inquiries</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                        <li>Information about our services</li>
                        <li>Doctor availability and specializations</li>
                        <li>Consultation booking assistance</li>
                        <li>Platform usage guidance</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Technical Support</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                        <li>Login and account issues</li>
                        <li>Video consultation technical problems</li>
                        <li>Payment and billing queries</li>
                        <li>Mobile app troubleshooting</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Medical Support</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                        <li>Prescription download assistance</li>
                        <li>Follow-up appointment scheduling</li>
                        <li>Medical record access help</li>
                        <li>Emergency consultation guidance</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">For Healthcare Professionals</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Partnership Inquiries</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                        <li>Doctor onboarding process</li>
                        <li>Credentialing requirements</li>
                        <li>Platform training and support</li>
                        <li>Revenue and payment information</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Professional Support</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                        <li>Technical platform assistance</li>
                        <li>Scheduling and calendar management</li>
                        <li>Patient communication tools</li>
                        <li>Continuing education opportunities</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Methods</h2>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Live Chat Support</h3>
                  <p className="text-gray-700 mb-2">Available 24/7 on our website and mobile app</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Instant response for urgent queries</li>
                    <li>Screen sharing for technical issues</li>
                    <li>Multi-language support available</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Email Support</h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-2">
                    <div>
                      <ul className="space-y-1 text-gray-700">
                        <li>
                          <strong>General Inquiries:</strong> info@honesthealth.com
                        </li>
                        <li>
                          <strong>Technical Support:</strong> tech@honesthealth.com
                        </li>
                        <li>
                          <strong>Medical Support:</strong> medical@honesthealth.com
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-1 text-gray-700">
                        <li>
                          <strong>Billing Inquiries:</strong> billing@honesthealth.com
                        </li>
                        <li>
                          <strong>Partnership:</strong> partners@honesthealth.com
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    <em>Expected Response Time: 2-4 hours during business hours</em>
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">3. Phone Support</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>
                      <strong>Primary Helpline:</strong> +91-XXXX-XXXXXX
                    </li>
                    <li>
                      <strong>Technical Emergency:</strong> +91-XXXX-XXXXXX
                    </li>
                    <li>
                      <strong>Doctor Support Line:</strong> +91-XXXX-XXXXXX
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">4. WhatsApp Support</h3>
                  <p className="text-gray-700 mb-2">Quick messaging support for:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Appointment confirmations</li>
                    <li>Prescription queries</li>
                    <li>General information</li>
                    <li>Technical troubleshooting</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Emergency Contact Protocol */}
            <div className="bg-red-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-red-800 mb-4">Emergency Contact Protocol</h2>

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-red-800 mb-2">For Medical Emergencies</h3>
                <p className="text-red-700 mb-3">
                  <strong>Important:</strong> Our platform is designed for non-emergency consultations. For medical
                  emergencies:
                </p>
                <ol className="list-decimal list-inside text-red-700 space-y-1">
                  <li>
                    <strong>Call Emergency Services:</strong> 102 (National Ambulance Service)
                  </li>
                  <li>
                    <strong>Visit Nearest Hospital:</strong> Immediately seek in-person medical care
                  </li>
                  <li>
                    <strong>Critical Situations:</strong> Contact local emergency services first
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-red-800 mb-2">For Platform Emergencies</h3>
                <p className="text-red-700 mb-2">
                  If you're unable to access our platform during a scheduled consultation:
                </p>
                <ul className="list-disc list-inside text-red-700 space-y-1">
                  <li>Call our emergency technical line: +91-XXXX-XXXXXX</li>
                  <li>Use WhatsApp support for immediate assistance</li>
                  <li>Email: emergency@honesthealth.com</li>
                </ul>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Account & Registration</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-gray-800">Q: How do I create an account?</p>
                      <p className="text-gray-700">
                        A: Visit our website or download our mobile app, click "Sign Up," and follow the verification
                        process using your mobile number.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Q: I forgot my password. How can I reset it?</p>
                      <p className="text-gray-700">
                        A: Click "Forgot Password" on the login page and follow the OTP verification process.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Consultations</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-gray-800">Q: How do I book a consultation?</p>
                      <p className="text-gray-700">
                        A: After logging in, browse available doctors, select your preferred doctor and time slot, make
                        payment, and you'll receive confirmation details.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Q: Can I reschedule my appointment?</p>
                      <p className="text-gray-700">
                        A: Yes, you can reschedule up to 2 hours before your consultation time through your account
                        dashboard.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
