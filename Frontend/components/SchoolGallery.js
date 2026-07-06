'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { API } from "@/lib/api";
import Image from "next/image";

export default function SchoolGallery() {

  const [images, setImages] = useState([]);

  const sliderRef = useRef(null);
  const animationRef = useRef(null);
  const positionRef = useRef(0);

  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };

  }, []);

useEffect(() => {

  const speed = isMobile ? 0.45 : 0.7;

  const animate = () => {

    if (!isPaused && sliderRef.current) {

      positionRef.current -= speed;

      const sliderWidth =
        sliderRef.current.scrollWidth / 2;

      if (
        Math.abs(positionRef.current) >= sliderWidth
      ) {
        positionRef.current = 0;
      }

      sliderRef.current.style.transform =
        `translateX(${positionRef.current}px)`;
    }

    animationRef.current =
      requestAnimationFrame(animate);
  };

  animate();

  return () => {

    if (animationRef.current) {
      cancelAnimationFrame(
        animationRef.current
      );
    }

  };

}, [isPaused, isMobile]);
  useEffect(() => {

    const fetchImages = async () => {

      try {

        const res = await fetch(
          `${API}/api/home-gallery`
        );

        const data = await res.json();

        setImages(data);

      } catch (err) {

        console.log(err);

      }

    };

    fetchImages();

  }, []);
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
            School Gallery
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
            A glimpse into our vibrant school
            life and memorable moments.
          </p>

        </motion.div>

        {/* SLIDER */}
        <div className="relative overflow-hidden">

          {/* MOVING TRACK */}
          <div
            ref={sliderRef}
            className="
              flex w-max
              gap-3 sm:gap-5 md:gap-6
              will-change-transform
            "
          >

            {[...images, ...images].map(
              (item, i) => (

                <div
                  key={i}
                  onMouseEnter={() =>
                    setIsPaused(true)
                  }
                  onMouseLeave={() =>
                    setIsPaused(false)
                  }
                  className="
                    group relative
                    overflow-hidden
                    bg-white
                    rounded-2xl
                    shadow-md
                    border border-[#7B9B68]/20
                    flex-shrink-0

                    w-[78vw]
                    sm:w-[45vw]
                    md:w-[300px]
                    lg:w-[360px]

                    aspect-[4/3]
                  "
                >

                  {/* IMAGE */}
    <img
  src={item.image}
  alt={item.title}
  className="
    absolute
    inset-0
    w-full
    h-full
    object-cover
    transition-transform
    duration-700
    group-hover:scale-110
  "
/>
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
                      flex items-end
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
                      {item.title}
                    </h3>

                  </div>

                  {/* GOLD LINE */}
                  <div
                    className="
                      absolute bottom-0 left-0
                      h-[3px]
                      w-0
                      bg-[#E4CC6F]
                      group-hover:w-full
                      transition-all
                      duration-500
                    "
                  />

                </div>

              )
            )}

          </div>

        </div>

      </div>

    </section>
  );
}