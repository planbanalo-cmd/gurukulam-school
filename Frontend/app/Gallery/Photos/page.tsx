'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Images, Camera, CalendarDays } from 'lucide-react';
import Image from 'next/image';
import { API } from '@/lib/api';

export default function Photos() {
  type Album = {
    _id: string;
    title: string;
    date: string;
    cover: string;
    images: string[];
  };
const [loading, setLoading] = useState(false);
  const [albums, setAlbums] =
    useState<Album[]>([]);
  const [message, setMessage] =
    useState("");

  const [messageType, setMessageType] =
    useState<"success" | "error" | "">("");
  const [selectedAlbum, setSelectedAlbum] =
    useState<Album | null>(null);
  const [selectedFilesCount, setSelectedFilesCount] =
    useState(0);
  const [confirmOpen, setConfirmOpen] =
    useState(false);

  const [confirmMessage, setConfirmMessage] =
    useState("");

  const [confirmAction, setConfirmAction] =
    useState<(() => void) | null>(null);
  const [isAdmin, setIsAdmin] =
    useState(false);
  useEffect(() => {

    const token =
      localStorage.getItem("token");

    setIsAdmin(!!token);

  }, []);


  useEffect(() => {
    fetchAlbums();
  }, []);

  const fetchAlbums = async () => {
    const res = await fetch(
      `${API}/api/gallery`
    );

    const data = await res.json();

    setAlbums(data);
  };
  const deleteAlbum = async (
    albumId: string
  ) => {


     try {
    setLoading(true);

      await fetch(
        `${API}/api/gallery/${albumId}`,
        {
          method: "DELETE",
        }
      );

      const res = await fetch(
        `${API}/api/gallery`
      );

      const updatedAlbums =
        await res.json();

      setAlbums(updatedAlbums);

      // Close modal if deleted album was open
      if (
        selectedAlbum &&
        selectedAlbum._id === albumId
      ) {
        setSelectedAlbum(null);
      }

      setMessage(
        "Album deleted successfully 🗑️"
      );

      setMessageType("success");

      setTimeout(() => {
        setMessage("");
      }, 3000);

    } catch (error) {

      setMessage(
        "Failed to delete album ❌"
      );

      setMessageType("error");

      setTimeout(() => {
        setMessage("");
      }, 3000);

      
    }
    finally {
  setLoading(false);
}
  };
 const addPhotos = async (
  albumId: string,
  files: FileList
) => {
  try {
    setLoading(true);

    const formData = new FormData();

    Array.from(files).forEach((file) => {
      formData.append("images", file);
    });

    await fetch(
      `${API}/api/gallery/${albumId}/photos`,
      {
        method: "PUT",
        body: formData,
      }
    );

    setMessage("Photos uploaded successfully ✅");
    setMessageType("success");

    setTimeout(() => {
      setMessage("");
    }, 3000);

    await fetchAlbums();

    const refreshed = await fetch(
      `${API}/api/gallery`
    );

    const albumsData = await refreshed.json();

    const updatedAlbum = albumsData.find(
      (a: Album) => a._id === albumId
    );

    if (updatedAlbum) {
      setSelectedAlbum(updatedAlbum);
    }
  } catch (error) {
    console.error(error);

    setMessage("Failed to upload photos ❌");
    setMessageType("error");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  } finally {
    setLoading(false);
  }
};
  const deletePhoto = async (
  albumId: string,
  photoName: string
) => {
  try {
    setLoading(true);

    await fetch(
      `${API}/api/gallery/${albumId}/photo/${encodeURIComponent(photoName)}`,
      {
        method: "DELETE",
      }
    );

    const res = await fetch(
      `${API}/api/gallery`
    );

    const updatedAlbums = await res.json();

    setAlbums(updatedAlbums);

    const updatedAlbum = updatedAlbums.find(
      (a: Album) => a._id === albumId
    );

    if (updatedAlbum) {
      setSelectedAlbum(updatedAlbum);
    }

    setMessage("Photo deleted successfully 🗑️");
    setMessageType("success");

    setTimeout(() => {
      setMessage("");
    }, 3000);

  } catch (error) {
    console.error(error);

    setMessage("Failed to delete photo ❌");
    setMessageType("error");

    setTimeout(() => {
      setMessage("");
    }, 3000);

  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-[linear-gradient(120deg,#f5f1e8_0%,#eef5f1_40%,#f9f7f2_70%,#f5f1e8_100%)] py-16 px-4 overflow-hidden">
      {confirmOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center p-4">
          <div
            className="
  bg-white
  rounded-3xl
  shadow-2xl
  p-8
  max-w-md
  w-full
  border
  border-[#156445]/20
"
          >

            <h3
              className="
  text-3xl
  font-bold
  bg-gradient-to-r
  from-[#156445]
  to-[#0D6453]
  bg-clip-text
  text-transparent
  mb-4
"
            >
              Confirmation
            </h3>

            <p className="text-gray-600 mb-8">
              {confirmMessage}
            </p>

            <div className="flex gap-4 justify-end">

              <button
                onClick={() => {
                  setConfirmOpen(false);
                }}
                className="
px-5
py-3
rounded-xl
border
border-[#156445]/20
text-[#156445]
font-semibold
hover:bg-[#156445]/5
"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  confirmAction?.();
                  setConfirmOpen(false);
                }}
                className="
px-5
py-3
rounded-xl
bg-gradient-to-r
from-[#156445]
to-[#0D6453]
text-white
font-semibold
hover:opacity-90
transition
"
              >
                Yes
              </button>

            </div>

          </div>
        </div>
      )}
      {message && (
        <div
          className={`
fixed
top-6
right-6
z-[9999]
px-6
py-4
rounded-2xl
shadow-2xl
text-white
font-semibold
backdrop-blur-md
animate-in
slide-in-from-right
${messageType === "success"
              ? "bg-[#156445]"
              : "bg-red-600"
            }
`}
        >
          {message}
        </div>
      )}

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
        <div
          className="
  grid
  grid-cols-1
  sm:grid-cols-2
  xl:grid-cols-3
  2xl:grid-cols-4
  gap-8
  "
        >

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
        <div
  className="
  relative
  overflow-hidden
  rounded-[28px]
  bg-white
  border border-[#156445]/10
  shadow-[0_15px_45px_rgba(0,0,0,0.08)]
  hover:shadow-[0_25px_60px_rgba(21,100,69,0.18)]
  transition-all
  duration-500
"
>
  {/* IMAGE */}
  <div
    className="
    relative
    h-[280px]
    overflow-hidden
  "
  >
    <Image
      src={album.cover}
      alt={album.title}
      fill
      sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
      className="
      object-cover
      group-hover:scale-110
      transition-all
      duration-700
    "
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

    {/* Photo Count */}
    <div
      className="
      absolute
      top-4
      right-4
      px-4
      py-2
      rounded-full
      bg-white
      text-[#156445]
      text-sm
      font-bold
      shadow-lg
    "
    >
      {album.images.length} Photos
    </div>

    {/* Album Title */}
    <div className="absolute bottom-5 left-5 right-5">
      <h2 className="text-white text-2xl font-bold">
        {album.title}
      </h2>

      <div className="flex items-center gap-2 mt-2 text-white/90 text-sm">
        <CalendarDays size={15} />
        <span>
          {new Date(album.date).toLocaleDateString("en-GB")}
        </span>
      </div>
    </div>
  </div>

  {/* Footer */}
  <div className="p-5">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 text-[#156445] font-semibold">
        <Images size={18} />
        <span>Open Album</span>
      </div>

      <button
        className="
        px-5
        py-2.5
        rounded-xl
        bg-gradient-to-r
        from-[#156445]
        to-[#0D6453]
        text-white
        text-sm
        font-semibold
        shadow-md
        hover:scale-105
        transition-all
      "
      >
        View
      </button>
    </div>

    {isAdmin && (
      <button
        onClick={(e) => {
          e.stopPropagation();

          setConfirmMessage(
            'Do you want to delete this album?'
          );

          setConfirmAction(() => () => {
            deleteAlbum(album._id);
          });

          setConfirmOpen(true);
        }}
        className="
        mt-4
        w-full
        py-2.5
        rounded-xl
        bg-red-50
        border
        border-red-200
        text-red-600
        font-semibold
        hover:bg-red-600
        hover:text-white
        transition-all
        "
      >
        Delete Album
      </button>
    )}
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
              {/* GALLERY */}
              <div className="p-8">

                {isAdmin && (

                  <div className="mb-8">

                    <label
                      className="
        inline-flex
        items-center
        gap-3
        px-6
        py-3
        bg-[#156445]
        text-white
        rounded-xl
        cursor-pointer
        hover:bg-[#0D6453]
        transition-all
        font-semibold
      "
                    >
                      📷 Choose Files

                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {

                          if (!e.target.files) return;

                          const files = e.target.files;

                          setConfirmMessage(
                            `Do you want to upload ${files.length} photos?`
                          );

                          setConfirmAction(() => () => {

                            setSelectedFilesCount(
                              files.length
                            );

                            addPhotos(
                              selectedAlbum!._id,
                              files
                            );

                          });

                          setConfirmOpen(true);

                        }}
                      />
                    </label>

                    {/* ADD HERE 👇 */}


                    <p className="text-sm text-gray-500 mt-2">
                      Upload up to 100 photos
                    </p>

                  </div>

                )}            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                  {selectedAlbum.images.map((img: string, i: number) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.03 }}
                      className="
          group
          relative
          overflow-hidden
          rounded-2xl
          shadow-xl
          border
          border-gray-200
          h-64 sm:h-72 md:h-80
          bg-gray-100
        "
                    >
                      {isAdmin && (

                        <button
                          onClick={() => {

                            setConfirmMessage(
                              "Do you want to delete this photo?"
                            );

                            setConfirmAction(() => () => {

                              deletePhoto(
                                selectedAlbum._id,
                                img
                              );

                            });

                            setConfirmOpen(true);

                          }}
                          className="
absolute
top-3
right-3
z-20
px-3
py-2
rounded-xl
bg-gradient-to-r
from-[#156445]
to-[#0D6453]
text-white
text-sm
font-semibold
shadow-lg
"
                        >
                          Delete
                        </button>

                      )}

                      {/* IMAGE */}
                      <Image
                        src={img}
                        alt={`gallery-${i}`}
                        fill
                        className="
    object-cover
    transition
    duration-700
    group-hover:scale-110
  "
                      />

                      {/* OVERLAY */}
                      <div
                        className="
            absolute inset-0
            bg-black/0
            group-hover:bg-black/20
            transition duration-500
          "
                      />

                    </motion.div>
                  ))}

                </div>

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
      z-[9999]
      flex items-center justify-center
      bg-black/50
      backdrop-blur-md
      "
    >
      <div
        className="
        bg-white
        rounded-3xl
        p-8
        shadow-2xl
        flex flex-col
        items-center
        gap-4
        "
      >
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

        <p
          className="
          font-semibold
          text-[#156445]
          "
        >
          Uploading / Deleting Photos...
        </p>
      </div>
    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
}