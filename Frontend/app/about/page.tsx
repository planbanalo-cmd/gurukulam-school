'use client';

import React, { useEffect } from 'react';

export default function AboutPage() {

  // ✅ Always open page from top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50">

      {/* 🔥 HERO SECTION */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/campus-bg.jpeg')"
          }}
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            About Gurukulam The School
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
            Shaping future leaders through values, discipline, and excellence in education since 2002.
          </p>
        </div>
      </section>

      {/* 🔥 ABOUT CONTENT */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="relative max-w-5xl mx-auto group">

          {/* 🔥 Glow Border */}
          <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600 opacity-20 blur-xl group-hover:opacity-40 transition duration-500"></div>

          {/* 🧊 Card */}
          <div className="relative bg-white/80 backdrop-blur-xl border border-orange-100 rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500">

            {/* ✨ Heading */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent animate-fadeUp">
              About Us
            </h2>

            {/* ✨ Content with stagger animation */}
            <div className="space-y-5">

              <p className="text-gray-700 text-lg leading-relaxed animate-fadeUp delay-100">
                Gurukulam The School, Rewari, was established in 20 March, 2002 and carries a rich
                educational legacy of over 25 years in teaching excellence and student development.
                Rooted in the vision of going beyond conventional academics, the institution emphasizes
                the overall growth of every learner - academically, personally, and ethically.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed animate-fadeUp delay-200">
                Inspired by the ancient Indian Gurukul system, Gurukulam upholds the values of mentorship,
                strong moral foundations, and holistic education. We believe that true learning is not
                confined to textbooks but extends to building character, confidence, and a deep sense of responsibility.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed animate-fadeUp delay-300">
                Our school offers a dynamic and engaging learning environment where students are
                encouraged to think critically, explore creatively, and grow holistically. With experienced
                faculty, modern infrastructure, and a student-centric approach, we strive for academic excellence
                while nurturing co-curricular talents and essential life skills.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed animate-fadeUp delay-500">
                At Gurukulam, our mission is to shape responsible individuals who are not only academically
                proficient but also morally grounded and socially aware. We guide every child to discover their
                true potential and prepare them to face the challenges of tomorrow with confidence and
                integrity
              </p>

            </div>
          </div>
        </div>
      </section>






    </div>
  );
}