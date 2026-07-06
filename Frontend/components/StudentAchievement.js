'use client';

import { motion } from 'framer-motion';
import React, {
  useState,
  useRef,
  useEffect
} from 'react';
import Image from 'next/image';
import { API } from "@/lib/api";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";



export default function StudentAchievement() {
const [items, setItems] = useState([]);



useEffect(() => {

  const fetchStudents =
    async () => {

      try {

        const res =
          await fetch(
            `${API}/api/student-achievements`
          );

        const data =
          await res.json();

        const formatted =
          data.map(
            (student) => ({
              type: "image",
              src: student.image,
              name: student.name,
              achievement:
                student.achievement,
              badge:
                student.badge,
              _id:
                student._id,
            })
          );

        setItems(formatted);

      } catch (err) {

        console.log(err);

      }

    };

  fetchStudents();

}, []);

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

                    {/* HIGHLIGHT LINE */}
                    <div className="mt-4 flex justify-center">
                        <span
                            className="
      inline-flex items-center gap-2
      px-5 py-2
      rounded-full
      bg-gradient-to-r
      from-[#E4CC6F]
      to-[#f5df8d]
      text-[#0D6453]
      font-semibold
      text-sm sm:text-base
      shadow-md
      border border-[#d4ba57]
      animate-pulse
    "
                        >
                            🌟 Excellence Beyond Limits – Toppers 2025 🌟
                        </span>
                    </div>

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
                                    <div className="w-full h-full bg-[#f8faf9] flex items-center justify-center overflow-hidden relative">

                                        <Image
                                            src={item.src}
                                            alt={item.name}
                                            fill
                                            loading="lazy"
                                            sizes="(max-width: 640px) 82vw,
                   (max-width: 768px) 380px,
                   (max-width: 1024px) 340px,
                   360px"
                                            className="
                object-contain
                transition-transform
                duration-700
                group-hover:scale-105
            "
                                        />

                                    </div>
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



        </section>
    );
}