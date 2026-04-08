"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function AboutGurukulam() {

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    // Parallax effect
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 300], [0, -50]);

    const images = [
        "/images/school1.jpg",
        "/images/school2.jpg",
        "/images/school3.jpg",
        "/images/school4.jpg",
        "/images/school5.jpg",
        "/images/school6.jpg",
    ];

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

                {/* 🖼️ FOUNDER */}
                <section className="relative max-w-6xl mx-auto mb-16 group">

                    {/* 🔥 ANIMATED GLOW BORDER */}
                    <div className="absolute -inset-[2px] rounded-3xl overflow-hidden">
                        <div className="w-full h-full animate-spin-slow bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600 opacity-40 blur-lg"></div>
                    </div>

                    {/* 🧊 MAIN CARD */}
                    <div className="relative bg-white/85 backdrop-blur-xl border border-orange-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition duration-300">

                        <div className="grid md:grid-cols-2 gap-8 items-center">

                            {/* 🖼️ FOUNDER IMAGE */}
                            <div className="relative group">
                                <img
                                    src="/images/founder.jpg"
                                    alt="Founder"
                                    className="rounded-2xl shadow-lg object-cover w-full h-[320px]"
                                />

                                {/* ✨ Image Glow */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-400 opacity-0 group-hover:opacity-20 transition duration-300"></div>
                            </div>

                            {/* 📄 CONTENT */}
                            <div>

                                {/* 🟠 HEADING */}
                                <h2 className="text-2xl md:text-3xl font-bold mb-4 
          bg-gradient-to-r from-orange-600 to-amber-500 
          bg-clip-text text-transparent"
                                >
                                    Founder’s Message
                                </h2>

                                {/* ✨ DIVIDER */}
                                <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-400 mb-4 rounded-full"></div>

                                {/* MESSAGE */}
                                <p className="text-gray-700 leading-relaxed text-[15px] md:text-base">
                                    At Gurukulam, our vision has always been to nurture not just academic
                                    excellence but also strong moral values and character. We believe that
                                    education is the foundation of a progressive society.
                                </p>

                                <p className="text-gray-700 mt-4 leading-relaxed text-[15px] md:text-base">
                                    Our aim is to create an environment where students are encouraged to
                                    think independently, act responsibly, and grow into confident
                                    individuals ready to face the future.
                                </p>

                                {/* SIGNATURE */}
                                <p className="mt-6 font-semibold text-orange-600">
                                    — Founder Name
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

                {/* 📊 TIMELINE */}
                <motion.div className="relative mb-14 group">

                    {/* Glow Border */}
                    <div className="absolute -inset-[2px] rounded-3xl overflow-hidden">
                        <div className="w-full h-full animate-spin-slow bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600 opacity-20 blur-lg"></div>
                    </div>

                    <div className="relative bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-orange-100">
                        <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                            Our Journey
                        </h2>

                        <div className="space-y-6 border-l-4 border-orange-400 pl-6">
                            {[
                                ["2005", "Founded"],
                                ["2010", "Expansion"],
                                ["2015", "Senior Secondary"],
                                ["2020", "Digital Upgrade"],
                                ["2025", "Modern Campus"],
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ x: 10 }}
                                    className="relative"
                                >
                                    {/* Dot */}
                                    <div className="absolute -left-[34px] top-1 w-4 h-4 bg-orange-500 rounded-full shadow-md"></div>

                                    <h3 className="font-bold text-orange-600">{item[0]}</h3>
                                    <p className="text-gray-600">{item[1]}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* 🎥 VIDEO */}
                <motion.div className="relative mb-14 group">

                    {/* Glow */}
                    <div className="absolute -inset-[2px] rounded-3xl overflow-hidden">
                        <div className="w-full h-full animate-spin-slow bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600 opacity-20 blur-lg"></div>
                    </div>

                    <div className="relative bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-orange-100">
                        <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                            Campus Tour
                        </h2>

                        <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.02] transition duration-300">
                            <iframe
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                className="w-full h-full"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </motion.div>
                {/* 🏫 GALLERY WITH LIGHTBOX */}
                <motion.div className="relative group">

                    {/* Glow */}
                    <div className="absolute -inset-[2px] rounded-3xl overflow-hidden">
                        <div className="w-full h-full animate-spin-slow bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600 opacity-20 blur-lg"></div>
                    </div>

                    <div className="relative bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-orange-100">
                        <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                            Campus Gallery
                        </h2>

                        <div className="grid md:grid-cols-3 gap-4">
                            {images.map((img, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.05 }}
                                    className="relative group cursor-pointer"
                                    onClick={() => {
                                        setIndex(i);
                                        setOpen(true);
                                    }}
                                >
                                    <img
                                        src={img}
                                        className="rounded-xl shadow-lg object-cover w-full h-[200px]"
                                    />

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition duration-300"></div>
                                </motion.div>
                            ))}
                        </div>

                        <Lightbox
                            open={open}
                            close={() => setOpen(false)}
                            index={index}
                            slides={images.map((src) => ({ src }))}
                        />
                    </div>
                </motion.div>

            </div>
        </div>
    );
}