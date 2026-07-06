'use client';

import { API } from '@/lib/api';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Video, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from "sonner";
import Image from "next/image";

export default function VideosGalleryPage() {

  type VideoAlbum = {
    _id: string;
    title: string;
    description: string;
    cover: string;
    date: string;
    videos: string[];
  };
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [loading, setLoading] =
    useState(false);
  const [confirmData, setConfirmData] = useState<{
    title: string;
    message: string;
    action: () => void;
  } | null>(null);
  const [videoAlbums, setVideoAlbums] =
    useState<VideoAlbum[]>([]);

  const [isAdmin, setIsAdmin] =
    useState(false);

  useEffect(() => {

    const token =
      localStorage.getItem(
        "token"
      );

    setIsAdmin(!!token);

  }, []);

  useEffect(() => {
    fetchAlbums();
  }, []);

  const fetchAlbums =
    async () => {
      const res =
        await fetch(
          `${API}/api/video-gallery`
        );

      const data =
        await res.json();

      setVideoAlbums(data);
    };

  const [selectedAlbum, setSelectedAlbum] =
    useState<VideoAlbum | null>(null);

  const [selectedVideo, setSelectedVideo] =
    useState<string | null>(null);

  const addVideos = async (
    albumId: string,
    files: FileList
  ) => {

    try {

      const formData = new FormData();

      Array.from(files).forEach((file) => {
        formData.append("videos", file);
      });

      const response = await fetch(
        `${API}/api/video-gallery/${albumId}/videos`,
        {
          method: "PUT",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      toast.success(
        `${files.length} video(s) uploaded successfully`
      );

      const res = await fetch(
        `${API}/api/video-gallery`
      );

      const updatedAlbums =
        await res.json();

      setVideoAlbums(updatedAlbums);

      const updatedAlbum =
        updatedAlbums.find(
          (a: VideoAlbum) =>
            a._id === albumId
        );

      if (updatedAlbum) {
        setSelectedAlbum(updatedAlbum);
      }

    } catch (error) {

      console.error(error);

      toast.error(
        "Video upload failed"
      );

    }
  };

  const deleteVideo = async (
    albumId: string,
    videoUrl: string
  ) => {

    try {

      setLoading(true);

      const response = await fetch(
        `${API}/api/video-gallery/${albumId}/video/${encodeURIComponent(
          videoUrl
        )}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Delete failed");
      }

      toast.success(
        "Video deleted successfully"
      );

      const res = await fetch(
        `${API}/api/video-gallery`
      );

      const updatedAlbums =
        await res.json();

      setVideoAlbums(updatedAlbums);

      const updatedAlbum =
        updatedAlbums.find(
          (a: VideoAlbum) =>
            a._id === albumId
        );

      if (updatedAlbum) {
        setSelectedAlbum(updatedAlbum);
      }

    } catch (error) {

      console.error(error);

      toast.error(
        "Failed to delete video"
      );

    } finally {

      setLoading(false);

    }
  };
  const deleteAlbum = async (
    albumId: string
  ) => {
    try {
      setLoading(true);

      await fetch(
        `${API}/api/video-gallery/${albumId}`,
        {
          method: "DELETE",
        }
      );

      const res = await fetch(
        `${API}/api/video-gallery`
      );

      const updatedAlbums =
        await res.json();

      setVideoAlbums(updatedAlbums);

      if (
        selectedAlbum &&
        selectedAlbum._id === albumId
      ) {
        setSelectedAlbum(null);
      }

      toast.success(
        "Album deleted successfully"
      );

    } catch (error) {

      console.error(error);

      toast.error(
        "Failed to delete album"
      );

    } finally {

      setLoading(false);

    }
  };
  const showConfirm = (
    title: string,
    message: string,
    action: () => void
  ) => {
    setConfirmData({
      title,
      message,
      action,
    });

    setConfirmOpen(true);
  };
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
          <div className="relative rounded-[40px] overflow-hidden mb-16">

            <div className="relative w-full h-[350px]">
             <Image
  src="/gallery-banner.jpg"
  alt="Gallery Banner"
  fill
  priority
  sizes="100vw"
  className="object-cover"
/>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-[#156445]/90 to-black/60" />

            <div className="absolute inset-0 flex items-center px-10">
              <div>
                <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
                  Video Gallery
                </h1>

                <p className="text-white/90 text-lg max-w-2xl">
                  Explore school events, celebrations,
                  competitions, cultural activities,
                  and memorable moments.
                </p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* ALBUMS */}
        {!selectedAlbum && (
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-10">

            {videoAlbums.map((album: VideoAlbum, index: number) => (
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
                <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#156445]/10 group-hover:-translate-y-2 transition-all
duration-500
group-hover:scale-[1.03]
group-hover:-translate-y-2">

                  <div className="relative overflow-hidden">
                    <Image
                      src={
                        album.cover.startsWith("http")
                          ? album.cover
                          : `/uploads/${album.cover}`
                      }
                      alt={album.title}
                      width={800}
                      height={400}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="bg-[#E4CC6F] text-[#156445] px-3 py-1 rounded-full text-sm font-semibold shadow-lg
backdrop-blur-md">
                        🎬 {album.videos.length} Videos
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-[#156445] mb-3">
                      {album.title}
                    </h3>

                    <p className="text-gray-600 line-clamp-3 mb-4">
                      {album.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {new Date(album.date).toLocaleDateString()}
                      </span>

                      <button
                        className="
          bg-[#156445]
          hover:bg-[#0D6453]
          text-white
          px-5
          py-2
          rounded-xl
          font-semibold
          transition-all
          hover:scale-105
        "
                      >
                        View Album
                      </button>
                    </div>
            {isAdmin && (
  <div className="flex justify-end mt-4">
    <button
      onClick={(e) => {
        e.stopPropagation();

        showConfirm(
          "Delete Album",
          "Delete this entire album permanently?",
          () => deleteAlbum(album._id)
        );
      }}
      className="
      px-4
      py-2
      rounded-xl
      bg-red-500
      text-white
      font-semibold
      hover:bg-red-600
      transition
      "
    >
      🗑️ Delete Album
    </button>
  </div>
)}
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
            {isAdmin && (
              <button
                onClick={() =>
                  showConfirm(
                    "Delete Album",
                    "Delete this entire album permanently?",
                    () => deleteAlbum(selectedAlbum._id)
                  )
                }
                className="
    ml-4
    px-6
    py-3
    rounded-full
    bg-red-500
    text-white
    font-semibold
    hover:bg-red-600
    "
              >
                Delete Album
              </button>
            )}

            {/* Title */}
            <div className="relative rounded-[40px] overflow-hidden mb-16 shadow-2xl">

              <div className="relative w-full h-[400px]">
                <Image
  src={selectedAlbum.cover}
  alt={selectedAlbum.title}
  fill
  sizes="100vw"
  className="object-cover"
/>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-10">

                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#E4CC6F] text-[#156445] px-4 py-2 rounded-full font-semibold">
                    {selectedAlbum?.videos?.length || 0} Videos
                  </span>

                  <span className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full">
                    {selectedAlbum?.date
                      ? new Date(selectedAlbum.date).toLocaleDateString()
                      : "-"
                    }
                  </span>
                </div>

                <h1 className="text-5xl font-extrabold text-white mb-3">
                  {selectedAlbum.title}
                </h1>

                <p className="text-white/90 text-lg max-w-3xl">
                  {selectedAlbum.description}
                </p>

              </div>
              <div className="absolute top-6 right-6">

                <div className="
    bg-black/40
    backdrop-blur-md
    px-5
    py-3
    rounded-2xl
    text-white
  ">

                  <p className="text-sm text-white/70">
                    Collection
                  </p>

                  <p className="font-bold">
                    School Memories
                  </p>

                </div>

              </div>

            </div>
            {isAdmin && (
              <div className="mb-8">
                <label
                  className="
      inline-flex
      items-center
      gap-3
      px-6
      py-3
      rounded-xl
      bg-gradient-to-r
      from-[#156445]
      to-[#0D6453]
      text-white
      cursor-pointer
      font-semibold
      hover:scale-105
transition-all
shadow-lg
      "
                >
                  📤 Upload Videos

                  <input
                    type="file"
                    multiple
                    accept="video/*"
                    className="hidden"
                    onChange={(e) => {
                      if (!e.target.files) return;

                      const files = e.target.files;

                      showConfirm(
                        "Upload Videos",
                        `Upload ${files?.length || 0} video(s) to this album?`,
                        () =>
                          addVideos(
                            selectedAlbum._id,
                            files!
                          )
                      );
                    }}
                  />
                </label>
              </div>
            )}

            {/* Videos */}
            <div className="
grid
sm:grid-cols-2
lg:grid-cols-3
2xl:grid-cols-4
gap-8
">

              {selectedAlbum.videos.length === 0 && (
                <div className="col-span-full">
                  <div className="
      rounded-3xl
      bg-white
      p-16
      text-center
      shadow-xl
    ">
                    <h3 className="text-3xl font-bold text-[#156445] mb-3">
                      No Videos Yet
                    </h3>

                    <p className="text-gray-500">
                      Upload videos to start building this album.
                    </p>
                  </div>
                </div>
              )}

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
                  <div className="
relative
overflow-hidden
rounded-[30px]
bg-white/90
backdrop-blur-xl
shadow-[0_20px_80px_rgba(0,0,0,0.12)]
transition-all
duration-500
group-hover:scale-[1.03]
group-hover:shadow-[0_30px_100px_rgba(21,100,69,0.25)]
">

                    {/* Preview */}
                    <div className="relative aspect-video">

                      {isAdmin && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();

                            showConfirm(
                              "Delete Video",
                              "Are you sure you want to permanently delete this video?",
                              () =>
                                deleteVideo(
                                  selectedAlbum._id,
                                  video
                                )
                            );
                          }}
                          className="
    absolute
    top-3
    right-3
    z-20
    px-3
    py-2
    rounded-xl
    bg-red-500
    text-white
    text-sm
    "
                        >
                          Delete
                        </button>
                      )}

                      <video
                        className="w-full h-full object-cover"
                        muted
                        preload="metadata"
                        playsInline
                        onMouseEnter={(e) => e.currentTarget.play()}
                        onMouseLeave={(e) => {
                          e.currentTarget.pause();
                          e.currentTarget.currentTime = 0;
                        }}
                      >
                        <source src={video} type="video/mp4" />
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

                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Video
                            className="text-[#156445]"
                            size={20}
                          />

                          <h3 className="text-lg font-bold text-[#156445] truncate">
                            {selectedAlbum.title} • Video {idx + 1}
                          </h3>
                        </div>

                        <p className="text-gray-500 text-sm">
                          HD Video • Click to Watch
                        </p>
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

        <AnimatePresence>
          {confirmOpen && confirmData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="
      fixed inset-0 z-[999]
      flex items-center justify-center
      bg-black/70 backdrop-blur-md
      p-4
      "
            >
              <motion.div
                initial={{
                  scale: 0.8,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                exit={{
                  scale: 0.8,
                  opacity: 0,
                }}
                className="
        w-full max-w-md
        rounded-[32px]
        bg-white
        p-8
        shadow-[0_30px_100px_rgba(0,0,0,0.25)]
        "
              >
                <h2 className="
        text-3xl
        font-bold
        text-[#156445]
        mb-4
        ">
                  {confirmData.title}
                </h2>

                <p className="
        text-gray-600
        mb-8
        text-lg
        ">
                  {confirmData.message}
                </p>

                <div className="flex gap-4">
                  <button
                    onClick={() =>
                      setConfirmOpen(false)
                    }
                    className="
            flex-1
            py-3
            rounded-xl
            border
            border-gray-300
            font-semibold
            "
                  >
                    Cancel
                  </button>

                  <button
                    onClick={() => {
                      confirmData.action();
                      setConfirmOpen(false);
                    }}
                    className="
            flex-1
            py-3
            rounded-xl
            bg-gradient-to-r
            from-[#156445]
            to-[#0D6453]
            text-white
            font-semibold
            "
                  >
                    Confirm
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="
      fixed inset-0
      z-[999]
      flex items-center justify-center
      bg-black/50
      backdrop-blur-md
      "
            >
              <div className="
      bg-white
      rounded-3xl
      p-8
      shadow-2xl
      flex flex-col
      items-center
      gap-4
      ">
                <div
                  className="
          w-12 h-12
          border-4
          border-[#156445]
          border-t-transparent
          rounded-full
          animate-spin
          "
                />

                <p className="
        font-semibold
        text-[#156445]
        ">
                  Uploading / Deleting Video...
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* VIDEO MODAL */}
        {/* PREMIUM VIDEO MODAL */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="
      fixed inset-0 z-[999]
      bg-black/90
      backdrop-blur-xl
      flex items-center justify-center
      p-4 md:p-8
      "
            >

              {/* Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="
        absolute top-6 right-6 z-50
        w-12 h-12
        rounded-full
        bg-white/10
        backdrop-blur-md
        text-white
        flex items-center justify-center
        hover:bg-red-500
        transition-all
        "
              >
                <X size={24} />
              </button>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="
        w-full
        max-w-7xl
        "
              >

                {/* Glass Card */}
                <div
                  className="
          overflow-hidden
          rounded-[40px]
          bg-white/5
          border border-white/10
          backdrop-blur-xl
          shadow-[0_30px_120px_rgba(0,0,0,0.6)]
          "
                >

                  {/* Video */}
                  <div className="relative">

                    <video
                      controls
                      autoPlay
                      playsInline
                      preload="metadata"
                      className="
              w-full
              max-h-[75vh]
              bg-black
              "
                    >
                      <source src={selectedVideo}
                        type="video/mp4"
                      />
                    </video>

                    {/* Top Gradient */}
                    <div className="pointer-events-none absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/70 to-transparent" />

                  </div>

                  {/* Footer */}
                  <div className="p-8">

                    <div className="flex flex-wrap items-center gap-3 mb-4">

                      <span className="
              px-4 py-2
              rounded-full
              bg-[#E4CC6F]
              text-[#156445]
              font-semibold
              ">
                        School Event
                      </span>

                      <span className="
              px-4 py-2
              rounded-full
              bg-[#156445]/20
              text-[#156445]
              font-semibold
              ">
                        HD Video
                      </span>

                    </div>

                    <h2 className="
            text-3xl md:text-4xl
            font-bold
            text-white
            mb-3
            ">
                      {selectedAlbum?.title}
                    </h2>

                    <p className="text-white/70 text-lg">
                      {selectedAlbum?.description}
                    </p>

                  </div>

                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}