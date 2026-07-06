'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  CalendarDays,
  Trophy,
  BookOpen,
  Users,
  Bell,
  Download,
  Eye,
  Mail,
  Trash2,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { API } from '@/lib/api';


const features = [
  {
    title: 'School Highlights',
    description:
      'Key updates, announcements, and important activities',
    icon: Bell,
  },
  {
    title: 'Event Coverage',
    description:
      'Celebrations, functions, and special programs',
    icon: CalendarDays,
  },
  {
    title: 'Student Achievements',
    description:
      'Academic, sports, and co-curricular success',
    icon: Trophy,
  },
  {
    title: 'Academic Updates',
    description:
      'Exams, curriculum progress, and learning initiatives',
    icon: BookOpen,
  },
  {
    title: 'Messages from Leadership',
    description:
      'Insights from the Principal and management',
    icon: Users,
  },
];



export default function NewsletterPage() {
  const [newsletters, setNewsletters] = useState<any[]>([]);
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [editId, setEditId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDesc, setEditDesc] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [monthOpen, setMonthOpen] =
    useState(false);
  const [search, setSearch] =
    useState("");

  const [selectedYear, setSelectedYear] =
    useState("all");

  const [selectedMonth, setSelectedMonth] =
    useState("all");
  const [currentPage, setCurrentPage] =
    useState(1);

  const newslettersPerPage = 6;

  const [deleteId, setDeleteId] =
  useState<string | null>(null);

  const fetchNewsletters = async () => {
    const res = await fetch(`${API}/api/newsletters`);
    const data = await res.json();
    setNewsletters(data);
  };


  const openPdf = async (
    id: string,
    pdfUrl: string
  ) => {

    await fetch(
      `${API}/api/newsletters/view/${id}`,
      {
        method: "PUT",
      }
    );

    setSelectedPdf(
      `${pdfUrl}#toolbar=0`
    );
  };


  const deleteNewsletter = async (id: string) => {

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this newsletter?"
  );

  if (!confirmDelete) return;

  try {

    const token = localStorage.getItem("token");

    await fetch(`${API}/api/newsletters/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    await fetchNewsletters();

  } catch (err) {

    console.log(err);

    alert("Failed to delete newsletter");

  }
};


  const closePdf = () => {
    setSelectedPdf(null);
  };

  const startEdit = (item: any) => {
    setEditId(item._id);
    setEditTitle(item.title);
    setEditDesc(item.description);
  };

  const saveEdit = async () => {
    if (!editId) return;

    const token = localStorage.getItem("token");

    await fetch(`${API}/api/newsletters/${editId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        title: editTitle,
        description: editDesc,
      }),
    });

    setEditId(null);
    fetchNewsletters();
  };
  const trackDownload = async (
    id: string
  ) => {

    await fetch(
      `${API}/api/newsletters/download/${id}`,
      {
        method: "PUT",
      }
    );
  };

  useEffect(() => {
    fetchNewsletters();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsAdmin(true);
    }
  }, []);


  const filteredNewsletters =
    newsletters.filter((item) => {

      const date = new Date(
        item.createdAt
      );

      const year =
        date.getFullYear().toString();

      const month =
        date.toLocaleString("default", {
          month: "long",
        });

      const matchesSearch =
        item.title
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesYear =
        selectedYear === "all" ||
        year === selectedYear;

      const matchesMonth =
        selectedMonth === "all" ||
        month === selectedMonth;

      return (
        matchesSearch &&
        matchesYear &&
        matchesMonth
      );
    });
  const indexOfLast =
    currentPage * newslettersPerPage;

  const indexOfFirst =
    indexOfLast - newslettersPerPage;

  const currentNewsletters =
    filteredNewsletters.slice(
      indexOfFirst,
      indexOfLast
    );

  const totalPages = Math.ceil(
    filteredNewsletters.length /
    newslettersPerPage
  );
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];


  return (
    <div className="w-full bg-[#F7F6F2] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative py-20 px-4 md:px-10 lg:px-20 bg-[#F5F3EC]">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-[#1B6B52]"
          >
            NEWSLETTER
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-gray-700 text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Stay connected with the latest updates, achievements, and
            happenings at Gurukulam The School. Our newsletters provide
            a glimpse into school life, showcasing academic progress,
            events, and student success stories.
          </motion.p>
        </div>
      </section>

      {/* FEATURE BOXES */}
      <section className="bg-[#146B4D] py-14 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#F7F6F2] rounded-2xl p-6 shadow-lg hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#E6D79A]/40 flex items-center justify-center mb-4">
                  <Icon className="text-[#146B4D]" size={24} />
                </div>

                <h3 className="text-[#146B4D] text-xl font-bold mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section className="relative py-24 px-4 md:px-10 lg:px-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/students-group.jpg"
            alt="Students"
            fill
            className="object-cover opacity-20"
          />
        </div>

        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#F7F6F2]/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-14 border border-[#E6D79A]/40"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#146B4D] mb-12">
              Latest Newsletters
            </h2>
            <div className="flex flex-col md:flex-row gap-4 mb-10">

              <div className="relative flex-1 group">

                <input
                  type="text"
                  placeholder="Search newsletters..."
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                  className="
        w-full
        bg-white/90
        backdrop-blur-sm
        border border-gray-200
        rounded-2xl
        pl-14 pr-5 py-4
        text-black
        placeholder:text-gray-400
        shadow-md
        outline-none
        transition-all
        duration-300
        focus:ring-2
        focus:ring-[#146B4D]
        focus:border-[#146B4D]
        group-hover:shadow-lg
      "
                />

                {/* SEARCH ICON */}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="
        w-5 h-5
        absolute
        left-5
        top-1/2
        -translate-y-1/2
        text-[#146B4D]
      "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>

              </div>

              {/* YEAR FILTER */}

              <div className="relative">

                <select
                  value={selectedYear}
                  onChange={(e) =>
                    setSelectedYear(e.target.value)
                  }
                  className="
        appearance-none
        bg-white/90
        backdrop-blur-sm
        border border-gray-200
        rounded-2xl
        px-6 py-4 pr-14
        text-black
        shadow-md
        outline-none
        transition-all
        duration-300
        focus:ring-2
        focus:ring-[#146B4D]
        focus:border-[#146B4D]
        hover:shadow-lg
        cursor-pointer
      "
                >

                  <option value="all">
                    All Years
                  </option>

                  <option value="2026">
                    2026
                  </option>

                  <option value="2025">
                    2025
                  </option>

                </select>

                {/* CUSTOM ARROW */}

                <div
                  className="
        pointer-events-none
        absolute
        right-5
        top-1/2
        -translate-y-1/2
        text-[#146B4D]
      "
                >
                  ▼
                </div>

              </div>

              <div className="relative w-full md:w-64">

                {/* BUTTON */}

                <button
                  onClick={() =>
                    setMonthOpen(!monthOpen)
                  }
                  className="
      w-full
      bg-white
      border
      border-gray-300
      rounded-2xl
      px-5 py-3
      text-left
      text-black
      shadow-sm
      hover:border-[#146B4D]
      transition-all
      duration-300
      flex
      items-center
      justify-between
    "
                >

                  <span>
                    {selectedMonth === "all"
                      ? "All Months"
                      : selectedMonth}
                  </span>

                  <span
                    className={`
        transition-transform duration-300
        ${monthOpen ? "rotate-180" : ""}
      `}
                  >
                    ▼
                  </span>

                </button>

                {/* DROPDOWN */}

                {monthOpen && (

                  <div
                    className="
        absolute
        top-full
        left-0
        mt-2
        w-full
        bg-white
        rounded-2xl
        shadow-2xl
        border
        border-gray-200
        z-50
        overflow-hidden
      "
                  >

                    {/* SCROLL AREA */}

                    <div
                      className="
          max-h-52
          overflow-y-auto
          scrollbar-thin
          scrollbar-thumb-[#146B4D]
          scrollbar-track-gray-100
        "
                    >

                      {/* ALL */}

                      <button
                        onClick={() => {
                          setSelectedMonth("all");
                          setMonthOpen(false);
                        }}
                        className="
            w-full
            text-left
            px-5 py-3
            hover:bg-[#146B4D]/10
            text-black
            transition-all
          "
                      >
                        All Months
                      </button>

                      {/* MONTHS */}

                      {months.map((month) => (

                        <button
                          key={month}
                          onClick={() => {
                            setSelectedMonth(month);
                            setMonthOpen(false);
                          }}
                          className={`
              w-full
              text-left
              px-5 py-3
              transition-all

              ${selectedMonth === month
                              ? "bg-[#146B4D] text-white"
                              : "text-black hover:bg-[#146B4D]/10"
                            }
            `}
                        >
                          {month}
                        </button>

                      ))}

                    </div>

                  </div>

                )}

              </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

              {currentNewsletters.map((item) => (

                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                  }}
                  transition={{ duration: 0.4 }}
                  className="
        group
        bg-white/95
        backdrop-blur-sm
        rounded-3xl
        overflow-hidden
        shadow-2xl
        border border-[#146B4D]/10
        hover:shadow-[0_20px_60px_rgba(20,107,77,0.18)]
        transition-all
        duration-500
      "
                >

                  {/* COVER IMAGE */}

                  <div className="relative h-64 overflow-hidden">

                    <Image
                      src={
                        item.coverImage?.startsWith("http")
                          ? item.coverImage
                          : "/images/newsletter-default.jpg"
                      }
                      alt={item.title}
                      fill
                      className="
    object-cover
    group-hover:scale-110
    transition-transform
    duration-700
  "
                    />

                    {/* OVERLAY */}

                    <div
                      className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/60
            via-black/10
            to-transparent
          "
                    />

                    {/* DATE BADGE */}

                    <div
                      className="
            absolute
            top-4
            left-4
            bg-white/90
            backdrop-blur-md
            px-4 py-2
            rounded-full
            text-sm
            font-semibold
            text-[#146B4D]
            shadow-lg
          "
                    >
                      {new Date(
                        item.createdAt
                      ).toLocaleDateString()}
                    </div>

                  </div>

                  {/* CONTENT */}

                  <div className="p-8">

                    {/* TITLE */}

                    <h3
                      className="
            text-2xl
            font-bold
            text-[#146B4D]
            mb-4
            leading-snug
          "
                    >
                      {item.title}
                    </h3>

                    {/* DESCRIPTION */}

                    <p
                      className="
            text-gray-600
            leading-relaxed
            mb-6
          "
                    >
                      {item.description}
                    </p>

                    {/* ANALYTICS */}

                    <div
                      className="
            flex
            items-center
            gap-6
            text-sm
            text-gray-500
            mb-8
          "
                    >

                      <div className="flex items-center gap-2">
                        👁
                        <span>
                          {item.views || 0} Views
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        ⬇
                        <span>
                          {item.downloads || 0}
                          Downloads
                        </span>
                      </div>

                    </div>

                    {/* BUTTONS */}

                    <div className="flex flex-wrap gap-4">

                      {/* VIEW PDF */}

                      <button
                        onClick={() =>
                          openPdf(
                            item._id,
                            item.pdf
                          )
                        }
                        className="
      flex-1
      flex
      items-center
      justify-center
      gap-2
      bg-gradient-to-r
      from-[#146B4D]
      to-[#0F5B41]
      hover:scale-[1.03]
      text-white
      py-3
      rounded-2xl
      font-semibold
      shadow-lg
      transition-all
      duration-300
    "
                      >
                        <Eye size={18} />
                        View PDF
                      </button>

                      {/* DOWNLOAD PDF */}

  <a
  href={item.pdf}
  target="_blank"
  rel="noopener noreferrer"
  onClick={() =>
    trackDownload(item._id)
  }

  className="
    flex-1
    flex
    items-center
    justify-center
    gap-2
    bg-[#E6D79A]
    hover:bg-[#d9ca8f]
    hover:scale-[1.03]
    text-[#146B4D]
    py-3
    rounded-2xl
    font-semibold
    shadow-md
    transition-all
    duration-300
  "
>
  <Download size={18} />
  Download
</a>

                    </div>

                    {/* ADMIN ACTIONS */}

                    {isAdmin && (

                      <div className="flex gap-3 mt-6">

                        <button
                          onClick={() =>
                            startEdit(item)
                          }
                          className="
                flex-1
                py-3
                rounded-xl
                bg-yellow-500
                hover:bg-yellow-600
                text-white
                font-semibold
                transition-all
              "
                        >
                          Edit
                        </button>

                        <button
                         onClick={() =>
  setDeleteId(item._id)
}
                          className="
                flex-1
                py-3
                rounded-xl
                bg-red-500
                hover:bg-red-600
                text-white
                font-semibold
                transition-all
              "
                        >
                          Delete
                        </button>

                      </div>

                    )}

                  </div>

                </motion.div>

              ))}

            </div>
            <div className="flex justify-center gap-3 mt-10">

              {[...Array(totalPages)].map(
                (_, index) => (

                  <button
                    key={index}
                    onClick={() =>
                      setCurrentPage(index + 1)
                    }
                    className={`
          px-4 py-2 rounded-lg

          ${currentPage === index + 1
                        ? "bg-[#146B4D] text-white"
                        : "bg-gray-200"
                      }
        `}
                  >
                    {index + 1}
                  </button>
                )
              )}
            </div>

            <p className="text-center text-gray-700 mt-10 text-lg">
              Explore our school journey, one month at a time.
            </p>

            <div className="text-center mt-6">
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-[#146B4D] font-semibold hover:underline"
              >
                <span className="w-3 h-3 rounded-full bg-[#146B4D]" />
                View All Newsletters
              </Link>
            </div>
          </motion.div>


        </div>
      </section>
      {selectedPdf && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">

          <div className="bg-white w-full max-w-5xl h-[90vh] rounded-2xl overflow-hidden shadow-2xl relative">

            {/* Close Button */}
            <button
              onClick={closePdf}
              className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
            >
              Close
            </button>

            {/* PDF Viewer */}
           <iframe
  src={`https://docs.google.com/gview?url=${encodeURIComponent(
    selectedPdf
  )}&embedded=true`}
  className="w-full h-full"
  title="PDF Viewer"
/>

          </div>

        </div>
      )}
      {editId && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

          <div className="bg-white p-6 rounded-2xl w-full max-w-lg">

            <h2 className="text-xl font-bold mb-4 text-[#146B4D]">
              Edit Newsletter
            </h2>

            <input
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              className="w-full border p-3 text-black rounded-lg mb-3"
              placeholder="Title"
            />

            <textarea
              value={editDesc}
              onChange={(e) => setEditDesc(e.target.value)}
              className="w-full border p-3 text-black rounded-lg mb-4"
              placeholder="Description"
            />

            <div className="flex justify-end gap-3">

              <button
                onClick={() => setEditId(null)}
                className="px-4 py-2 bg-gray-400 text-white rounded-lg"
              >
                Cancel
              </button>

              <button
                onClick={saveEdit}
                className="px-4 py-2 bg-[#146B4D] text-white rounded-lg"
              >
                Save
              </button>

            </div>

          </div>

        </div>
      )}
      {deleteId && (

  <div
    className="
      fixed inset-0 z-50
      bg-black/50
      backdrop-blur-md
      flex items-center justify-center
      px-4
      animate-fadeIn
    "
  >

    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
        y: 30,
      }}

      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}

      exit={{
        opacity: 0,
        scale: 0.8,
      }}

      transition={{
        duration: 0.3,
      }}

      className="
        bg-white
        w-full
        max-w-md
        rounded-3xl
        shadow-2xl
        p-8
        text-center
        border border-red-100
      "
    >

      {/* ICON */}

      <div
        className="
          w-20 h-20
          mx-auto mb-6
          rounded-full
          bg-red-100
          flex items-center justify-center
        "
      >

        <Trash2
          className="
            text-red-500
            w-10 h-10
          "
        />

      </div>

      {/* TITLE */}

      <h2
        className="
          text-2xl
          font-bold
          text-gray-800
          mb-3
        "
      >
        Delete Newsletter?
      </h2>

      {/* DESCRIPTION */}

      <p
        className="
          text-gray-500
          leading-relaxed
          mb-8
        "
      >
        This action cannot be undone.
        The newsletter will be permanently removed.
      </p>

      {/* BUTTONS */}

      <div className="flex gap-4">

        {/* CANCEL */}

        <button
          onClick={() =>
            setDeleteId(null)
          }
          className="
            flex-1
            py-3
            rounded-2xl
            bg-gray-200
            hover:bg-gray-300
            text-gray-700
            font-semibold
            transition-all
            duration-300
          "
        >
          Cancel
        </button>

        {/* DELETE */}

        <button
          onClick={async () => {

            await deleteNewsletter(
              deleteId
            );

            setDeleteId(null);
          }}

          className="
            flex-1
            py-3
            rounded-2xl
            bg-red-500
            hover:bg-red-600
            text-white
            font-semibold
            shadow-lg
            transition-all
            duration-300
            hover:scale-105
          "
        >
          Delete
        </button>

      </div>

    </motion.div>

  </div>

)}
    </div>
  );
}