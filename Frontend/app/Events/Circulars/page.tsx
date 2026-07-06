'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FileText,
  Download,
  Eye,
  Bell,
  CalendarDays,
  Trash2,
  Mail,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { API } from '@/lib/api';



export default function CircularPage() {
  const [circulars, setCirculars] = useState<any[]>([]);

 
  const [editingId, setEditingId] =
    useState<string | null>(null);
const [showMonthDropdown, setShowMonthDropdown] =
  useState(false);
const [editTitle, setEditTitle] =
    useState("");
const [isAdmin, setIsAdmin] =
  useState(false);
const [showDeleteModal, setShowDeleteModal] =
  useState(false);

const [currentPage, setCurrentPage] =
  useState(1);
const [toast, setToast] = useState("");

const itemsPerPage = 6;

const [selectedCircularId, setSelectedCircularId] =
  useState("");
const [searchTerm, setSearchTerm] =
  useState("");
const [selectedMonth, setSelectedMonth] =
  useState("All");
const [selectedYear, setSelectedYear] =
  useState("All");
  const [editDesc, setEditDesc] =
    useState("");

  useEffect(() => {

    fetchCirculars();

  }, []);
  useEffect(() => {

  const token =
    localStorage.getItem("token");

  setIsAdmin(!!token);

}, []);

  const fetchCirculars = async () => {

    const res = await fetch(
      `${API}/api/circulars`
    );

    const data = await res.json();

    setCirculars(data);
  };

 
const handleEdit = (item: any) => {

    setEditingId(item._id);

    setEditTitle(item.title);

    setEditDesc(item.desc);
  };
  const updateCircular = async () => {

    try {

      await fetch(
        `${API}/api/circulars/${editingId}`,
        {
          method: "PUT",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            title: editTitle,
            desc: editDesc,
          }),
        }
      );

      setEditingId(null);

      fetchCirculars();

      alert("Updated ✅");

    } catch (err) {

      console.log(err);
    }
  };

const openDeleteModal = (
  id: string
) => {

  setSelectedCircularId(id);

  setShowDeleteModal(true);
};

const confirmDelete = async () => {
  try {

    const res = await fetch(
      `${API}/api/circulars/${selectedCircularId}`,
      {
        method: "DELETE",
      }
    );

    if (res.ok) {

      fetchCirculars();

      setShowDeleteModal(false);

      setToast(
        "PDF deleted successfully ✅"
      );

      setTimeout(() => {
        setToast("");
      }, 3000);
    }

  } catch (err) {

    console.log(err);

    setToast(
      "Failed to delete PDF ❌"
    );

    setTimeout(() => {
      setToast("");
    }, 3000);
  }
};
const filteredCirculars =circulars.filter((item: any) => {

    const matchesSearch =
      item.title
        .toLowerCase()
        .includes(
          searchTerm.toLowerCase()
        );

    const year =
      new Date(
        item.createdAt
      ).getFullYear().toString();

    const month =
      new Date(
        item.createdAt
      ).toLocaleString(
        "default",
        { month: "long" }
      );

    const matchesYear =
      selectedYear === "All" ||
      year === selectedYear;

    const matchesMonth =
      selectedMonth === "All" ||
      month === selectedMonth;

    return (
      matchesSearch &&
      matchesYear &&
      matchesMonth
    );
  });

  const totalPages = Math.ceil(filteredCirculars.length /
    itemsPerPage
);

