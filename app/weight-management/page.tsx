"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function WeightManagementPage() {
  const router = useRouter()
  const [weight, setWeight] = useState(85)
  const [height, setHeight] = useState(170)
  const [bmiResult, setBmiResult] = useState({ value: 0, category: "", recommendation: "" })

  const calculateBMI = () => {
    const heightInMeters = height / 100
    const bmi = weight / (heightInMeters * heightInMeters)
    let category = ""
    let recommendation = ""

    if (bmi < 18.5) {
      category = "Underweight"
      recommendation = "Consider consulting with a healthcare provider about healthy weight gain strategies."
    } else if (bmi < 25) {
      category = "Normal Weight"
      recommendation = "Maintain your current healthy weight through balanced diet and regular exercise."
    } else if (bmi < 30) {
      category = "Overweight"
      recommendation = "Consider medical consultation for personalized weight management strategies."
    } else {
      category = "Obese"
      recommendation = "Medical consultation recommended for comprehensive weight management plan."
    }

    setBmiResult({ value: bmi.toFixed(1), category, recommendation })
  }

  const calculatePotentialLoss = (currentWeight: number) => {
    // Based on clinical studies - typically 10-15% of body weight
    return Math.round(currentWeight * 0.12)
  }

  const scrollToConsultation = () => {
    document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Premium Header */}
      <div className="bg-gradient-to-r from-[#A67C52] to-[#8B7657] text-white text-center py-3 text-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        <span className="relative z-10">
          🏥 Licensed Medical Professionals • 📞 Free Consultation • 🔒 100% Confidential
        </span>
      </div>

      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#D4A574] via-[#B8956A] to-[#A67C52] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-6">
              Medical Weight Management
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Doctor-Prescribed Weight Loss Solutions
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Get personalized medical consultation and FDA-approved treatments delivered after professional assessment
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
              <div className="text-3xl font-bold mb-2">15,000+</div>
              <div className="text-white/90">Patients Treated</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
              <div className="text-3xl font-bold mb-2">89%</div>
              <div className="text-white/90">Success Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
              <div className="text-3xl font-bold mb-2">4.9/5</div>
              <div className="text-white/90">Patient Rating</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button
              onClick={() => router.push("/consultation")}
              className="bg-white text-[#A67C52] px-8 py-4 rounded-full font-bold text-lg hover:bg-white/90 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              Free Medical Consultation
            </button>
            <button
              onClick={() => window.open("https://wa.me/1234567890", "_blank")}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#A67C52] transition-all duration-300"
            >
              WhatsApp Consultation
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80">
            <span>🏥 Licensed Medical Practice</span>
            <span>📋 Medical Council Registered</span>
            <span>🔒 HIPAA Compliant</span>
            <span>✅ FDA Guidelines</span>
          </div>
        </div>
      </section>

      {/* BMI Calculator Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#A67C52] to-[#8B7657] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
              BMI Calculator
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Check Your BMI Status</h2>
            <p className="text-xl text-white/90">
              Calculate your Body Mass Index to understand if medical weight management could be right for you.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-white mb-2 font-semibold">Weight (kg)</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Enter your weight"
                  min="30"
                  max="300"
                />
              </div>
              <div>
                <label className="block text-white mb-2 font-semibold">Height (cm)</label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  placeholder="Enter your height"
                  min="100"
                  max="250"
                />
              </div>
            </div>

            <button
              onClick={calculateBMI}
              className="w-full bg-white text-[#A67C52] py-4 rounded-lg font-bold text-lg hover:bg-white/90 transition-all duration-300 mb-8"
            >
              Calculate BMI
            </button>

            {bmiResult.value > 0 && (
              <div className="text-center bg-white/20 rounded-lg p-6">
                <div className="text-4xl font-bold mb-2">{bmiResult.value}</div>
                <div className="text-xl font-semibold mb-4">{bmiResult.category}</div>
                <p className="text-white/90">{bmiResult.recommendation}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Weight Loss Potential Calculator */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">Calculate Your Potential Progress</h2>
          <p className="text-xl text-gray-600 mb-12">See what you could achieve with our proven programs*</p>

          <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-8 text-gray-800 text-left">Select your current weight</h3>
                <div className="text-6xl font-black text-gray-800 mb-4">{weight} kg</div>
                <input
                  type="range"
                  min="40"
                  max="150"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-8 text-gray-800 text-left">Potential weight loss (kg):</h3>
                <div className="text-6xl font-black text-blue-600 mb-4">{calculatePotentialLoss(weight)} kg</div>
              </div>
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed">
              *Based on clinical studies of our comprehensive program. Individual results may vary based on adherence to
              the program, starting weight, and other factors. This calculator provides estimates for informational
              purposes only.
            </p>

            <button
              onClick={scrollToConsultation}
              className="bg-blue-600 text-white px-12 py-4 rounded-full font-bold text-xl hover:bg-blue-700 transition-all duration-300 hover:transform hover:-translate-y-1 shadow-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#A67C52] text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
              How It Works
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">Simple, Professional, Effective</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined medical approach ensures you get the right treatment plan tailored to your specific health
              needs and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                number: "1",
                title: "Medical Consultation",
                description:
                  "Schedule a comprehensive consultation with our licensed medical professionals. Discuss your health history, goals, and current medications for a complete assessment.",
              },
              {
                number: "2",
                title: "Personalized Assessment",
                description:
                  "Our doctors evaluate your medical profile, BMI, health conditions, and lifestyle to determine the most suitable treatment approach for your specific needs.",
              },
              {
                number: "3",
                title: "Treatment Prescription",
                description:
                  "If medically appropriate, receive a personalized prescription for FDA-approved treatments. All medications are prescribed only after thorough medical evaluation.",
              },
              {
                number: "4",
                title: "Medication Delivery",
                description:
                  "Your prescribed medications are delivered directly to your doorstep with complete privacy and discretion. All packages are securely sealed and tracked.",
              },
              {
                number: "5",
                title: "Ongoing Support",
                description:
                  "Regular check-ins with your medical team to monitor progress, adjust treatment if needed, and provide additional support services like nutrition counseling when required.",
              },
              {
                number: "6",
                title: "Health Monitoring",
                description:
                  "Continuous monitoring of your health metrics and treatment response. Access to nutritionists and lifestyle coaches when prescribed as part of your treatment plan.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#A67C52] to-[#8B7657] rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#A67C52] text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
              Medical Excellence
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">Why Choose Medical Weight Management?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference of professional medical supervision and evidence-based treatment approaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "👨‍⚕️",
                title: "Licensed Medical Doctors",
                description:
                  "All consultations conducted by qualified, licensed medical professionals with expertise in weight management and metabolic health.",
              },
              {
                icon: "💊",
                title: "FDA-Approved Treatments",
                description:
                  "Access to clinically proven, FDA-approved medications prescribed only after thorough medical evaluation and when medically appropriate.",
              },
              {
                icon: "🏥",
                title: "Comprehensive Health Assessment",
                description:
                  "Complete medical evaluation including health history review, medication interactions, and personalized risk assessment.",
              },
              {
                icon: "📊",
                title: "Ongoing Medical Monitoring",
                description:
                  "Regular check-ins with your medical team to monitor progress, adjust treatments, and ensure optimal health outcomes.",
              },
              {
                icon: "🥗",
                title: "Nutritionist Support",
                description:
                  "Access to certified nutritionists and dietary guidance when prescribed as part of your comprehensive treatment plan.",
              },
              {
                icon: "🔒",
                title: "Complete Privacy & Discretion",
                description:
                  "All consultations and deliveries are completely confidential with the highest standards of medical privacy protection.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border-2 border-transparent hover:border-[#A67C52] hover:transform hover:-translate-y-2 transition-all duration-300 text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#A67C52] to-[#8B7657] rounded-full flex items-center justify-center text-3xl text-white mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#A67C52] text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
              Patient Success
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">Real Patients, Real Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from patients who have transformed their health through our medical weight management program.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                content:
                  "The medical consultation was thorough and professional. My doctor took time to understand my health history and prescribed a treatment plan that worked perfectly for me. Lost 22 kg in 8 months with proper medical supervision.",
                name: "Priya S.",
                role: "Software Engineer • Lost 22 kg",
              },
              {
                content:
                  "Having a medical professional guide my weight loss journey made all the difference. The prescribed treatment was safe, effective, and the ongoing support helped me stay on track. My diabetes is now well controlled.",
                name: "Rajesh K.",
                role: "Business Owner • Lost 28 kg",
              },
              {
                content:
                  "I appreciated the honest assessment and personalized approach. Not everyone gets the same treatment - it's truly based on your individual medical needs. The nutritionist support was invaluable when I needed it.",
                name: "Anita M.",
                role: "Teacher • Lost 18 kg",
              },
              {
                content:
                  "The convenience of having medications delivered and regular virtual check-ins made it easy to stick to my treatment plan. The medical team was always available when I had questions or concerns.",
                name: "Vikram D.",
                role: "Marketing Manager • Lost 25 kg",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#A67C52] rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical Standards Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#A67C52] text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
              Medical Standards
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">Trusted Healthcare Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to the highest standards of medical care and patient safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: "🏥",
                title: "Licensed Medical Practice",
                description:
                  "All our medical professionals are licensed and registered with the Medical Council of India. Full compliance with healthcare regulations and standards.",
              },
              {
                icon: "🔬",
                title: "Evidence-Based Medicine",
                description:
                  "All treatment protocols are based on peer-reviewed research and established medical guidelines for safe and effective weight management.",
              },
              {
                icon: "🛡️",
                title: "Patient Safety First",
                description:
                  "Comprehensive screening for contraindications, drug interactions, and medical conditions. Safety monitoring throughout treatment.",
              },
              {
                icon: "📋",
                title: "Complete Medical Records",
                description:
                  "Detailed documentation of all consultations, prescriptions, and treatment progress. Secure, encrypted medical record management.",
              },
            ].map((standard, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-[#A67C52] rounded-2xl flex items-center justify-center text-2xl text-white">
                    {standard.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{standard.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{standard.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Our Medical Certifications</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {["Medical Council of India", "ISO 27001 Certified", "HIPAA Compliant", "FDA Guidelines"].map(
                (cert, index) => (
                  <div key={index} className="bg-gray-50 px-6 py-3 rounded-lg font-semibold text-gray-700">
                    {cert}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="consultation"
        className="py-16 sm:py-20 bg-gradient-to-br from-[#A67C52] to-[#8B7657] text-white text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Start Your Medical Weight Management Journey?
          </h2>
          <p className="text-xl mb-12 text-white/90">
            Schedule a consultation with our medical professionals to discuss your health goals and determine if medical
            weight management is right for you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Free Medical Consultation</h3>
              <p className="mb-6 text-white/90">Comprehensive health assessment with licensed medical professional</p>
              <button
                onClick={() => router.push("/consultation")}
                className="bg-white text-[#A67C52] px-8 py-3 rounded-full font-bold hover:bg-white/90 transition-all duration-300"
              >
                Book Consultation
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Learn More</h3>
              <p className="mb-6 text-white/90">Get detailed information about our medical approach and treatments</p>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-[#A67C52] transition-all duration-300">
                Download Guide
              </button>
            </div>
          </div>

          <div className="text-white/80 text-sm">
            🔒 All consultations are completely confidential • 📞 Licensed medical professionals • ✅ No commitment
            required
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-2xl font-bold bg-gradient-to-r from-[#A67C52] to-[#8B7657] bg-clip-text text-transparent">
                  HonestHealth
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Transforming lives through honest, transparent, and medically-supervised weight management solutions.
                Your health journey deserves nothing less than complete honesty and professional care.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#A67C52] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#8B7657] transition-colors">
                  📧
                </div>
                <div className="w-10 h-10 bg-[#A67C52] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#8B7657] transition-colors">
                  📱
                </div>
                <div className="w-10 h-10 bg-[#A67C52] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#8B7657] transition-colors">
                  💬
                </div>
              </div>
            </div>

            {/* Medical Services */}
            <div>
              <h3 className="text-lg font-bold mb-4">Medical Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Doctor Consultation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Health Assessment
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Prescription Management
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Medical Monitoring
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Nutritionist Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Patient Care */}
            <div>
              <h3 className="text-lg font-bold mb-4">Patient Care</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    24/7 Medical Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Patient Portal Access
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Secure Medication Delivery
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Progress Tracking
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Emergency Assistance
                  </a>
                </li>
              </ul>
            </div>

            {/* Health Resources */}
            <div>
              <h3 className="text-lg font-bold mb-4">Health Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    BMI Calculator
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Goal Setting Tools
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Health Education
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Medical Research
                  </a>
                </li>
              </ul>
            </div>

            {/* Trust & Safety */}
            <div>
              <h3 className="text-lg font-bold mb-4">Trust & Safety</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Medical Disclaimer
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Patient Rights
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Regulatory Compliance
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center mb-8">
              <div className="text-sm text-gray-400">
                <div>🏥 Licensed Medical Practice</div>
                <div>📋 Medical Council of India Registered</div>
              </div>

              <div className="text-center">
                <div className="text-[#A67C52] font-bold text-lg mb-2">HonestHealth Promise</div>
                <div className="text-gray-400 text-sm">Transparent • Ethical • Results-Driven</div>
              </div>

              <div className="text-sm text-gray-400 lg:text-right">
                <div>🔒 HIPAA Compliant</div>
                <div>✅ ISO 27001 Certified</div>
              </div>
            </div>

            <div className="text-center text-gray-400">
              <p>&copy; 2025 HonestHealth India Pvt. Ltd. All rights reserved.</p>
              <p className="mt-4 text-xs max-w-4xl mx-auto leading-relaxed">
                <strong>Medical Disclaimer:</strong> HonestHealth provides general medical information and professional
                medical consultation services. This website is not a substitute for professional medical advice,
                diagnosis, or treatment. Always seek the advice of qualified healthcare providers regarding medical
                conditions. Individual treatment results may vary. Medications are prescribed only after proper medical
                evaluation and when clinically appropriate. We are committed to honest, transparent healthcare that puts
                your wellbeing first.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-6 text-xs">
                <span>🏥 Licensed Healthcare Provider</span>
                <span>📞 24/7 Medical Support</span>
                <span>🛡️ Patient Privacy Protected</span>
                <span>⭐ 4.9/5 Patient Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
