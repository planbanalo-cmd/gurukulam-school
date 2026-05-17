'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Play, Video, X } from 'lucide-react';
import { useState } from 'react';

export default function VideosGalleryPage() {

  const videoAlbums = [
    {
      title: 'Annual Function 2026',
      cover: '/videos/annual-cover.jpg',
      description: 'Highlights from Annual Function celebration.',
      videos: [
        {
          title: 'Opening Ceremony',
          src: '/videos/annual1.mp4',
        },
        {
          title: 'Dance Performance',
          src: '/videos/annual2.mp4',
        },
        {
          title: 'Prize Distribution',
          src: '/videos/annual3.mp4',
        },
      ],
    },

    {
      title: 'Sports Day',
      cover: '/videos/sports-cover.jpg',
      description: 'Sports competition and medal ceremony.',
      videos: [
        {
          title: 'Race Competition',
          src: '/videos/sports1.mp4',
        },
        {
          title: 'March Past',
          src: '/videos/sports2.mp4',
        },
      ],
    },

    {
      title: 'Books Exhibition',
      cover: '/images/gallery/exhibition/cover.jpeg',
      description: 'Showcasing the best of student creativity.',
      videos: [
        {

          src: '/videos/exhibition/1.mp4',
        },
        {

          src: '/videos/exhibition/2.mp4',
        },
        {

          src: '/videos/exhibition/3.mp4',
        },
        {

          src: '/videos/exhibition/4.mp4',
        },
        {

          src: '/videos/exhibition/5.mp4',
        },
      ],
    },
  ];

  const [selectedAlbum, setSelectedAlbum] = useState<any>(null);
  const [selectedVideo, setSelectedVideo] = useState<any>(null);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,#eef5f1_0%,#f5f1e8_40%,#ffffff_100%)] px-4 py-16">

      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#156445]/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#E4CC6F]/20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-5 py-2 rounded-full bg-[#156445]/10 border border-[#156445]/20 mb-6">
            <p className="text-[#156445] font-semibold tracking-wide">
              Gurukulam The School
            </p>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight
          bg-gradient-to-r from-[#156445] via-[#0D6453] to-[#296236]
          bg-clip-text text-transparent">
            Event Videos Gallery
          </h1>

          <p className="text-gray-600 mt-6 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Explore unforgettable school memories, celebrations,
            competitions, and cultural activities through our premium
            event video albums.
          </p>
        </motion.div>

        {/* ALBUMS */}
        {!selectedAlbum && (
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-10">

            {videoAlbums.map((album, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                onClick={() => setSelectedAlbum(album)}
                className="relative group cursor-pointer"
              >

                {/* Glow */}
                <div className="absolute -inset-[2px] rounded-[32px]
                bg-gradient-to-r from-[#156445] via-[#0D6453] to-[#296236]
                opacity-20 blur-xl group-hover:opacity-50 transition duration-500"></div>

                {/* Card */}
                <div className="relative overflow-hidden rounded-[32px]
                bg-white/80 backdrop-blur-xl border border-white/30
                shadow-[0_20px_80px_rgba(0,0,0,0.12)]">

                  {/* Image */}
                  <div className="relative h-72 overflow-hidden">

                    <img
                      src={album.cover}
                      alt={album.title}
                      className="w-full h-full object-cover
  group-hover:scale-110 transition duration-700"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0
                    bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    {/* Floating Play */}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <div className="w-20 h-20 rounded-full
                      bg-white/90 backdrop-blur-md
                      flex items-center justify-center
                      shadow-2xl group-hover:scale-110 transition duration-300">

                        <Play
                          fill="currentColor"
                          className="text-[#156445] ml-1"
                          size={34}
                        />
                      </div>
                    </div>

                    {/* Video Count */}
                    <div className="absolute top-5 right-5 z-20">
                      <div className="bg-white/90 backdrop-blur-md
                      px-4 py-1 rounded-full shadow-lg">

                        <span className="text-sm font-bold text-[#156445]">
                          {album.videos.length} Videos
                        </span>
                      </div>
                    </div>

                    {/* Bottom Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                      <h2 className="text-2xl font-bold text-white mb-2">
                        {album.title}
                      </h2>

                      <p className="text-gray-200 text-sm leading-relaxed">
                        {album.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* OPENED ALBUM */}
        {selectedAlbum && (
          <div>

            {/* Back */}
            <button
              onClick={() => setSelectedAlbum(null)}
              className="mb-10 px-6 py-3 rounded-full
              bg-gradient-to-r from-[#156445] to-[#0D6453]
              text-white font-semibold shadow-lg
              hover:scale-105 transition"
            >
              ← Back to Albums
            </button>

            {/* Title */}
            <div className="text-center mb-16">

              <h2 className="text-5xl font-extrabold
              bg-gradient-to-r from-[#156445] to-[#0D6453]
              bg-clip-text text-transparent mb-4">

                {selectedAlbum.title}
              </h2>

              <p className="text-gray-600 text-lg">
                {selectedAlbum.description}
              </p>
            </div>

            {/* Videos */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

              {selectedAlbum.videos.map((video: any, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group cursor-pointer"
                  onClick={() => setSelectedVideo(video)}
                >

                  {/* Glow */}
                  <div className="absolute -inset-[2px] rounded-[30px]
                  bg-gradient-to-r from-[#156445] via-[#0D6453] to-[#296236]
                  opacity-20 blur-lg group-hover:opacity-50 transition"></div>

                  {/* Card */}
                  <div className="relative overflow-hidden rounded-[30px]
                  bg-white/90 backdrop-blur-xl
                  shadow-[0_20px_80px_rgba(0,0,0,0.12)]">

                    {/* Preview */}
                    <div className="relative h-72">

                      <video
                        className="w-full h-full object-cover"
                        muted
                        preload="metadata"
                        playsInline
                      >
                        <source src={video.src} type="video/mp4" />
                      </video>

                      {/* Overlay */}
                      <div className="absolute inset-0
                      bg-black/40 group-hover:bg-black/50 transition"></div>

                      {/* Play */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/90
                        flex items-center justify-center shadow-2xl
                        group-hover:scale-110 transition">

                          <Play
                            fill="currentColor"
                            className="text-[#156445] ml-1"
                            size={28}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Text */}
                    <div className="p-5">

                      <div className="flex items-center gap-2 mb-2">
                        <Video className="text-[#156445]" size={20} />

                        <h3 className="text-lg font-bold text-[#156445]">
                          {video.title}
                        </h3>
                      </div>

                      <p className="text-gray-600 text-sm">
                        Click to watch full video
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* VIDEO MODAL */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md
              z-50 flex items-center justify-center p-4"
            >

              {/* Close */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-6 right-6 z-50
                bg-white/10 hover:bg-white/20
                p-3 rounded-full text-white transition"
              >
                <X size={28} />
              </button>

              {/* Video */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="w-full max-w-5xl"
              >

                <video
                  controls
                  autoPlay
                  preload="metadata"
                  playsInline
                  className="w-full rounded-3xl shadow-2xl"
                >
                  <source src={selectedVideo.src} type="video/mp4" />
                </video>

                <h3 className="text-white text-2xl font-bold mt-5 text-center">
                  {selectedVideo.title}
                </h3>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}