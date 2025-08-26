export default function AboutPage() {
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
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">About Us</h1>
          <p className="text-lg text-gray-600 mb-8">Revolutionizing Healthcare Access Across India</p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-8">
              At our core, we believe that quality healthcare should be accessible to every Indian, regardless of their
              location or circumstances. We are a pioneering telemedicine platform dedicated to bridging the gap between
              patients and qualified medical professionals through secure, technology-enabled consultations.
            </p>

            {/* Mission and Vision */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-700">
                  To democratize healthcare access across India by providing convenient, affordable, and high-quality
                  medical consultations through digital platforms, ensuring that geographical barriers never prevent
                  anyone from receiving the care they need.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-700">
                  To become India's most trusted telemedicine platform, empowering millions of Indians to take control
                  of their health through accessible, evidence-based medical care delivered by qualified healthcare
                  professionals.
                </p>
              </div>
            </div>

            {/* What We Offer */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Offer</h2>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Comprehensive Online Consultations</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Video consultations with registered medical practitioners</li>
                    <li>Text-based medical guidance for non-emergency queries</li>
                    <li>Follow-up consultations for ongoing care</li>
                    <li>Digital prescription services</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Specialized Care Areas</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>General Medicine and Primary Care</li>
                    <li>Cardiac Care and Monitoring</li>
                    <li>Emergency Medicine Guidance</li>
                    <li>Chronic Disease Management</li>
                    <li>Preventive Healthcare Counseling</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Commitment to Safety */}
            <div className="bg-yellow-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Safety & Compliance</h2>
              <p className="text-gray-700 mb-4">
                We operate in full compliance with the Medical Council of India (MCI) guidelines and the Telemedicine
                Practice Guidelines issued by the Board of Governors in supersession of MCI. All our medical
                professionals are:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Registered with their respective State Medical Councils</li>
                <li>Verified through our stringent credentialing process</li>
                <li>Committed to maintaining the highest standards of medical ethics</li>
                <li>Trained in digital healthcare delivery protocols</li>
              </ul>
            </div>

            {/* Why Choose Us */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Qualified Medical Professionals</h3>
                  <p className="text-gray-700 text-sm">
                    Our network consists of experienced, licensed doctors who have undergone rigorous verification
                    processes to ensure you receive care from qualified practitioners.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Secure & Confidential</h3>
                  <p className="text-gray-700 text-sm">
                    We maintain the highest standards of data privacy and security, ensuring your medical information is
                    protected in accordance with Indian healthcare data protection guidelines.
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Accessible Healthcare</h3>
                  <p className="text-gray-700 text-sm">
                    Breaking down geographical barriers to provide healthcare access to remote and underserved areas
                    across India.
                  </p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Affordable Consultations</h3>
                  <p className="text-gray-700 text-sm">
                    Making quality healthcare affordable and accessible to all socio-economic segments of Indian
                    society.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Technology */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Technology</h2>
              <p className="text-gray-700">
                We leverage cutting-edge technology to provide seamless healthcare experiences while maintaining the
                human touch that's essential in medical care. Our platform is designed to be user-friendly, secure, and
                compliant with Indian healthcare regulations.
              </p>
            </div>

            {/* Important Notice */}
            <div className="bg-red-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-red-800 mb-4">Important Notice</h2>
              <p className="text-red-700">
                <em>
                  This platform is designed to supplement, not replace, traditional healthcare services. Emergency
                  medical conditions require immediate in-person medical attention. We encourage all users to maintain
                  relationships with local healthcare providers for comprehensive care.
                </em>
              </p>
            </div>

            {/* Regulatory Compliance */}
            <div className="border-t border-gray-200 pt-6">
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Regulatory Compliance</h3>
                  <p className="text-sm text-gray-600">
                    Licensed under the applicable State Medical Council regulations
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Data Protection</h3>
                  <p className="text-sm text-gray-600">Compliant with Indian healthcare data protection guidelines</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Medical Ethics</h3>
                  <p className="text-sm text-gray-600">Adherent to MCI ethical guidelines for telemedicine practice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
