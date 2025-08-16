"use client"

import type React from "react"
import { MessageCircle, Phone, Mail, Clock, MapPin, User } from "lucide-react"

interface ContactPageProps {
  navigateTo: (page: string) => void
}

// Contact Page Component - Replace the placeholder in Part 1
export const ContactPage: React.FC<ContactPageProps> = ({ navigateTo }) => (
  <div className="min-h-screen py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600">Multiple ways to get the support you need</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Methods */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>
          <div className="space-y-6">
            {/* WhatsApp Support */}
            <div className="flex items-start space-x-4 p-6 bg-green-50 rounded-xl border border-green-200 hover:bg-green-100 transition-colors">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">WhatsApp Support</h3>
                <p className="text-green-600 mb-2 font-medium">+91-98765-43210</p>
                <p className="text-sm text-gray-600 mb-3">24/7 medical queries and consultations</p>
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Start WhatsApp Chat
                </button>
              </div>
            </div>

            {/* Phone Support */}
            <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-xl border border-blue-200 hover:bg-blue-100 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">Phone Support</h3>
                <p className="text-blue-600 mb-2 font-medium">1800-123-4567 (Toll Free)</p>
                <p className="text-sm text-gray-600 mb-3">Customer service, 9 AM - 9 PM (Mon-Sun)</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Call Now
                </button>
              </div>
            </div>

            {/* Email Support */}
            <div className="flex items-start space-x-4 p-6 bg-purple-50 rounded-xl border border-purple-200 hover:bg-purple-100 transition-colors">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
                <p className="text-purple-600 mb-2 font-medium">support@honesthealth.in</p>
                <p className="text-sm text-gray-600 mb-3">48-hour response guarantee</p>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Send Email
                </button>
              </div>
            </div>

            {/* Emergency Support */}
            <div className="flex items-start space-x-4 p-6 bg-red-50 rounded-xl border border-red-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-red-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">Emergency Consultation</h3>
                <p className="text-red-600 mb-2 font-medium">+91-98765-43210</p>
                <p className="text-sm text-gray-600 mb-3">Urgent medical support (24/7)</p>
                <p className="text-xs text-red-600">For life-threatening emergencies, call 108 immediately</p>
              </div>
            </div>
          </div>

          {/* Response Times */}
          <div className="mt-8 bg-gray-50 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Expected Response Times</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">WhatsApp:</span>
                <span className="font-medium text-green-600">5 minutes</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Phone:</span>
                <span className="font-medium text-blue-600">Immediate</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Email:</span>
                <span className="font-medium text-purple-600">2 hours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Emergency:</span>
                <span className="font-medium text-red-600">15 minutes</span>
              </div>
            </div>
          </div>

          {/* Office Information */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Office Information</h3>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-start space-x-3 mb-4">
                <MapPin className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Honest Health Private Limited</p>
                  <p className="text-gray-600">123 Medical Plaza, Cyber City</p>
                  <p className="text-gray-600">Gurgaon, Haryana 122002, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-5 h-5 text-gray-600 flex-shrink-0" />
                <div>
                  <p className="text-gray-600">Business Hours:</p>
                  <p className="text-gray-600">Monday - Friday: 9 AM - 6 PM</p>
                  <p className="text-gray-600">Saturday: 10 AM - 4 PM</p>
                  <p className="text-gray-600">Sunday: Closed (Emergency support available)</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <User className="w-5 h-5 text-gray-600 flex-shrink-0" />
                <div>
                  <p className="text-gray-600">CIN: U85100HR2023PTC123456</p>
                  <p className="text-gray-600">GST: 06AABCH1234C1Z5</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+91 Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>General Inquiry</option>
                  <option>Medical Question</option>
                  <option>Technical Support</option>
                  <option>Billing Question</option>
                  <option>Prescription Issue</option>
                  <option>Delivery Concern</option>
                  <option>Feedback/Suggestion</option>
                  <option>Partnership Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <label className="ml-2 block text-sm text-gray-600">
                  I agree to receive follow-up communications via email or phone
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Additional Support Options */}
          <div className="mt-8 space-y-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Need Immediate Help?</h4>
              <p className="text-gray-600 text-sm mb-3">
                For urgent medical questions, start a consultation right away.
              </p>
              <button
                onClick={() => navigateTo("consultation")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Start Immediate Consultation
              </button>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Have Questions About Our Services?</h4>
              <p className="text-gray-600 text-sm mb-3">Check our comprehensive FAQ section for quick answers.</p>
              <button
                onClick={() => navigateTo("faq")}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                View FAQ
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Location Map Placeholder */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Location</h2>
        <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center border border-gray-200">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">Interactive map would be integrated here</p>
            <p className="text-gray-500 text-sm">123 Medical Plaza, Cyber City, Gurgaon</p>
          </div>
        </div>
      </div>

      {/* Service Areas */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Service Areas</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <h3 className="font-semibold text-gray-900 mb-3">Consultations Available</h3>
            <p className="text-gray-600 text-sm">
              All states and union territories across India. Online consultations available anywhere with internet
              connection.
            </p>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-xl">
            <h3 className="font-semibold text-gray-900 mb-3">Medicine Delivery</h3>
            <p className="text-gray-600 text-sm">
              Free delivery to 500+ cities. Same-day delivery available in Delhi NCR, Mumbai, Bangalore, Chennai,
              Hyderabad, Pune.
            </p>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-xl">
            <h3 className="font-semibold text-gray-900 mb-3">Support Languages</h3>
            <p className="text-gray-600 text-sm">
              Hindi, English, Tamil, Telugu, Bengali, Marathi, Gujarati, Kannada, Malayalam, Punjabi.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)
