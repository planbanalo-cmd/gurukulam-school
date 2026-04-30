'use client';

import { motion } from 'framer-motion';
import { Home, ShieldCheck, Users, BookOpen, Heart, Star } from 'lucide-react';

export default function BoardingPage() {
    return (
        <div className="min-h-screen px-4 md:px-10 lg:px-20 py-14 
    bg-[linear-gradient(120deg,#eef5f1_0%,#f5f1e8_40%,#eef5f1_100%)]">

            {/* 🔥 HERO */}
            <motion.div
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-14"
            >
                <h1 className="text-4xl md:text-5xl font-extrabold 
        bg-gradient-to-r from-[#156445] via-[#0D6453] to-[#296236] 
        bg-clip-text text-transparent">
                    Welcome to Boarding
                </h1>

                <p className="text-gray-600 mt-3 text-lg">
                    (Only boys' hostel applicable)
                </p>
            </motion.div>

            {/* 🏠 INTRO CARD */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="relative max-w-5xl mx-auto mb-16 group"
            >
                {/* Glow */}
                <div className="absolute -inset-[2px] rounded-3xl 
        bg-gradient-to-r from-[#156445] via-[#0D6453] to-[#296236] 
        opacity-20 blur-xl group-hover:opacity-40 transition"></div>

                {/* Card */}
                <div className="relative bg-white/80 backdrop-blur-xl border 
        border-[#156445]/20 rounded-3xl p-8 md:p-12 shadow-xl">

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        At <span className="font-semibold text-[#156445]">Gurukulam The School</span>,
                        our boarding facility is more than just a place to stay—it is a home
                        where students grow, learn, and thrive together.
                    </p>

                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        We provide a safe, disciplined, and nurturing environment that encourages
                        independence, responsibility, and strong moral values.
                    </p>

                    <p className="text-gray-700 text-lg leading-relaxed">
                        With dedicated wardens, structured routines, and a supportive atmosphere, every child receives
                        personal care and attention. Our boarding life is designed to create a balance between
                        academics, activities, and personal well-being, ensuring holistic development.

                    </p>
                </div>
            </motion.div>

            {/* 🌟 WHY BOARDING */}
            <div className="max-w-6xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold 
          bg-gradient-to-r from-[#156445] via-[#0D6453] to-[#296236] 
          bg-clip-text text-transparent">
                        Why Enroll in a Boarding School?
                    </h2>
                    <p className="text-gray-600 mt-3 text-lg">
                    Choosing a boarding school offers students a unique opportunity to grow beyond the classroom
                </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {[
                        {
                            icon: <Home />,
                            title: "Independence & Responsibility",
                            desc: "Students learn to manage time, decisions, and daily routines.",
                        },
                        {
                            icon: <BookOpen />,
                            title: "Focused Learning",
                            desc: "Structured schedules help maintain discipline and academic focus.",
                        },
                        {
                            icon: <Star />,
                            title: "Holistic Development",
                            desc: "Equal focus on academics, sports, and co-curricular activities.",
                        },
                        {
                            icon: <ShieldCheck />,
                            title: "Strong Values",
                            desc: "Builds character, discipline, and respect.",
                        },
                        {
                            icon: <Users />,
                            title: "24/7 Support",
                            desc: "Continuous guidance and mentorship from staff.",
                        },
                        {
                            icon: <Heart />,
                            title: "Lifelong Friendships",
                            desc: "Students develop strong bonds and social skills.",
                        },
                    ].map((item, i) => (
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
                            <div className="relative bg-white/80 backdrop-blur-xl 
              border border-[#156445]/20 rounded-2xl p-6 shadow-lg">

                                {/* Icon */}
                                <div className="w-12 h-12 flex items-center justify-center 
                rounded-full mb-4
                bg-gradient-to-r from-[#156445] to-[#0D6453] text-white">
                                    {item.icon}
                                </div>

                                <h3 className="text-lg font-semibold text-[#156445] mb-2">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600 text-sm">
                                    {item.desc}
                                </p>

                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>

        </div>
    );
}