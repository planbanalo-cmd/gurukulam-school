'use client';

import { motion } from 'framer-motion';
import { Users, GraduationCap, Brain, Sparkles } from 'lucide-react';
import { useEffect } from 'react';

export default function FacultyPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen px-4 py-12 
    bg-[linear-gradient(120deg,#eef5f1,#f9f7f2,#eef5f1)]">

      <div className="max-w-6xl mx-auto">

        {/* 🔥 HERO */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold 
          bg-gradient-to-r from-[#156445] via-[#0D6453] to-[#296236] 
          bg-clip-text text-transparent">
            Our Faculty
          </h1>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-lg">
            The backbone of Gurukulam’s academic excellence and student success.
          </p>
        </motion.div>

        {/* 📘 ABOUT FACULTY */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl 
          border border-[#156445]/10 mb-16"
        >
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            At Gurukulam The School, our faculty is the foundation of our academic excellence.
            We are proud to have a team of highly qualified, experienced, and dedicated educators
            who are passionate about teaching and committed to shaping young minds.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Our teachers go beyond traditional instruction—they act as mentors, guiding students
            academically as well as personally. With a student-centric approach, they focus on
            understanding each child’s strengths and nurturing their individual potential.
          </p>
        </motion.div>

        {/* 🌟 FEATURES */}
        <section className="mb-20">

          <h2 className="text-3xl font-bold text-center mb-12 
          bg-gradient-to-r from-[#156445] to-[#0D6453] 
          bg-clip-text text-transparent">
            What Makes Our Faculty Special
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              {
                icon: <GraduationCap />,
                title: "Qualified & Experienced",
                desc: "Strong academic backgrounds with years of teaching expertise."
              },
              {
                icon: <Users />,
                title: "Student-Centric Approach",
                desc: "Personalized attention to help every student learn effectively."
              },
              {
                icon: <Brain />,
                title: "Continuous Development",
                desc: "Regular training and workshops to stay updated with modern teaching."
              },
              {
                icon: <Sparkles />,
                title: "Mentorship & Guidance",
                desc: "Teachers support academic growth and personality development."
              },
              {
                icon: <Brain />,
                title: "Innovative Teaching",
                desc: "Activity-based, interactive, and tech-driven learning methods."
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >

                {/* Glow */}
                <div className="absolute -inset-[2px] rounded-2xl 
                bg-gradient-to-r from-[#156445] via-[#0D6453] to-[#296236] 
                opacity-20 blur-lg group-hover:opacity-40 transition"></div>

                {/* Card */}
                <div className="relative bg-white/80 backdrop-blur-xl 
                p-6 rounded-2xl shadow-xl border border-[#156445]/10 h-full">

                  <div className="w-12 h-12 flex items-center justify-center 
                  rounded-full mb-4 text-white 
                  bg-gradient-to-r from-[#156445] to-[#0D6453]">
                    {item.icon}
                  </div>

                  <h3 className="text-lg font-semibold text-[#156445] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm">
                    {item.desc}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>
        </section>

        {/* 🎯 COMMITMENT */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative group"
        >

          {/* Glow */}
          <div className="absolute -inset-[2px] rounded-3xl 
          bg-gradient-to-r from-[#156445] via-[#0D6453] to-[#296236] 
          opacity-20 blur-xl"></div>

          <div className="relative bg-white/80 backdrop-blur-xl 
          rounded-3xl p-10 shadow-xl border border-[#156445]/10 text-center">

            <h2 className="text-3xl font-bold mb-6 
            bg-gradient-to-r from-[#156445] to-[#0D6453] 
            bg-clip-text text-transparent">
              Our Commitment
            </h2>

            <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
              Our faculty is dedicated to creating a positive, engaging, and inspiring learning
              environment where students feel encouraged to ask questions, explore ideas, and
              achieve their full potential.
            </p>

          </div>
        </motion.section>

      </div>
    </div>
  );
}