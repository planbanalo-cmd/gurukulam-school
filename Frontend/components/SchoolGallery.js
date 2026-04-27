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
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-orange-50 via-white to-orange-50">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
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
                className="min-w-[260px] h-[200px] rounded-2xl overflow-hidden shadow-lg border border-orange-100 group relative"
              >

                {/* Image */}
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                  <h3 className="text-white font-semibold text-lg">
                    {item.title}
                  </h3>
                </div>

              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}