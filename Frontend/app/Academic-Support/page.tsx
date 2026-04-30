'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { AnimatePresence } from "framer-motion";
import { HelpCircle} from "lucide-react";
import { BookOpen, Users, CheckCircle, ChevronDown } from 'lucide-react';

export default function AcademicSupportPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "How are students supported academically in boarding?",
      a: "Students follow a structured study schedule with supervised sessions and guidance from teachers.",
    },
    {
      q: "Are teachers available after school hours?",
      a: "Yes, students receive academic support through doubt-clearing sessions and study supervision.",
    },
    {
      q: "How is discipline maintained during study time?",
      a: "Dedicated wardens and staff ensure a focused and distraction-free study environment.",
    },
    {
      q: "What if a student needs extra help in a subject?",
      a: "Personalized attention and additional support are provided to help the student improve.",
    },
    {
      q: "How is academic progress monitored?",
      a: "Regular assessments and feedback help track and improve student performance.",
    },
  ];

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
          Academic Support
        </h1>

        <p className="text-gray-600 mt-3 text-lg italic">
          “Ensuring every student learns, grows, and excels with the right guidance.”
        </p>
      </motion.div>

      {/* 🧊 MAIN CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative max-w-5xl mx-auto mb-16 group"
      >
        {/* Glow */}
        <div className="absolute -inset-[2px] rounded-3xl 
        bg-gradient-to-r from-[#156445] via-[#0D6453] to-[#296236] 
        opacity-20 blur-xl group-hover:opacity-40 transition"></div>

        {/* Card */}
        <div className="relative bg-white/80 backdrop-blur-xl 
        border border-[#156445]/20 rounded-3xl p-8 md:p-12 shadow-xl">

          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            We provide structured academic support within the boarding environment 
            to help students stay focused and perform their best.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Supervised study hours, guidance from teachers, and doubt-clearing sessions 
            ensure consistent academic progress and discipline in learning.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Our approach ensures every student receives the right support to achieve 
            academic excellence with confidence.
          </p>
        </div>
      </motion.div>

      {/* 🌟 FEATURES */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mb-16">

        {[
          {
            icon: <BookOpen />,
            title: "Structured Study",
            desc: "Organized study schedules for consistent learning habits.",
          },
          {
            icon: <Users />,
            title: "Teacher Guidance",
            desc: "Expert teachers provide continuous mentorship and support.",
          },
          {
            icon: <CheckCircle />,
            title: "Performance Tracking",
            desc: "Regular assessments ensure steady academic improvement.",
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

      {/* ❓ FAQ SECTION */}
     <div className="max-w-5xl mx-auto mt-20">

  {/* Heading */}
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 
  bg-gradient-to-r from-[#156445] via-[#0D6453] to-[#296236] 
  bg-clip-text text-transparent">
    Frequently Asked Questions
  </h2>

  <div className="space-y-5">

    {faqs.map((faq, i) => {
      const isOpen = openIndex === i;

      return (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          className="relative group"
        >
          {/* Glow Border */}
          <div className="absolute -inset-[1px] rounded-2xl 
          bg-gradient-to-r from-[#156445] via-[#0D6453] to-[#296236] 
          opacity-10 blur-md group-hover:opacity-30 transition"></div>

          {/* Card */}
          <div className="relative bg-white/90 backdrop-blur-lg 
          border border-[#156445]/20 rounded-2xl overflow-hidden shadow-sm">

            {/* Question */}
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-5 py-5 text-left"
            >
              <div className="flex items-center gap-3">

                {/* Icon */}
                <div className="p-2 rounded-full 
                bg-gradient-to-r from-[#156445] to-[#0D6453] text-white">
                  <HelpCircle size={18} />
                </div>

                <span className="font-semibold text-[#156445] text-sm md:text-base">
                  {faq.q}
                </span>
              </div>

              {/* Arrow */}
              <ChevronDown
                className={`transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-[#156445]" : "text-gray-400"
                }`}
              />
            </button>

            {/* Answer */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </motion.div>
      );
    })}

  </div>
</div>
    </div>
  );
}