'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

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
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">What Parents & Students Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Real testimonials from families who have experienced the Gurukulam School difference.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-8 md:p-12">
          <div className="text-center">
            {/* Avatar */}
            <div className="w-16 h-16 md:w-24 md:h-24 bg-orange-600 rounded-full flex items-center justify-center text-white text-2xl md:text-4xl font-bold mx-auto mb-6">
              {currentTestimonial.initials}
            </div>

            {/* Rating */}
            <div className="flex justify-center gap-1 mb-6">
              {Array(currentTestimonial.rating).fill(0).map((_, i) => (
                <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto italic">
              &quot;{currentTestimonial.content}&quot;
            </p>

            {/* Name and Relation */}
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">{currentTestimonial.name}</h3>
            <p className="text-orange-600 font-semibold text-sm md:text-base mb-8">{currentTestimonial.relation}</p>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4">
              <button
                onClick={prevSlide}
                className="bg-orange-600 hover:bg-orange-700 transition duration-300 text-white p-3 md:p-4 rounded-full shadow-md hover:shadow-lg"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              {/* Dots Indicator */}
              <div className="flex items-center gap-2 px-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition duration-300 ${
                      index === currentIndex ? 'w-8 bg-orange-600' : 'w-2 bg-orange-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="bg-orange-600 hover:bg-orange-700 transition duration-300 text-white p-3 md:p-4 rounded-full shadow-md hover:shadow-lg"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Below */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <p className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">500+</p>
            <p className="text-gray-700 font-semibold text-sm md:text-base">Happy Families</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <p className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">4.9/5</p>
            <p className="text-gray-700 font-semibold text-sm md:text-base">Average Rating</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <p className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">95%</p>
            <p className="text-gray-700 font-semibold text-sm md:text-base">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
