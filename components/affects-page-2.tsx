"use client"

// Categories Page Component - Replace the placeholder in Part 1
const CategoriesPage = () => (
  <div className="min-h-screen py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Confidential care for every health concern</h1>
        <p className="text-xl text-gray-600">Choose your area of focus and connect with specialized doctors</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* ED Category */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
          <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
            <Heart className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Men's Sexual Health</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Erectile dysfunction affects 1 in 3 Indian men. You're not alone. Get effective, doctor-reviewed treatment
            options with complete privacy and discretion guaranteed.
          </p>
          <div className="space-y-3 mb-8">
            <div className="flex items-center text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Licensed urologists available
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Prescription if clinically appropriate
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              100% confidential packaging
            </div>
          </div>
          <div className="space-y-3">
            <button
              onClick={() => navigateTo("ed-category")}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              Start Private Consultation
            </button>
            <button className="w-full border border-gray-300 hover:border-red-600 text-gray-700 hover:text-red-600 py-3 rounded-lg font-semibold transition-colors">
              Learn About Treatment Options
            </button>
          </div>
        </div>

        {/* Weight Management Category */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
          <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
            <Activity className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Weight Management</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Medical approach to weight loss, not quick fixes. Get personalized plans based on your health profile with
            sustainable, science-backed approaches.
          </p>
          <div className="space-y-3 mb-8">
            <div className="flex items-center text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Endocrinologist-reviewed programs
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              No crash diets or unproven methods
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Medical weight management certification
            </div>
          </div>
          <div className="space-y-3">
            <button
              onClick={() => navigateTo("weight-category")}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              Start Health Assessment
            </button>
            <button className="w-full border border-gray-300 hover:border-green-600 text-gray-700 hover:text-green-600 py-3 rounded-lg font-semibold transition-colors">
              Calculate Your BMI
            </button>
          </div>
        </div>

        {/* Diabetes Category */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
          <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
            <Brain className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Diabetes Support</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Complete diabetes management support with regular monitoring, doctor consultations, medicine delivery, and
            lifestyle guidance.
          </p>
          <div className="space-y-3 mb-8">
            <div className="flex items-center text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Diabetologist-approved care
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Regular health monitoring included
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Diabetes educator certification
            </div>
          </div>
          <div className="space-y-3">
            <button
              onClick={() => navigateTo("diabetes-category")}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              Book Diabetes Consultation
            </button>
            <button className="w-full border border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 py-3 rounded-lg font-semibold transition-colors">
              Learn About HbA1c Monitoring
            </button>
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="mt-16 text-center">
        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Same trusted approach across all categories</h3>
          <TrustBadges />
        </div>
      </div>
    </div>
  </div>
)
