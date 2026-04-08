"use client";

import { motion, useScroll, useSpring } from "framer-motion";

import Hero from "./components/Hero";
import Features from "./components/Features";
import WhatWeOffer from "./components/WhatWeOffer";
import About from "./components/About";
import Courses from "./components/Courses";
import Teachers from "./components/Teacher";
import RequestQuote from "./components/RequestQuote";
import Blog from "./components/Blog";
import Testimonials from "./components/Testimonials";
import FinalBossWrapper from "./components/FinalBossWrapper";

export default function Home() {

  // Scroll progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <>
     <FinalBossWrapper>
      {/* 🔥 Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-600 to-amber-500 origin-left z-[999]"
      />

      {/* Page Content */}
      <Hero />
      <Features />
      <WhatWeOffer />
      <About />
      <Courses />
      <Teachers />
      <RequestQuote />
      <Blog />
      <Testimonials />
      </FinalBossWrapper>
    </>
  );
}