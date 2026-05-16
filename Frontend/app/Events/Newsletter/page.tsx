'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  CalendarDays,
  Trophy,
  BookOpen,
  Users,
  Bell,
  Download,
  Eye,
  Mail,
} from 'lucide-react';

const features = [
  {
    title: 'School Highlights',
    description:
      'Key updates, announcements, and important activities',
    icon: Bell,
  },
  {
    title: 'Event Coverage',
    description:
      'Celebrations, functions, and special programs',
    icon: CalendarDays,
  },
  {
    title: 'Student Achievements',
    description:
      'Academic, sports, and co-curricular success',
    icon: Trophy,
  },
  {
    title: 'Academic Updates',
    description:
      'Exams, curriculum progress, and learning initiatives',
    icon: BookOpen,
  },
  {
    title: 'Messages from Leadership',
    description:
      'Insights from the Principal and management',
    icon: Users,
  },
];

const newsletters = [
  {
    title: 'January 2026 Newsletter',
    desc: 'Highlights of events, achievements, and updates',
    pdf: '#',
  },
  {
    title: 'December 2025 Newsletter',
    desc: 'Celebrations, competitions, and academic updates',
    pdf: '#',
  },
];

export default function NewsletterPage() {
  return (
    <div className="w-full bg-[#F7F6F2] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative py-20 px-4 md:px-10 lg:px-20 bg-[#F5F3EC]">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-[#1B6B52]"
          >
            NEWSLETTER
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-gray-700 text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Stay connected with the latest updates, achievements, and
            happenings at Gurukulam The School. Our newsletters provide
            a glimpse into school life, showcasing academic progress,
            events, and student success stories.
          </motion.p>
        </div>
      </section>

      {/* FEATURE BOXES */}
      <section className="bg-[#146B4D] py-14 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#F7F6F2] rounded-2xl p-6 shadow-lg hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#E6D79A]/40 flex items-center justify-center mb-4">
                  <Icon className="text-[#146B4D]" size={24} />
                </div>

                <h3 className="text-[#146B4D] text-xl font-bold mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section className="relative py-24 px-4 md:px-10 lg:px-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/students-group.jpg"
            alt="Students"
            fill
            className="object-cover opacity-20"
          />
        </div>

        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#F7F6F2]/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-14 border border-[#E6D79A]/40"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#146B4D] mb-12">
              Latest Newsletters
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {newsletters.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-2xl shadow-xl border border-[#E6D79A]/30 p-8"
                >
                  <h3 className="text-2xl font-bold text-[#146B4D] mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mb-8">
                    {item.desc}
                  </p>

                  <div className="flex items-center gap-5">
                    <Link
                      href={item.pdf}
                      className="flex items-center gap-2 text-[#146B4D] font-semibold hover:underline"
                    >
                      <Eye size={18} />
                      View
                    </Link>

                    <div className="h-6 w-[1px] bg-gray-300" />

                    <Link
                      href={item.pdf}
                      className="bg-[#146B4D] hover:bg-[#0F5B41] text-white px-5 py-3 rounded-lg font-semibold transition flex items-center gap-2"
                    >
                      <Download size={18} />
                      Download PDF
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-center text-gray-700 mt-10 text-lg">
              Explore our school journey, one month at a time.
            </p>

            <div className="text-center mt-6">
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-[#146B4D] font-semibold hover:underline"
              >
                <span className="w-3 h-3 rounded-full bg-[#146B4D]" />
                View All Newsletters
              </Link>
            </div>
          </motion.div>

          {/* SUBSCRIBE SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-20 bg-[#F7F6F2]/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-14 border border-[#E6D79A]/40 max-w-5xl mx-auto"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-center text-[#146B4D] mb-10">
              Enter your email to receive our latest newsletters
            </h3>

            <form className="flex flex-col md:flex-row items-center gap-5 justify-center">
              <div className="relative w-full md:w-[420px]">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#146B4D]"
                  size={20}
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full h-14 rounded-xl border border-[#146B4D]/20 bg-white px-12 outline-none focus:ring-2 focus:ring-[#146B4D] text-gray-700"
                />
              </div>

              <button
                type="submit"
                className="bg-[#146B4D] hover:bg-[#0F5B41] text-white font-semibold px-8 h-14 rounded-xl transition-all duration-300 shadow-lg"
              >
                Subscribe Now
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}