export default function MedicalExpertsPage() {
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
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Medical Experts</h1>
          <p className="text-lg text-gray-600 mb-8">Qualified Healthcare Professionals You Can Trust</p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-8">
              Our network of medical experts comprises experienced, licensed practitioners who are committed to
              providing high-quality healthcare through digital platforms. All our doctors are registered with their
              respective State Medical Councils and have undergone rigorous verification processes.
            </p>

            {/* Dr. Archit Shukla */}
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Dr. Archit Shukla</h2>
              <p className="text-lg font-semibold text-blue-800 mb-4">General Physician</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Professional Credentials</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <strong>Medical Council Registration:</strong> DMC/89752
                    </li>
                    <li>
                      <strong>Experience:</strong> 6+ Years in Clinical Practice
                    </li>
                    <li>
                      <strong>Specialization:</strong> General Medicine & Cardiac Care
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Educational Background</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>MBBS from recognized medical institution</li>
                    <li>Specialized training in Internal Medicine</li>
                    <li>Cardiac Care Unit (CCU) certification</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Professional Experience</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">Fortis Shalimar Bagh</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                        <li>Senior Resident in Internal Medicine</li>
                        <li>Managed diverse patient cases in high-volume setting</li>
                        <li>Specialized in preventive healthcare and chronic disease management</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800">Rajiv Gandhi Cancer Institute</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                        <li>Clinical experience in oncology support care</li>
                        <li>Expertise in managing treatment-related complications</li>
                        <li>Collaborative care in multidisciplinary teams</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800">Dr. RML Hospital</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                        <li>Government hospital experience with diverse patient demographics</li>
                        <li>Emergency medicine and critical care exposure</li>
                        <li>Training in resource-optimized healthcare delivery</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800">Aggarsain International Hospital</h4>
                      <p className="text-sm text-gray-700 mb-1">
                        <strong>Cardiac Care Unit (CCU) Specialist</strong>
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                        <li>Advanced training in cardiovascular emergency management</li>
                        <li>Expertise in acute cardiac conditions and monitoring</li>
                        <li>Experience with cardiac rehabilitation protocols</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Areas of Expertise</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>
                      <strong>Primary Care Medicine:</strong> Comprehensive health assessments, preventive care, and
                      routine health management
                    </li>
                    <li>
                      <strong>Cardiac Care:</strong> Heart health monitoring, hypertension management, and
                      cardiovascular risk assessment
                    </li>
                    <li>
                      <strong>Chronic Disease Management:</strong> Diabetes, hypertension, and metabolic disorders
                    </li>
                  </ul>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>
                      <strong>Emergency Medicine:</strong> Acute condition assessment and emergency care guidance
                    </li>
                    <li>
                      <strong>Preventive Healthcare:</strong> Health screenings, lifestyle counseling, and disease
                      prevention strategies
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Dr. Sasidhar */}
            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Dr. Sasidhar</h2>
              <p className="text-lg font-semibold text-green-800 mb-4">Internal Medicine Specialist</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Professional Credentials</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <strong>Medical Council Registration:</strong> DMC/R/32498
                    </li>
                    <li>
                      <strong>Qualification:</strong> MBBS, FCCS, IMT
                    </li>
                    <li>
                      <strong>Specialization:</strong> Internal Medicine & Emergency Care
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Educational Qualifications</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>
                      <strong>MBBS:</strong> Bachelor of Medicine and Bachelor of Surgery
                    </li>
                    <li>
                      <strong>FCCS:</strong> Fellowship in Critical Care Services
                    </li>
                    <li>
                      <strong>IMT:</strong> Internal Medicine Training certification
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Professional Experience</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Max Hospital, New Delhi <span className="text-sm font-normal">(Nov 2021 - Oct 2024)</span>
                      </h4>
                      <p className="text-sm text-gray-700 mb-1">
                        <strong>Internal Medicine Trainee</strong>
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                        <li>Advanced training in complex medical conditions</li>
                        <li>Experience with latest diagnostic and treatment protocols</li>
                        <li>Exposure to multi-specialty collaborative care</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Metropolitan Hospital, Thrissur <span className="text-sm font-normal">(1 Year)</span>
                      </h4>
                      <p className="text-sm text-gray-700 mb-1">
                        <strong>Resident Medical Officer - Emergency Medicine</strong>
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                        <li>24/7 emergency care experience</li>
                        <li>Trauma and acute condition management</li>
                        <li>Critical decision-making in emergency scenarios</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Co-operative Hospital, Thrissur{" "}
                        <span className="text-sm font-normal">(Dec 2019 - Oct 2021)</span>
                      </h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                        <li>
                          <strong>Medical Officer - Emergency Medicine</strong> (Dec 2019 - Oct 2020)
                        </li>
                        <li>
                          <strong>Medical Officer - Infectious Diseases (COVID Care)</strong> (Oct 2020 - Oct 2021)
                        </li>
                        <li>Frontline COVID-19 patient care during pandemic</li>
                        <li>Infectious disease protocols and isolation care</li>
                        <li>Public health emergency response experience</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800">
                        Aswini Hospital, Thrissur <span className="text-sm font-normal">(5 Months)</span>
                      </h4>
                      <p className="text-sm text-gray-700 mb-1">
                        <strong>Junior Neurosurgery Resident</strong>
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                        <li>Neurosurgical procedures and patient care</li>
                        <li>Critical care monitoring and post-operative management</li>
                        <li>Interdisciplinary medical team collaboration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Areas of Expertise</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>
                      <strong>Internal Medicine:</strong> Complex medical conditions, systemic diseases, and
                      comprehensive care
                    </li>
                    <li>
                      <strong>Emergency Medicine:</strong> Acute care assessment, emergency protocols, and critical
                      condition management
                    </li>
                    <li>
                      <strong>Infectious Diseases:</strong> Infection control, antimicrobial therapy, and pandemic
                      response
                    </li>
                  </ul>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>
                      <strong>Critical Care:</strong> ICU management, life support systems, and critical patient
                      monitoring
                    </li>
                    <li>
                      <strong>Preventive Medicine:</strong> Health promotion, disease prevention, and public health
                      measures
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Our Commitment to Excellence */}
            <div className="bg-yellow-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Excellence</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Quality Assurance</h3>
                  <p className="text-gray-700 mb-3">
                    All our medical experts undergo continuous evaluation to ensure the highest standards of care:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Regular credential verification and annual license checks</li>
                    <li>Mandatory participation in continuing medical education programs</li>
                    <li>Regular review of patient feedback and consultation quality</li>
                    <li>Internal medical review and quality improvement protocols</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Telemedicine Training</h3>
                  <p className="text-gray-700 mb-3">Our doctors receive specialized training in:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Digital healthcare delivery best practices</li>
                    <li>Telemedicine consultation protocols</li>
                    <li>Remote patient assessment techniques</li>
                    <li>Technology platform utilization</li>
                    <li>Patient communication in digital environments</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Ethical Standards</h3>
                <p className="text-gray-700 mb-3">All our medical professionals adhere to:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Medical Council of India ethical guidelines</li>
                    <li>Telemedicine practice regulations</li>
                  </ul>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Patient confidentiality and privacy standards</li>
                    <li>Informed consent protocols for digital consultations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Consultation Booking */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Consultation Booking</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">How to Choose Your Doctor</h3>
                  <ol className="list-decimal list-inside text-gray-700 space-y-1">
                    <li>Review doctor profiles and specializations</li>
                    <li>Check availability and consultation fees</li>
                    <li>Select based on your specific medical needs</li>
                    <li>Book appointment through our secure platform</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Consultation Types Available</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Video consultations for comprehensive assessment</li>
                    <li>Follow-up consultations for ongoing care</li>
                    <li>Second opinion consultations</li>
                    <li>Prescription renewal consultations</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-gray-100 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Important Note:</strong> All consultations are conducted in accordance with Telemedicine
                Practice Guidelines and state medical council regulations. Our doctors are committed to providing safe,
                effective, and ethical healthcare through digital platforms while maintaining the highest standards of
                medical practice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
