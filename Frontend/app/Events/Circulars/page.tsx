'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FileText,
  Download,
  Eye,
  Bell,
  CalendarDays,
  Mail,
} from 'lucide-react';

const circulars = [
  {
    title: 'Annual Examination Schedule 2026',
    desc: 'Details of exam dates and guidelines',
    date: '10 Jan 2026',
    pdf: '#',
  },
  {
    title: 'Parent-Teacher Meeting (PTM) Notice',
    desc: 'Schedule and important instructions for parents',
    date: '5 Jan 2026',
    pdf: '#',
  },
  {
    title: 'Sports Day Announcement',
    desc: 'Event details and participation guidelines',
    date: '2 Jan 2026',
    pdf: '#',
  },
  {
    title: 'Winter Vacation Circular',
    desc: 'Holiday schedule and reopening information',
    date: '20 Dec 2025',
    pdf: '#',
  },
  {
    title: 'Transport Route Update',
    desc: 'Updated school transport timings and routes',
    date: '18 Dec 2025',
    pdf: '#',
  },
  {
    title: 'Annual Function Circular',
    desc: 'Program details and student participation notice',
    date: '12 Dec 2025',
    pdf: '#',
  },
];

export default function CircularPage() {
  return (
    <div className="min-h-screen bg-[#F6F4EE] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#146B4D] via-[#F6F4EE] to-[#146B4D] py-20 px-4 md:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 mx-auto rounded-full bg-[#146B4D]/10 flex items-center justify-center mb-6 border border-[#146B4D]/20">
              <Bell className="text-[#146B4D]" size={36} />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-[#146B4D]">
              CIRCULAR
            </h1>

            <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              Stay informed with all the latest official announcements
              and important updates from Gurukulam The School. Our
              circulars keep parents and students updated about
              academic schedules, events, policies, and essential
              notices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* LATEST CIRCULARS */}
      <section className="relative py-20 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 backdrop-blur-sm rounded-[30px] shadow-2xl border border-[#D8C98D]/50 p-8 md:p-14"
          >
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-[#146B4D]">
                Latest Circulars
              </h2>

              <div className="w-24 h-1 bg-[#D8C98D] mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {circulars.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-[#FDFDFB] border border-[#D8C98D]/40 rounded-2xl p-7 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="min-w-[55px] h-[55px] rounded-xl bg-[#146B4D]/10 flex items-center justify-center">
                      <FileText
                        className="text-[#146B4D]"
                        size={28}
                      />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-[#146B4D] leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                        {item.desc}
                      </p>

                      <div className="flex items-center gap-2 mt-4 text-sm text-gray-500">
                        <CalendarDays size={16} />
                        Date: {item.date}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 mt-8">
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
                      className="bg-[#146B4D] hover:bg-[#0E5B40] text-white px-5 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-md"
                    >
                      <Download size={18} />
                      Download PDF
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-14">
              <p className="text-gray-700 text-lg">
                Never miss an important update from the school.
              </p>

              <Link
                href="#"
                className="inline-flex items-center gap-3 mt-6 text-[#146B4D] font-semibold hover:underline"
              >
                <span className="w-3 h-3 rounded-full bg-[#146B4D]" />
                View All Circulars
              </Link>
            </div>
          </motion.div>

          {/* SUBSCRIBE SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-4xl mx-auto mt-20 bg-white/95 backdrop-blur-sm rounded-[30px] shadow-2xl border border-[#D8C98D]/50 p-8 md:p-14"
          >
            <div className="text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-[#146B4D]/10 flex items-center justify-center mb-6 border border-[#146B4D]/20">
                <Mail className="text-[#146B4D]" size={34} />
              </div>

              <h3 className="text-3xl font-bold text-[#146B4D]">
                Get important updates directly
              </h3>

              <p className="text-gray-600 mt-4 text-lg">
                Enter your email to receive circulars and important
                school announcements.
              </p>
            </div>

            <form className="flex flex-col md:flex-row items-center gap-5 justify-center mt-10">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full md:w-[450px] h-14 rounded-xl border border-[#146B4D]/20 px-5 bg-[#F5F6F4] outline-none focus:ring-2 focus:ring-[#146B4D] text-gray-700"
              />

              <button
                type="submit"
                className="h-14 px-8 rounded-xl bg-[#146B4D] hover:bg-[#0E5B40] text-white font-semibold shadow-lg transition-all duration-300"
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