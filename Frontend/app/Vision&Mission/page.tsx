"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VisionMission() {

  // ✅ FIXED TYPE
  const sections = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    sections.current.forEach((el) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-gray-100 px-4 py-16">

      {/* HEADER */}
      <h1 className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
        Vision & Mission
      </h1>

      {/* 🌟 VISION */}
      <section
        ref={(el) => {
          sections.current[0] = el;
        }}
        className="relative max-w-5xl mx-auto mb-12 group"
      >

        {/* 🔥 ANIMATED GLOW BORDER */}
        <div className="absolute -inset-[2px] rounded-3xl overflow-hidden">
          <div className="w-full h-full animate-spin-slow bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600 opacity-40 blur-lg"></div>
        </div>

        {/* 🧊 MAIN CARD */}
        <div className="relative bg-white/85 backdrop-blur-xl border border-orange-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition duration-300">

          {/* 🟠 HEADING */}
          <h2 className="text-2xl md:text-3xl font-bold mb-4 
      bg-gradient-to-r from-orange-600 to-amber-500 
      bg-clip-text text-transparent flex items-center gap-2"
          >
            🌟 Our Vision
          </h2>

          {/* ✨ DIVIDER */}
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-400 mb-4 rounded-full"></div>

          {/* 📄 CONTENT */}
          <p className="text-gray-700 leading-relaxed">
            To create a nurturing and inspiring learning environment that empowers students to become
            confident, responsible, and future-ready individuals. We aim to blend traditional values with
            modern education, shaping leaders who contribute positively to society and the nation.
          </p>

          <p className="text-gray-700 mt-4 leading-relaxed">
            At Gurukulam, we blend traditional values with modern education
            to ensure holistic development.
          </p>

        </div>
      </section>

      {/* 🎯 MISSION */}
      <section
        ref={(el) => {
          sections.current[1] = el;
        }}
        className="relative max-w-5xl mx-auto mb-12 group"
      >

        {/* 🔥 ANIMATED GLOW BORDER */}
        <div className="absolute -inset-[2px] rounded-3xl overflow-hidden">
          <div className="w-full h-full animate-spin-slow bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600 opacity-40 blur-lg"></div>
        </div>

        {/* 🧊 MAIN CARD */}
        <div className="relative bg-white/85 backdrop-blur-xl border border-orange-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition duration-300">

          {/* 🟠 HEADING */}
          <h2 className="text-2xl md:text-3xl font-bold mb-6 
      bg-gradient-to-r from-orange-600 to-amber-500 
      bg-clip-text text-transparent"
          >
            🎯 Our Mission
          </h2>

          {/* ✨ DIVIDER */}
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-400 mb-6 rounded-full"></div>

          {/* 🎯 MISSION GRID */}
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "To provide quality education that promotes academic excellence and lifelong learning.",
              "To instill strong moral values, discipline, and a sense of responsibility in every student.",
              "To encourage critical thinking, creativity, and innovation through modern teaching methods",
              "To ensure holistic development by balancing academics with sports, arts, and co-curricular activities.",
              "To create a safe, supportive, and inclusive environment for every learner.",
              "To prepare students to face global challenges with confidence, integrity, and leadership skills.",
            ].map((item, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-gradient-to-r from-white to-orange-50 
          border border-orange-100 
          text-gray-800 font-medium
          hover:from-orange-100 hover:to-orange-50
          hover:text-orange-700
          hover:shadow-lg 
          hover:scale-[1.02]
          transition duration-300"
              >
                <span className="text-orange-600 font-bold mr-2">✔</span>
                {item}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🪄 CORE VALUES */}
      <section
        ref={(el) => {
          sections.current[2] = el; // ✅ FIXED
        }}
        className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mb-12"
      >
        {[
          ["Discipline", "Building responsible individuals"],
          ["Excellence", "Striving for highest standards"],
          ["Integrity", "Honesty and strong moral values"],
        ].map((item, i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-2xl shadow-xl transition hover:scale-105 hover:shadow-orange-200"
          >
            <h3 className="text-xl font-bold text-orange-600 mb-2">
              {item[0]}
            </h3>
            <p className="text-gray-600">{item[1]}</p>
          </div>
        ))}
      </section>




    </div>
  );
}