"use client"

import { useRouter } from "next/navigation"

export default function BenefitsPage() {
  const router = useRouter()

  const handleEdTreatmentClick = () => {
    router.push("/erectile-dysfunction")
  }

  const handleWhatsAppClick = () => {
    // TODO: Replace with actual WhatsApp link when provided
    window.open("https://wa.me/PHONE_NUMBER?text=I'd like to consult about ED treatment", "_blank")
  }

  const handlePrivateConsultationClick = () => {
    // TODO: Replace with actual WhatsApp link when provided
    window.open("https://wa.me/PHONE_NUMBER?text=I'd like a private consultation about ED treatment", "_blank")
  }

  const handleStartJourneyClick = () => {
    // TODO: Replace with actual WhatsApp link when provided
    window.open("https://wa.me/PHONE_NUMBER?text=I'd like to start my ED treatment journey", "_blank")
  }

  return (
    <div className="bg-[#87CEEB] min-h-screen px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
          {/* Hero Section */}
          <div className="bg-gradient-to-br from-[#87CEEB] to-[#4682B4] px-6 sm:px-12 lg:px-16 py-12 sm:py-16 lg:py-20 text-center text-white">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6">
              Regain Your Confidence in the Bedroom
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl opacity-90 mb-8 sm:mb-10 lg:mb-12 leading-relaxed max-w-4xl mx-auto">
              Discreet, effective ED treatment from licensed doctors. Get personalized solutions delivered to your door
              with complete privacy and professional care.
            </p>

            {/* Hero Image Placeholder */}
            <div className="w-72 sm:w-80 lg:w-96 h-80 sm:h-96 lg:h-[450px] mx-auto my-8 sm:my-10 lg:my-12 rounded-2xl shadow-2xl overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-ED-banner.png-DpkQMkitBJfjCSoB5HP5IadDceklA8.png"
                alt="Happy couple representing restored intimacy and connection"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-10 opacity-90">
              <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
                <span>✓ Licensed Doctors</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
                <span>✓ 100% Discreet</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
                <span>✓ FDA Approved</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center pb-8 sm:pb-10">
              <button
                onClick={handleEdTreatmentClick}
                className="bg-white text-[#4682B4] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                Explore ED Treatments
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="bg-transparent text-white px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 rounded-xl font-semibold text-base sm:text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                WhatsApp Consultation
              </button>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 min-h-[600px]">
            {/* Card 1: Large - Restore Intimacy */}
            <div className="lg:col-span-2 lg:row-span-2 bg-[#f8f9fa] p-8 sm:p-12 lg:p-16 flex flex-col justify-center items-center text-center text-gray-800 min-h-[600px]">
              <div className="w-56 sm:w-64 lg:w-72 h-64 sm:h-72 lg:h-80 rounded-2xl shadow-2xl overflow-hidden mb-6 sm:mb-8">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-ED-banner-2.png-OS6ecItKIUXxqb1GwZJyIdAJWQVfj8.png"
                  alt="Happy couple in intimate moment representing restored connection"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
                Restore Intimacy & Connection
              </h3>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 lg:mb-10 opacity-80 max-w-md lg:max-w-lg">
                Strengthen your relationship with effective ED treatment. Regain confidence and improve your intimate
                moments together. Experience the difference that professional medical care can make in your
                relationship.
              </p>
              <button
                onClick={handleStartJourneyClick}
                className="bg-[#4682B4] text-white px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#4682B4] rounded-xl font-semibold text-base sm:text-lg hover:bg-[#5a72c4] hover:border-[#5a72c4] hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                Start Your Journey
              </button>
            </div>

            {/* Card 2: Treatment Options */}
            <div className="bg-[#f8f9fa] p-8 sm:p-12 lg:p-16 flex flex-col justify-center items-center text-center text-gray-800 min-h-[350px]">
              <div className="w-48 sm:w-52 lg:w-56 h-52 sm:h-56 lg:h-60 rounded-2xl shadow-2xl overflow-hidden mb-6 sm:mb-8">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-ED-banner-4.png-lH2xUt0Dz3mF47NjdKCIxuxfaxwr2z.png"
                  alt="Red triangular ED medication tablets representing treatment options"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-5 leading-tight">
                Proven Treatment Options
              </h3>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 opacity-80 max-w-xs">
                Access FDA-approved medications like Sildenafil and Tadalafil. Safe, effective solutions prescribed by
                licensed healthcare professionals.
              </p>
              <button
                onClick={handleEdTreatmentClick}
                className="bg-[#4682B4] text-white px-5 sm:px-6 py-2 sm:py-3 border-2 border-[#4682B4] rounded-xl font-semibold text-sm sm:text-base hover:bg-[#5a72c4] hover:border-[#5a72c4] hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                View Treatments
              </button>
            </div>

            {/* Card 3: Discreet Care */}
            <div className="bg-[#f8f9fa] p-8 sm:p-12 lg:p-16 flex flex-col justify-center items-center text-center text-gray-800 min-h-[350px]">
              <div className="w-48 sm:w-52 lg:w-56 h-52 sm:h-56 lg:h-60 rounded-2xl shadow-2xl overflow-hidden mb-6 sm:mb-8">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Website-ED-banner-5.png-rO5a6M321MhB4LkKc1l6wwpX4Fcn1v.png"
                  alt="Brown envelope representing discreet packaging and confidential delivery"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-5 leading-tight">
                Discreet & Professional Care
              </h3>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 opacity-80 max-w-xs">
                Get expert medical consultation from the comfort of your home. Private consultations with qualified
                doctors who understand your needs.
              </p>
              <button
                onClick={handlePrivateConsultationClick}
                className="bg-[#4682B4] text-white px-5 sm:px-6 py-2 sm:py-3 border-2 border-[#4682B4] rounded-xl font-semibold text-sm sm:text-base hover:bg-[#5a72c4] hover:border-[#5a72c4] hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
