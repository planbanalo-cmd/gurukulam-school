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

  // 🎯 Trigger when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setStart(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // 🔢 Smooth counter animation
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

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
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
      className="relative py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden"
    >
      {/* 🔥 Glow Background */}
      <div className="absolute inset-0 opacity-20 blur-3xl bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
          Our Achievements
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

          {data.map((item, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 text-center 
              hover:scale-105 hover:border-orange-400 hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-3xl md:text-5xl font-bold text-orange-400 mb-2">
                {item.value}+
              </div>

              <p className="text-gray-300 group-hover:text-white transition">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}