'use client';

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

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

export default function StudentAchievement() {

    const [videoOpen, setVideoOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState("");

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const scrollPosition = useRef(0);

    const slides = items
        .filter(item => item.type !== "youtube")
        .map((item) =>
            item.type === "image"
                ? {
                    src: item.src,
                }
                : {
                    type: "video",
                    sources: [
                        {
                            src: item.src,
                            type: "video/mp4",
                        },
                    ],
                }
        );

    const handleOpen = (item, i) => {

        scrollPosition.current = window.scrollY;

        document.body.style.overflow = 'hidden';

        if (item.type === "youtube") {
            setCurrentVideo(item.videoId);
            setVideoOpen(true);
        } else {
            setIndex(i % items.length);
            setOpen(true);
        }
    };

    const restoreScroll = () => {

        document.body.style.overflow = 'auto';

        setTimeout(() => {
            window.scrollTo({
                top: scrollPosition.current,
                behavior: 'instant',
            });
        }, 50);
    };

    return (

        <section
            className="
                py-14 sm:py-16 md:py-20
                px-4 sm:px-6 md:px-10 lg:px-16
                bg-gradient-to-br
                from-[#f8faf9]
                via-[#eef5f1]
                to-[#f8faf9]
            "
        >

            <div className="max-w-7xl mx-auto">

                {/* HEADING */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 md:mb-14"
                >

                    <h2
                        className="
                            text-3xl sm:text-4xl md:text-5xl
                            font-bold
                            bg-gradient-to-r
                            from-[#156445]
                            via-[#0D6453]
                            to-[#296236]
                            bg-clip-text text-transparent
                        "
                    >
                        Student Achievements
                    </h2>

                    <p
                        className="
                            text-gray-600
                            mt-4
                            text-base sm:text-lg
                            max-w-2xl
                            mx-auto
                        "
                    >
                        Celebrating excellence and success
                        across academics, sports, and beyond.
                    </p>

                </motion.div>

                {/* SLIDER */}
                <div className="relative overflow-hidden">

                    {/* MOVING TRACK */}
                    <motion.div
                        className="
                            flex w-max
                            gap-3 sm:gap-5 md:gap-6
                            will-change-transform
                        "
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            ease: "linear",
                            duration: 28,
                            repeat: Infinity,
                        }}
                    >

                        {[...items, ...items].map((item, i) => (

                            <div
                                key={i}
                                onClick={() => handleOpen(item, i)}
                                className="
                                    group relative
                                    overflow-hidden
                                    bg-white
                                    rounded-2xl
                                    shadow-md
                                    border border-[#7B9B68]/20
                                    cursor-pointer
                                    flex-shrink-0

                                    w-[78vw]
                                    sm:w-[45vw]
                                    md:w-[300px]
                                    lg:w-[360px]

                                    aspect-[4/3]
                                "
                            >

                                {/* IMAGE */}
                                {item.type === "image" && (
                                    <img
                                        src={item.src}
                                        alt={item.name}
                                        loading="lazy"
                                        decoding="async"
                                        className="
                                            w-full h-full
                                            object-cover
                                            transition-transform
                                            duration-700
                                            group-hover:scale-110
                                        "
                                    />
                                )}

                                {/* VIDEO */}
                                {item.type === "video" && (
                                    <video
                                        src={item.src}
                                        muted
                                        preload="metadata"
                                        playsInline
                                        className="
                                            w-full h-full
                                            object-cover
                                        "
                                    />
                                )}

                                {/* YOUTUBE */}
                                {item.type === "youtube" && (
                                    <>
                                        <img
                                            src={item.thumbnail}
                                            alt={item.name}
                                            loading="lazy"
                                            decoding="async"
                                            className="
                                                w-full h-full
                                                object-cover
                                                transition-transform
                                                duration-700
                                                group-hover:scale-110
                                            "
                                        />

                                        {/* PLAY BUTTON */}
                                        <div
                                            className="
                                                absolute inset-0
                                                flex items-center justify-center
                                            "
                                        >
                                            <div
                                                className="
                                                    bg-white/90
                                                    backdrop-blur-md
                                                    rounded-full
                                                    p-4
                                                    shadow-xl
                                                    group-hover:scale-110
                                                    transition
                                                "
                                            >
                                                ▶
                                            </div>
                                        </div>
                                    </>
                                )}

                                {/* BADGE */}
                                <div
                                    className="
                                        absolute top-3 left-3
                                        bg-[#E4CC6F]
                                        text-[#0D6453]
                                        text-xs
                                        px-3 py-1
                                        rounded-full
                                        shadow
                                        font-semibold
                                        z-10
                                    "
                                >
                                    {item.badge}
                                </div>

                                {/* OVERLAY */}
                                <div
                                    className="
                                        absolute inset-0
                                        bg-gradient-to-t
                                        from-[#0D6453]/90
                                        via-[#0D6453]/30
                                        to-transparent

                                        opacity-100
                                        md:opacity-0
                                        md:group-hover:opacity-100

                                        transition duration-300
                                        flex flex-col
                                        justify-end
                                        p-4
                                    "
                                >

                                    <h3
                                        className="
                                            text-white
                                            font-semibold
                                            text-sm sm:text-base md:text-lg
                                        "
                                    >
                                        {item.name}
                                    </h3>

                                    <p
                                        className="
                                            text-gray-200
                                            text-xs sm:text-sm
                                        "
                                    >
                                        {item.achievement}
                                    </p>

                                </div>

                                {/* GOLD LINE */}
                                <div
                                    className="
                                        absolute bottom-0 left-0
                                        h-[3px] w-0
                                        bg-[#E4CC6F]
                                        group-hover:w-full
                                        transition-all
                                        duration-500
                                    "
                                />

                            </div>

                        ))}

                    </motion.div>

                </div>

                {/* LIGHTBOX */}
                <Lightbox
                    open={open}
                    close={() => {
                        setOpen(false);
                        restoreScroll();
                    }}
                    index={index}
                    slides={slides}
                    plugins={[Zoom]}
                    carousel={{
                        finite: false,
                    }}
                    controller={{
                        closeOnBackdropClick: true,
                        closeOnPullDown: true,
                    }}
                    zoom={{
                        maxZoomPixelRatio: 3,
                        zoomInMultiplier: 2,
                        doubleTapDelay: 300,
                        doubleClickDelay: 300,
                        doubleClickMaxStops: 2,
                        keyboardMoveDistance: 50,
                        wheelZoomDistanceFactor: 100,
                        pinchZoomDistanceFactor: 100,
                        scrollToZoom: true,
                    }}
                    animation={{
                        swipe: 350,
                    }}
                    styles={{
                        container: {
                            backgroundColor: "rgba(0,0,0,0.92)",
                            backdropFilter: "blur(10px)",
                        },
                    }}
                />

            </div>

            {/* YOUTUBE MODAL */}
            {videoOpen && (

                <div
                    className="
                        fixed inset-0 z-50
                        bg-black/80 backdrop-blur-sm
                        flex items-center justify-center
                        p-4
                    "
                >

                    <div
                        className="
                            relative
                            w-full max-w-4xl
                            aspect-video
                        "
                    >

                        {/* CLOSE BUTTON */}
                        <button
                            onClick={() => {
                                setVideoOpen(false);
                                restoreScroll();
                            }}
                            className="
                                absolute -top-12 right-0
                                text-white text-3xl
                                hover:scale-110
                                transition
                            "
                        >
                            ✕
                        </button>

                        {/* VIDEO */}
                        <iframe
                            className="w-full h-full rounded-2xl"
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