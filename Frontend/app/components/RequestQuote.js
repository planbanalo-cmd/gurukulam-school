'use client';

import { useState } from 'react';
import { CheckCircle2, Mail, Phone, User, BookOpen, MessageSquare } from 'lucide-react';

export default function AdmissionForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    grade: '',
    parentName: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

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
        grade: '',
        parentName: '',
        message: ''
      });
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-orange-50 overflow-hidden">
      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes pulse-ring {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(249, 115, 22, 0.7);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(249, 115, 22, 0);
          }
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.7s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-ring {
          animation: pulse-ring 2s infinite;
        }
        
        .input-focus:focus {
          box-shadow: 0 0 0 4px rgba(249, 115, 22, 0.1);
          border-color: rgb(249, 115, 22);
        }

        .field-icon {
          transition: all 0.3s ease;
        }

        input:focus ~ .field-icon,
        textarea:focus ~ .field-icon,
        select:focus ~ .field-icon {
          color: rgb(249, 115, 22);
        }

        .form-card {
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }

        .form-card:hover {
          border-color: rgb(249, 115, 22);
          transform: translateY(-2px);
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4 animate-fade-in-up">
            <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
              Join Our School Community
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            School Admission Enquiry
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Take the first step towards a brighter future. Fill out the form below and our admissions team will get in touch with you shortly.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left: Info Card with Illustration */}
          <div className="animate-slide-in-left hidden lg:flex flex-col justify-center">
            <div className="relative">
              {/* Decorative Background */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl blur opacity-30"></div>
              
              <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                <div className="space-y-8">
                  {/* Feature 1 */}
                  <div className="flex gap-4 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-100 text-blue-600">
                        <BookOpen className="h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">World-Class Education</h3>
                      <p className="text-slate-600 text-sm mt-1">Comprehensive curriculum with modern teaching methods</p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex gap-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-indigo-100 text-indigo-600">
                        <User className="h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">Expert Faculty</h3>
                      <p className="text-slate-600 text-sm mt-1">Dedicated teachers committed to student success</p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex gap-4 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-100 text-blue-600">
                        <MessageSquare className="h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">Student Support</h3>
                      <p className="text-slate-600 text-sm mt-1">Holistic development and personalized attention</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-sm text-slate-600 mb-3">Questions? Contact us directly:</p>
                    <div className="flex items-center gap-2 text-blue-600 font-semibold">
                      <Phone className="h-4 w-4" />
                      +91 XXXX XXXX XX
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form Section */}
          <div className="animate-slide-in-right">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Student Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <div className="form-card rounded-xl bg-white p-4 border border-slate-200">
                  <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                    <User className="h-4 w-4 text-blue-600" />
                    Student First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('firstName')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-3 py-2.5 border border-slate-200 rounded-lg focus:outline-none input-focus transition text-sm bg-white placeholder-slate-400 text-black"
                    placeholder="John"
                  />
                </div>
                <div className="form-card rounded-xl bg-white p-4 border border-slate-200">
                  <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                    <User className="h-4 w-4 text-blue-600" />
                    Student Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('lastName')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-3 py-2.5 border border-slate-200 rounded-lg focus:outline-none input-focus transition text-sm bg-white placeholder-slate-400 text-black"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <div className="form-card rounded-xl bg-white p-4 border border-slate-200">
                  <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                    <Mail className="h-4 w-4 text-blue-600" />
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-3 py-2.5 border border-slate-200 rounded-lg focus:outline-none input-focus transition text-sm bg-white placeholder-slate-400 text-black"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="form-card rounded-xl bg-white p-4 border border-slate-200">
                  <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                    <Phone className="h-4 w-4 text-blue-600" />
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-3 py-2.5 border border-slate-200 rounded-lg focus:outline-none input-focus transition text-sm bg-white placeholder-slate-400 text-black"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>
              </div>

              {/* Grade and Parent Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <div className="form-card rounded-xl bg-white p-4 border border-slate-200">
                  <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-orange-600" />
                    Grade <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('grade')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-3 py-2.5 border border-slate-200 rounded-lg focus:outline-none input-focus transition text-sm appearance-none bg-white cursor-pointer text-slate-700 "
                  >
                    <option value="">Select grade...</option>
                    <option value="nursery">Nursery</option>
                    <option value="kg">Kindergarten</option>
                    <option value="1">Grade 1</option>
                    <option value="2">Grade 2</option>
                    <option value="3">Grade 3</option>
                    <option value="4">Grade 4</option>
                    <option value="5">Grade 5</option>
                    <option value="6">Grade 6</option>
                    <option value="7">Grade 7</option>
                    <option value="8">Grade 8</option>
                    <option value="9">Grade 9</option>
                    <option value="10">Grade 10</option>
                  </select>
                </div>
                <div className="form-card rounded-xl bg-white p-4 border border-slate-200">
                  <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                    <User className="h-4 w-4 text-orange-600" />
                    Parent/Guardian Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('parentName')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-3 py-2.5 border border-slate-200 rounded-lg focus:outline-none input-focus transition text-sm bg-white placeholder-slate-400 text-black"
                    placeholder="Parent's name"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="animate-fade-in-up" style={{animationDelay: '0.5s'}}>
                <div className="form-card rounded-xl bg-white p-4 border border-slate-200">
                  <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-orange-600" />
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows="3"
                    className="w-full px-3 py-2.5 border border-slate-200 rounded-lg focus:outline-none input-focus transition text-sm resize-none bg-white placeholder-slate-400 text-black"
                    placeholder="Tell us more about your child's interests and needs..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 animate-fade-in-up flex items-center justify-center gap-2"
                style={{animationDelay: '0.6s'}}
              >
                <span>Submit Admission Enquiry</span>
              </button>

              {/* Success Message */}
              {submitted && (
                <div className="p-4 bg-emerald-50 border-l-4 border-emerald-500 rounded-lg animate-fade-in-up flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-emerald-900 font-semibold">Success!</p>
                    <p className="text-emerald-700 text-sm mt-1">Your enquiry has been submitted successfully. Our admissions team will contact you within 24 hours.</p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}