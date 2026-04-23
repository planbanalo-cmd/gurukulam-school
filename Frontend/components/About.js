'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function About() {
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef(null);

  const [expanded, setExpanded] = useState(false);

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
          const scrollPosition = window.scrollY;
          const elementTop = sectionRef.current.offsetTop;
          const distance = scrollPosition - elementTop;
          setOffset(distance * 0.3);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // ✅ Full About Text
  const fullText = `Gurukulam The School, Rewari, was established in 20 March, 2002 and carries a rich educational legacy of over 25 years in teaching excellence and student development. Rooted in the vision of going beyond conventional academics, the institution emphasizes the overall growth of every learner - academically, personally, and ethically.

Inspired by the ancient Indian Gurukul system, Gurukulam upholds the values of mentorship, strong moral foundations, and holistic education. We believe that true learning is not confined to textbooks but extends to building character, confidence, and a deep sense of responsibility.

Our school offers a dynamic and engaging learning environment where students are encouraged to think critically, explore creatively, and grow holistically. With experienced faculty, modern infrastructure, and a student-centric approach, we strive for academic excellence while nurturing co-curricular talents and essential life skills.

At Gurukulam, our mission is to shape responsible individuals who are not only academically proficient but also morally grounded and socially aware. We guide every child to discover their true potential and prepare them to face the challenges of tomorrow with confidence and integrity.`;

  const shortText = fullText.slice(0, 280) + '...';

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      {/* Background */}
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

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">

            {/* Image */}
            <div className="flex justify-center md:justify-start">
              <div className="relative w-full max-w-md">
                <div className="rounded-lg overflow-hidden shadow-2xl">
                  <img
                    src="/images/campus-image.JPG"
                    alt="Gurukulam School Campus"
                    className="w-full h-80 md:h-96 object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-600 rounded-lg opacity-20"></div>
              </div>
            </div>

            {/* Content */}
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About Gurukulam The School
              </h2>

              <p className="text-base md:text-lg leading-relaxed text-gray-100 whitespace-pre-line">
                {expanded ? fullText : shortText}
              </p>

              <Link
                href="/about"
                scroll={true}
                className="inline-block mt-6 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
              >
               Learn More
              </Link>


            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16 pt-12 border-t border-white/20">

            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-orange-400">
                {stats.teachers}+
              </div>
              <p className="text-gray-100 font-semibold">Certified Teachers</p>
            </div>

            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-orange-400">
                {stats.students}+
              </div>
              <p className="text-gray-100 font-semibold">Total Students</p>
            </div>

            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-orange-400">
                {stats.courses}+
              </div>
              <p className="text-gray-100 font-semibold">Courses Offered</p>
            </div>

            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-orange-400">
                {stats.awards}+
              </div>
              <p className="text-gray-100 font-semibold">Awards Won</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}