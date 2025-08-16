"use client"

import type React from "react"
import { Award, Heart, User, Shield, CheckCircle, MapPin, Phone, Mail, Lock } from "lucide-react"

interface TelehealthPageProps {
  navigateTo: (page: string) => void
}

// Telehealth Page Component - Replace the placeholder in Part 1
export const TelehealthPage: React.FC<TelehealthPageProps> = ({ navigateTo }) => {
  const doctors = [
    {
      name: "Dr. Rajesh Kumar",
      specialty: "Urologist",
      experience: "15+ years",
      education: "AIIMS Delhi, MD Urology",
      languages: "Hindi, English",
    },
    {
      name: "Dr. Priya Sharma",
      specialty: "Endocrinologist",
      experience: "12+ years",
      education: "PGIMER Chandigarh, DM Endocrinology",
      languages: "Hindi, English, Punjabi",
    },
    {
      name: "Dr. Amit Patel",
      specialty: "General Physician",
      experience: "10+ years",
      education: "Grant Medical College, MD Medicine",
      languages: "Hindi, English, Gujarati",
    },
  ]

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Our Telehealth Platform</h1>
          <p className="text-xl text-gray-600">
            Licensed medical professionals providing quality healthcare through secure digital consultations
          </p>
        </div>

        {/* Platform Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Revolutionizing Healthcare Access</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our telehealth platform bridges the gap between patients and quality healthcare by providing secure,
              confidential, and convenient access to licensed medical professionals across India.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We specialize in sensitive health conditions that require privacy and discretion, ensuring that every
              patient receives personalized care without judgment or embarrassment.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Licensed by Medical Council of India</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">End-to-end encrypted consultations</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Prescription medicines delivered discreetly</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">24/7 medical support available</span>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              To make quality healthcare accessible, affordable, and stigma-free for everyone across India, especially
              for conditions that people find difficult to discuss openly.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50,000+</div>
                <div className="text-gray-600">Patients Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Privacy First</h3>
              <p className="text-gray-600">
                Your medical information is completely confidential. We use bank-level encryption and never share your
                data without consent.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Medical Excellence</h3>
              <p className="text-gray-600">
                Only licensed, experienced doctors with verified credentials. We maintain the highest standards of
                medical care.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compassionate Care</h3>
              <p className="text-gray-600">
                Stigma-free, judgment-free healthcare. Our doctors understand sensitive health concerns and provide
                empathetic care.
              </p>
            </div>
          </div>
        </div>

        {/* Our Doctors */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Meet Our Medical Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{doctor.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{doctor.specialty}</p>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>
                    <strong>Experience:</strong> {doctor.experience}
                  </p>
                  <p>
                    <strong>Education:</strong> {doctor.education}
                  </p>
                  <p>
                    <strong>Languages:</strong> {doctor.languages}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">All doctors are verified and licensed by the Medical Council of India</p>
            <button
              onClick={() => navigateTo("consultation")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Consult with Our Doctors
            </button>
          </div>
        </div>

        {/* Certifications & Compliance */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Certifications & Compliance</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: Award,
                title: "Medical Council of India",
                subtitle: "Approved Platform",
                description: "Licensed by MCI for telemedicine practice",
              },
              {
                icon: Shield,
                title: "Licensed Pharmacy",
                subtitle: "Operations",
                description: "Authorized to dispense prescription medicines",
              },
              {
                icon: Lock,
                title: "ISO 27001",
                subtitle: "Certified Security",
                description: "International data security standards",
              },
              {
                icon: CheckCircle,
                title: "Quality Assured",
                subtitle: "Medical Standards",
                description: "Follows international treatment protocols",
              },
            ].map((credential, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <credential.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-1">{credential.title}</h3>
                <p className="text-blue-600 text-sm font-medium mb-2">{credential.subtitle}</p>
                <p className="text-gray-600 text-sm">{credential.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology & Security */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Advanced Technology</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">End-to-End Encryption</h4>
                  <p className="text-gray-600 text-sm">
                    All communications are encrypted using 256-bit SSL encryption, the same standard used by banks.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">HIPAA Compliant</h4>
                  <p className="text-gray-600 text-sm">
                    Our platform follows international healthcare privacy standards for maximum data protection.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Secure Cloud Infrastructure</h4>
                  <p className="text-gray-600 text-sm">
                    Data stored on secure, compliant cloud servers with regular security audits and monitoring.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Multi-Platform Access</h4>
                  <p className="text-gray-600 text-sm">
                    Access consultations via web browser, mobile app, or WhatsApp - whatever works best for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Quality Assurance</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Doctor Verification</h4>
                  <p className="text-gray-600 text-sm">
                    All doctors undergo thorough credential verification and background checks before joining our
                    platform.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Continuous Monitoring</h4>
                  <p className="text-gray-600 text-sm">
                    Regular quality audits and patient feedback monitoring to ensure high standards of care.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Evidence-Based Treatment</h4>
                  <p className="text-gray-600 text-sm">
                    All treatment protocols follow international medical guidelines and evidence-based practices.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Patient Safety First</h4>
                  <p className="text-gray-600 text-sm">
                    Comprehensive safety protocols and emergency procedures to ensure patient wellbeing at all times.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Information */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Corporate Information</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-600 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Honest Health Private Limited</p>
                  <p className="text-gray-600">123 Medical Plaza, Cyber City</p>
                  <p className="text-gray-600">Gurgaon, Haryana 122002</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-600" />
                <p className="text-gray-600">+91-124-456-7890</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-600" />
                <p className="text-gray-600">info@honesthealth.in</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Legal Information</h3>
            <div className="space-y-2 text-gray-600">
              <p>
                <strong>CIN:</strong> U85100HR2023PTC123456
              </p>
              <p>
                <strong>GST:</strong> 06AABCH1234C1Z5
              </p>
              <p>
                <strong>Drug License:</strong> DL-HR-05-2023-12345
              </p>
              <p>
                <strong>Telemedicine License:</strong> TM-MCI-2023-67890
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-blue-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Experience Better Healthcare?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of satisfied patients who trust us with their health. Healthcare the way it should be -
            private, professional, and personal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigateTo("consultation")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Start Your Journey
            </button>
            <button
              onClick={() => navigateTo("contact")}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
