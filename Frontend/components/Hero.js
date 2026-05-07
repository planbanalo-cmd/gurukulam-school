"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
 {
    id: 1,
    image: "/images/Residential.jpeg",
    title: "Residential School",
    description: "A home away from home, where learning meets life.",
  },{
    id: 2,
    image: "/images/Competitive.png",
    title: "Competitive Exam Preparation",
    description: "Focused guidance to help students achieve their goals.",
  },
  
  {
    id: 3,
    image: "/images/Primary.jpeg",
    title: "Pre-Primary Wing",
    description: "Where young minds begin their journey of learning",
  },
  {
    id: 4,
    image: "/images/sport.png",
    title: "Sports Excellence",
    description: "Building strength, discipline, and champions of tomorrow.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [auto, setAuto] = useState(true);

 useEffect(() => {
  if (!auto) return;

  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, 5000);

  return () => clearInterval(interval);
}, [auto]);
  const next = () => {
    setAuto(false);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setAuto(false);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[current];

  return (
    <section
  onMouseEnter={() => setAuto(false)}
  onMouseLeave={() => setAuto(true)}
  className="relative w-full h-[70vh] md:h-[85vh] lg:h-screen overflow-hidden"
>

      {/* IMAGE with zoom animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-black/30" />

      {/* CONTENT */}
      <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-2xl">

          <motion.h1
            key={slide.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
          >
            {slide.title}
          </motion.h1>

          <motion.p
            key={slide.description}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 text-gray-200 text-sm sm:text-base md:text-lg"
          >
            {slide.description}
          </motion.p>

          
         
        </div>
      </div>

      {/* NAV BUTTONS */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/30 backdrop-blur-md p-2 md:p-3 rounded-full text-white transition"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/30 backdrop-blur-md p-2 md:p-3 rounded-full text-white transition"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      {/* INDICATORS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setAuto(false);
              setCurrent(i);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current
                ? "w-8 bg-[#CFAF5C]"
                : "w-3 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}