const paginatedCirculars =filteredCirculars.slice(
    (currentPage - 1) *
      itemsPerPage,

    currentPage *
      itemsPerPage);
  return (
    <div className="min-h-screen bg-[#F6F4EE] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#146B4D] via-[#F6F4EE] to-[#146B4D] py-20 px-4 md:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 mx-auto rounded-full bg-[#146B4D]/10 flex items-center justify-center mb-6 border border-[#146B4D]/20">
              <Bell className="text-[#146B4D]" size={36} />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-[#146B4D]">
              CIRCULAR
            </h1>

            <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              Stay informed with all the latest official announcements
              and important updates from Gurukulam The School. Our
              circulars keep parents and students updated about
              academic schedules, events, policies, and essential
              notices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* LATEST CIRCULARS */}
      <section className="relative py-20 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 backdrop-blur-sm rounded-[30px] shadow-2xl border border-[#D8C98D]/50 p-8 md:p-14"
          >
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-[#146B4D]">
                Latest Circulars
              </h2>

              <div className="w-24 h-1 bg-[#D8C98D] mx-auto mt-4 rounded-full" />
            </div>
<div className="
  flex flex-col xl:flex-row
  gap-5
  mb-14
">

  {/* SEARCH */}

 <div className="
  flex-1
  h-[72px]
  bg-[#FFFFFF]
  rounded-[22px]
  shadow-[0_4px_15px_rgba(0,0,0,0.08)]
  border border-[#E5E5E5]
  flex items-center
  px-7
">

  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="
      h-7 w-7
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

  <input
    type="text"
    placeholder="Search circulars..."
    value={searchTerm}
    onChange={(e) => {
  setSearchTerm(e.target.value);
  setCurrentPage(1);
}
    }
    className="
      w-full
      bg-transparent
      outline-none
      pl-5
      text-[18px]
      font-medium
      text-[#8C96A8]
      placeholder:text-[#8C96A8]
    "
  />

</div>

  {/* YEAR FILTER */}

  <select
    value={selectedYear}
   onChange={(e) => {
  setSelectedYear(e.target.value);
  setCurrentPage(1);


}
    }
   className="
  h-[72px]
  px-7
  rounded-[22px]
  bg-[#FFFFFF]
  shadow-[0_4px_15px_rgba(0,0,0,0.08)]
  border border-[#E5E5E5]
  text-[18px]
  font-medium
  text-[#1F1F1F]
  outline-none
  min-w-[180px]
"
  >

    <option value="All">
      All Years
    </option>

    {[...new Set(
      circulars.map(
        (item: any) =>
          new Date(
            item.createdAt
          ).getFullYear()
      )
    )].map((year: any) => (

      <option
        key={year}
        value={year}
      >
        {year}
      </option>

    ))}

  </select>

  {/* MONTH FILTER */}

 <div className="relative">

  <button
    onClick={() =>
      setShowMonthDropdown(
        !showMonthDropdown
      )
    }
    className="
      h-[72px]
      px-7
      rounded-[22px]
      bg-[#FFFFFF]
      shadow-[0_4px_15px_rgba(0,0,0,0.08)]
      border border-[#E5E5E5]
      text-[18px]
      font-medium
      text-[#1F1F1F]
      outline-none
      min-w-[220px]
      flex items-center
      justify-between
      gap-10
    "
  >

    {selectedMonth === "All"
      ? "All Months"
      : selectedMonth}

    <span className="text-black">
      ▼
    </span>

  </button>

  {showMonthDropdown && (

    <div className="
      absolute
      top-[85px]
      left-0
      w-full
      bg-white
      rounded-2xl
      shadow-2xl
      border border-gray-200
      overflow-y-auto
      max-h-[240px]
      z-50
    ">

      {[
        "All",
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
      ].map((month) => (

        <button
          key={month}
          onClick={() => {

           setSelectedMonth(month);

setCurrentPage(1);

setShowMonthDropdown(false);
          }}
          className="
            w-full
            text-left
            px-5 py-4
            hover:bg-[#F5F6F4]
            text-[17px]
            font-medium
            text-gray-700
            transition-all
          "
        >
          {month}
        </button>

      ))}

    </div>

  )}

</div>

</div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {paginatedCirculars.map((item, index) => (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-[#FDFDFB] border border-[#D8C98D]/40 rounded-2xl p-7 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="min-w-[55px] h-[55px] rounded-xl bg-[#146B4D]/10 flex items-center justify-center">
                      <FileText
                        className="text-[#146B4D]"
                        size={28}
                      />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-[#146B4D] leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                        {item.desc}
                      </p>

                      <div className="flex items-center gap-2 mt-4 text-sm text-gray-500">
                        <CalendarDays size={16} />
                        Date: {
                          new Date(
                            item.createdAt
                          ).toLocaleDateString()
                        }
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 mt-8">

  <button
    onClick={() =>
      window.open(
        item.pdf,
        "_blank"
      )
    }
    className="
      flex items-center gap-2
      text-[#146B4D]
      font-semibold
      hover:underline
    "
  >
    <Eye size={18} />
    View
  </button>

  <a
    href={item.pdf}
    target="_blank"
    rel="noopener noreferrer"
    download
    className="
      bg-[#146B4D]
      hover:bg-[#0E5B40]
      text-white
      px-5 py-3
      rounded-lg
      font-semibold
      transition-all
      duration-300
      flex items-center gap-2
      shadow-md
    "
  >
    <Download size={18} />
    Download PDF
  </a>
{isAdmin && (

  <>
 <button
  onClick={() => handleEdit(item)}
  className="
    px-5 py-2.5
    rounded-xl
    bg-[#146B4D]/10
    hover:bg-[#146B4D]
    border border-[#146B4D]/20
    text-[#146B4D]
    hover:text-white
    text-sm
    font-semibold
    transition-all
    duration-300
    shadow-sm
    hover:shadow-lg
    hover:scale-105
  "
> 
  Edit
</button>

  <button
 onClick={() =>
  openDeleteModal(item._id)}

  className="
    px-5 py-2.5
    rounded-xl
    bg-[#E4CC6F]/15
    hover:bg-[#C94B4B]
    border border-[#E4CC6F]/30
    text-[#146B4D]
    hover:text-white
    text-sm
    font-semibold
    transition-all
    duration-300
    shadow-sm
    hover:shadow-lg
    hover:scale-105
  "
>
  Delete
</button>
</>)}
</div>
                  
                </motion.div>
              ))}
              {filteredCirculars.length === 0 && (

  <div className="
    col-span-full
    text-center
    py-20
  ">

    <h3 className="
      text-2xl
      font-bold
      text-[#146B4D]
    ">
      No circulars found
    </h3>

    <p className="
      text-gray-500
      mt-3
    ">
      Try changing search or filter.
    </p>

  </div>

)}
            </div>

            <div className="text-center mt-16 mb-12">
              <p className="text-gray-700 text-lg">
                Never miss an important update from the school.
              </p>

              <Link
                href="#"
                className="inline-flex items-center gap-3 mt-6 text-[#146B4D] font-semibold hover:underline"
              >
                <span className="w-3 h-3 rounded-full bg-[#146B4D]" />
                View All Circulars
              </Link>
            </div>
            {/* PAGINATION */}

{totalPages > 1 && (
<div className="
  flex
  justify-center
  items-center
  gap-3
  mt-14
  mb-4
  flex-wrap
  w-full
  overflow-x-auto
  py-2
">
    <button
      onClick={() =>
        setCurrentPage(
          currentPage - 1
        )
      }
      disabled={currentPage === 1}
      className="
        px-5 py-3
        rounded-xl
        bg-white
        border
        border-[#146B4D]/20
        text-[#146B4D]
        font-semibold
        shadow-md
        disabled:opacity-40
      "
    >
      Prev
    </button>

    {[...Array(totalPages)].map(
      (_, i) => (

        <button
          key={i}
          onClick={() =>
            setCurrentPage(i + 1)
          }
          className={`
  min-w-[48px]
  h-12
  px-4
  rounded-xl
  font-bold
  text-lg
  transition-all
  duration-300
  border
  flex
  items-center
  justify-center

  ${
    currentPage === i + 1
      ? `
        bg-[#146B4D]
        text-white
        border-[#146B4D]
        shadow-lg
        scale-110
      `
      : `
        bg-white
        text-[#146B4D]
        border-[#D8C98D]
        hover:bg-[#146B4D]
        hover:text-white
      `
  }

`}
        >
          {i + 1}
        </button>

      )
    )}

    <button
      onClick={() =>
        setCurrentPage(
          currentPage + 1
        )
      }
      disabled={
        currentPage === totalPages
      }
      className="
        px-5 py-3
        rounded-xl
        bg-white
        border
        border-[#146B4D]/20
        text-[#146B4D]
        font-semibold
        shadow-md
        disabled:opacity-40
      "
    >
      Next
    </button>

  </div>

)}
          </motion.div>



        </div>
      </section>
{editingId && (

  <div className="
    fixed inset-0
    bg-black/50
    backdrop-blur-sm
    flex items-center
    justify-center
    z-50
  ">

    <div className="
      bg-white
      rounded-3xl
      p-8
      w-[95%]
      max-w-lg
      shadow-2xl
    ">

      <h2 className="
        text-2xl
        font-bold
        text-[#146B4D]
        mb-6
      ">
        Edit Circular
      </h2>

      <div className="space-y-4">

        <input
          type="text"
          value={editTitle}
          onChange={(e) =>
            setEditTitle(
              e.target.value
            )
          }
          className="
            w-full
            border
            rounded-xl
            px-4 py-3
            text-black
          "
        />

        <textarea
          value={editDesc}
          onChange={(e) =>
            setEditDesc(
              e.target.value
            )
          }
          className="
            w-full
            border
            rounded-xl
            px-4 py-3
            h-32
            text-black
          "
        />

        <div className="
          flex justify-end gap-4
          pt-4
        ">

          <button
            onClick={() =>
              setEditingId(null)
            }
            className="
              px-5 py-3
              rounded-xl
              bg-gray-200
            "
          >
            Cancel
          </button>

          <button
            onClick={updateCircular}
            className="
              px-5 py-3
              rounded-xl
              bg-[#146B4D]
              text-white
            "
          >
            Save Changes
          </button>

        </div>

      </div>

    </div>

  </div>
)}
{showDeleteModal && (

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
      fixed inset-0
      bg-black/50
      backdrop-blur-sm
      flex items-center
      justify-center
      z-50
      p-4
    "
  >

    <motion.div
      initial={{
        scale: 0.8,
        opacity: 0,
        y: 40,
      }}
      animate={{
        scale: 1,
        opacity: 1,
        y: 0,
      }}
      exit={{
        scale: 0.8,
        opacity: 0,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        bg-white
        rounded-[30px]
        p-8
        max-w-md
        w-full
        shadow-2xl
        border border-red-100
      "
    >

      <div className="
        w-20 h-20
        mx-auto
        rounded-full
        bg-red-100
        flex items-center
        justify-center
        mb-6
      ">

        <Trash2
          className="
            text-red-500
            w-10 h-10
          "
        />

      </div>

      <h2 className="
        text-2xl
        font-bold
        text-center
        text-[#146B4D]
      ">
        Delete Circular?
      </h2>

      <div className="
        flex gap-4
        mt-8
      ">

        <button
          onClick={() =>
            setShowDeleteModal(false)
          }
          className="
            flex-1
            py-3
            rounded-xl
            bg-gray-200
            hover:bg-gray-300
            font-semibold
            transition-all
          "
        >
          Cancel
        </button>

        <button
          onClick={confirmDelete}
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

    </motion.div>

  </motion.div>
)}

{toast && (
  <div
    className="
      fixed
      bottom-6
      right-6
      bg-[#146B4D]
      text-white
      px-6
      py-4
      rounded-2xl
      shadow-2xl
      z-[9999]
      font-semibold
      animate-pulse
    "
  >
    {toast}
  </div>
)}

    </div>
  );
}