'use client';

import { motion } from 'framer-motion';
import { Award, Trophy, Star, Medal } from 'lucide-react';

export default function AchievementsPage() {

    const awards = [
        "Recognized for academic excellence and consistent performance",
        "Certified and aligned with CBSE educational standards",
        "Participation and recognition in inter-school and district-level competitions",
        "Achievements in academics, sports, and co-curricular activities",
        "Continuous efforts toward quality education and student development"
    ];

    const success = [
        "Students achieving outstanding results in board examinations",
        "Selections in competitive exams and academic competitions",
        "Excellence in sports at school, district, and state levels",
        "Development of confident, disciplined, and responsible individuals",
        "Alumni progressing towards successful careers and higher education"
    ];

    return (
        <div className="min-h-screen bg-[linear-gradient(120deg,#f5f1e8_0%,#eef5f1_40%,#f9f7f2_70%,#f5f1e8_100%)] px-4 py-16">

            <div className="max-w-6xl mx-auto">

                {/* 🔥 HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold 
            bg-gradient-to-r from-[#156445] via-[#0D6453] to-[#296236] 
            bg-clip-text text-transparent">
                        Awards & Achievements
                    </h1>

                    <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-lg">
                        Gurukulam The School takes pride in its commitment to excellence in education. Our institution
                        has been recognized for its high academic standards, innovative teaching methods, and holistic
                        development approach. We have received numerous awards and certifications that reflect our dedication to providing quality.
                    </p>
                </motion.div>

                {/* 🏆 AWARDS SECTION */}
                <section className="mb-20">

                    <motion.h2
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-3xl font-bold mb-10 text-center
            bg-gradient-to-r from-[#156445] to-[#2d7a5f] 
            bg-clip-text text-transparent"
                    >
                        Awards & Certifications
                    </motion.h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {awards.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="relative group"
                            >
                                {/* Glow */}
                                <div className="absolute -inset-[2px] rounded-2xl 
                  bg-gradient-to-r from-[#156445] via-[#0D6453] to-[#296236] 
                  opacity-20 blur-lg group-hover:opacity-40 transition"></div>

                                {/* Card */}
                                <div className="relative bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-green-100">

                                    {/* Icon */}
                                    <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-full
                    bg-gradient-to-r from-[#156445] to-[#2d7a5f] text-white">
                                        <Award size={22} />
                                    </div>

                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        {item}
                                    </p>

                                </div>
                            </motion.div>
                        ))}

                    </div>
                </section>







            </div>
        </div>
    );
}