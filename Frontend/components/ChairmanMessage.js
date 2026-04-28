'use client';

import { motion } from 'framer-motion';
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
            <div className="relative rounded-3xl overflow-hidden shadow-md border border-[#7B9B68]/30">
              <img
                src="/images/chairman.jpg"
                alt="Chairman"
                className="w-full h-[400px] object-cover"
              />
            </div>

            {/* Name */}
            <div className="text-center mt-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Mr. CP BRAHAM Prakash Yadav
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
              I still remember a young child who once walked through our gates—quiet, unsure, and hesitant to speak. Over time, that same child found confidence on the playground, curiosity in the classroom, and courage within. Watching that transformation is what education truly means to us.
            </p>

            {expanded && (
              <>
                <p className="text-gray-600 text-md leading-relaxed">
                  At our school, we don’t just teach lessons—we witness journeys. Every child arrives with a story waiting to unfold, and it is our privilege to help shape that story with care, patience, and purpose. We believe that education goes far beyond books and examinations; it is about discovering one’s voice, building character, and learning how to face life with strength and kindness.
                </p>

                <p className="text-gray-600 text-md leading-relaxed">
                  Being a residential school, we become a second home for our students. Here, friendships are formed over shared meals, resilience is built through everyday challenges, and values are quietly instilled in moments both big and small. It is in these simple, meaningful experiences that children grow—not just academically, but as individuals.

                </p>

                <p className="text-gray-600 text-md leading-relaxed">
                  We dream of a community where every child feels seen, heard, and valued. A place where curiosity is encouraged, mistakes are embraced as lessons, and every success—big or small—is celebrated. Our aim is not only to prepare students for the future, but to help them become individuals who will shape it with integrity, empathy, and courage.
                </p>
                <p className="text-gray-600 text-md leading-relaxed">
                  As we continue this journey together, I invite you to be a part of this shared vision—where we give our children the wings to explore the world, and the roots to always stay grounded in values.
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
                Mr. CP BRAHAM Prakash Yadav
              </p>
              <p className="text-sm text-gray-500">CEO, Gurukulam</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}