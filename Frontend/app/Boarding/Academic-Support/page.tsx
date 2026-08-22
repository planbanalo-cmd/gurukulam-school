"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  BookOpen,
  Users,
  CheckCircle,
  ChevronDown,
  HelpCircle,
  ClipboardCheck,
  GraduationCap,
  Target,
  TrendingUp,
  Sparkles,
  Clock3,
} from "lucide-react";

export default function AcademicSupportPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const features = [
    {
      icon: BookOpen,
      title: "Structured Study",
      description:
        "Organized study schedules help students develop consistent learning habits and remain focused on their academic goals.",
    },
    {
      icon: Users,
      title: "Teacher Guidance",
      description:
        "Students receive guidance, mentorship and academic support from teachers whenever they need assistance.",
    },
    {
      icon: Target,
      title: "Personal Attention",
      description:
        "Individual learning needs are considered so students can work on their strengths and areas for improvement.",
    },
    {
      icon: ClipboardCheck,
      title: "Regular Assessment",
      description:
        "Regular assessments and academic reviews help monitor progress and identify areas requiring additional support.",
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description:
        "Students are encouraged to develop better learning habits and steadily improve their academic performance.",
    },
    {
      icon: Clock3,
      title: "Supervised Study Hours",
      description:
        "Dedicated study hours provide a calm, disciplined and distraction-free environment for academic preparation.",
    },
  ];

  const faqs = [
    {
      q: "How are students supported academically in boarding?",
      a: "Students follow a structured study schedule with supervised sessions and guidance from teachers.",
    },
    {
      q: "Are teachers available after school hours?",
      a: "Students receive academic support through doubt-clearing sessions, study supervision and appropriate teacher guidance.",
    },
    {
      q: "How is discipline maintained during study time?",
      a: "Dedicated wardens and staff help maintain a focused and distraction-free environment during supervised study hours.",
    },
    {
      q: "What if a student needs extra help in a subject?",
      a: "Individual learning needs are considered and additional guidance can be provided to help students strengthen their understanding.",
    },
    {
      q: "How is academic progress monitored?",
      a: "Regular assessments, teacher feedback and academic reviews help monitor student progress and identify areas for improvement.",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-br from-[#eef5f1] via-[#faf8f2] to-[#eef5f1]">

      {/* HERO */}
      <section className="px-4 md:px-8 lg:px-16 pt-8 md:pt-12 pb-20">
        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#0D6453] via-[#156445] to-[#296236] shadow-[0_25px_90px_rgba(13,100,83,0.25)]"
          >
            {/* Decorative circles */}
            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-[450px] h-[450px] rounded-full bg-[#E4CC6F]/10 blur-3xl" />

            <div className="relative z-10 px-7 py-16 md:px-14 md:py-20 lg:px-20">

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white text-sm font-semibold backdrop-blur-md"
              >
                <Sparkles className="w-4 h-4 text-[#E4CC6F]" />
                Boarding Academic Support
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-7 text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight"
              >
                Academic Support
                <br />
                <span className="text-[#E4CC6F]">
                  Beyond the Classroom
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6 max-w-2xl text-white/75 text-base md:text-xl leading-relaxed"
              >
                A structured and supportive learning environment where
                students receive guidance, supervision and encouragement
                to achieve their academic potential.
              </motion.p>

              <div className="flex flex-wrap gap-3 mt-9">
                {[
                  "Focused Learning",
                  "Teacher Guidance",
                  "Personal Attention",
                ].map((item) => (
                  <div
                    key={item}
                    className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white text-sm backdrop-blur-md"
                  >
                    {item}
                  </div>
                ))}
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* INTRO */}
      <section className="px-4 md:px-8 lg:px-16 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center"
          >

            <div>
              <div className="flex items-center gap-3 text-[#156445] text-sm font-bold mb-5">
                <span className="w-9 h-[2px] bg-[#156445]" />
                OUR APPROACH
              </div>

              <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
                Helping Students
                <br />
                <span className="bg-gradient-to-r from-[#156445] to-[#296236] bg-clip-text text-transparent">
                  Learn With Confidence
                </span>
              </h2>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-6">
                At Gurukulam The School, academic support continues beyond
                regular classroom hours. Our boarding environment provides
                students with structured study time, supervision and
                opportunities to seek guidance.
              </p>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-4">
                Through regular academic monitoring and individual attention,
                students are encouraged to understand their strengths,
                overcome challenges and develop effective learning habits.
              </p>
            </div>

            <div className="relative">

              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-[#156445]/20 to-[#E4CC6F]/20 blur-2xl" />

              <div className="relative bg-white rounded-3xl border border-[#156445]/10 shadow-xl p-8">

                <div className="w-16 h-16 rounded-2xl bg-[#156445]/10 flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-[#156445]" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mt-6">
                  A Focused Learning Environment
                </h3>

                <p className="text-gray-600 leading-relaxed mt-3">
                  Students are encouraged to make the most of their study
                  hours while receiving the guidance and support they need.
                </p>

                <div className="mt-7 space-y-3">
                  {[
                    "Supervised study sessions",
                    "Teacher guidance",
                    "Doubt-clearing support",
                    "Regular academic monitoring",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-[#156445]" />
                      <span className="text-gray-600 text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-4 md:px-8 lg:px-16 py-20 md:py-28 bg-white/50">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#156445]/10 text-[#156445] text-sm font-semibold">
              <Sparkles className="w-4 h-4" />
              ACADEMIC EXPERIENCE
            </span>

            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-5">
              Support Designed Around
              <span className="text-[#156445]"> Students</span>
            </h2>

            <p className="max-w-2xl mx-auto text-gray-600 mt-5">
              Every aspect of our academic support system is designed to
              encourage discipline, confidence and continuous learning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -7 }}
                  className="group"
                >
                  <div className="h-full bg-white rounded-3xl border border-[#156445]/10 shadow-md hover:shadow-xl transition-all duration-300 p-7">

                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#156445] to-[#0D6453] flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mt-6">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mt-3">
                      {item.description}
                    </p>

                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 md:px-8 lg:px-16 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#156445]/10 text-[#156445] text-sm font-semibold">
              <HelpCircle className="w-4 h-4" />
              FAQ
            </span>

            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mt-5">
              Frequently Asked
              <span className="text-[#156445]"> Questions</span>
            </h2>
          </div>

          <div className="space-y-4">

            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl border border-[#156445]/10 shadow-sm overflow-hidden"
                >

                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="w-full flex items-center justify-between gap-5 text-left px-6 py-5"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4">

                      <div className="w-10 h-10 rounded-xl bg-[#156445]/10 flex items-center justify-center shrink-0">
                        <HelpCircle className="w-5 h-5 text-[#156445]" />
                      </div>

                      <span className="font-semibold text-gray-900">
                        {faq.q}
                      </span>

                    </div>

                    <ChevronDown
                      className={`w-5 h-5 shrink-0 transition-transform ${
                        isOpen
                          ? "rotate-180 text-[#156445]"
                          : "text-gray-400"
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pl-[76px] text-gray-600 text-sm md:text-base leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 md:px-8 lg:px-16 pb-16">
        <div className="max-w-6xl mx-auto">

          <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#0D6453] via-[#156445] to-[#296236] p-8 md:p-14 text-center shadow-[0_25px_80px_rgba(13,100,83,0.22)]">

            <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-white/5 blur-3xl" />

            <div className="relative z-10">

              <h2 className="text-3xl md:text-5xl font-black text-white">
                Supporting Every
                <span className="text-[#E4CC6F]"> Student's Journey</span>
              </h2>

              <p className="max-w-2xl mx-auto text-white/75 mt-5 leading-relaxed">
                A supportive academic environment helps students build
                confidence, discipline and the habits needed for long-term
                success.
              </p>

            </div>
          </div>

        </div>
      </section>

    </main>
  );
}