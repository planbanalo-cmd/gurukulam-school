'use client';

import { useState } from 'react';

export default function RequestQuote() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        course: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .input-focus:focus {
          box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.1);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left: Image */}
          <div className="animate-slide-in-left hidden lg:flex items-center justify-center">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/admission-bg.jpg"
                alt="Admission Inquiry"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 to-transparent"></div>
            </div>
          </div>

          {/* Right: Form Section */}
          <div className="animate-slide-in-right">
            {/* Header */}
            <div className="mb-8 md:mb-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Admission Inquiry
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name <span className="text-orange-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:border-orange-600 input-focus transition text-sm bg-gray-50 hover:bg-white"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name <span className="text-orange-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:border-orange-600 input-focus transition text-sm bg-gray-50 hover:bg-white"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email <span className="text-orange-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:border-orange-600 input-focus transition text-sm bg-gray-50 hover:bg-white"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone <span className="text-orange-600">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:border-orange-600 input-focus transition text-sm bg-gray-50 hover:bg-white"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>
              </div>

              {/* Course Selection */}
              <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Select Course <span className="text-orange-600">*</span>
                </label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:border-orange-600 input-focus transition text-sm appearance-none bg-gray-50 hover:bg-white cursor-pointer text-gray-800"
                >
                  <option value="">Choose a course...</option>
                  <option value="pre-primary">Pre-Primary Education</option>
                  <option value="primary">Primary Education</option>
                  <option value="secondary">Secondary Education</option>
                  <option value="higher-secondary">Higher Secondary Education</option>
                </select>
              </div>

              {/* Message */}
              <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:border-orange-600 input-focus transition text-sm resize-none bg-gray-50 hover:bg-white"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 animate-fade-in-up"
                style={{animationDelay: '0.5s'}}
              >
                Submit Inquiry
              </button>

              {/* Success Message */}
              {submitted && (
                <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-lg text-green-700 text-sm text-center font-semibold animate-fade-in-up">
                  Thank you! Your inquiry has been submitted successfully. We will contact you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
      
