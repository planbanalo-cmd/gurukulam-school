'use client';

import { motion } from 'framer-motion';
import { Users, ShieldCheck, Home } from 'lucide-react';

export default function RoomAllocationPage() {
  return (
    <div className="min-h-screen px-4 md:px-10 lg:px-20 py-14 
    bg-[linear-gradient(120deg,#eef5f1_0%,#f5f1e8_40%,#eef5f1_100%)]">

      {/* 🔥 HERO */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-14"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold 
        bg-gradient-to-r from-[#156445] via-[#0D6453] to-[#296236] 
        bg-clip-text text-transparent">
          Room Allocation & Accommodation
        </h1>

        <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
          Comfortable, safe, and well-organized hostel living designed for student well-being.
        </p>
      </motion.div>

      {/* 🏠 MAIN CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative max-w-5xl mx-auto mb-16 group"
      >
        {/* Glow */}
        <div className="absolute -inset-[2px] rounded-3xl 
        bg-gradient-to-r from-[#156445] via-[#0D6453] to-[#296236] 
        opacity-20 blur-xl group-hover:opacity-40 transition"></div>

        {/* Content */}
        <div className="relative bg-white/80 backdrop-blur-xl 
        border border-[#156445]/20 rounded-3xl p-8 md:p-12 shadow-xl">

          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Rooms are thoughtfully allocated to ensure comfort, safety, and a sense of 
            community among students.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Accommodation is well-maintained, clean, and supervised by dedicated wardens 
            who ensure discipline, care, and a positive environment at all times.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Students are grouped appropriately by age and class to promote a healthy, 
            friendly, and supportive living environment.
          </p>
        </div>
      </motion.div>

      {/* 🌟 FEATURES */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

        {[
          {
            icon: <Home />,
            title: "Comfortable Living",
            desc: "Spacious, clean, and well-maintained rooms for a pleasant stay.",
          },
          {
            icon: <ShieldCheck />,
            title: "Safety & Supervision",
            desc: "24/7 monitoring by dedicated wardens ensuring discipline and care.",
          },
          {
            icon: <Users />,
            title: "Community Living",
            desc: "Age-wise grouping to encourage bonding and healthy friendships.",
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
            border border-[#156445]/20 rounded-2xl p-6 shadow-lg">

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center 
              rounded-full mb-4
              bg-gradient-to-r from-[#156445] to-[#0D6453] text-white">
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

    </div>
  );
}