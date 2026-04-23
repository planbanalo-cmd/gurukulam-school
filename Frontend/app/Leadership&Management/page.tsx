"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import gsap from "gsap"; 
export default function LeadershipPage() {
    
    const ref = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

    // 🎬 Scroll animations
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    // 🎬 PARALLAX EFFECT
  const yImg = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scaleImg = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
    // 🎥 TEXT REVEAL (WORD BY WORD)
  useEffect(() => {
    if (!textRef.current) return;

    const words = textRef.current.querySelectorAll(".word");

    gsap.fromTo(
      words,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.6,
        ease: "power3.out",
      }
    );
  }, []);
  const text = `Education is the most powerful weapon to shape the future. At Gurukulam, we focus on discipline, innovation, and values.`;

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
    const [selected, setSelected] = useState<any>(null);
    return (
        <div
            ref={ref}
            className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-gray-100 px-4 py-16"
        >

            {/* 🔥 HERO */}
            <section className="text-center mb-20">
                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl font-extrabold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent"
                >
                    Leadership & Management
                </motion.h1>

               
            </section>

            {/* 🎬 CINEMATIC CHAIRMAN */}
           <section
      ref={ref}
      className="max-w-6xl mx-auto mb-32 px-4"
    >
            <section className="py-20 px-4 md:px-8 lg:px-16">
  <div className="relative max-w-5xl mx-auto group">

    {/* 🔥 Glow Border */}
    



     
      

      {/* ✨ Content with stagger animation */}
      <div className="space-y-5">

        <p className="text-gray-700 text-lg leading-relaxed animate-fadeUp delay-100">
          At Gurukulam The School, our leadership and management team forms the backbone of our
commitment to excellence in education. Guided by a clear vision and strong values, the team
works collaboratively to create a progressive, student-focused learning environment.

        </p>

        <p className="text-gray-700 text-lg leading-relaxed animate-fadeUp delay-200">
          Our leadership believes in empowering both students and educators by fostering a culture of
innovation, discipline, and continuous improvement. With a blend of experience and
forward-thinking strategies, the management ensures that academic standards remain high
while also promoting holistic development.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed animate-fadeUp delay-300">
         Transparency, effective communication, and a commitment to quality are at the core of our
management practices. Every decision is taken with the best interest of students in mind,
ensuring a safe, inclusive, and inspiring environment for learning and growth.

        </p>

        <p className="text-gray-700 text-lg leading-relaxed animate-fadeUp delay-500">
          At Gurukulam, leadership is not just about administration—it is about guiding, mentoring, and
shaping the future of every child with dedication and integrity.
        </p>

      </div>
  
  </div>
</section>
      <div className="relative">

        {/* 🔥 BACKGROUND GLOW PULSE */}
        <div className="absolute -inset-[3px] rounded-3xl bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500 blur-2xl opacity-30 animate-pulse"></div>

        {/* 🧊 MAIN CONTAINER */}
        <div className="relative bg-white/70 backdrop-blur-2xl rounded-3xl p-10 md:p-14 shadow-2xl border border-white/40 grid md:grid-cols-2 gap-12 items-center overflow-hidden">

          {/* 🌟 FLOATING LIGHTS */}
          <div className="absolute w-52 h-52 bg-orange-300 opacity-20 blur-3xl top-0 left-0"></div>
          <div className="absolute w-40 h-40 bg-amber-400 opacity-20 blur-3xl bottom-0 right-0"></div>

          {/* 🖼️ IMAGE WITH PARALLAX */}
          <motion.div
            style={{ y: yImg, scale: scaleImg }}
            className="relative overflow-hidden rounded-2xl"
          >
            <img
              src="/images/chairman.jpg"
              className="h-[380px] w-full object-cover rounded-2xl shadow-2xl"
            />

            {/* 🎬 OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>

            {/* LABEL */}
            <div className="absolute bottom-5 left-5 text-white text-sm bg-black/40 px-4 py-1 rounded-full backdrop-blur">
              Chairman
            </div>
          </motion.div>

          {/* 📝 TEXT SIDE */}
          <div>

            <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
              Chairman’s Vision
            </h2>

            {/* 🎥 WORD REVEAL */}
            <p
              ref={textRef}
              className="text-gray-700 leading-relaxed text-lg flex flex-wrap gap-1"
            >
              {text.split(" ").map((word, i) => (
                <span key={i} className="word opacity-0">
                  {word}
                </span>
              ))}
            </p>

            <p className="mt-5 text-gray-600">
              Our aim is to create leaders, not just students — individuals
              who inspire change.
            </p>

            {/* ✍️ SIGNATURE */}
            <div className="mt-8">
              <p className="text-2xl font-semibold text-orange-600 tracking-wide">
                — Chairman Name
              </p>
              <p className="text-sm text-gray-500">Founder & Visionary</p>
            </div>

          </div>
        </div>
      </div>
    </section>

            {[
                {
                    name: "Principal",
                    img: "/images/principal.jpg",
                    exp: "15+ Years",
                    msg: "Committed to academic excellence.",
                    details: "Leads academic strategy and ensures top-tier results.",
                },
                {
                    name: "Vice Principal",
                    img: "/images/vp.jpg",
                    exp: "12+ Years",
                    msg: "Ensuring discipline and growth.",
                    details: "Manages daily operations and student discipline.",
                },
                {
                    name: "Headmistress",
                    img: "/images/hm.jpg",
                    exp: "10+ Years",
                    msg: "Strong moral foundation builder.",
                    details: "Focuses on early education and student values.",
                },
                {
                    name: "HOD",
                    img: "/images/hod.jpg",
                    exp: "8+ Years",
                    msg: "Driving subject excellence.",
                    details: "Leads department and curriculum innovation.",
                },
            ].map((m, i) => (
                <motion.div
                    key={i}
                    onClick={() => setSelected(m)}
                    whileHover={{ scale: 1.06, rotateY: 6 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="relative group cursor-pointer"
                >

                    {/* 🔥 GLOW BORDER */}
                    <div className="absolute -inset-[2px] bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500 rounded-2xl blur-md opacity-0 group-hover:opacity-70 transition duration-500"></div>

                    {/* 🧊 CARD */}
                    <div className="relative bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/40 transition-all duration-300 group-hover:shadow-2xl">

                        {/* IMAGE */}
                        <motion.img
                            src={m.img}
                            whileHover={{ scale: 1.1 }}
                            className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-md"
                        />

                        {/* TEXT */}
                        <h3 className="font-bold text-lg text-orange-600 text-center">
                            {m.name}
                        </h3>

                        <p className="text-xs text-gray-500 text-center">
                            {m.exp}
                        </p>

                        {/* DIVIDER */}
                        <div className="w-10 h-[2px] bg-orange-400 mx-auto my-3 rounded-full"></div>

                        {/* MESSAGE */}
                        <p className="text-gray-600 text-sm text-center italic leading-relaxed">
                            "{m.msg}"
                        </p>

                    </div>
                </motion.div>
            ))}
            {/* 🔄 AUTO CAROUSEL */}
            <section className="overflow-hidden mb-24">

                <motion.div
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    className="flex gap-6 w-max"
                >
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className="min-w-[250px] bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-orange-100"
                        >
                            <h3 className="text-orange-600 font-bold">
                                Leadership Member {i + 1}
                            </h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Dedicated to excellence and innovation.
                            </p>
                        </div>
                    ))}
                </motion.div>
            </section>

            {/* 📄 MANAGEMENT */}
            <section className="max-w-6xl mx-auto">

                <h2 className="text-3xl font-bold text-orange-600 mb-10">
                    Management Details
                </h2>

                <div className="space-y-8">

                    {[
                        {
                            role: "Chairman",
                            exp: "20+ Years",
                            msg: "Leading the institution with vision and integrity.",
                            details:
                                "The Chairman plays a pivotal role in shaping the long-term vision of the school. With decades of experience, he ensures that Gurukulam maintains excellence in academics, discipline, and values.",
                        },
                        {
                            role: "Director",
                            exp: "18+ Years",
                            msg: "Ensuring operational excellence across all departments.",
                            details:
                                "The Director oversees daily operations, administration, and strategic execution. His leadership ensures smooth functioning and continuous growth of the institution.",
                        },
                        {
                            role: "Academic Head",
                            exp: "15+ Years",
                            msg: "Focused on curriculum innovation and academic quality.",
                            details:
                                "The Academic Head is responsible for designing curriculum standards, monitoring teaching quality, and implementing modern education practices.",
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.02 }}
                            className="relative group"
                        >

                            {/* 🔥 Glow */}
                            <div className="absolute -inset-[2px] bg-gradient-to-r from-orange-500 to-amber-400 blur-lg opacity-20 rounded-2xl"></div>

                            <div className="relative p-6 bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-orange-100">

                                <h3 className="text-xl font-bold text-orange-600">
                                    {item.role}
                                </h3>

                                <p className="text-gray-500 text-sm">
                                    Experience: {item.exp}
                                </p>

                                {/* ✨ PERSONAL MESSAGE */}
                                <p className="text-gray-700 mt-3 italic">
                                    "{item.msg}"
                                </p>

                                {/* 📄 DETAILED INFO */}
                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    {item.details}
                                </p>

                            </div>
                        </motion.div>
                    ))}

                </div>
            </section>
            {selected && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed inset-0 bg-black/50 backdrop-blur-xl flex items-center justify-center z-50"
                    onClick={() => setSelected(null)}
                >
                    <motion.div
                        initial={{ scale: 0.7, y: 50, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 120 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-lg p-[2px] rounded-3xl bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500"
                    >

                        {/* 🧊 INNER GLASS */}
                        <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl relative">

                            {/* CLOSE */}
                            <button
                                onClick={() => setSelected(null)}
                                className="absolute top-4 right-5 text-gray-400 hover:text-black text-xl"
                            >
                                ✕
                            </button>

                            {/* IMAGE */}
                            <motion.img
                                src={selected.img}
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
                            />

                            {/* NAME */}
                            <h2 className="text-2xl font-bold text-center text-orange-600">
                                {selected.name}
                            </h2>

                            <p className="text-center text-gray-500 text-sm">
                                {selected.exp}
                            </p>

                            {/* MESSAGE */}
                            <p className="mt-5 text-gray-700 text-center italic leading-relaxed">
                                "{selected.msg}"
                            </p>

                            {/* PREMIUM DIVIDER */}
                            <div className="w-16 h-[3px] bg-gradient-to-r from-orange-500 to-amber-400 mx-auto my-5 rounded-full"></div>

                            {/* DETAILS */}
                            <p className="text-gray-600 text-sm leading-relaxed text-center">
                                {selected.details}
                            </p>

                        </div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
}