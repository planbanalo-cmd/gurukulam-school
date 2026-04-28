'use client';

import { useEffect, useRef, useState } from 'react';

export default function WhatWeOffer() {
  const sectionRef = useRef(null);
  const [start, setStart] = useState(false);

  const targets = {
    teachers: 156,
    students: 2145,
    awards: 32,
  };

  const [stats, setStats] = useState({
    teachers: 0,
    students: 0,
    awards: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setStart(entry.isIntersecting),
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;

    let startTime = null;
    const duration = 2000;

    const animate = (time) => {
      if (!startTime) startTime = time;

      const progress = Math.min((time - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);

      setStats({
        teachers: Math.floor(ease * targets.teachers),
        students: Math.floor(ease * targets.students),
        awards: Math.floor(ease * targets.awards),
      });

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [start]);

  const data = [
    { label: "Certified Teachers", value: stats.teachers },
    { label: "Total Students", value: stats.students },
    { label: "Awards Won", value: stats.awards },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-4 md:px-8 lg:px-16 
      bg-gradient-to-br from-[#156445] via-[#0D6453] to-[#296236] 
      text-white overflow-hidden"
    >
      {/* ✨ Subtle Gold Overlay */}
      <div className="absolute inset-0 opacity-10 blur-2xl 
      bg-gradient-to-r from-[#CFAF5C] to-[#E4CC6F]"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16 
        bg-gradient-to-r from-[#E4CC6F] to-[#CFAF5C] 
        bg-clip-text text-transparent">
          Our Achievements
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">

          {data.map((item, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl 
              bg-white/5 backdrop-blur-md 
              border border-[#7B9B68]/40 
              text-center 
              hover:scale-105 
              hover:border-[#E4CC6F] 
              transition-all duration-300"
            >
              {/* Number */}
              <div className="text-4xl md:text-5xl font-bold 
              text-[#E4CC6F] mb-3">
                {item.value}+
              </div>

              {/* Label */}
              <p className="text-[#7B9B68] group-hover:text-white transition">
                {item.label}
              </p>

              {/* Bottom accent line */}
              <div className="mt-4 h-[2px] w-0 group-hover:w-full 
              bg-[#E4CC6F] transition-all duration-300 mx-auto"></div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}