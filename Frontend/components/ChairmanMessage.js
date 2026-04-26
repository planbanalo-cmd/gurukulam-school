'use client';

import { motion } from 'framer-motion';

export default function ChairmanMessage() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-white via-orange-50 to-white">

      <div className="max-w-6xl mx-auto">

        {/* 🔥 Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
            Chairman's Message
          </h2>
        </motion.div>

        {/* 🧑 Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* 👤 LEFT: IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative group"
          >
            {/* Glow */}
            <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-orange-500 to-amber-400 opacity-20 blur-lg group-hover:opacity-40 transition"></div>

            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/images/chairman.jpg" // 👉 change this
                alt="Chairman"
                className="w-full h-[400px] object-cover"
              />
            </div>

            {/* Name */}
            <div className="text-center mt-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Mr. Rajesh Sharma
              </h3>
              <p className="text-orange-600 text-sm">Chairman</p>
            </div>
          </motion.div>

          {/* 📝 RIGHT: MESSAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-5"
          >
            <p className="text-gray-700 text-lg leading-relaxed">
              At Gurukulam, our vision has always been to create an environment
              where students not only excel academically but also grow into
              responsible and confident individuals.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              We believe education is the foundation of a strong society, and
              through a blend of traditional values and modern learning, we aim
              to nurture future leaders who are prepared for global challenges.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              Our commitment is to provide holistic development, ensuring that
              every child achieves their true potential in a safe and inspiring
              environment.
            </p>

            {/* Signature Style */}
            <div className="pt-4">
              <p className="font-semibold text-gray-800">— Mr. Rajesh Sharma</p>
              <p className="text-sm text-gray-500">Chairman, Gurukulam</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}