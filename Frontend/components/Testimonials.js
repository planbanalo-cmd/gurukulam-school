'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Rahul Verma',
      relation: 'Parent',
      content: 'The teachers at Gurukulam School are highly dedicated and focus on individual development. My son has shown remarkable improvement in academics and personality.',
      initials: 'RV',
      rating: 5
    },
    {
      name: 'Aisha Khan',
      relation: 'Student (Class X)',
      content: 'I love coming to school because the teachers make learning fun and interesting. The facilities and support provided here are excellent.',
      initials: 'AK',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      relation: 'Parent',
      content: 'My daughter has developed confidence and excellent communication skills through her time at Gurukulam. The holistic approach to education is commendable.',
      initials: 'PS',
      rating: 5
    },
    {
      name: 'Amit Patel',
      relation: 'Parent',
      content: 'The school provides a safe, nurturing environment. The extracurricular activities and sports facilities are top-notch. Highly recommended!',
      initials: 'AP',
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      <style>{`
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

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slide-in {
          animation: slideIn 0.7s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .testimonial-card {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .quote-icon {
          opacity: 0.1;
          transition: opacity 0.3s ease;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-4 animate-fade-in-up">
            <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
              Real Stories, Real Impact
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 animate-fade-in-up text-balance" style={{animationDelay: '0.1s'}}>
            What Parents & Students Say
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Hear directly from families who have experienced the transformative impact of our school community
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="mb-12 md:mb-16 animate-scale-in">
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-orange-100 to-transparent rounded-full blur-3xl opacity-40"></div>
            
            <div className="relative p-8 md:p-12 lg:p-16">
              {/* Quote Icon */}
              <div className="mb-8">
                <Quote className="w-12 h-12 text-orange-600 opacity-20" />
              </div>

              {/* Testimonial Text */}
              <p className="text-lg md:text-2xl text-slate-700 leading-relaxed mb-8 font-light">
                &quot;{currentTestimonial.content}&quot;
              </p>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                    {currentTestimonial.initials}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{currentTestimonial.name}</h3>
                    <p className="text-orange-600 font-semibold text-sm">{currentTestimonial.relation}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1">
                  {Array(currentTestimonial.rating).fill(0).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-6 mb-16 md:mb-20">
          <button
            onClick={prevSlide}
            className="group p-3 md:p-4 rounded-full border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-8 h-3 bg-orange-600 shadow-lg'
                    : 'w-3 h-3 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="group p-3 md:p-4 rounded-full border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Testimonial Grid Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 md:mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`testimonial-card p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-orange-50 border-orange-600 shadow-lg'
                  : 'bg-white border-slate-200 hover:border-orange-400 hover:shadow-md'
              }`}
            >
              <div className="flex items-start gap-3 mb-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white ${
                  index === currentIndex ? 'bg-orange-600' : 'bg-slate-400'
                }`}>
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-orange-600 font-medium">{testimonial.relation}</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 line-clamp-2">{testimonial.content}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 animate-fade-in-up">
          <div className="group p-8 md:p-10 bg-white rounded-xl border-2 border-slate-100 hover:border-orange-600 transition-all duration-300 text-center shadow-lg hover:shadow-xl">
            <p className="text-4xl md:text-5xl font-bold text-orange-600 mb-3">500+</p>
            <p className="text-slate-700 font-semibold text-sm md:text-base">Happy Families</p>
            <p className="text-slate-500 text-xs mt-2">Trusting us with their education</p>
          </div>
          <div className="group p-8 md:p-10 bg-white rounded-xl border-2 border-slate-100 hover:border-orange-600 transition-all duration-300 text-center shadow-lg hover:shadow-xl">
            <p className="text-4xl md:text-5xl font-bold text-orange-600 mb-3">4.9/5</p>
            <p className="text-slate-700 font-semibold text-sm md:text-base">Average Rating</p>
            <p className="text-slate-500 text-xs mt-2">Based on parent reviews</p>
          </div>
          <div className="group p-8 md:p-10 bg-white rounded-xl border-2 border-slate-100 hover:border-orange-600 transition-all duration-300 text-center shadow-lg hover:shadow-xl">
            <p className="text-4xl md:text-5xl font-bold text-orange-600 mb-3">95%</p>
            <p className="text-slate-700 font-semibold text-sm md:text-base">Satisfaction Rate</p>
            <p className="text-slate-500 text-xs mt-2">Would recommend to others</p>
          </div>
        </div>
      </div>
    </section>
  );
}
