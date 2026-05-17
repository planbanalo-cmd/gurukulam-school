"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import gsap from "gsap";
export default function LeadershipPage() {

    const ref = useRef<HTMLDivElement | null>(null);
    const textRef = useRef<HTMLDivElement | null>(null);
    const members = [
        {
            name: "Principal",
            fullName: "Mrs. Snehlata",
            img: "/images/Leader&Management/Principal.jpeg",
            exp: "12+ Years",
            quote: "Dream big, work hard, shine bright – the future is ours to create!",
            title: "From the Principal’s Desk",
            message: `A school is not just made of classrooms and books—it is made of dreams, values, and the lives we touch each day.

Our vision has always been to create a learning space where every child feels valued, where curiosity is nurtured, and where education shapes not only the mind but also the heart.

We believe that true success lies not only in marks and medals but in the strength of character, kindness of spirit, and courage to do what is right.

In our journey, we aim to prepare our students to be lifelong learners—young individuals who will grow into compassionate leaders, responsible citizens, and human beings who make this world a better place.

As Principal, I feel blessed to walk this path with our dedicated teachers, supportive parents, and vibrant students.

May we continue to inspire one another, and may our children always have wings to soar high and roots that keep them grounded.

Every child is a spark of brilliance – here, we make them shine.`,
        },

        {
            name: "Vice Principal",
            fullName: "Mr. Narender Soni",
            img: "/images/Leader&Management/VicePrincipal.jpeg",
            exp: "17+ Years",
            quote: "Igniting minds, shaping hearts, and building leaders for tomorrow.",
            title: "Message from Vice Principal",
            message: `Education is not merely the transmission of knowledge—it is the awakening of minds, the shaping of character, and the building of a future filled with purpose. At our school, we believe that every child carries within them a world of possibilities, and our vision is to unlock that potential through care, creativity, and courage.

We aim to create an environment where learning is not confined to textbooks but extends to experiences that build confidence, compassion, and critical thinking. Our mission is to nurture young minds who can dream fearlessly, think deeply, and act responsibly.

The journey of our school has always been guided by a single belief—that excellence is not an act but a habit. It grows in every classroom interaction, every challenge faced, and every value lived each day. Together, with our dedicated staff, enthusiastic students, and supportive parents, we are turning that vision into reality.

Let us continue to move forward with determination and heart, transforming every dream into achievement and every learner into a leader.


`,
        },

        {
            name: "Headmistress",
            fullName: "Ms. Neetu Singh",
            img: "/images/Leader&Management/HeadMistress.jpeg",
            exp: "10+ Years",
            quote: "Education is not the learning of facts, but the training of the mind to think.",
            title: "Message from Headmistress",
            message: `Education is the art of nurturing the mind and the heart together. At our school, we believe that every child is a story waiting to be written — a story of dreams, courage, and endless possibilities. Our vision is to shape not just brilliant minds, but beautiful souls who will light up the world with their wisdom and compassion.

We strive to create an environment where learning is joyful, curiosity is celebrated, and every student feels inspired to give their best. We teach our children not only how to succeed, but how to stand tall after every fall, to believe in themselves, and to lead with kindness.

True education, in our eyes, is not about filling notebooks, but about shaping character — about instilling the confidence to speak, the humility to listen, and the strength to care. Each day in our school is a step toward that vision — of excellence built on values and dreams rooted in purpose.

Let us continue to dream together, work together, and grow together — for the vision of our school lives in every heart that dares to shine.
`,
        },

        {
            name: "School coordinator",
            fullName: "Mrs. Monika Gaur",
            img: "/images/Leader&Management/SchoolCoordinator.jpeg",
            exp: "30 years of experience",
            quote: " Believe in your potential, stay curious, and remember that every small effort you make today builds the foundation for your success tomorrow.",
            title: "From the Coordinator’s Desk",
            message: `Our primary mission is to create a dynamic learning environment where academic excellence goes hand-in-hand with character development and personal growth. We believe that every student possesses unique talents, and it is our collective responsibility—as educators, parents, and mentors—to provide the guidance and resources necessary for those talents to flourish. And the commitment to fostering an environment where every student feels empowered to excel and every educator is inspired to lead. As we work together to bridge the gap between potential and achievement, I encourage our entire school community to embrace collaboration, celebrate our diverse strengths, and maintain a shared focus on holistic growth. By setting high standards and supporting one another, we ensure that our school remains a vibrant space for innovation, character building, and lifelong learning.
As we move forward, we remain dedicated to fostering a culture of curiosity, inclusivity, and resilience. We encourage our students to look beyond the classroom, to question the world around them, and to develop the critical thinking skills essential for the 21st century. Success at our school is measured not just by grades, but by the integrity, empathy, and leadership our students demonstrate every day. Let us continue to work in partnership to inspire a lifelong love of learning and to empower the next generation of global citizens to reach their highest potential.

Together, we are not just building students; we are building the leaders and thinkers of tomorrow.`,
        },
    ];
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
            className="min-h-screen bg-gradient-to-br from-[#ECFDF5] via-white to-[#F0FDF4] px-4 py-16"
        >

            {/* 🔥 HERO */}
            <section className="text-center mb-10">
                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl font-extrabold bg-gradient-to-r from-[#156445] via-[#0D6453] to-[#296236] bg-clip-text text-transparent"
                >
                    Leadership & Management
                </motion.h1>


            </section>
            <section className="relative py-10 px-4 md:px-8 lg:px-16 overflow-hidden rounded-3xl">

                {/* 🖼️ BACKGROUND IMAGE */}
                <div className="absolute inset-0">
                    <img
                        src="/images/school-bg.jpg"   // 👉 your image
                        className="w-full h-full object-cover opacity-25"
                    />
                </div>

                {/* 🎨 GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-[#ECFDF5]/80 to-[#D1FAE5]/80 backdrop-blur-[2px]"></div>

                {/* 🔥 CONTENT */}
                <div className="relative max-w-5xl mx-auto z-10">

                    {/* 🧊 GLASS CARD (optional but recommended) */}
                    <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-xl border border-white/40">

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
                </div>
            </section>
            {/* 🎬 CINEMATIC CHAIRMAN */}
            <section
                ref={ref}
                className="max-w-6xl mx-auto mb-16 px-4"
            >

                <div className="relative">

                    {/* 🔥 BACKGROUND GLOW PULSE */}
                    <div className="absolute -inset-[3px] rounded-3xl bg-gradient-to-r from-[#156445] via-[#0D6453] to-[#296236] blur-2xl opacity-30 animate-pulse"></div>

                    {/* 🧊 MAIN CONTAINER */}
                    <div className="relative bg-white/70 backdrop-blur-2xl rounded-3xl p-10 md:p-14 shadow-2xl border border-white/40 grid md:grid-cols-2 gap-12 items-center overflow-hidden">

                        {/* 🌟 FLOATING LIGHTS */}
                        <div className="absolute w-52 h-52 bg-[#156445] opacity-20 blur-3xl top-0 left-0"></div>
                        <div className="absolute w-40 h-40 bg-[#0D6453] opacity-20 blur-3xl bottom-0 right-0"></div>

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

                            <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-[#156445] to-[#296236] bg-clip-text text-transparent">
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
                                <p className="text-2xl font-semibold text-[#156445] tracking-wide">
                                    — Chairman Name
                                </p>
                                <p className="text-sm text-gray-500">Founder & Visionary</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* 🎬 TEAM MEMBERS SECTION */}
            <section className="max-w-6xl mx-auto mb-20 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {members.map((m, i) => (
                        <motion.div
                            key={i}
                            onClick={() => setSelected(m)}
                            whileHover={{ scale: 1.06, rotateY: 6 }}
                            className="relative group cursor-pointer"
                        >
                            <div className="relative bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-xl">

                                <img
                                    src={m.img}
                                    className="w-24 h-24 rounded-full mx-auto mb-4"
                                />

                                <h3 className="font-bold text-lg text-[#156445] text-center">
                                    {m.name}
                                </h3>

                                <p className="text-xs text-gray-500 text-center">
                                    {m.exp}
                                </p>

                                <p className="text-gray-600 text-sm text-center italic mt-3">
                                    "{m.quote}"
                                </p>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
            
            

            {/* 📄 MANAGEMENT */}
            <section className="max-w-6xl mx-auto px-4 mt-24 md:mt-32">

                <h2 className="text-3xl font-bold text-[#156445] mb-10 text-center">
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
                            <div className="absolute -inset-[2px] bg-gradient-to-r from-[#156445] to-[#296236] blur-lg opacity-20 rounded-2xl"></div>

                            <div className="relative p-6 bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-[#7B9B68]/20">

                                <h3 className="text-xl font-bold text-[#156445]">
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
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/60 backdrop-blur-xl flex items-center justify-center z-50 p-4"
                    onClick={() => setSelected(null)}
                >
                    <motion.div
                        initial={{ scale: 0.8, y: 60, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-4xl max-h-[90vh] bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl overflow-hidden"
                    >
                        {/* CLOSE BUTTON */}
                        <button
                            onClick={() => setSelected(null)}
                            className="absolute top-4 right-6 text-gray-500 hover:text-gray-700 text-2xl z-10 transition-colors"
                        >
                            ✕
                        </button>

                        {/* SCROLLABLE CONTENT */}
                        <div className="overflow-y-auto max-h-[90vh] p-6 md:p-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

                                {/* LEFT SIDE - PROFILE */}
                                <div className="flex flex-col items-center md:items-start">
                                    <img
                                        src={selected.img}
                                        alt={selected.fullName}
                                        className="w-40 h-40 md:w-60 md:h-60 object-cover rounded-2xl shadow-xl"
                                    />

                                    <div className="mt-6 md:mt-8 w-full">
                                        <h2 className="text-2xl md:text-3xl font-bold text-[#156445] text-center md:text-left">
                                            {selected.fullName}
                                        </h2>

                                        <p className="text-gray-600 text-center md:text-left font-semibold mt-2">
                                            {selected.name}
                                        </p>

                                        <p className="text-gray-500 text-sm text-center md:text-left mt-2">
                                            Experience: {selected.exp}
                                        </p>

                                        <p className="mt-4 italic text-gray-700 text-center md:text-left text-sm md:text-base">
                                            "{selected.quote}"
                                        </p>
                                    </div>
                                </div>

                                {/* RIGHT SIDE - MESSAGE */}
                                <div className="space-y-4 text-gray-700 leading-relaxed">

                                    <h3 className="text-2xl md:text-3xl font-bold text-[#156445]">
                                        {selected.title}
                                    </h3>

                                    <div className="space-y-3 text-sm md:text-base">
                                        {selected.message.split("\n").map((para: string, i: number) => (
                                            para.trim() && (
                                                <p key={i} className="text-justify md:text-left">
                                                    {para}
                                                </p>
                                            )
                                        ))}
                                    </div>

                                    <div className="mt-6 md:mt-8 pt-4 border-t border-[#7B9B68]/30 text-sm md:text-base">
                                        <p className="font-semibold text-gray-800">
                                            Warm Regards <br />
                                            <span className="text-[#156445]">{selected.fullName}</span> <br />
                                            <span className="text-gray-600">{selected.name}</span> <br />
                                            <span className="text-gray-500 text-xs md:text-sm">Gurukulam The School</span>
                                        </p>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
}
