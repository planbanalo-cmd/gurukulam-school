
"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function About() {
  const sectionRef = useRef(null);
  const [offset, setOffset] = useState(0);

  const fullText = `Gurukulam The School, Rewari, was established on 20 March, 2002 and carries a rich educational legacy of over 25 years in teaching excellence and student development. Rooted in the vision of going beyond conventional academics, the institution emphasizes the overall growth of every learner — academically, personally, and ethically.

Inspired by the ancient Indian Gurukul system, Gurukulam upholds the values of mentorship, strong moral foundations, and holistic education. We believe that true learning is not confined to textbooks but extends to building character, confidence, and a deep sense of responsibility.

Our school offers a dynamic and engaging learning environment where students are encouraged to think critically, explore creatively, and grow holistically. With experienced faculty, modern infrastructure, and a student-centric approach, we strive for academic excellence while nurturing co-curricular talents and essential life skills.

At Gurukulam, our mission is to shape responsible individuals who are not only academically proficient but also morally grounded and socially aware. We guide every child to discover their true potential and prepare them to face the challenges of tomorrow with confidence and integrity.`;

  const shortText =
    "Gurukulam The School, Rewari, was established on 20 March, 2002 and carries a rich educational legacy of over 25 years in teaching excellence and student development. Rooted in the vision of going beyond conventional academics, the institution emphasizes the overall growth of every learner — academically, personally, and ethically.";

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();

      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const movement = rect.top * 0.12;
        setOffset(movement);
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 md:py-24 lg:py-28"
    >
      {/* =========================================
          BACKGROUND IMAGE
      ========================================= */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/campus-bg.jpeg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          transform: `translateY(${offset}px)`,
          scale: "1.08",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-0 bg-black/65" />

      {/* Green Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0D6453]/70 via-transparent to-[#156445]/50" />

      {/* Decorative Glow */}
      <div className="absolute -left-32 top-20 z-0 h-72 w-72 rounded-full bg-[#E4CC6F]/10 blur-3xl" />

      <div className="absolute -right-32 bottom-20 z-0 h-72 w-72 rounded-full bg-[#156445]/20 blur-3xl" />

      {/* =========================================
          CONTENT
      ========================================= */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* =====================================
              IMAGE SIDE
          ===================================== */}
          <div className="relative mx-auto w-full max-w-xl">
            {/* Decorative Border */}
            <div className="absolute -inset-3 rounded-[2rem] border border-[#E4CC6F]/30" />

            {/* Gold Glow */}
            <div className="absolute -inset-6 rounded-[2rem] bg-[#E4CC6F]/10 blur-2xl" />

            {/* Main Image */}
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/20 bg-white/10 shadow-2xl backdrop-blur-sm">
              <img
                src="/images/campus-image.JPG"
                alt="Gurukulam The School Campus"
                className="h-[360px] w-full object-cover transition-transform duration-700 hover:scale-105 md:h-[460px]"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

              {/* Campus Label */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-[#E4CC6F]" />
                  Gurukulam The School
                </div>
              </div>
            </div>

            {/* Floating Gold Box */}
            <div className="absolute -bottom-7 -right-5 hidden h-28 w-28 rounded-2xl border border-[#E4CC6F]/40 bg-[#E4CC6F]/10 backdrop-blur-md md:block">
              <div className="flex h-full flex-col items-center justify-center text-center">
                <span className="text-3xl font-extrabold text-[#E4CC6F]">
                  25+
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-white/80">
                  Years
                </span>
              </div>
            </div>
          </div>

          {/* =====================================
              CONTENT SIDE
          ===================================== */}
          <div className="text-white">

            {/* Small Label */}
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#E4CC6F]/30 bg-white/10 px-5 py-2 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#E4CC6F]" />

              <span className="text-sm font-semibold tracking-wide text-[#E4CC6F]">
                ABOUT OUR SCHOOL
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              <span className="block text-white">
                About Gurukulam
              </span>

              <span className="mt-2 block bg-gradient-to-r from-[#E4CC6F] via-[#F6E7A1] to-[#CFAF5C] bg-clip-text text-transparent">
                The School
              </span>
            </h2>

            {/* Gold Divider */}
            <div className="my-7 flex items-center gap-3">
              <div className="h-1 w-16 rounded-full bg-[#E4CC6F]" />
              <div className="h-1 w-6 rounded-full bg-[#E4CC6F]/40" />
              <div className="h-1 w-2 rounded-full bg-[#E4CC6F]/20" />
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-base leading-8 tracking-wide text-[#EAF4EE] md:text-lg">
                {shortText}
              </p>

              <p className="text-base leading-8 tracking-wide text-white/75">
                Inspired by the ancient Indian Gurukul system, we combine
                strong values, modern education, mentorship and holistic
                development to help every child discover their potential.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                <div className="text-2xl font-extrabold text-[#E4CC6F]">
                  2002
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wide text-white/60">
                  Established
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                <div className="text-2xl font-extrabold text-[#E4CC6F]">
                  25+
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wide text-white/60">
                  Years Legacy
                </div>
              </div>

              <div className="col-span-2 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md sm:col-span-1">
                <div className="text-2xl font-extrabold text-[#E4CC6F]">
                  360°
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wide text-white/60">
                  Holistic Growth
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/About/History&Foundation"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#E4CC6F] to-[#CFAF5C] px-7 py-3.5 font-bold text-[#0D6453] shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Discover Our Story

                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/About/Vision&Mission"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
              >
                Vision & Mission
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

