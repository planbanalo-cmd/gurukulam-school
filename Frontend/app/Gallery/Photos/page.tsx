"use client";

import { useEffect, useState } from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  X,
  Images,
  Camera,
  CalendarDays,
  Upload,
  Trash2,
  Star,
  Image as ImageIcon,
} from "lucide-react";

import Image from "next/image";

import { API } from "@/lib/api";

// =====================================================
// TYPES
// =====================================================

type Album = {
  _id: string;
  title: string;
  date: string;
  cover: string;
  images: string[];
};

// =====================================================
// COMPONENT
// =====================================================

export default function Photos() {
  const [loading, setLoading] =
    useState(false);

  const [albums, setAlbums] =
    useState<Album[]>([]);

  const [message, setMessage] =
    useState("");

  const [messageType, setMessageType] =
    useState<"success" | "error" | "">("");

  const [selectedAlbum, setSelectedAlbum] =
    useState<Album | null>(null);

  const [confirmOpen, setConfirmOpen] =
    useState(false);

  const [confirmMessage, setConfirmMessage] =
    useState("");

  const [confirmAction, setConfirmAction] =
    useState<(() => void) | null>(null);

  const [isAdmin, setIsAdmin] =
    useState(false);

  // ===================================================
  // CHECK ADMIN
  // ===================================================

  useEffect(() => {
    const token =
      localStorage.getItem("token");

    setIsAdmin(Boolean(token));
  }, []);

  // ===================================================
  // MESSAGE
  // ===================================================

  const showMessage = (
    text: string,
    type: "success" | "error"
  ) => {
    setMessage(text);
    setMessageType(type);

    setTimeout(() => {
      setMessage("");
      setMessageType("");
    }, 3000);
  };

  // ===================================================
  // FETCH ALBUMS
  // ===================================================

  const fetchAlbums = async () => {
    try {
      const res = await fetch(
        `${API}/api/gallery`
      );

      const contentType =
        res.headers.get("content-type");

      if (
        !contentType?.includes(
          "application/json"
        )
      ) {
        const text =
          await res.text();

        console.error(
          "Non JSON response:",
          text
        );

        throw new Error(
          "Server returned an invalid response"
        );
      }

      const data =
        await res.json();

      if (!res.ok) {
        throw new Error(
          data.message ||
            "Failed to fetch albums"
        );
      }

      setAlbums(data);
    } catch (error) {
      console.error(
        "FETCH ALBUMS ERROR:",
        error
      );

      showMessage(
        "Failed to load gallery ❌",
        "error"
      );
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  // ===================================================
  // DELETE ALBUM
  // ===================================================

  const deleteAlbum = async (
    albumId: string
  ) => {
    try {
      setLoading(true);

      const res = await fetch(
        `${API}/api/gallery/${albumId}`,
        {
          method: "DELETE",
        }
      );

      const data =
        await res.json();

      if (!res.ok) {
        throw new Error(
          data.message ||
            "Failed to delete album"
        );
      }

      setAlbums((prev) =>
        prev.filter(
          (album) =>
            album._id !== albumId
        )
      );

      if (
        selectedAlbum?._id ===
        albumId
      ) {
        setSelectedAlbum(null);
      }

      showMessage(
        "Album deleted successfully 🗑️",
        "success"
      );
    } catch (error) {
      console.error(error);

      showMessage(
        error instanceof Error
          ? error.message
          : "Failed to delete album ❌",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  // ===================================================
  // ADD PHOTOS
  // ===================================================

  const addPhotos = async (
    albumId: string,
    files: FileList
  ) => {
    try {
      setLoading(true);

      const formData =
        new FormData();

      Array.from(files).forEach(
        (file) => {
          formData.append(
            "images",
            file
          );
        }
      );

      const res = await fetch(
        `${API}/api/gallery/${albumId}/photos`,
        {
          method: "PUT",
          body: formData,
        }
      );

      const data =
        await res.json();

      if (!res.ok) {
        throw new Error(
          data.message ||
            "Upload failed"
        );
      }

      setAlbums((prev) =>
        prev.map((album) =>
          album._id === albumId
            ? data
            : album
        )
      );

      setSelectedAlbum(data);

      showMessage(
        "Photos uploaded successfully ✅",
        "success"
      );
    } catch (error) {
      console.error(
        "UPLOAD PHOTOS ERROR:",
        error
      );

      showMessage(
        error instanceof Error
          ? error.message
          : "Failed to upload photos ❌",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  // ===================================================
  // CHANGE COVER
  // ===================================================

  const changeCover = async (
    albumId: string,
    imageUrl: string
  ) => {
    try {
      setLoading(true);

      console.log(
        "Changing cover..."
      );

      console.log(
        "Album ID:",
        albumId
      );

      console.log(
        "Image URL:",
        imageUrl
      );

      const res = await fetch(
        `${API}/api/gallery/${albumId}/cover`,
        {
          method: "PUT",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            imageUrl,
          }),
        }
      );

      const contentType =
        res.headers.get(
          "content-type"
        );

      let data: any;

      if (
        contentType?.includes(
          "application/json"
        )
      ) {
        data =
          await res.json();
      } else {
        const text =
          await res.text();

        console.error(
          "Invalid server response:",
          text
        );

        throw new Error(
          "Server returned an invalid response"
        );
      }

      if (!res.ok) {
        throw new Error(
          data.message ||
            "Failed to change cover"
        );
      }

      console.log(
        "Cover changed:",
        data
      );

      // -----------------------------------------------
      // UPDATE SELECTED ALBUM
      // -----------------------------------------------

      if (data.album) {
        setSelectedAlbum(
          data.album
        );

        // ---------------------------------------------
        // UPDATE ALBUM GRID
        // ---------------------------------------------

        setAlbums((prev) =>
          prev.map((album) =>
            album._id === albumId
              ? data.album
              : album
          )
        );
      }

      showMessage(
        "Cover image changed successfully ⭐",
        "success"
      );
    } catch (error) {
      console.error(
        "CHANGE COVER ERROR:",
        error
      );

      showMessage(
        error instanceof Error
          ? error.message
          : "Failed to change cover ❌",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  // ===================================================
  // DELETE PHOTO
  // ===================================================

  const deletePhoto = async (
    albumId: string,
    photoUrl: string
  ) => {
    try {
      setLoading(true);

      const res = await fetch(
        `${API}/api/gallery/${albumId}/photo/${encodeURIComponent(
          photoUrl
        )}`,
        {
          method: "DELETE",
        }
      );

      const data =
        await res.json();

      if (!res.ok) {
        throw new Error(
          data.message ||
            "Failed to delete photo"
        );
      }

      const galleryRes =
        await fetch(
          `${API}/api/gallery`
        );

      const updatedAlbums =
        await galleryRes.json();

      setAlbums(
        updatedAlbums
      );

      const updatedAlbum =
        updatedAlbums.find(
          (album: Album) =>
            album._id === albumId
        );

      if (updatedAlbum) {
        setSelectedAlbum(
          updatedAlbum
        );
      }

      showMessage(
        "Photo deleted successfully 🗑️",
        "success"
      );
    } catch (error) {
      console.error(
        "DELETE PHOTO ERROR:",
        error
      );

      showMessage(
        error instanceof Error
          ? error.message
          : "Failed to delete photo ❌",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  // ===================================================
  // DELETE ALBUM CONFIRMATION
  // ===================================================

  const askDeleteAlbum = (
    albumId: string
  ) => {
    setConfirmMessage(
      "Do you want to permanently delete this album?"
    );

    setConfirmAction(
      () => () => {
        deleteAlbum(albumId);
      }
    );

    setConfirmOpen(true);
  };

  // ===================================================
  // CHANGE COVER CONFIRMATION
  // ===================================================

  const askChangeCover = (
    albumId: string,
    imageUrl: string
  ) => {
    setConfirmMessage(
      "Do you want to make this image the album cover?"
    );

    setConfirmAction(
      () => () => {
        changeCover(
          albumId,
          imageUrl
        );
      }
    );

    setConfirmOpen(true);
  };

  // ===================================================
  // DELETE PHOTO CONFIRMATION
  // ===================================================

  const askDeletePhoto = (
    albumId: string,
    imageUrl: string
  ) => {
    if (
      selectedAlbum?.cover ===
      imageUrl
    ) {
      showMessage(
        "You cannot delete the current cover. Please select another cover first.",
        "error"
      );

      return;
    }

    setConfirmMessage(
      "Do you want to permanently delete this photo?"
    );

    setConfirmAction(
      () => () => {
        deletePhoto(
          albumId,
          imageUrl
        );
      }
    );

    setConfirmOpen(true);
  };

  // ===================================================
  // FORMAT DATE
  // ===================================================

  const formatDate = (
    date: string
  ) => {
    try {
      return new Date(
        date
      ).toLocaleDateString(
        "en-GB"
      );
    } catch {
      return date;
    }
  };

  // ===================================================
  // RETURN
  // ===================================================

  return (
    <div
      className="
        min-h-screen
        bg-[linear-gradient(120deg,#f5f1e8_0%,#eef5f1_40%,#f9f7f2_70%,#f5f1e8_100%)]
        py-16
        px-4
        overflow-hidden
      "
    >

      {/* =================================================
          CONFIRMATION MODAL
      ================================================= */}

      <AnimatePresence>
        {confirmOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
              fixed
              inset-0
              z-[10000]
              bg-black/60
              backdrop-blur-sm
              flex
              items-center
              justify-center
              p-4
            "
          >
            <motion.div
              initial={{
                scale: 0.9,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
              }}
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

              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-[#156445]/10
                  flex
                  items-center
                  justify-center
                  mb-5
                "
              >
                <ImageIcon
                  className="text-[#156445]"
                  size={28}
                />
              </div>

              <h3
                className="
                  text-2xl
                  font-bold
                  text-[#156445]
                  mb-3
                "
              >
                Confirmation
              </h3>

              <p
                className="
                  text-gray-600
                  leading-relaxed
                  mb-8
                "
              >
                {confirmMessage}
              </p>

              <div
                className="
                  flex
                  gap-3
                  justify-end
                "
              >

                <button
                  onClick={() => {
                    setConfirmOpen(
                      false
                    );

                    setConfirmAction(
                      null
                    );
                  }}
                  className="
                    px-5
                    py-3
                    rounded-xl
                    border
                    border-gray-200
                    text-gray-700
                    font-semibold
                    hover:bg-gray-50
                  "
                >
                  Cancel
                </button>

                <button
                  onClick={() => {
                    const action =
                      confirmAction;

                    setConfirmOpen(
                      false
                    );

                    setConfirmAction(
                      null
                    );

                    action?.();
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
                    shadow-lg
                  "
                >
                  Confirm
                </button>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =================================================
          TOAST
      ================================================= */}

      <AnimatePresence>
        {message && (
          <motion.div
            initial={{
              opacity: 0,
              x: 100,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: 100,
            }}
            className={`
              fixed
              top-6
              right-6
              z-[10001]
              px-6
              py-4
              rounded-2xl
              shadow-2xl
              text-white
              font-semibold
              ${
                messageType ===
                "success"
                  ? "bg-[#156445]"
                  : "bg-red-600"
              }
            `}
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* =================================================
          WATERMARK
      ================================================= */}

      <div
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          opacity-[0.035]
          pointer-events-none
        "
      >
        <Image
          src="/images/GurukulamLogo.jpeg"
          alt="Gurukulam"
          width={500}
          height={500}
          className="w-[500px] h-auto"
        />
      </div>

      {/* =================================================
          MAIN
      ================================================= */}

      <div
        className="
          max-w-7xl
          mx-auto
          relative
          z-10
        "
      >

        {/* HERO */}

        <motion.div
          initial={{
            opacity: 0,
            y: -30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="
            text-center
            mb-16
          "
        >

          <div
            className="
              inline-flex
              items-center
              gap-3
              px-5
              py-2
              rounded-full
              bg-white/70
              backdrop-blur-md
              border
              border-[#156445]/20
              shadow-md
              mb-6
            "
          >
            <Camera
              className="text-[#156445]"
              size={18}
            />

            <span
              className="
                text-[#156445]
                font-semibold
                text-sm
              "
            >
              School Memories & Events
            </span>
          </div>

          <h1
            className="
              text-4xl
              md:text-6xl
              font-extrabold
              bg-gradient-to-r
              from-[#156445]
              via-[#0D6453]
              to-[#296236]
              bg-clip-text
              text-transparent
            "
          >
            Photo Gallery
          </h1>

          <p
            className="
              text-gray-700
              mt-5
              max-w-3xl
              mx-auto
              text-lg
              leading-relaxed
            "
          >
            Explore beautiful memories,
            celebrations, competitions,
            achievements, and special
            moments captured at
            Gurukulam The School.
          </p>

        </motion.div>

        {/* EMPTY STATE */}

        {albums.length === 0 && (
          <div
            className="
              text-center
              bg-white/80
              backdrop-blur-xl
              rounded-3xl
              p-16
              border
              border-[#156445]/10
              shadow-xl
            "
          >
            <Images
              size={50}
              className="
                mx-auto
                text-[#156445]
                mb-4
              "
            />

            <h2
              className="
                text-2xl
                font-bold
                text-[#156445]
              "
            >
              No Albums Yet
            </h2>

            <p
              className="
                text-gray-500
                mt-2
              "
            >
              Gallery albums will
              appear here.
            </p>
          </div>
        )}

        {/* =================================================
            ALBUM GRID
        ================================================= */}

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

          {albums.map(
            (album, index) => (
              <motion.div
                key={album._id}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay:
                    index * 0.08,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  relative
                  group
                "
              >

                <div
                  className="
                    absolute
                    -inset-[2px]
                    rounded-3xl
                    bg-gradient-to-r
                    from-[#156445]
                    via-[#0D6453]
                    to-[#296236]
                    opacity-20
                    blur-xl
                    group-hover:opacity-40
                  "
                />

                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[28px]
                    bg-white
                    border
                    border-[#156445]/10
                    shadow-[0_15px_45px_rgba(0,0,0,0.08)]
                    hover:shadow-[0_25px_60px_rgba(21,100,69,0.18)]
                    transition-all
                    duration-500
                  "
                >

                  {/* COVER */}

                  <div
                    onClick={() =>
                      setSelectedAlbum(
                        album
                      )
                    }
                    className="
                      relative
                      h-[280px]
                      overflow-hidden
                      cursor-pointer
                    "
                  >

                    <Image
                      src={album.cover}
                      alt={album.title}
                      fill
                      sizes="
                        (max-width:768px) 100vw,
                        (max-width:1200px) 50vw,
                        33vw
                      "
                      className="
                        object-cover
                        group-hover:scale-110
                        transition-all
                        duration-700
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/85
                        via-black/10
                        to-transparent
                      "
                    />

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

                    <div
                      className="
                        absolute
                        bottom-5
                        left-5
                        right-5
                      "
                    >

                      <h2
                        className="
                          text-white
                          text-2xl
                          font-bold
                        "
                      >
                        {album.title}
                      </h2>

                      <div
                        className="
                          flex
                          items-center
                          gap-2
                          mt-2
                          text-white/90
                          text-sm
                        "
                      >
                        <CalendarDays
                          size={15}
                        />

                        {formatDate(
                          album.date
                        )}
                      </div>

                    </div>

                  </div>

                  {/* FOOTER */}

                  <div className="p-5">

                    <div
                      onClick={() =>
                        setSelectedAlbum(
                          album
                        )
                      }
                      className="
                        flex
                        items-center
                        justify-between
                        cursor-pointer
                      "
                    >

                      <div
                        className="
                          flex
                          items-center
                          gap-2
                          text-[#156445]
                          font-semibold
                        "
                      >
                        <Images
                          size={18}
                        />

                        Open Album
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
                        "
                      >
                        View
                      </button>

                    </div>

                    {isAdmin && (
                      <button
                        onClick={() =>
                          askDeleteAlbum(
                            album._id
                          )
                        }
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
                          flex
                          items-center
                          justify-center
                          gap-2
                        "
                      >
                        <Trash2
                          size={16}
                        />

                        Delete Album
                      </button>
                    )}

                  </div>

                </div>

              </motion.div>
            )
          )}

        </div>
      </div>

      {/* =================================================
          ALBUM MODAL
      ================================================= */}

      <AnimatePresence>
        {selectedAlbum && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
              fixed
              inset-0
              z-50
              bg-black/80
              backdrop-blur-sm
              flex
              items-center
              justify-center
              p-4
            "
            onClick={() =>
              setSelectedAlbum(null)
            }
          >

            <motion.div
              initial={{
                scale: 0.92,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.92,
                opacity: 0,
              }}
              onClick={(e) =>
                e.stopPropagation()
              }
              className="
                relative
                bg-white
                rounded-3xl
                max-w-7xl
                w-full
                max-h-[94vh]
                overflow-y-auto
                shadow-2xl
              "
            >

              {/* CLOSE */}

              <button
                onClick={() =>
                  setSelectedAlbum(null)
                }
                className="
                  absolute
                  top-5
                  right-5
                  z-30
                  w-11
                  h-11
                  rounded-full
                  bg-black/70
                  hover:bg-black
                  text-white
                  flex
                  items-center
                  justify-center
                "
              >
                <X size={22} />
              </button>

              {/* HEADER */}

              <div
                className="
                  relative
                  h-80
                  overflow-hidden
                  rounded-t-3xl
                "
              >

                <Image
                  src={
                    selectedAlbum.cover
                  }
                  alt={
                    selectedAlbum.title
                  }
                  fill
                  sizes="100vw"
                  className="object-cover"
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/90
                    via-black/40
                    to-transparent
                  "
                />

                <div
                  className="
                    absolute
                    bottom-8
                    left-8
                    right-8
                  "
                >

                  <div
                    className="
                      inline-flex
                      items-center
                      gap-2
                      px-3
                      py-1.5
                      rounded-full
                      bg-white/20
                      backdrop-blur-md
                      text-white
                      text-sm
                      mb-3
                    "
                  >
                    <Star
                      size={15}
                      fill="currentColor"
                    />

                    Album
                  </div>

                  <h2
                    className="
                      text-white
                      text-4xl
                      md:text-5xl
                      font-bold
                    "
                  >
                    {selectedAlbum.title}
                  </h2>

                  <p
                    className="
                      text-white/80
                      text-lg
                      mt-2
                    "
                  >
                    {
                      selectedAlbum.images
                        .length
                    }{" "}
                    Photos Available
                  </p>

                </div>

              </div>

              {/* CONTENT */}

              <div
                className="
                  p-6
                  md:p-8
                "
              >

                {/* ADMIN */}

                {isAdmin && (
                  <div
                    className="
                      mb-8
                      p-5
                      rounded-2xl
                      bg-[#156445]/5
                      border
                      border-[#156445]/10
                    "
                  >

                    <div
                      className="
                        flex
                        flex-col
                        md:flex-row
                        md:items-center
                        justify-between
                        gap-4
                      "
                    >

                      <div>
                        <h3
                          className="
                            text-lg
                            font-bold
                            text-[#156445]
                          "
                        >
                          Manage Album
                        </h3>

                        <p
                          className="
                            text-sm
                            text-gray-500
                            mt-1
                          "
                        >
                          Add photos or
                          choose any photo
                          as the album cover.
                        </p>
                      </div>

                      <label
                        className="
                          inline-flex
                          items-center
                          justify-center
                          gap-3
                          px-6
                          py-3
                          bg-gradient-to-r
                          from-[#156445]
                          to-[#0D6453]
                          text-white
                          rounded-xl
                          cursor-pointer
                          hover:scale-[1.02]
                          transition
                          font-semibold
                          shadow-lg
                        "
                      >

                        <Upload
                          size={18}
                        />

                        Add Photos

                        <input
                          type="file"
                          multiple
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            if (
                              !e.target.files ||
                              e.target.files.length ===
                                0
                            ) {
                              return;
                            }

                            const files =
                              e.target.files;

                            setConfirmMessage(
                              `Do you want to upload ${files.length} photos?`
                            );

                            setConfirmAction(
                              () => () => {
                                addPhotos(
                                  selectedAlbum._id,
                                  files
                                );
                              }
                            );

                            setConfirmOpen(
                              true
                            );

                            e.target.value =
                              "";
                          }}
                        />

                      </label>

                    </div>

                    <p
                      className="
                        text-xs
                        text-gray-500
                        mt-3
                      "
                    >
                      You can upload up
                      to 100 photos at once.
                    </p>

                  </div>
                )}

                {/* PHOTO GRID */}

                {selectedAlbum.images
                  .length === 0 ? (
                  <div
                    className="
                      text-center
                      py-16
                    "
                  >
                    <Images
                      size={45}
                      className="
                        mx-auto
                        text-gray-300
                        mb-4
                      "
                    />

                    <p className="text-gray-500">
                      No photos in this album.
                    </p>
                  </div>
                ) : (
                  <div
                    className="
                      grid
                      grid-cols-1
                      sm:grid-cols-2
                      lg:grid-cols-3
                      gap-6
                    "
                  >

                    {selectedAlbum.images.map(
                      (img, i) => {

                        const isCover =
                          selectedAlbum.cover ===
                          img;

                        return (
                          <motion.div
                            key={`${img}-${i}`}
                            whileHover={{
                              y: -4,
                            }}
                            className="
                              group
                              relative
                              overflow-hidden
                              rounded-2xl
                              shadow-lg
                              border
                              border-gray-200
                              h-64
                              sm:h-72
                              md:h-80
                              bg-gray-100
                            "
                          >

                            {/* IMAGE */}

                            <Image
                              src={img}
                              alt={`Gallery photo ${
                                i + 1
                              }`}
                              fill
                              sizes="
                                (max-width:640px) 100vw,
                                (max-width:1024px) 50vw,
                                33vw
                              "
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
                                absolute
                                inset-0
                                bg-gradient-to-t
                                from-black/70
                                via-transparent
                                to-black/20
                                opacity-0
                                group-hover:opacity-100
                                transition
                              "
                            />

                            {/* COVER BADGE */}

                            {isCover && (
                              <div
                                className="
                                  absolute
                                  bottom-4
                                  left-4
                                  z-20
                                  flex
                                  items-center
                                  gap-2
                                  px-4
                                  py-2
                                  rounded-full
                                  bg-[#CFAF5C]
                                  text-white
                                  text-xs
                                  font-bold
                                  shadow-xl
                                "
                              >

                                <Star
                                  size={14}
                                  fill="currentColor"
                                />

                                Album Cover

                              </div>
                            )}

                            {/* ADMIN CONTROLS */}

                            {isAdmin && (
                              <div
                                className="
                                  absolute
                                  top-3
                                  right-3
                                  z-30
                                  flex
                                  gap-2
                                "
                              >

                                {/* SET COVER */}

                                {!isCover && (
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();

                                      askChangeCover(
                                        selectedAlbum._id,
                                        img
                                      );
                                    }}
                                    className="
                                      px-3
                                      py-2
                                      rounded-xl
                                      bg-white/95
                                      backdrop-blur-md
                                      text-[#156445]
                                      text-xs
                                      font-bold
                                      shadow-xl
                                      hover:bg-[#156445]
                                      hover:text-white
                                      transition
                                      flex
                                      items-center
                                      gap-1.5
                                    "
                                  >

                                    <Star
                                      size={14}
                                    />

                                    Set Cover

                                  </button>
                                )}

                                {/* DELETE */}

                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();

                                    askDeletePhoto(
                                      selectedAlbum._id,
                                      img
                                    );
                                  }}
                                  className="
                                    px-3
                                    py-2
                                    rounded-xl
                                    bg-red-600
                                    text-white
                                    text-xs
                                    font-bold
                                    shadow-xl
                                    hover:bg-red-700
                                    transition
                                    flex
                                    items-center
                                    gap-1.5
                                  "
                                >

                                  <Trash2
                                    size={14}
                                  />

                                  Delete

                                </button>

                              </div>
                            )}

                            {/* PHOTO NUMBER */}

                            <div
                              className="
                                absolute
                                bottom-4
                                right-4
                                z-20
                                w-8
                                h-8
                                rounded-full
                                bg-black/50
                                backdrop-blur-md
                                text-white
                                text-xs
                                font-bold
                                flex
                                items-center
                                justify-center
                              "
                            >
                              {i + 1}
                            </div>

                          </motion.div>
                        );
                      }
                    )}

                  </div>
                )}

              </div>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* =================================================
          LOADING
      ================================================= */}

      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
              fixed
              inset-0
              z-[20000]
              flex
              items-center
              justify-center
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
                flex
                flex-col
                items-center
                gap-5
                min-w-[260px]
              "
            >

              <div
                className="
                  w-12
                  h-12
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
                Please wait...
              </p>

            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}