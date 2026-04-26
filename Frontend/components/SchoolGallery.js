'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const items = [
    {
        type: "image",
        src: "/images/1.jpg",
        name: "Aarav Sharma",
        achievement: "CBSE Topper - 98%",
        badge: "Topper",
    },
    {
        type: "image",
        src: "/images/2.jpg",
        name: "Priya Verma",
        achievement: "State Level Gold Medal - Athletics",
        badge: "Gold Medal",
    },
    {
        type: "video",
        src: "/videos/achievement1.mp4",
        name: "Rohit Yadav",
        achievement: "Inter-School Debate Winner",
        badge: "Winner",
    },
    {
        type: "image",
        src: "/images/3.jpg",
        name: "Simran Kaur",
        achievement: "District Painting Champion",
        badge: "Winner",
    },
    {
        type: "image",
        src: "/images/4.jpg",
        name: "Kunal Singh",
        achievement: "Math Olympiad Qualifier",
        badge: "Topper",
    },
    {
        type: "youtube",
        videoId: "ABC123XYZ",
        thumbnail: "https://img.youtube.com/vi/ABC123XYZ/hqdefault.jpg",
        name: "Rohit Yadav",
        achievement: "Debate Winner",
        badge: "Winner",
    },
];

export default function SchoolGallery() {
    const [videoOpen, setVideoOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState("");

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    // Lightbox slides (image + video support)
    const slides = items.map((item) =>
        item.type === "image"
            ? { src: item.src }
            : {
                type: "video",
                sources: [{ src: item.src, type: "video/mp4" }],
            }
    );

    return (
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-orange-50 via-white to-orange-50">

            <div className="max-w-6xl mx-auto">

                {/* 🔥 HEADING */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-10"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                        School Gallery
                    </h2>

                    <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
                        Celebrating excellence and success across academics, sports, and beyond.
                    </p>
                </motion.div>

                {/* 🎞️ SLIDER */}
                <div
                    className="relative overflow-hidden"

                >
                    <motion.div
                        className="flex gap-6 w-max"

                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            ease: "linear",
                            duration: 25,
                            repeat: Infinity,
                        }}
                    >
                        {[...items, ...items].map((item, i) => (
                            <div
                                key={i}
                                onClick={() => {
                                    if (item.type === "youtube") {
                                        setCurrentVideo(item.videoId);
                                        setVideoOpen(true);
                                    } else {
                                        setIndex(i % items.length);
                                        setOpen(true);
                                    }
                                }}
                                className="min-w-[260px] h-[200px] rounded-2xl overflow-hidden shadow-lg border border-orange-100 group relative cursor-pointer"
                            >

                                {/* Image / Video Thumbnail */}
                                {item.type === "image" && (
                                    <img
                                        src={item.src}
                                        alt={item.name}
                                        className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                                    />
                                )}

                                {item.type === "video" && (
                                    <video
                                        src={item.src}
                                        className="w-full h-full object-cover"
                                        muted
                                    />
                                )}

                                {item.type === "youtube" && (
                                    <>
                                        <img
                                            src={item.thumbnail}
                                            alt={item.name}
                                            className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="bg-white/90 rounded-full p-3 shadow">▶</div>
                                        </div>
                                    </>
                                )}
                                {/* 🎖️ Badge */}
                                <div className="absolute top-3 left-3 bg-orange-600 text-white text-xs px-3 py-1 rounded-full shadow">
                                    {item.badge}
                                </div>

                                {/* 🔥 Overlay */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4">
                                    <h3 className="text-white font-semibold text-lg">
                                        {item.name}
                                    </h3>
                                    <p className="text-gray-200 text-sm">
                                        {item.achievement}
                                    </p>
                                </div>

                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* 🔍 LIGHTBOX */}
                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    index={index}
                    slides={slides}
                />

            </div>
            {videoOpen && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                    <div className="relative w-[90%] md:w-[700px] aspect-video">
                        <button
                            onClick={() => setVideoOpen(false)}
                            className="absolute -top-10 right-0 text-white text-2xl"
                        >
                            ✕
                        </button>

                        <iframe
                            className="w-full h-full rounded-xl"
                            src={`https://www.youtube.com/embed/${currentVideo}?autoplay=1`}
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </section>
    );
}