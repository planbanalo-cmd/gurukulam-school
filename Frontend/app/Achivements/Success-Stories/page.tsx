'use client';

import { motion } from 'framer-motion';
import { Trophy, Star, Target, Users } from 'lucide-react';

export default function SuccessStoriesPage() {

  const successPoints = [
    "Students achieving outstanding results in board examinations",
    "Selections in competitive exams and academic competitions",
    "Excellence in sports at school, district, and state levels",
    "Development of confident, disciplined, and responsible individuals",
    "Alumni progressing towards successful careers and higher education"
  ];

  const stories = [
    {
      name: "Aarav Sharma",
      achievement: "CBSE Topper - 98%",
      image: "/images/student1.jpg"
    },
    {
      name: "Priya Verma",
      achievement: "State Level Athlete - Gold Medalist",
      image: "/images/student2.jpg"
    },
    {
      name: "Kunal Singh",
      achievement: "Cleared National Olympiad",
      image: "/images/student3.jpg"
    }
  ];

  return (
    <div className="min-h-screen px-4 py-16 
      bg-[linear-gradient(120deg,#f5f1e8_0%,#eef5f1_40%,#f9f7f2_70%,#f5f1e8_100%)]">

      <div className="max-w-6xl mx-auto">

        {/* 🔥 HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold 
            bg-gradient-to-r from-[#156445] via-[#0D6453] to-[#296236] 
            bg-clip-text text-transparent">
            Success Stories
          </h1>

          <p className="text-gray-600 mt-4 text-lg max-w-3xl mx-auto italic">
            “Be a part of Gurukulam and create your own success story.”
          </p>
        </motion.div>

        {/* 🌟 INTRO */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <p className="text-gray-700 text-lg leading-relaxed">
            Our greatest achievement is the success of our students. Gurukulam has nurtured many bright
            minds who have excelled in academics, competitive exams, sports, and other fields.
          </p>
        </motion.div>

        {/* 🎯 SUCCESS POINTS */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">

          {successPoints.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 items-start 
              bg-white/90 backdrop-blur-xl 
              p-5 rounded-xl shadow-lg border border-green-100"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full
                bg-gradient-to-r from-[#156445] to-[#2d7a5f] text-white">
                <Star size={18} />
              </div>

              <p className="text-gray-700 text-sm">{item}</p>
            </motion.div>
          ))}

        </div>

        {/* 🏆 STUDENT STORIES */}
        <section>

          <h2 className="text-3xl font-bold text-center mb-10 
            bg-gradient-to-r from-[#156445] to-[#2d7a5f] 
            bg-clip-text text-transparent">
            Inspiring Students
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {stories.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                {/* Glow */}
                <div className="absolute -inset-[2px] rounded-2xl 
                  bg-gradient-to-r from-[#156445] to-[#2d7a5f] 
                  opacity-20 blur-lg group-hover:opacity-40 transition"></div>

                {/* Card */}
                <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden">

                  <img
                    src={item.image}
                    className="w-full h-60 object-cover"
                  />

                  <div className="p-4 text-center">
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-[#156445] text-sm font-semibold">
                      {item.achievement}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}

          </div>
        </section>

        {/* 📊 STATS */}
        <section className="mt-20 grid md:grid-cols-4 gap-6 text-center">

          {[
            ["100%", "Board Results"],
            ["500+", "Success Stories"],
            ["50+", "Competitions Won"],
            ["20+", "Years Excellence"]
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              className="relative group"
            >
              <div className="absolute -inset-[2px] rounded-2xl 
                bg-gradient-to-r from-[#156445] to-[#2d7a5f] 
                opacity-30 blur-md"></div>

              <div className="relative bg-white/90 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-green-100">
                <h3 className="text-3xl font-bold 
                  bg-gradient-to-r from-[#156445] to-[#2d7a5f] 
                  bg-clip-text text-transparent">
                  {item[0]}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">{item[1]}</p>
              </div>
            </motion.div>
          ))}

        </section>

        {/* 🚀 CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-20"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Be a part of Gurukulam and create your own success story.
          </h3>

          <button className="px-6 py-3 rounded-lg text-white font-semibold
            bg-gradient-to-r from-[#156445] via-[#0D6453] to-[#296236]
            shadow-lg hover:scale-105 transition">
            Apply Now
          </button>
        </motion.div>

      </div>
    </div>
  );
}