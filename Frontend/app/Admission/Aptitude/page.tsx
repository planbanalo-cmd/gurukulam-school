'use client';

import { motion } from 'framer-motion';
import {
  ClipboardList,
  Clock3,
  BookOpen,
  BrainCircuit,
  Star,
} from 'lucide-react';

export default function AptitudeTestPage() {
  return (
    <div className="min-h-screen bg-[#F6F4EE] overflow-hidden">
      {/* HERO SECTION */}
      <section
        className="relative py-20 px-4 md:px-10 lg:px-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#F6F4EE]/85 backdrop-blur-[2px]" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-[#146B4D] uppercase">
              Aptitude Test
            </h1>

            <p className="mt-6 text-gray-700 max-w-3xl mx-auto leading-relaxed text-base md:text-lg">
              To ensure the right academic placement and support,
              students applying for admission may be required to appear
              for an aptitude test. The test is designed to assess
              basic understanding, reasoning ability, and subject
              knowledge appropriate to the class level.
            </p>
          </motion.div>

          {/* TEST INSTRUCTIONS */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-14 bg-white/95 backdrop-blur-md rounded-[28px] shadow-2xl border border-[#D8C98D]/40 p-6 md:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <ClipboardList className="text-[#146B4D]" size={30} />

              <h2 className="text-2xl md:text-3xl font-bold text-[#146B4D]">
                Test Instructions
              </h2>
            </div>

            <p className="text-gray-700 mb-8 text-base md:text-lg">
              The aptitude test typically includes the following
              sections:
            </p>

            {/* SUBJECT TABLE */}
            <div className="space-y-4">
              {[
                {
                  subject: 'English',
                  desc: 'Reading comprehension, grammar, vocabulary, and basic writing skills',
                },
                {
                  subject: 'Mathematics',
                  desc: 'Numerical ability, problem-solving, and fundamental concepts',
                },
                {
                  subject: 'General Awareness / Reasoning',
                  desc: 'Logical thinking, observation skills, and basic general knowledge',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-[240px_1fr] rounded-2xl overflow-hidden border border-[#D8C98D]/30"
                >
                  <div className="bg-[#EAF1ED] text-[#146B4D] font-semibold px-6 py-5 flex items-center justify-center text-center">
                    {item.subject}
                  </div>

                  <div className="bg-[#F5F7F6] px-6 py-5 text-gray-700 flex items-center">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* SECOND SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-14 bg-white/95 backdrop-blur-md rounded-[28px] shadow-2xl border border-[#D8C98D]/40 p-6 md:p-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* DURATION */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Clock3
                    className="text-[#146B4D]"
                    size={28}
                  />

                  <h3 className="text-2xl font-bold text-[#146B4D]">
                    Duration
                  </h3>
                </div>

                <div className="w-20 h-1 bg-[#146B4D] rounded-full mb-5" />

                <p className="text-gray-700 leading-relaxed">
                  The test duration is approximately 45–90 minutes,
                  depending on the class applied for.
                </p>
              </div>

              {/* MODE */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen
                    className="text-[#146B4D]"
                    size={28}
                  />

                  <h3 className="text-2xl font-bold text-[#146B4D]">
                    Mode of Test
                  </h3>
                </div>

                <div className="w-20 h-1 bg-[#146B4D] rounded-full mb-5" />

                <ul className="space-y-3 text-gray-700">
                  <li>1. Written (offline/online)</li>
                  <li>
                    2. Oral interaction for Pre-Primary classes
                  </li>
                </ul>
              </div>

              {/* CRITERIA */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <BrainCircuit
                    className="text-[#146B4D]"
                    size={28}
                  />

                  <h3 className="text-2xl font-bold text-[#146B4D]">
                    Assessment Criteria
                  </h3>
                </div>

                <div className="w-20 h-1 bg-[#146B4D] rounded-full mb-5" />

                <ul className="space-y-3 text-gray-700">
                  <li>1. Conceptual clarity</li>
                  <li>2. Problem-solving ability</li>
                  <li>
                    3. Communication skills (for interaction)
                  </li>
                  <li>
                    4. Overall readiness for the class
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* IMPORTANT NOTE */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-14 bg-[#146B4D] rounded-[28px] shadow-2xl p-6 md:p-10 text-white"
          >
            <div className="flex items-center gap-3 mb-6">
              <Star className="text-[#E4CC6F]" size={32} />

              <h2 className="text-2xl md:text-3xl font-bold">
                Important Note
              </h2>
            </div>

            <ul className="space-y-4 text-white/90 leading-relaxed">
              <li>
                • The test is not meant to create pressure but to
                understand the child’s learning level.
              </li>

              <li>
                • Results help teachers provide personalized academic
                support.
              </li>

              <li>
                • Final admission is based on overall performance and
                seat availability.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
}