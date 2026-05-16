"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { useEffect, useState } from "react";

export default function DailySchedule() {
    const [currentTime, setCurrentTime] = useState(new Date());

    // ⏱️ Update every 10 seconds (smooth progress)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    // ⏰ Convert time string → minutes
    const getMinutes = (time: string) => {
        const [hourMin, period] = time.split(" ");
        let [hours, minutes] = hourMin.split(":").map(Number);

        if (period === "PM" && hours !== 12) hours += 12;
        if (period === "AM" && hours === 12) hours = 0;

        return hours * 60 + minutes;
    };

    const nowMinutes =
        currentTime.getHours() * 60 + currentTime.getMinutes();

    const schedule = [
        ["5:30 AM", "Wake Up", "Fresh start to the day with personal hygiene."],
        ["6:00 AM", "Morning Exercise / Yoga", "Physical fitness and mental wellness activities."],
        ["7:00 AM", "Breakfast", "Nutritious and balanced meal"],
        ["7:30 AM", "Get Ready for School", "Preparation for academic hours"],
        ["8:00 AM – 2:00 PM", "School Hours", "Classes and learning"],
        ["2:00 PM", "Lunch & Rest", "Regular classes and academic learning."],
        ["4:00 PM", "Sports / Activities", "Outdoor games and co-curricular engagement."],
        ["6:00 PM", "Evening Study Hours", "Supervised study sessions"],
        ["8:00 PM", "Dinner", "Healthy and hygienic meal"],
        ["9:00 PM", "Light Study / Relaxation", "Revision or leisure"],
        ["10:00 PM", "Lights Off", "Proper rest for next day"],
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#eef5f1] via-[#f9f7f2] to-[#eef5f1] py-16 px-4 md:px-8 lg:px-16">

            <div className="max-w-5xl mx-auto">

                {/* 🔥 HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-14"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold 
          bg-gradient-to-r from-[#156445] via-[#0D6453] to-[#296236] 
          bg-clip-text text-transparent">
                        Daily Schedule
                    </h1>

                    <p className="text-gray-600 mt-4 text-lg">
                        At Gurukulam The School, the daily routine of hostellers is carefully structured to maintain a
                        perfect balance between academics, discipline, activities, and rest.
                    </p>
                </motion.div>

                {/* 🕒 TIMELINE */}
                <div className="relative border-l-4 border-[#156445]/30 ml-4">

                    {schedule.map((item, i) => {
                        const start = getMinutes(item[0]);
                        const end =
                            i < schedule.length - 1
                                ? getMinutes(schedule[i + 1][0])
                                : 24 * 60;

                        const isActive =
                            nowMinutes >= start && nowMinutes < end;

                        // 🔥 Progress %
                        const progress = isActive
                            ? ((nowMinutes - start) / (end - start)) * 100
                            : 0;

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="mb-10 ml-6 relative"
                            >
                                {/* Dot */}
                                <div
                                    className={`absolute -left-[38px] top-2 w-8 h-8 rounded-full flex items-center justify-center shadow-md
                  ${isActive
                                            ? "bg-green-600 animate-pulse"
                                            : "bg-gradient-to-r from-[#156445] to-[#0D6453]"
                                        }`}
                                >
                                    <Clock className="text-white w-4 h-4" />
                                </div>

                                {/* Card */}
                                <div
                                    className={`rounded-xl p-5 transition duration-300 border
                  ${isActive
                                            ? "bg-green-50 border-green-500 shadow-xl scale-[1.03]"
                                            : "bg-white/80 border-[#156445]/10 shadow-md"
                                        }`}
                                >
                                    <h3
                                        className={`font-bold text-lg ${isActive ? "text-green-700" : "text-[#156445]"
                                            }`}
                                    >
                                        {item[0]} – {item[1]}
                                    </h3>

                                    <p className="text-gray-600 text-sm mt-1">
                                        {item[2]}
                                    </p>

                                    {/* 🔥 LIVE BADGE */}
                                    {isActive && (
                                        <span className="inline-block mt-2 px-3 py-1 text-xs bg-green-600 text-white rounded-full animate-pulse">
                                            LIVE NOW
                                        </span>
                                    )}

                                    {/* 🚀 PROGRESS BAR */}
                                    {isActive && (
                                        <div className="mt-4">
                                            <div className="w-full h-2 bg-green-100 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-gradient-to-r from-green-500 to-green-700 transition-all duration-500"
                                                    style={{ width: `${progress}%` }}
                                                />
                                            </div>

                                            <p className="text-xs text-green-700 mt-1 font-medium">
                                                {Math.floor(progress)}% completed
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* ✨ QUOTE */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-16 text-center"
                >
                    <div className="bg-white/80 backdrop-blur-xl border border-[#156445]/10 rounded-2xl p-6 shadow-lg">
                        <p className="text-lg md:text-xl font-semibold 
            bg-gradient-to-r from-[#156445] to-[#296236] 
            bg-clip-text text-transparent">
                            “A disciplined routine that builds success, confidence, and balance in life.”
                        </p>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}