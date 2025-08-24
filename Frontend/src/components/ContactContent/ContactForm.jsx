import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaPaperPlane,
  FaCheckCircle,
  FaStar,
  FaLeaf
} from 'react-icons/fa';

const ContactForm = () => {
  const form = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    if (!formData.firstName || !formData.email || !formData.message) {
      setError('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }

    try {
      // ✅ Make sure these are set in your .env file
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceID || !templateID || !publicKey) {
        throw new Error("Missing EmailJS credentials in .env");
      }

      const result = await emailjs.sendForm(
        serviceID,
        templateID,
        form.current,
        publicKey
      );

      console.log('✅ Email sent successfully:', result);
      setIsModalOpen(true);

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      console.error('❌ Email sending failed:', err);
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-cyan-50 overflow-hidden !py-16 !px-4 sm:!px-6 lg:!px-8">
      {/* Form Container */}
      <div className="container !mx-auto relative z-10 max-w-2xl">
        <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl !p-8">
          {/* Header */}
          <div className="text-center !mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 !mb-3 bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
              Contact Us
            </h2>
            <p className="text-gray-600 !mb-6">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          {/* Contact Form */}
          <form ref={form} onSubmit={sendEmail} className="!space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group relative">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 !mb-2 !ml-1 cursor-pointer">
                  First Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 !pl-3 flex items-center pointer-events-none text-gray-400 group-hover:text-emerald-600 transition-colors duration-300">
                    <FaUser className="h-5 w-5" />
                  </div>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="block w-full !pl-10 !pr-4 !py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-emerald-200 focus:border-emerald-400 transition-all duration-300 group-hover:border-emerald-300 group-hover:shadow-md cursor-text"
                    placeholder="Your first name"
                  />
                </div>
              </div>

              {/* Last Name */}
              <div className="group relative">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 !mb-2 !ml-1 cursor-pointer">
                  Last Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 !pl-3 flex items-center pointer-events-none text-gray-400 group-hover:text-emerald-600 transition-colors duration-300">
                    <FaUser className="h-5 w-5" />
                  </div>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="block w-full !pl-10 !pr-4 !py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-emerald-200 focus:border-emerald-400 transition-all duration-300 group-hover:border-emerald-300 group-hover:shadow-md cursor-text"
                    placeholder="Your last name"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email */}
              <div className="group relative">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 !mb-2 !ml-1 cursor-pointer">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 !pl-3 flex items-center pointer-events-none text-gray-400 group-hover:text-emerald-600 transition-colors duration-300">
                    <FaEnvelope className="h-5 w-5" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="block w-full !pl-10 !pr-4 !py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-emerald-200 focus:border-emerald-400 transition-all duration-300 group-hover:border-emerald-300 group-hover:shadow-md cursor-text"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="group relative">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 !mb-2 !ml-1 cursor-pointer">
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 !pl-3 flex items-center pointer-events-none text-gray-400 group-hover:text-emerald-600 transition-colors duration-300">
                    <FaPhone className="h-5 w-5" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="block w-full !pl-10 !pr-4 !py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-emerald-200 focus:border-emerald-400 transition-all duration-300 group-hover:border-emerald-300 group-hover:shadow-md cursor-text"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
            </div>

            {/* Subject */}
            <div className="group relative">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 !mb-2 !ml-1 cursor-pointer">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="block w-full !px-4 !py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-4 focus:ring-emerald-200 focus:border-emerald-400 transition-all duration-300 group-hover:border-emerald-300 group-hover:shadow-md cursor-text"
                placeholder="What is this regarding?"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 !mb-2 !ml-1">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                required
                className="block w-full !px-4 !py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-emerald-200 focus:border-emerald-400 transition-all duration-300 resize-none"
                placeholder="Tell us how we can help you..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex items-center justify-center !py-4 !px-6 rounded-xl text-white font-semibold transition-all duration-500 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-200 shadow-lg cursor-pointer ${isSubmitting
                  ? 'bg-emerald-400'
                  : 'bg-gradient-to-r from-emerald-600 to-emerald-400 hover:from-emerald-400 hover:to-emerald-600'
                }`}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white !mr-2"></div>
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane className="!mr-2" />
                  Send Message
                </>
              )}
            </button>

            {error && (
              <div className="rounded-xl bg-red-50 !p-4 border border-red-200">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl !p-6 max-w-sm !mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center !mx-auto !mb-4">
                <FaCheckCircle className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 !mb-2">Message Sent Successfully!</h3>
              <p className="text-sm text-gray-600 !mb-6">
                Thank you for contacting us. We'll get back to you within 24 hours.
              </p>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-400 text-white !py-2 !px-4 rounded-lg hover:from-emerald-700 hover:to-emerald-500 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
