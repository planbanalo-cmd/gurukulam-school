'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const images = [
  { src: "/images/gallery/annual/1.jpeg", title: "Annual Function" },
  { src: "/images/gallery/annual/2.jpeg", title: "Annual Function" },
  { src: "/images/gallery/sports/2.jpeg", title: "Sports Day" },
  { src: "/images/gallery/sports/4.jpeg", title: "Sports Day" },
  { src: "/images/gallery/sports/7.jpeg", title: "Sports Day" },
  { src: "/images/gallery/sports/6.jpeg", title: "Sports Day" },
 { src: "/images/gallery/exhibition/3.jpeg", title: "Books Exhibition" },
  { src: "/images/gallery/exhibition/4.jpeg", title: "Books Exhibition" },
  { src: "/images/gallery/exhibition/5.jpeg", title: "Books Exhibition" },
];

export default function SchoolGallery() {

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
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const speed = isMobile ? 0.3 : 0.5;

    const animate = () => {

      if (!isPaused && sliderRef.current) {

        positionRef.current -= speed;

        const sliderWidth = sliderRef.current.scrollWidth / 2;

        if (Math.abs(positionRef.current) >= sliderWidth) {
          positionRef.current = 0;
        }

        sliderRef.current.style.transform = `translateX(${positionRef.current}px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };

  }, [isPaused, isMobile]);

  return (
    <section
      className="py-16 px-4 md:px-8 lg:px-16
      bg-gradient-to-br from-[#f8faf9] via-[#eef5f1] to-[#f8faf9]"
    >

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >

          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold
            bg-gradient-to-r from-[#156445] via-[#0D6453] to-[#296236]
            bg-clip-text text-transparent"
          >
            School Gallery
          </h2>

          <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
            A glimpse into our vibrant school life and memorable moments.
          </p>

        </motion.div>

        {/* Slider */}
        <div className="relative overflow-hidden">

          <div
            ref={sliderRef}
            className="flex gap-3 sm:gap-4 md:gap-6 w-max"
          >

            {[...images, ...images].map((item, i) => (
              <div
                key={i}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="group min-w-[140px] sm:min-w-[180px] md:min-w-[220px] lg:min-w-[260px] 
                h-[140px] sm:h-[160px] md:h-[200px] rounded-xl sm:rounded-2xl overflow-hidden
                shadow-md border border-[#7B9B68]/30 relative bg-white"
              >

                {/* Image */}
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover
                  transition duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0
                  bg-gradient-to-t from-[#0D6453]/80 via-[#0D6453]/30 to-transparent
                  opacity-0 group-hover:opacity-100
                  transition duration-300 flex items-end p-2 sm:p-3 md:p-4"
                >

                  <h3 className="text-white font-semibold text-sm sm:text-base md:text-lg">
                    {item.title}
                  </h3>

                </div>

                {/* Bottom Accent Line */}
                <div
                  className="absolute bottom-0 left-0 h-[3px] w-0
                  bg-[#E4CC6F] group-hover:w-full transition-all duration-300"
                ></div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

