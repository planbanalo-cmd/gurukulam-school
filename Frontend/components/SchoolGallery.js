'use client';

import { motion } from 'framer-motion';

const images = [
  { src: "/images/1.jpg", title: "Annual Function" },
  { src: "/images/2.jpg", title: "Sports Day" },
  { src: "/images/3.jpg", title: "Classroom Activities" },
  { src: "/images/4.jpg", title: "Art & Craft" },
  { src: "/images/5.jpg", title: "School Events" },
];

export default function SchoolGallery() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 
    bg-gradient-to-br from-[#f8faf9] via-[#eef5f1] to-[#f8faf9]">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold 
          bg-gradient-to-r from-[#156445] via-[#0D6453] to-[#296236] 
          bg-clip-text text-transparent">
            School Gallery
          </h2>

          <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
            A glimpse into our vibrant school life and memorable moments.
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative overflow-hidden">

          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 20,
              repeat: Infinity,
            }}
          >
            {[...images, ...images].map((item, i) => (
              <div
                key={i}
                className="group min-w-[260px] h-[200px] rounded-2xl overflow-hidden 
                shadow-md border border-[#7B9B68]/30 relative"
              >

                {/* Image */}
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover 
                  transition duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 
                bg-gradient-to-t from-[#0D6453]/70 to-transparent 
                opacity-0 group-hover:opacity-100 
                transition duration-300 flex items-end p-4">
                  
                  <h3 className="text-white font-semibold text-lg">
                    {item.title}
                  </h3>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 
                bg-[#E4CC6F] group-hover:w-full transition-all duration-300"></div>

              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}