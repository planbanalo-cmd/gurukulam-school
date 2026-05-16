'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function CurriculumPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen px-4 py-12 bg-[linear-gradient(120deg,#eef5f1,#f9f7f2,#eef5f1)]">

            <div className="max-w-6xl mx-auto">

                {/* 🔥 HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-14"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold 
          bg-gradient-to-r from-[#156445] via-[#0D6453] to-[#296236] 
          bg-clip-text text-transparent">
                        Curriculum
                    </h1>

                    <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-lg">
                        Gurukulam The School follows a well-structured and comprehensive curriculum aligned with the
                        CBSE <b>(Central Board of Secondary Education)</b> guidelines, designed to provide a strong
                        academic foundation while promoting holistic development.
                    </p>
                </motion.div>

                {/* 📘 INTRO CARD */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-[#156445]/10 mb-16"
                >
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Our curriculum is thoughtfully planned to balance academics with co-curricular and life skill
                        development. It emphasizes conceptual understanding, critical thinking, creativity, and practical
                        application of knowledge. Through modern teaching methodologies, interactive classrooms, and
                        continuous assessments, we ensure that learning is engaging, meaningful, and effective.


                    </p>
                    <br />
                    <p className="text-gray-700 text-lg leading-relaxed">
                        We focus not only on academic excellence but also on nurturing values, discipline, and
                        leadership qualities in students, preparing them to meet future challenges with confidence.



                    </p>
                </motion.div>

                {/* 🔥 TIMELINE - CLASSES OFFERED */}
                <section className="mb-20">

                    <h2 className="text-3xl font-bold mb-10 text-center 
          bg-gradient-to-r from-[#156445] to-[#0D6453] bg-clip-text text-transparent">
                        Classes Offered
                    </h2>

                    <div className="relative border-l-4 border-[#156445]/30 ml-4 space-y-10">

                        {[
                            {
                                title: "Pre-Primary (Nursery - KG)",
                                desc: "Focus on foundational learning through play-based and activity-oriented methods,developing basic skills and curiosity"
                            },
                            {
                                title: "Primary (Class I - V)",
                                desc: "Emphasis on building strong fundamentals in core subjects with interactive andengaging teaching methods."
                            },
                            {
                                title: "Middle School (VI - VIII)",
                                desc: "Introduction to advanced concepts, skill development, and strengthening analyticalthinking."
                            },
                            {
                                title: "Secondary (IX - X)",
                                desc: "Structured academic preparation with focus on board examinations, conceptual clarity,and performance."
                            },
                            {
                                title: "Senior Secondary (XI - XII)",
                                desc: "Stream-based education (science/commerce/arts) with career-oriented guidance andcompetitive exam preparation."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.2 }}
                                className="relative pl-6"
                            >

                                {/* Dot */}
                                <div className="absolute -left-3 top-2 w-6 h-6 rounded-full 
                bg-gradient-to-r from-[#156445] to-[#0D6453] shadow-lg"></div>

                                {/* Card */}
                                <div className="bg-white/80 backdrop-blur-xl p-5 rounded-xl shadow-md border border-[#156445]/10">
                                    <h3 className="font-semibold text-lg text-[#156445]">{item.title}</h3>
                                    <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                                </div>

                            </motion.div>
                        ))}

                    </div>
                </section>
                {/* 🌟 CURRICULUM FEATURES CARDS */}
                <section className="mb-20">

                    <h2 className="text-3xl font-bold text-center mb-12 
  bg-gradient-to-r from-[#156445] to-[#0D6453] bg-clip-text text-transparent">
                        Key Features of Our Curriculum
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {[
                            {
                                title: "Activity-Based Learning",
                                desc: "Interactive and experiential methods to enhance understanding."
                            },
                            {
                                title: "Continuous Evaluation",
                                desc: "Regular assessments to track progress and improve performance."
                            },
                            {
                                title: "Technology Integration",
                                desc: "Smart classrooms and digital tools for modern education."
                            },
                            {
                                title: "Life Skills Development",
                                desc: "Focus on communication, leadership, and problem-solving."
                            },
                            {
                                title: "Competitive Exam Prep",
                                desc: "Strong foundation for future academic and career success."
                            },
                            {
                                title: "Value-Based Education",
                                desc: "Discipline, ethics, and character building."
                            }
                        ].map((item, i) => (
                            <div key={i} className="relative group">

                                {/* Glow Effect */}
                                <div className="absolute -inset-[2px] rounded-2xl 
        bg-gradient-to-r from-[#156445] via-[#0D6453] to-[#296236] 
        opacity-20 blur-lg group-hover:opacity-40 transition"></div>

                                {/* Card */}
                                <div className="relative bg-white/80 backdrop-blur-xl 
        p-6 rounded-2xl shadow-xl border border-[#156445]/10 
        hover:scale-[1.03] transition duration-300">

                                    <h3 className="text-lg font-semibold text-[#156445] mb-2">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm">
                                        {item.desc}
                                    </p>

                                </div>

                            </div>
                        ))}

                    </div>
                </section>




            </div>
        </div>
    );
}