'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Images, Camera, CalendarDays } from 'lucide-react';
import Image from 'next/image';

export default function Photos() {

  const [selectedAlbum, setSelectedAlbum] = useState<any>(null);

  // ✅ ALBUM DATA
  const albums = [
    {
      title: 'Annual Function 2026',
      date: '15 January 2026',
      cover: '/images/gallery/annual/cover.jpeg',

      images: [
        '/images/gallery/annual/1.jpeg',
        '/images/gallery/annual/2.jpeg',
        '/images/gallery/annual/3.jpeg',
        '/images/gallery/annual/4.jpeg',
        '/images/gallery/annual/5.jpeg',
        '/images/gallery/annual/6.jpeg',
      ],
    },

    {
      title: 'Sports Day',
      date: '10 December 2025',
      cover: '/images/gallery/sports/cover.jpeg',

      images: [
        '/images/gallery/sports/1.jpeg',
        '/images/gallery/sports/2.jpeg',
        '/images/gallery/sports/3.jpeg',
        '/images/gallery/sports/4.jpeg',
        '/images/gallery/sports/5.jpeg',
        '/images/gallery/sports/6.jpeg',
        '/images/gallery/sports/7.jpeg',
        '/images/gallery/sports/8.jpeg',
      ],
    },

    {
      title: 'Books Exhibition',
      date: '18 November 2025',
      cover: '/images/gallery/exhibition/cover.jpeg',

      images: [
        '/images/gallery/exhibition/1.jpeg',
        '/images/gallery/exhibition/7.jpeg',
        '/images/gallery/exhibition/3.jpeg',
        '/images/gallery/exhibition/4.jpeg',
        '/images/gallery/exhibition/5.jpeg',
        '/images/gallery/exhibition/6.jpeg',
        '/images/gallery/exhibition/8.jpeg',
        '/images/gallery/exhibition/9.jpeg',

      ],
    },

    {
      title: 'Independence Day Celebration',
      date: '15 August 2025',
      cover: '/images/gallery/independence/cover.jpg',

      images: [
        '/images/gallery/independence/1.jpg',
        '/images/gallery/independence/2.jpg',
        '/images/gallery/independence/3.jpg',
        '/images/gallery/independence/4.jpg',
      ],
    },

    {
      title: 'Plantation Drive',
      date: '22 July 2025',
      cover: '/images/gallery/plantation/cover.jpg',

      images: [
        '/images/gallery/plantation/1.jpg',
        '/images/gallery/plantation/2.jpg',
        '/images/gallery/plantation/3.jpg',
      ],
    },

    {
      title: 'Classroom Activities',
      date: 'Ongoing',
      cover: '/images/gallery/classroom/cover.jpg',

      images: [
        '/images/gallery/classroom/1.jpg',
        '/images/gallery/classroom/2.jpg',
        '/images/gallery/classroom/3.jpg',
        '/images/gallery/classroom/4.jpg',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[linear-gradient(120deg,#f5f1e8_0%,#eef5f1_40%,#f9f7f2_70%,#f5f1e8_100%)] py-16 px-4 overflow-hidden">

      {/* WATERMARK */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
        <Image
          src="/images/GurukulamLogo.jpeg"
          alt="logo"
          width={500}
          height={500}
          loading="lazy"
          placeholder="blur"
          blurDataURL="/images/GurukulamLogo.jpeg"
          className="w-[500px] h-auto"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >

          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/70 border border-[#156445]/20 shadow-md mb-6">
            <Camera className="text-[#156445]" size={18} />
            <span className="text-[#156445] font-semibold text-sm">
              School Memories & Events
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-[#156445] via-[#0D6453] to-[#296236] bg-clip-text text-transparent">
            Photo Gallery
          </h1>

          <p className="text-gray-700 mt-5 max-w-3xl mx-auto text-lg">
            Explore beautiful memories, celebrations,
            competitions, and special moments captured at Gurukulam The School.
          </p>

        </motion.div>

        {/* ALBUM GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {albums.map((album, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedAlbum(album)}
              className="relative group cursor-pointer"
            >

              {/* GLOW */}
              <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-[#156445] via-[#0D6453] to-[#296236] opacity-20 blur-xl group-hover:opacity-40 transition"></div>

              {/* CARD */}
              <div className="relative overflow-hidden rounded-3xl bg-white/90 backdrop-blur-xl border border-[#156445]/15 shadow-2xl">

                {/* IMAGE */}
                <div className="relative h-72 overflow-hidden">


                  <Image
                    src={album.cover}
                    alt={album.title}
                    fill
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={album.cover}
                    sizes="(max-width: 768px) 100vw,
           (max-width: 1200px) 50vw,
           33vw"
                    className="
      object-cover
      group-hover:scale-110
      transition
      duration-700
    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                  {/* IMAGE COUNT */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-medium border border-white/20">
                    {album.images.length} Photos
                  </div>

                  {/* TEXT */}
                  <div className="absolute bottom-5 left-5 right-5">

                    <h2 className="text-white text-2xl font-bold">
                      {album.title}
                    </h2>

                    <div className="flex items-center gap-2 mt-2 text-white/80 text-sm">
                      <CalendarDays size={15} />
                      <span>{album.date}</span>
                    </div>

                  </div>

                </div>

                {/* FOOTER */}
                <div className="p-5 flex items-center justify-between">

                  <div className="flex items-center gap-2 text-[#156445] font-semibold">
                    <Images size={18} />
                    <span>Open Album</span>
                  </div>

                  <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#156445] to-[#0D6453] text-white text-sm font-semibold hover:opacity-90 transition">
                    View
                  </button>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

      {/* MODAL */}
      <AnimatePresence>

        {selectedAlbum && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >

            {/* MODAL BOX */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              className="relative bg-white rounded-3xl max-w-7xl w-full max-h-[94vh] overflow-y-auto shadow-2xl"
            >

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelectedAlbum(null)}
                className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center"
              >
                <X size={22} />
              </button>

              {/* HEADER */}
              <div className="relative h-80 overflow-hidden rounded-t-3xl">

                <div className="relative w-full h-full">
                  <Image
                    src={selectedAlbum.cover}
                    alt={selectedAlbum.title}
                    fill
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={selectedAlbum.cover}
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                <div className="absolute bottom-8 left-8">

                  <h2 className="text-white text-4xl md:text-5xl font-bold">
                    {selectedAlbum.title}
                  </h2>

                  <p className="text-white/80 text-lg mt-2">
                    {selectedAlbum.images.length} Photos Available
                  </p>

                </div>

              </div>

              {/* GALLERY */}
              <div className="p-8">

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                  {selectedAlbum.images.map((img: string, i: number) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.03 }}
                      className="group relative overflow-hidden rounded-2xl shadow-xl border border-gray-200"
                    >

                      <Image
                        src={img}
                        alt="gallery"
                        fill
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={img}
                        sizes="(max-width: 768px) 100vw,
           (max-width: 1200px) 50vw,
           33vw"
                        className="
      object-cover
      transition
      duration-700
      group-hover:scale-110
    "
                      />
                      {/* OVERLAY */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-500"></div>

                    </motion.div>
                  ))}

                </div>

              </div>

            </motion.div>

          </motion.div>
        )}

      </AnimatePresence>

    </div>
  );
}