"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";

const slides = [
  {
    id: 1,
    image: "/images/Residential.jpeg",
    title: "Residential School",
    subtitle: "A Home Away From Home",
    description:
      "A nurturing residential environment where learning, discipline, friendship, and personal growth come together.",
  },
  {
    id: 2,
    image: "/images/Competitive.png",
    title: "Competitive Exam Preparation",
    subtitle: "Prepare. Perform. Achieve.",
    description:
      "Focused academic guidance, expert mentorship, and structured preparation to help students achieve their goals.",
  },
  {
    id: 3,
    image: "/images/Primary.jpeg",
    title: "Pre-Primary Wing",
    subtitle: "Where Learning Begins With Joy",
    description:
      "A joyful and engaging environment where young minds explore, discover, and build a strong foundation for the future.",
  },
  {
    id: 4,
    image: "/images/sport.png",
    title: "Sports Excellence",
    subtitle: "Building Champions For Tomorrow",
    description:
      "Developing discipline, confidence, teamwork, fitness, and a winning spirit through sports and dedicated training.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [auto, setAuto] = useState(true);

  const slide = slides[current];

  /* =====================================================
     AUTO SLIDER
  ===================================================== */

  useEffect(() => {
    if (!auto) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [auto]);

  /* =====================================================
     NEXT
  ===================================================== */

  const next = () => {
    setCurrent(
      (prev) => (prev + 1) % slides.length
    );
  };

  /* =====================================================
     PREVIOUS
  ===================================================== */

  const prev = () => {
    setCurrent(
      (prev) =>
        (prev - 1 + slides.length) %
        slides.length
    );
  };

  /* =====================================================
     GO TO SLIDE
  ===================================================== */

  const goToSlide = (index) => {
    setCurrent(index);
  };

  /* =====================================================
     TOGGLE AUTO PLAY
  ===================================================== */

  const toggleAuto = () => {
    setAuto((prev) => !prev);
  };

  return (
    <section
      className="
        relative
        w-full
        h-[75vh]
        min-h-[560px]
        md:h-[85vh]
        lg:h-[calc(100vh-80px)]
        lg:min-h-[680px]
        overflow-hidden
        bg-[#0D6453]
      "
      onMouseEnter={() => setAuto(false)}
      onMouseLeave={() => setAuto(true)}
    >

      {/* =================================================
          BACKGROUND SLIDES
      ================================================= */}

      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{
            opacity: 0,
            scale: 1.08,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.02,
          }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}
          className="
            absolute
            inset-0
          "
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            sizes="100vw"
            className="
              object-cover
              object-center
            "
          />
        </motion.div>
      </AnimatePresence>

      {/* =================================================
          PREMIUM OVERLAY
      ================================================= */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/85
          via-black/55
          to-black/15
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/70
          via-transparent
          to-black/20
        "
      />

      {/* =================================================
          SUBTLE BRAND GLOW
      ================================================= */}

      <div
        className="
          absolute
          -left-40
          top-1/2
          -translate-y-1/2
          w-[500px]
          h-[500px]
          rounded-full
          bg-[#156445]/20
          blur-[120px]
          pointer-events-none
        "
      />

      {/* =================================================
          CONTENT
      ================================================= */}

      <div
        className="
          relative
          z-10
          h-full
          max-w-7xl
          mx-auto
          px-5
          sm:px-8
          md:px-12
          lg:px-16
          flex
          items-center
        "
      >

        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: 30,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="
              max-w-3xl
              pt-8
              md:pt-0
            "
          >

            {/* EYEBROW */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.15,
                duration: 0.6,
              }}
              className="
                inline-flex
                items-center
                gap-3
                mb-5
                md:mb-6
              "
            >

              <span
                className="
                  w-10
                  md:w-14
                  h-[2px]
                  bg-[#E4CC6F]
                "
              />

              <span
                className="
                  text-[#E4CC6F]
                  text-xs
                  sm:text-sm
                  md:text-base
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                "
              >
                Gurukulam The School
              </span>

            </motion.div>

            {/* SUBTITLE */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.25,
                duration: 0.6,
              }}
              className="
                text-[#E4CC6F]
                text-sm
                sm:text-base
                md:text-lg
                font-semibold
                mb-3
                tracking-wide
              "
            >
              {slide.subtitle}
            </motion.p>

            {/* TITLE */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
                duration: 0.8,
              }}
              className="
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                font-extrabold
                text-white
                leading-[1.05]
                tracking-tight
              "
            >
              {slide.title}
            </motion.h1>

            {/* DESCRIPTION */}

            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.45,
                duration: 0.7,
              }}
              className="
                mt-5
                md:mt-6
                max-w-2xl
                text-sm
                sm:text-base
                md:text-lg
                lg:text-xl
                leading-relaxed
                text-white/85
              "
            >
              {slide.description}
            </motion.p>

            {/* DECORATIVE LINE */}

            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: 90,
              }}
              transition={{
                delay: 0.8,
                duration: 0.7,
              }}
              className="
                mt-7
                md:mt-9
                h-[3px]
                bg-gradient-to-r
                from-[#E4CC6F]
                to-[#CFAF5C]
                rounded-full
              "
            />

          </motion.div>
        </AnimatePresence>

      </div>

      {/* =================================================
          LEFT / RIGHT NAVIGATION
      ================================================= */}

      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="
          absolute
          left-3
          sm:left-5
          md:left-8
          top-1/2
          -translate-y-1/2
          z-20
          w-10
          h-10
          md:w-12
          md:h-12
          rounded-full
          bg-white/10
          hover:bg-white/20
          border
          border-white/20
          backdrop-blur-md
          text-white
          flex
          items-center
          justify-center
          transition-all
          duration-300
          hover:scale-110
        "
      >
        <ChevronLeft
          className="w-5 h-5 md:w-6 md:h-6"
        />
      </button>

      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="
          absolute
          right-3
          sm:right-5
          md:right-8
          top-1/2
          -translate-y-1/2
          z-20
          w-10
          h-10
          md:w-12
          md:h-12
          rounded-full
          bg-white/10
          hover:bg-white/20
          border
          border-white/20
          backdrop-blur-md
          text-white
          flex
          items-center
          justify-center
          transition-all
          duration-300
          hover:scale-110
        "
      >
        <ChevronRight
          className="w-5 h-5 md:w-6 md:h-6"
        />
      </button>

      {/* =================================================
          BOTTOM CONTROLS
      ================================================= */}

      <div
        className="
          absolute
          bottom-6
          sm:bottom-8
          md:bottom-10
          left-1/2
          -translate-x-1/2
          z-30
          flex
          items-center
          gap-3
        "
      >

        {/* SLIDE INDICATORS */}

        <div
          className="
            flex
            items-center
            gap-2
            px-4
            py-2.5
            rounded-full
            bg-black/25
            backdrop-blur-md
            border
            border-white/10
          "
        >
          {slides.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() =>
                goToSlide(index)
              }
              aria-label={`Go to slide ${
                index + 1
              }`}
              className={`
                h-1.5
                rounded-full
                transition-all
                duration-500
                ${
                  index === current
                    ? "w-8 bg-[#E4CC6F]"
                    : "w-2.5 bg-white/40 hover:bg-white/70"
                }
              `}
            />
          ))}
        </div>

        {/* PLAY / PAUSE */}

        <button
          type="button"
          onClick={toggleAuto}
          aria-label={
            auto
              ? "Pause slideshow"
              : "Play slideshow"
          }
          className="
            w-9
            h-9
            rounded-full
            bg-black/25
            hover:bg-black/40
            backdrop-blur-md
            border
            border-white/10
            text-white
            flex
            items-center
            justify-center
            transition-all
            duration-300
          "
        >
          {auto ? (
            <Pause
              size={14}
              fill="currentColor"
            />
          ) : (
            <Play
              size={14}
              fill="currentColor"
            />
          )}
        </button>

      </div>

      {/* =================================================
          SLIDE NUMBER
      ================================================= */}

      <div
        className="
          absolute
          bottom-8
          right-6
          md:right-10
          z-20
          hidden
          md:flex
          items-center
          gap-3
          text-white
        "
      >

        <span
          className="
            text-2xl
            font-bold
          "
        >
          {String(current + 1).padStart(2, "0")}
        </span>

        <span
          className="
            w-8
            h-px
            bg-white/40
          "
        />

        <span
          className="
            text-sm
            text-white/50
          "
        >
          {String(slides.length).padStart(2, "0")}
        </span>

      </div>

      {/* =================================================
          BOTTOM FADE
      ================================================= */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-20
          bg-gradient-to-t
          from-black/40
          to-transparent
          pointer-events-none
        "
      />

    </section>
  );
}