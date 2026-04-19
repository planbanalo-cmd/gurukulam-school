'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function About() {
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef(null);
  const [stats, setStats] = useState({
    teachers: 0,
    students: 0,
    courses: 0,
    awards: 0
  });

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isInView) {
          // Calculate parallax offset based on element position
          const scrollPosition = window.scrollY;
          const elementTop = sectionRef.current.offsetTop;
          const distance = scrollPosition - elementTop;
          setOffset(distance * 0.3); // Parallax speed: 30% of scroll
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animate stats when component mounts
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        teachers: Math.min(prev.teachers + 3, 156),
        students: Math.min(prev.students + 8, 2145),
        courses: Math.min(prev.courses + 1, 25),
        awards: Math.min(prev.awards + 1, 32)
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/campus-bg.jpeg)',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          transform: `translateY(${offset}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
            
            {/* Left: Campus Image */}
            <div className="flex justify-center md:justify-start">
              <div className="relative w-full max-w-md">
                <div className="rounded-lg overflow-hidden shadow-2xl">
                  <img 
                    src="/images/campus-image.JPG" 
                    alt="Gurukulam School Campus" 
                    className="w-full h-80 md:h-96 object-cover"
                  />
                </div>
                {/* Decorative overlay */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-600 rounded-lg opacity-20 z-0"></div>
              </div>
            </div>

            {/* Right: About Content */}
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6 leading-tight">
                About Gurukulam School
              </h2>
              
              <p className="text-base md:text-lg mb-5 leading-relaxed text-gray-100">
                Gurukulam School is a premier educational institution dedicated to nurturing young minds and fostering holistic development. Our commitment to excellence in education combined with modern infrastructure creates an ideal learning environment.
              </p>

              <p className="text-base md:text-lg mb-6 leading-relaxed text-gray-100">
                With a team of experienced and certified educators, we provide quality education across diverse streams. Our campus features state-of-the-art facilities including laboratories, libraries, sports grounds, and digital learning centers to ensure comprehensive development of every student.
              </p>

              <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16 pt-12 border-t border-white/20">
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-400 mb-2">
                {stats.teachers}+
              </div>
              <p className="text-sm md:text-base text-gray-100 font-semibold">Certified Teachers</p>
            </div>

            <div className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-400 mb-2">
                {stats.students}+
              </div>
              <p className="text-sm md:text-base text-gray-100 font-semibold">Total Students</p>
            </div>

            <div className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-400 mb-2">
                {stats.courses}+
              </div>
              <p className="text-sm md:text-base text-gray-100 font-semibold">Courses Offered</p>
            </div>

            <div className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-400 mb-2">
                {stats.awards}+
              </div>
              <p className="text-sm md:text-base text-gray-100 font-semibold">Awards Won</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}