'use client';

import { motion } from 'framer-motion';
import Image from "next/image";
import { useState } from 'react';

export default function ChairmanMessage() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#f8faf9]">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#156445]">
            CEO Message
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative group"
          >
            {/* 🌿 Green Soft Background Layer */}
            <div className="absolute -inset-6 rounded-[40px] 
  bg-gradient-to-br from-[#156445] via-[#0D6453] to-[#296236] 
  opacity-10 blur-2xl"></div>

            {/* ✨ Gold Border Glow */}
            <div className="absolute -inset-[2px] rounded-3xl 
  bg-gradient-to-r from-[#CFAF5C] to-[#E4CC6F] 
  opacity-10 group-hover:opacity-20 blur-md transition duration-300"></div>

            {/* Image */}
            <div className="relative w-full h-[500px]">
              <Image
                src="/images/Leader&Management/CEO.jpeg"
                alt="CEO"
                fill
                priority
                className="object-cover object-top rounded-3xl"
              />
            </div>

            {/* Name */}
            <div className="text-center mt-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Mr. CP BRAHAM PRAKASH YADAV
              </h3>
              <p className="text-[#156445] text-sm">CEO</p>
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <p className="text-gray-700 text-lg leading-relaxed italic">
              “The purpose of education is not to fill minds, but to ignite them.”
            </p>

            <p className="text-gray-600 text-md leading-relaxed">
              Education is not merely about preparing children for examinations; it is about shaping their character and preparing them for life itself. At our school, we are deeply committed to creating an environment where every child discovers their true potential, nurtures their curiosity, and evolves into a confident, compassionate, and responsible individual.
            </p>

            {expanded && (
              <>
                <p className="text-gray-600 text-md leading-relaxed">
                  The real strength of an institution lies not only in academic excellence but in the values it instills and the vision it upholds. We envision a learning community where curiosity drives exploration, discipline comes from within, and innovation is a way of life. We empower our students to dream without fear, think with independence, and act with integrity—qualities that will enable them to face the complexities of the modern world with courage and conviction.
                </p>

                <p className="text-gray-600 text-md leading-relaxed">
                  As a residential school, we provide more than education—we provide a “home away from home.” Here, every experience, whether in the classroom, on the field, or in daily life, contributes to shaping character, strengthening resilience, and building lifelong values. We are dedicated to nurturing not just achievers, but future leaders—individuals who will lead with wisdom, serve with empathy, and contribute meaningfully to society.

                </p>

                <p className="text-gray-600 text-md leading-relaxed">
                  Our mission is to ensure that every child who enters our gates is transformed—not just academically, but holistically—emerging as a confident individual with a strong sense of purpose and responsibility.
                </p>
                <p className="text-gray-600 text-md leading-relaxed">
                  Let us continue to move forward together with unwavering dedication, guided by our vision of excellence and our commitment to holistic education. Together, we will shape a future where our students not only succeed but inspire.
                </p>
                <p className="text-gray-600 text-md leading-relaxed">
                  “Give your children wings of knowledge and roots of values, and they will conquer the world with humility and strength.”

                </p>
              </>
            )}

            {/* Button */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-[#156445] font-semibold hover:text-[#CFAF5C] transition"
            >
              {expanded ? "Read Less ↑" : "Read More ↓"}
            </button>

            {/* Signature */}
            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-500">Warm regards,</p>
              <p className="font-semibold text-gray-800">
                Mr. CP BRAHAM PRAKASH YADAV
              </p>
              <p className="text-sm text-gray-500">CEO, Gurukulam</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}