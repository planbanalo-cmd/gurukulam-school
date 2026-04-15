'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: 'https://themewagon.github.io/fox/images/bg_1.jpg',
    title: 'Education Needs Complete Solution',
    description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    buttonText: 'Contact Us',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1516534775068-bb57e39c1a29?w=1200&h=600&fit=crop',
    title: 'Learn & Grow Together',
    description: 'Empower your future with our comprehensive learning platform and expert instructors.',
    buttonText: 'Explore Courses',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
    title: 'Transform Your Skills',
    description: 'Master new abilities with interactive lessons and real-world projects.',
    buttonText: 'Get Started',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1553619459-d2229ba7433b?w=1200&h=600&fit=crop',
    title: 'Expert Training Programs',
    description: 'Access world-class education from industry professionals and experienced mentors.',
    buttonText: 'Join Now',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop',
    title: 'Achieve Your Goals',
    description: 'Reach your potential with personalized learning paths and career guidance.',
    buttonText: 'Start Learning',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1522202176988-66da0dd55a76?w=1200&h=600&fit=crop',
    title: 'Build Your Future',
    description: 'Join thousands of learners building their careers with our innovative platform.',
    buttonText: 'Sign Up',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoPlay(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setAutoPlay(false);
  };

  const slide = slides[currentSlide];

  return (
    <section className="min-h-screen relative flex items-center justify-center py-10 md:py-0 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url('${slide.image}')`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 md:px-8 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 transition-all duration-500">
          {slide.title}
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6 md:mb-8 max-w-2xl transition-all duration-500">
          {slide.description}
        </p>

        <button className="bg-orange-600 hover:bg-orange-700 transition duration-300 px-6 md:px-8 py-3 md:py-4 text-white rounded-lg font-semibold text-sm md:text-base shadow-lg">
          {slide.buttonText}
        </button>
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 transition-all p-2 md:p-3 rounded-full text-white"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 transition-all p-2 md:p-3 rounded-full text-white"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'bg-orange-600 w-3 h-3 md:w-4 md:h-4'
                : 'bg-white/50 hover:bg-white/70 w-2 h-2 md:w-3 md:h-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}


