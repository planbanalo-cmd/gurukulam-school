'use client';

import { motion } from 'framer-motion';
import {
  Home,
  ShieldCheck,
  Users,
  BookOpen,
  Heart,
  Star,
} from 'lucide-react';

export default function BoardingPage() {
  return (
    <div
      className="min-h-screen 
      px-4 md:px-10 lg:px-20 
      py-16 md:py-24
      bg-[linear-gradient(120deg,#eef5f1_0%,#f5f1e8_40%,#eef5f1_100%)]"
    >
      {/* 🔥 HERO */}
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20 md:mb-28"
      >
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold 
          bg-gradient-to-r from-[#156445] via-[#0D6453] to-[#296236] 
          bg-clip-text text-transparent"
        >
          Welcome to Boarding
        </h1>

        <p className="text-gray-600 mt-5 text-lg md:text-xl">
          (Only boys' hostel applicable)
        </p>
      </motion.section>

      {/* 🏠 INTRO CARD */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative max-w-5xl mx-auto mb-24 md:mb-32 group"
      >
        {/* Glow */}
        <div
          className="absolute -inset-[2px] rounded-3xl 
          bg-gradient-to-r from-[#156445] via-[#0D6453] to-[#296236] 
          opacity-20 blur-xl group-hover:opacity-40 transition duration-500"
        ></div>

        {/* Card */}
        <div
          className="relative bg-white/80 backdrop-blur-xl border 
          border-[#156445]/20 rounded-3xl 
          p-8 md:p-12 lg:p-14 shadow-xl"
        >
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            At{' '}
            <span className="font-semibold text-[#156445]">
              Gurukulam The School
            </span>
            , our boarding facility is more than just a place to stay—it is a
            home where students grow, learn, and thrive together.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            We provide a safe, disciplined, and nurturing environment that
            encourages independence, responsibility, and strong moral values.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            With dedicated wardens, structured routines, and a supportive
            atmosphere, every child receives personal care and attention. Our
            boarding life is designed to create a balance between academics,
            activities, and personal well-being, ensuring holistic development.
          </p>
        </div>
      </motion.section>

      {/* 🌟 WHY BOARDING */}
      <section className="max-w-7xl mx-auto mb-24 md:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-20"
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold 
            bg-gradient-to-r from-[#156445] via-[#0D6453] to-[#296236] 
            bg-clip-text text-transparent"
          >
            Why Enroll in a Boarding School?
          </h2>

          <p className="text-gray-600 mt-5 text-lg max-w-3xl mx-auto leading-relaxed">
            Choosing a boarding school offers students a unique opportunity to
            grow beyond the classroom
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Home />,
              title: 'Independence & Responsibility',
              desc: 'Students learn to manage time, decisions, and daily routines.',
            },
            {
              icon: <BookOpen />,
              title: 'Focused Learning',
              desc: 'Structured schedules help maintain discipline and academic focus.',
            },
            {
              icon: <Star />,
              title: 'Holistic Development',
              desc: 'Equal focus on academics, sports, and co-curricular activities.',
            },
            {
              icon: <ShieldCheck />,
              title: 'Strong Values',
              desc: 'Builds character, discipline, and respect.',
            },
            {
              icon: <Users />,
              title: '24/7 Support',
              desc: 'Continuous guidance and mentorship from staff.',
            },
            {
              icon: <Heart />,
              title: 'Lifelong Friendships',
              desc: 'Students develop strong bonds and social skills.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              {/* Glow */}
              <div
                className="absolute -inset-[2px] rounded-2xl 
                bg-gradient-to-r from-[#156445] via-[#0D6453] to-[#296236] 
                opacity-20 blur-lg group-hover:opacity-40 transition duration-500"
              ></div>

              {/* Card */}
              <div
                className="relative h-full bg-white/80 backdrop-blur-xl 
                border border-[#156445]/20 rounded-2xl 
                p-7 shadow-lg"
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 flex items-center justify-center 
                  rounded-full mb-5
                  bg-gradient-to-r from-[#156445] to-[#0D6453] text-white"
                >
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold text-[#156445] mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🚀 CTA SECTION */}
      <section className="pb-10">
        <div
          className="relative overflow-hidden rounded-[40px]
          max-w-7xl mx-auto
          bg-gradient-to-r from-[#0D6453] via-[#156445] to-[#296236]
          px-8 md:px-16 py-20 md:py-24
          text-center 
          shadow-[0_25px_80px_rgba(21,100,69,0.3)]"
        >
          {/* Blur */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E4CC6F]/20 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Ready to Experience
              <br />
              Boarding Life?
            </h2>

            <p className="text-white/80 text-lg max-w-3xl mx-auto mt-6 leading-relaxed">
              Join Gurukulam The School and become part of a safe,
              disciplined, and inspiring residential community designed for
              academic excellence and personal growth.
            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-12">
              <button
                className="px-8 py-4 rounded-2xl
                bg-white text-[#156445]
                font-bold hover:scale-105 transition duration-300"
              >
                Apply Now
              </button>

              <button
                className="px-8 py-4 rounded-2xl
                border border-white/20
                bg-white/10 backdrop-blur-xl
                text-white font-semibold 
                hover:bg-white/20 transition duration-300"
              >
                Schedule Visit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}