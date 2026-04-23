"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { FileText, CheckCircle, Users } from "lucide-react";
import page from "./page";

export default function PrivacyPolicy() {

  // Scroll Progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="relative bg-gradient-to-br from-orange-50 to-gray-100 min-h-screen py-12 px-4 overflow-hidden">

      {/* Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-600 to-amber-500 origin-left z-50"
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-300 rounded-full opacity-30"
            initial={{
              x: Math.random() * 1000,
              y: Math.random() * 800,
            }}
            animate={{
              y: [null, Math.random() * 800],
              x: [null, Math.random() * 1000],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Logo Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <img src="/images/GurukulamLogo.jpeg" alt="logo" className="w-[500px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
           Privacy<span className="text-orange-600">& Policy</span>
          </h1>
          <p className="text-gray-600 mt-3 text-sm md:text-base">
            Clear guidelines for smooth privacy and policy management at Gurukulam School.
          </p>
        </motion.div>

        {/* Instructions Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-8 border border-gray-200 hover:shadow-orange-200 hover:border-orange-300 transition"
        >
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-6 h-6 text-orange-600" />
          <h2 className="text-2xl font-bold border-l-4 border-orange-400 pl-3 text-gray-800">
            Important Instructions
          </h2>
          </div>

          <ol className="space-y-4 text-sm md:text-base text-gray-700">
            {[
              "Gurukulam The School, Rewari, is committed to protecting the privacy of students,parents, staff, and website visitors.",
              "We collect basic personal information such as name, contact details, email address, and student-related information when required.",
              "The collected information is used for communication, academic processes,administrative purposes, and improving our services.",
              "We ensure that all personal data is kept secure and protected from unauthorized access or misuse.",
              "The school does not sell, trade, or share personal information with third parties, except when required by law or for official purposes.",
              "Our website may use cookies to enhance user experience and analyze websiteperformance. Users can disable cookies through browser settings.",
              "By using our website, you agree to the terms of this Privacy Policy.",
              "The school reserves the right to update or modify this policy at any time. Updates will be reflected on this page."      
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 bg-gray-50 p-3 rounded-xl hover:bg-orange-50 hover:shadow-md transition"
              >
                <CheckCircle className="w-5 h-5 mt-1 text-orange-600" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ol>
        </motion.div>

       
       

      </div>
    </div>
  );
}
