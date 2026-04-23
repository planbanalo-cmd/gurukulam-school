"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function AboutGurukulam() {

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    // Parallax effect
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 300], [0, -50]);
    // ✅ Always open page from top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);



    return (
        <div className="relative min-h-screen bg-gradient-to-br from-orange-50 via-white to-gray-100 px-4 py-12 overflow-hidden">

            {/* 🌊 PARALLAX BACKGROUND */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 opacity-10 bg-[url('/images/GurukulamLogo.jpeg')] bg-center bg-no-repeat bg-contain"
            />

            <div className="max-w-6xl mx-auto relative z-10">

                {/* HEADER */}
                <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
                    <h1 className="text-5xl font-extrabold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                        About Gurukulam
                    </h1>
                </motion.div>
                <section className="py-20 px-4 md:px-8 lg:px-16">
                    <div className="relative max-w-5xl mx-auto group">

                        {/* 🔥 Glow Border */}
                        <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600 opacity-20 blur-xl group-hover:opacity-40 transition duration-500"></div>

                        {/* 🧊 Card */}
                        <div className="relative bg-white/80 backdrop-blur-xl border border-orange-100 rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500">

                            {/* ✨ Heading */}
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent animate-fadeUp">
                                About Us
                            </h2>

                            {/* ✨ Content with stagger animation */}
                            <div className="space-y-5">

                                <p className="text-gray-700 text-lg leading-relaxed animate-fadeUp delay-100">
                                    Gurukulam The School, Rewari, was established in 20 March, 2002 and carries a rich
                                    educational legacy of over 25 years in teaching excellence and student development.
                                    Rooted in the vision of going beyond conventional academics, the institution emphasizes
                                    the overall growth of every learner - academically, personally, and ethically.
                                </p>

                                <p className="text-gray-700 text-lg leading-relaxed animate-fadeUp delay-200">
                                    Inspired by the ancient Indian Gurukul system, Gurukulam upholds the values of mentorship,
                                    strong moral foundations, and holistic education. We believe that true learning is not
                                    confined to textbooks but extends to building character, confidence, and a deep sense of responsibility.
                                </p>

                                <p className="text-gray-700 text-lg leading-relaxed animate-fadeUp delay-300">
                                    Our school offers a dynamic and engaging learning environment where students are
                                    encouraged to think critically, explore creatively, and grow holistically. With experienced
                                    faculty, modern infrastructure, and a student-centric approach, we strive for academic excellence
                                    while nurturing co-curricular talents and essential life skills.
                                </p>

                                <p className="text-gray-700 text-lg leading-relaxed animate-fadeUp delay-500">
                                    At Gurukulam, our mission is to shape responsible individuals who are not only academically
                                    proficient but also morally grounded and socially aware.
                                </p>

                            </div>
                        </div>
                    </div>
                </section>



                {/* 📊 ANIMATED STATS */}
                <motion.div className="grid md:grid-cols-4 gap-6 mb-14">
                    {[
                        ["1500+", "Students"],
                        ["80+", "Teachers"],
                        ["20+", "Years"],
                        ["100%", "Results"],
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.08 }}
                            className="relative group"
                        >
                            {/* Glow */}
                            <div className="absolute -inset-[2px] rounded-2xl overflow-hidden">
                                <div className="w-full h-full animate-spin-slow bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600 opacity-30 blur-md"></div>
                            </div>

                            {/* Card */}
                            <div className="relative bg-white/80 backdrop-blur-lg rounded-2xl p-6 text-center shadow-xl border border-orange-100">
                                <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                                    {item[0]}
                                </h3>
                                <p className="text-gray-600 mt-1">{item[1]}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>








            </div>
        </div>
    );
}