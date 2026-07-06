"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { LogOut, FileText, TriangleAlert } from "lucide-react";
import { API } from "@/lib/api";
import { AnimatePresence, motion } from "framer-motion";
import {Menu,X, LayoutDashboard,Newspaper,Images,Video,Award,School,} from "lucide-react";

export default function Dashboard() {
  type Student = {
    _id: string;
    name: string;
    achievement: string;
    badge: string;
    image: string;
  };
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [confirmTitle, setConfirmTitle] = useState("");
  const [successOpen, setSuccessOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [confirmMessage, setConfirmMessage] = useState("");
  const [confirmAction, setConfirmAction] = useState<(() => void | Promise<void>) | null>(null);
  const [actionLoading, setActionLoading] = useState(false);
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [newsletterTitle, setNewsletterTitle] = useState("");
  const [newsletterDescription, setNewsletterDescription,] = useState("");
  const [pdf, setPdf] = useState<File | null>(null);
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [adminName, setAdminName] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [activeSection, setActiveSection] = useState("dashboard");
  const [isAdmin, setIsAdmin] = useState(false);
  const [albumTitle, setAlbumTitle] = useState("");
  const [albumDate, setAlbumDate] = useState("");
  const [albumCover, setAlbumCover] = useState<File | null>(null);
  const [albumImages, setAlbumImages] = useState<FileList | null>(null);
  const [circularTitle, setCircularTitle] = useState("");
  const [circularDesc, setCircularDesc] = useState("");
  const [circularPdf, setCircularPdf] = useState<File | null>(null);
  const [videoTitle, setVideoTitle] = useState("");
  const [videoDescription, setVideoDescription] = useState("");
  const [videoDate, setVideoDate] = useState("");
  const [videoCover, setVideoCover] = useState<File | null>(null);
  const [videoFiles, setVideoFiles] = useState<FileList | null>(null);
  const [circulars, setCirculars] = useState<any[]>([]);
  const [editingCircular, setEditingCircular] = useState<any>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [homeGalleryTitle, setHomeGalleryTitle] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentAchievement, setStudentAchievement] = useState("");
  const [studentBadge, setStudentBadge] = useState("");
  const [studentImage, setStudentImage] = useState<File | null>(null);
  const [homeGalleryImage, setHomeGalleryImage] = useState<File | null>(null);
  const [homeGalleryItems, setHomeGalleryItems] = useState<any[]>([]);
  const [selectedCircularId, setSelectedCircularId] = useState("");
  const [students, setStudents] = useState<Student[]>([]);
  const [newsletterCount, setNewsletterCount] = useState(0);
  const [galleryCount, setGalleryCount] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [videoGalleryCount, setVideoGalleryCount] = useState(0);
  const [activities, setActivities] = useState<
  {
    action: string;
    time: string;
  }[]
>([]);


  useEffect(() => {

    const token =
      localStorage.getItem("token");

    setIsAdmin(!!token);

  }, []);


  // =========================
  // Protect Route
  // =========================

  useEffect(() => {

    const token =
      localStorage.getItem("token");

    if (!token) {

      router.push("/admin/login");

    } else {


       fetchCirculars();
    fetchHomeGallery();
    fetchStudents();

    fetchNewsletters();
    fetchGalleryAlbums();
    fetchVideoAlbums();

      const admin =
        JSON.parse(
          localStorage.getItem("admin") || "{}"
        );

      setAdminName(admin.name || "Admin");

      setAdminEmail(admin.email || "");

    }

  }, []);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {

    try {

      const res = await fetch(
        `${API}/api/student-achievements`
      );

      const data = await res.json();

      setStudents(data);

    } catch (err) {

      console.log(err);

    }

  };

  // =========================
  // Fetch Notices
  // =========================



  const fetchCirculars = async () => {

    try {

      const res = await fetch(
        `${API}/api/circulars`
      );

      const data = await res.json();

      setCirculars(data);

    } catch (err) {

      console.log(err);
    }
  };

  const fetchHomeGallery = async () => {

    try {

      const res = await fetch(
        `${API}/api/home-gallery`
      );

      const data = await res.json();

      setHomeGalleryItems(data);

    } catch (err) {

      console.log(err);

    }

  };

  const fetchNewsletters = async () => {
  try {
    const res = await fetch(`${API}/api/newsletters`);
    const data = await res.json();

    setNewsletterCount(data.length);
  } catch (err) {
    console.log(err);
  }
};

const fetchGalleryAlbums = async () => {
  try {
    const res = await fetch(`${API}/api/gallery`);
    const data = await res.json();

    setGalleryCount(data.length);
  } catch (err) {
    console.log(err);
  }
};

const fetchVideoAlbums = async () => {
  try {
    const res = await fetch(`${API}/api/video-gallery`);
    const data = await res.json();

    setVideoGalleryCount(data.length);
  } catch (err) {
    console.log(err);
  }
};

const addActivity = (action: string) => {
  const newActivity = {
    action,
    time: new Date().toLocaleString(),
  };

  setActivities((prev) => [
    newActivity,
    ...prev.slice(0, 9),
  ]);
};



  // =========================
  // Upload newsletter
  // =========================
  const uploadNewsletter = async () => {

    if (!pdf) {
      showConfirm(
        "Missing Information",
        "Please upload PDF.",
        () => { }
      );
      return;
    }

    setActionLoading(true);

    try {

      const token =
        localStorage.getItem("token");

      const formData = new FormData();

      formData.append(
        "title",
        newsletterTitle
      );

      formData.append(
        "description",
        newsletterDescription
      );

      if (pdf)
        formData.append("pdf", pdf);

      if (coverImage)
        formData.append(
          "coverImage",
          coverImage
        );

      await fetch(
        `${API}/api/newsletters`,
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer " + token,
          },
          body: formData,
        }
      );
         await fetchNewsletters();
      showSuccess(
        "Newsletter Uploaded Successfully"
      );
      addActivity(
  `Newsletter uploaded: ${newsletterTitle}`
);

    } catch (err) {

      console.log(err);

    } finally {

      setActionLoading(false);

    }
    
  };
  const uploadGalleryAlbum =async () => {

      if (
        !albumTitle ||
        !albumDate ||
        !albumCover ||
        !albumImages
      ) {
        showConfirm(
          "Missing Information",
          "Please fill all required fields.",
          () => { }
        );

        return;
        return;
      }

      setActionLoading(true);

      try {

        const formData =
          new FormData();

        formData.append(
          "title",
          albumTitle
        );

        formData.append(
          "date",
          albumDate
        );

        formData.append(
          "cover",
          albumCover
        );

        for (
          let i = 0;
          i < albumImages.length;
          i++
        ) {
          formData.append(
            "images",
            albumImages[i]
          );
        }

        const res = await fetch(
          `${API}/api/gallery`,
          {
            method: "POST",
            body: formData,
          }
        );

        if (res.ok) {
            await fetchGalleryAlbums();
          showSuccess(
            "Gallery Album Uploaded Successfully"
          );
            addActivity(
    `Gallery album uploaded: ${albumTitle}`
  );

          setAlbumTitle("");
          setAlbumDate("");
          setAlbumCover(null);
          setAlbumImages(null);

        }

      } finally {

        setActionLoading(false);

      }
      
    };
  const uploadVideoAlbum =async () => {

      if (
        !videoTitle ||
        !videoDate ||
        !videoCover ||
        !videoFiles
      ) {
        showConfirm(
          "Missing Information",
          "Please fill all required fields.",
          () => { }
        );

        return;
        return;
      }

      setActionLoading(true);

      try {

        const formData =
          new FormData();

        formData.append(
          "title",
          videoTitle
        );

        formData.append(
          "description",
          videoDescription
        );

        formData.append(
          "date",
          videoDate
        );

        formData.append(
          "cover",
          videoCover
        );

        for (
          let i = 0;
          i < videoFiles.length;
          i++
        ) {
          formData.append(
            "videos",
            videoFiles[i]
          );
        }

        const res = await fetch(
          `${API}/api/video-gallery`,
          {
            method: "POST",
            body: formData,
          }
        );

        if (res.ok) {
              await fetchVideoAlbums();
          showSuccess(
            "Video Album Uploaded Successfully"
          );

            addActivity(
    `Video album uploaded: ${videoTitle}`
  );

          setVideoTitle("");
          setVideoDescription("");
          setVideoDate("");
          setVideoCover(null);
          setVideoFiles(null);

        }

      } finally {

        setActionLoading(false);

      }
      
    };
  // =========================
  // Delete Notice
  // =========================


  // =========================
  // Upload Circular
  // =========================

  const uploadCircular = async () => {

    if (!circularPdf) return;

    setActionLoading(true);

    try {

      const formData =
        new FormData();

      formData.append(
        "title",
        circularTitle
      );

      formData.append(
        "desc",
        circularDesc
      );

      formData.append(
        "pdf",
        circularPdf
      );

      await fetch(
        `${API}/api/circulars`,
        {
          method: "POST",
          body: formData,
        }
      );
await fetchCirculars();
      showSuccess(
        "Circular Uploaded Successfully"
      );
        addActivity(
  `Circular uploaded: ${circularTitle}`
);
      setCircularTitle("");
      setCircularDesc("");
      setCircularPdf(null);

    } finally {

      setActionLoading(false);

    }
    
  };

  // =========================
  // Logout
  // =========================

  const handleLogout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("admin");

    router.push("/admin/login");
  };
  const showConfirm = (
    title: string,
    message: string,
    action: () => void | Promise<void>
  ) => {
    setConfirmTitle(title);
    setConfirmMessage(message);
    setConfirmAction(() => action);
    setConfirmOpen(true);
  };
  const showSuccess = (
    message: string
  ) => {
    setSuccessMessage(message);
    setSuccessOpen(true);

    setTimeout(() => {
      setSuccessOpen(false);
    }, 2500);
  };

  const uploadHomeGallery = async () => {

    if (
      !homeGalleryTitle ||
      !homeGalleryImage
    ) return;

    setActionLoading(true);

    try {

      const formData =
        new FormData();

      formData.append(
        "title",
        homeGalleryTitle
      );

      formData.append(
        "image",
        homeGalleryImage
      );

      await fetch(
        `${API}/api/home-gallery`,
        {
          method: "POST",
          body: formData,
        }
      );

      setHomeGalleryTitle("");
      setHomeGalleryImage(null);

      fetchHomeGallery();
addActivity(
  `School Gallery image uploaded: ${homeGalleryTitle}`
);
    } finally {

      setActionLoading(false);

    }

  };
  const uploadStudentAchievement = async () => {

    if (
      !studentName ||
      !studentAchievement ||
      !studentBadge ||
      !studentImage
    ) return;

    setActionLoading(true);

    try {

      const formData =
        new FormData();

      formData.append(
        "name",
        studentName
      );

      formData.append(
        "achievement",
        studentAchievement
      );

      formData.append(
        "badge",
        studentBadge
      );

      formData.append(
        "image",
        studentImage
      );

      const res = await fetch(
        `${API}/api/student-achievements`,
        {
          method: "POST",
          body: formData,
        }
      );

      const newStudent = await res.json();

      setStudents((prev) => [
        newStudent,
        ...prev,
      ]);

      showSuccess(
        "Student Achievement Uploaded"
      );

      addActivity(
  `Student Achievement added: ${studentName}`
);

      setStudentName("");
      setStudentAchievement("");
      setStudentBadge("");
      setStudentImage(null);

    } catch (err) {

      console.log(err);

    } finally {

      setActionLoading(false);

    }
  };

  const deleteHomeGallery = async (id: string) => {

    setActionLoading(true);

    try {

      await fetch(
        `${API}/api/home-gallery/${id}`,
        {
          method: "DELETE",
        }
      );

      fetchHomeGallery();

    } finally {

      setActionLoading(false);

    }

  };
  const deleteStudent = async (
    id: string
  ) => {

    try {

      const token =
        localStorage.getItem("token");

      await fetch(
        `${API}/api/student-achievements/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setStudents((prev) =>
        prev.filter(
          (student) =>
            student._id !== id
        )
      );

    } catch (err) {

      console.log(err);

    }

  };

  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      id: "newsletters",
      label: "Newsletters",
      icon: Newspaper,
    },
    {
      id: "circulars",
      label: "Circulars",
      icon: FileText,
    },
    {
      id: "galleryphotos",
      label: "Gallery Photos",
      icon: Images,
    },
    {
      id: "galleryvideos",
      label: "Gallery Videos",
      icon: Video,
    },
    {
      id: "homegallery",
      label: "School Gallery",
      icon: School,
    },
    {
      id: "studentachievement",
      label: "Student Achievement",
      icon: Award,
    },
  ];
  return (

    <div className="min-h-screen flex bg-[#f7faf8]">
        <div className="lg:hidden fixed top-4 left-4 z-50">
  <button
    onClick={() => setSidebarOpen(true)}
    className="
      bg-[#156445]
      text-white
      p-3
      rounded-xl
      shadow-lg
    "
  >
    <Menu size={22} />
  </button>
</div>
{sidebarOpen && (
  <div
    className="
      fixed
      inset-0
      bg-black/50
      z-40
      lg:hidden
    "
    onClick={() => setSidebarOpen(false)}
  />
)}

      {/* Sidebar */}

      <aside
  className={`
    fixed lg:sticky
    top-0 left-0
    h-screen
    w-[280px] sm:w-72
    bg-white
    border-r
    border-gray-200
    shadow-xl
    p-6
    z-50

    transform
    transition-transform
    duration-300

    ${
      sidebarOpen
        ? "translate-x-0"
        : "-translate-x-full lg:translate-x-0"
    }
  `}
>
 <div
  className="
  flex
  flex-col
  md:flex-row
  justify-between
  items-start
  md:items-center
  gap-4
  mb-10
"
>

  <h2 className="text-2xl font-bold text-[#156445]">
    School Admin
  </h2>

  <button
    onClick={() => setSidebarOpen(false)}
    className="lg:hidden"
  >
    <X size={24} />
  </button>

</div>
       

        <div className="space-y-2">

          {menuItems.map((item) => {

            const Icon = item.icon;

            return (

              <button
                key={item.id}
                onClick={() => {
  setActiveSection(item.id);
  setSidebarOpen(false);
}}
                className={`
            w-full
            flex
            items-center
            gap-3
            px-4
            py-3
            rounded-xl
            transition-all
            ${activeSection === item.id
                    ? "bg-[#156445] text-white"
                    : "hover:bg-[#f1f5f3] text-gray-700"
                  }
          `}
              >
                <Icon size={20} />

                {item.label}
              </button>

            );
          })}

        </div>

        <button
          onClick={handleLogout}
          className="
    mt-10
    w-full
    flex
    items-center
    justify-center
    gap-2
    bg-red-500
    hover:bg-red-600
    text-white
    py-3
    rounded-xl
    "
        >
          <LogOut size={18} />
          Logout
        </button>
      </aside>
      {/* ================= HEADER ================= */}
<main
  className="
  flex-1
  p-4
  md:p-8
  overflow-y-auto
  pt-24
  lg:pt-8
"
>
     <div
  className="
  flex
  flex-col
  md:flex-row
  gap-4
  md:items-center
  md:justify-between
  mb-8
"
>
  <div>
    <h1 className="text-3xl md:text-4xl font-bold text-[#156445]">
      Dashboard
    </h1>

    <p className="text-gray-500 mt-1">
      Welcome back, {adminName}
    </p>
  </div>

  <div
    className="
    w-full
    md:w-auto
    flex
    items-center
    justify-between
    bg-white
    rounded-2xl
    px-4
    py-3
    shadow-md
    border
    border-[#E4CC6F]/30
    "
  >
    <div className="min-w-0">
      <p className="font-bold text-[#156445] truncate">
        {adminName}
      </p>

      <p className="text-sm text-gray-500 truncate">
        {adminEmail}
      </p>

      <p className="text-xs text-[#E4CC6F] font-semibold">
        Administrator
      </p>
    </div>

    <div
      className="
      ml-3
      w-12
      h-12
      rounded-full
      bg-[#156445]
      text-white
      flex
      items-center
      justify-center
      font-bold
      "
    >
      {adminName?.charAt(0)}
    </div>
  </div>
</div>

      {/* ================= STATS ================= */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">



        <div className="bg-white rounded-3xl p-6 shadow-xl border border-[#156445]/10">

          <div className="flex items-center gap-4">

            <div className="bg-[#E4CC6F]/20 p-4 rounded-2xl">

              <FileText className="w-8 h-8 text-[#156445]" />

            </div>

            <div>

              <h2 className="text-3xl font-bold text-[#156445]">
                Active
              </h2>

              <p className="text-gray-500">
                Dashboard Status
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* ================= SECTION FILTER ================= */}

      <div className="flex flex-wrap gap-4 mb-10">



        <button
          onClick={() =>
            setActiveSection("newsletters")
          }
          className={`
      px-6 py-3 rounded-2xl font-semibold transition-all
      ${activeSection === "newsletters"
              ? "bg-[#156445] text-white"
              : "bg-white text-[#156445]"
            }
    `}
        >
          Newsletters
        </button>

        <button
          onClick={() =>
            setActiveSection("circulars")
          }
          className={`
      px-6 py-3 rounded-2xl font-semibold transition-all
      ${activeSection === "circulars"
              ? "bg-[#156445] text-white"
              : "bg-white text-[#156445]"
            }
    `}
        >
          Circulars
        </button>
        <button
          onClick={() =>
            setActiveSection("galleryphotos")
          }
          className={`
      px-6 py-3 rounded-2xl font-semibold transition-all
      ${activeSection === "galleryphotos"
              ? "bg-[#156445] text-white"
              : "bg-white text-[#156445]"
            }
    `}
        >
          Gallery Photos
        </button>

        <button
          onClick={() =>
            setActiveSection(
              "galleryvideos"
            )
          }
          className={`
    px-6 py-3 rounded-2xl font-semibold transition-all
    ${activeSection ===
              "galleryvideos"
              ? "bg-[#156445] text-white"
              : "bg-white text-[#156445]"
            }
  `}
        >
          Gallery Videos
        </button>
        <button
          onClick={() =>
            setActiveSection(
              "homegallery"
            )
          }
          className={`
    px-6 py-3 rounded-2xl
    font-semibold
    transition-all
    ${activeSection ===
              "homegallery"
              ? "bg-[#156445] text-white"
              : "bg-white text-[#156445]"
            }
  `}
        >
          School Gallery
        </button>
        <button
          onClick={() =>
            setActiveSection(
              "studentachievement"
            )
          }
          className={`
    px-6 py-3 rounded-2xl
    font-semibold transition-all
    ${activeSection ===
              "studentachievement"
              ? "bg-[#156445] text-white"
              : "bg-white text-[#156445]"
            }
  `}
        >
          Student Achievement
        </button>

      </div>
      {/* ================= Dashboard ================= */}
  {activeSection === "dashboard" && (

  <div>

    <h2 className="text-3xl font-bold text-[#156445]">
      Dashboard Overview
    </h2>

    {/* Statistics Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

      <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all">
        <h3 className="text-gray-500">Newsletters</h3>
        <p className="text-4xl font-bold text-[#156445]">
          {newsletterCount}
        </p>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all">
        <h3 className="text-gray-500">Circulars</h3>
        <p className="text-4xl font-bold text-[#156445]">
          {circulars.length}
        </p>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all">
        <h3 className="text-gray-500">Gallery Albums</h3>
        <p className="text-4xl font-bold text-[#156445]">
          {galleryCount}
        </p>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all">
        <h3 className="text-gray-500">Video Albums</h3>
        <p className="text-4xl font-bold text-[#156445]">
          {videoGalleryCount}
        </p>
      </div>

    </div>

    {/* Recent Activity */}
    <div className="mt-10 bg-white rounded-3xl p-6 shadow-lg">

      <h3 className="text-xl font-bold text-[#156445] mb-4">
        Recent Activity
      </h3>

      <div className="space-y-4">

        {activities.length === 0 ? (
          <p className="text-gray-500">
            No activity yet
          </p>
        ) : (
          activities.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-100 pb-3"
            >
              <p className="font-medium text-gray-800">
                {item.action}
              </p>

              <p className="text-xs text-gray-500 mt-1">
                {item.time}
              </p>
            </div>
          ))
        )}

      </div>

    </div>

  </div>

)}
      {/* ================= ADD NEWSLETTER ================= */}
      {activeSection === "newsletters" && (<div className="mt-16 bg-white rounded-3xl p-8 shadow-xl border border-[#156445]/10">

        <h2 className="text-2xl font-bold text-[#156445] mb-6">
          Upload Newsletter
        </h2>

        <div className="space-y-5">

          <input
            type="text"
            placeholder="Newsletter Title"
            value={newsletterTitle}
            onChange={(e) =>
              setNewsletterTitle(e.target.value)
            }
            className="w-full border border-gray-300 text-black rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#156445]"
          />

          <textarea
            placeholder="Newsletter Description"
            value={newsletterDescription}
            onChange={(e) =>
              setNewsletterDescription(
                e.target.value
              )
            }
            className="w-full border border-gray-300 text-black rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#156445] h-32"
          />

          <input
            type="file"
            accept=".pdf"
            onChange={(e) =>
              setPdf(
                e.target.files?.[0] || null
              )
            }
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setCoverImage(
                e.target.files?.[0] || null
              )
            }
            className="w-full"
          />
          <button
            onClick={() =>
              showConfirm(
                "Upload Newsletter",
                "Do you want to upload this newsletter?",
                uploadNewsletter
              )
            }
            className="
        bg-[#156445]
        hover:bg-[#0D6453]
        text-white
        px-6 py-3
        rounded-xl
        font-semibold
        transition-all
      "
          >
            Upload Newsletter
          </button>

        </div>
      </div>)}

      {/* ================= ADD CIRCULAR ================= */}
      {activeSection === "circulars" && (

        <div className="mt-16 bg-white rounded-3xl p-8 shadow-xl border border-[#156445]/10">

          <h2 className="text-2xl font-bold text-[#156445] mb-6">
            Upload Circular
          </h2>

          <div className="space-y-5">

            <input
              type="text"
              placeholder="Circular Title"
              value={circularTitle}
              onChange={(e) =>
                setCircularTitle(
                  e.target.value
                )
              }
              className="w-full border border-gray-300 text-black rounded-xl px-4 py-3"
            />

            <textarea
              placeholder="Circular Description"
              value={circularDesc}
              onChange={(e) =>
                setCircularDesc(
                  e.target.value
                )
              }
              className="w-full border border-gray-300 text-black rounded-xl px-4 py-3 h-32"
            />

            <input
              type="file"
              accept=".pdf"
              onChange={(e) =>
                setCircularPdf(
                  e.target.files?.[0] || null
                )
              }
              className="w-full text-black"
            />

            <button
              onClick={() =>
                showConfirm(
                  "Upload Circular",
                  "Do you want to upload this circular?",
                  uploadCircular
                )
              }
              className="
        bg-[#156445]
        hover:bg-[#0D6453]
        text-white
        px-6 py-3
        rounded-xl
        font-semibold
      "
            >
              Upload Circular
            </button>

          </div>

        </div>

      )}

      {/* ================= ADD GALLERY ALBUM ================= */}
      {activeSection === "galleryphotos" && (
        <div className="mt-16 bg-white rounded-3xl p-8 shadow-xl border border-[#156445]/10">

          <h2 className="text-2xl font-bold text-[#156445] mb-6">
            Upload Photo Album
          </h2>

          <div className="space-y-5">

            <input
              type="text"
              placeholder="Album Title"
              value={albumTitle}
              onChange={(e) =>
                setAlbumTitle(
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

            <input
              type="date"
              value={albumDate}
              onChange={(e) =>
                setAlbumDate(e.target.value)
              }
              className="
    w-full
    border
    border-gray-300
    rounded-xl
    px-4 py-3
    text-black
  "
            />

            <div>

              <label className="font-medium text-[#156445] block mb-2">
                Cover Image
              </label>

              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setAlbumCover(
                    e.target.files?.[0] ||
                    null
                  )
                }
                className="w-full text-black"
              />

            </div>

            <div>

              <label className="font-medium text-[#156445] block mb-2">
                Album Photos
              </label>

              <input
                type="file"
                multiple
                accept="image/*"
                onChange={(e) =>
                  setAlbumImages(
                    e.target.files
                  )
                }
                className="w-full text-black"
              />

            </div>

            <button
              onClick={() =>
                showConfirm(
                  "Upload Gallery Album",
                  "Do you want to upload this gallery album?",
                  uploadGalleryAlbum
                )
              }
              className="
        bg-[#156445]
        hover:bg-[#0D6453]
        text-white
        px-6 py-3
        rounded-xl
        font-semibold
      "
            >
              Upload Album
            </button>

          </div>

        </div>

      )}

      {/* ================= ADD VIDEO GALLERY ALBUM ================= */}
      {
        activeSection === "galleryvideos" && (

          <div className="mt-16 bg-white rounded-3xl p-8 shadow-xl border border-[#156445]/10">

            <h2 className="text-2xl font-bold text-[#156445] mb-6">
              Upload Video Album
            </h2>

            <div className="space-y-5">

              <input
                type="text"
                placeholder="Album Title"
                value={videoTitle}
                onChange={(e) =>
                  setVideoTitle(
                    e.target.value
                  )
                }
                className="w-full border rounded-xl px-4 py-3 text-black"
              />

              <textarea
                placeholder="Album Description"
                value={videoDescription}
                onChange={(e) =>
                  setVideoDescription(
                    e.target.value
                  )
                }
                className="w-full border rounded-xl px-4 py-3 text-black"
              />

              <input
                type="date"
                value={videoDate}
                onChange={(e) =>
                  setVideoDate(
                    e.target.value
                  )
                }
                className="w-full border rounded-xl px-4 py-3 text-black"
              />

              <div>
                <label className="block mb-2 font-medium text-[#156445]">
                  Cover Image
                </label>

                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    setVideoCover(
                      e.target.files?.[0] ||
                      null
                    )
                  }
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-[#156445]">
                  Videos
                </label>

                <input
                  type="file"
                  multiple
                  accept="video/*"
                  onChange={(e) =>
                    setVideoFiles(
                      e.target.files
                    )
                  }
                />
              </div>

              <button
                onClick={() =>
                  showConfirm(
                    "Upload Video Album",
                    "Do you want to upload this video album?",
                    uploadVideoAlbum
                  )
                }
                className="
      bg-[#156445]
      hover:bg-[#0D6453]
      text-white
      px-6 py-3
      rounded-xl
      font-semibold
      "
              >
                Upload Video Album
              </button>

            </div>

          </div>

        )}

      {/* ================= ADD School Achievement ================= */}
      {activeSection === "homegallery" && (

        <div
          className="
  mt-16
  bg-white
  rounded-3xl
  p-8
  shadow-xl
"
        >

          <h2
            className="
    text-2xl
    font-bold
    text-[#156445]
    mb-6
  "
          >
            School Gallery
          </h2>

          <div className="space-y-5">

            <input
              type="text"
              placeholder="Image Title"
              value={
                homeGalleryTitle
              }
              onChange={(e) =>
                setHomeGalleryTitle(
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

            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setHomeGalleryImage(
                  e.target.files?.[0] ||
                  null
                )
              }
            />

            <button
              onClick={() =>
                showConfirm(
                  "Upload Image",
                  "Upload image to School Gallery?",
                  uploadHomeGallery
                )
              }
              className="
        bg-[#156445]
        text-white
        px-6 py-3
        rounded-xl
      "
            >
              Upload Image
            </button>

          </div>

          <div
            className="
    grid
    md:grid-cols-3
    gap-6
    mt-10
  "
          >

            {homeGalleryItems.map(
              (item) => (

                <div
                  key={item._id}
                  className="
        bg-white
        rounded-2xl
        overflow-hidden
        shadow-lg
        border
        "
                >

                  <img
                    src={item.image}
                    alt={item.title}
                    className="
            h-56
            w-full
            object-cover
          "
                  />

                  <div className="p-4">

                    <h3
                      className="
            font-semibold
            text-[#156445]
            "
                    >
                      {item.title}
                    </h3>

                    <button
                      onClick={() =>
                        showConfirm(
                          "Delete Image",
                          "Delete this image permanently?",
                          () =>
                            deleteHomeGallery(
                              item._id
                            )
                        )
                      }
                      className="
              mt-3
              bg-red-500
              text-white
              px-4 py-2
              rounded-lg
            "
                    >
                      Delete
                    </button>

                  </div>

                </div>

              ))}
          </div>

        </div>

      )}

      {/* ================= ADD Student Achievement ================= */}
      {activeSection === "studentachievement" && (

        <div
          className="
  mt-16
  bg-white
  rounded-3xl
  p-8
  shadow-xl
"
        >

          <h2
            className="
    text-2xl
    font-bold
    text-[#156445]
    mb-6
  "
          >
            Student Achievement
          </h2>

          <div className="space-y-5">

            <input
              type="text"
              placeholder="Student Name"
              value={studentName}
              onChange={(e) =>
                setStudentName(
                  e.target.value
                )
              }
              className="
      w-full border
      rounded-xl
      px-4 py-3
      text-black
      "
            />

            <input
              type="text"
              placeholder="Achievement"
              value={
                studentAchievement
              }
              onChange={(e) =>
                setStudentAchievement(
                  e.target.value
                )
              }
              className="
      w-full border
      rounded-xl
      px-4 py-3
      text-black
      "
            />

            <input
              type="text"
              placeholder="Badge"
              value={studentBadge}
              onChange={(e) =>
                setStudentBadge(
                  e.target.value
                )
              }
              className="
      w-full border
      rounded-xl
      px-4 py-3
      text-black
      "
            />

            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setStudentImage(
                  e.target.files?.[0] || null
                )
              }
            />

            <button
              onClick={() =>
                showConfirm(
                  "Upload Student",
                  "Upload student achievement?",
                  uploadStudentAchievement
                )
              }
              className="
      bg-[#156445]
      text-white
      px-6 py-3
      rounded-xl
      "
            >
              Upload Student Achievement
            </button>


          </div>
          <div className="mt-8">

            <h3
              className="
    text-2xl
    font-bold
    text-[#156445]
    mb-6
    flex
    items-center
    gap-2
  "
            >
              🏆 Uploaded Student Achievements
            </h3>

            <div
              className="
    grid
    grid-cols-1
    md:grid-cols-2
    xl:grid-cols-3
    gap-8
  "
            >

              {students.map((student) => (

                <div
                  key={student._id}
                  className="
    group
    bg-white
    rounded-3xl
    overflow-hidden
    shadow-lg
    hover:shadow-2xl
    transition-all
    duration-500
    border
    border-[#156445]/10
    hover:-translate-y-1
  "
                >

                  <div
                    className="
    relative
    w-full
    h-80
    bg-gradient-to-b
    from-[#f8faf9]
    to-white
    flex
    items-center
    justify-center
    overflow-hidden
  "
                  >

                    <Image
                      src={student.image}
                      alt={student.name}
                      fill
                      sizes="(max-width:768px) 100vw, 400px"
                      className="
      object-contain
      p-3
    "
                    />

                    <div
                      className="
        absolute
        top-4
        left-4
        bg-[#E4CC6F]
        text-[#0D6453]
        px-4
        py-1
        rounded-full
        text-xs
        font-bold
        shadow-lg
      "
                    >
                      {student.badge}
                    </div>

                  </div>

                  <div className="p-5">

                    <h3
                      className="
        text-lg
        font-bold
        text-[#156445]
        line-clamp-2
      "
                    >
                      {student.name}
                    </h3>

                    <p
                      className="
        text-gray-600
        text-sm
        mt-2
        min-h-[60px]
      "
                    >
                      {student.achievement}
                    </p>

                    <button
                      onClick={() =>
                        showConfirm(
                          "Delete Student",
                          "Delete this student achievement permanently?",
                          async () => {

                            setActionLoading(true);

                            try {

                              await deleteStudent(
                                student._id
                              );

                              showSuccess(
                                "Student Deleted Successfully"
                              );

                            } finally {

                              setActionLoading(false);

                            }

                          }
                        )
                      }
                      className="
        mt-5
        w-full
        bg-red-500
        hover:bg-red-600
        text-white
        font-semibold
        py-3
        rounded-xl
        transition
      "
                    >
                      Delete Student Achievement
                    </button>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      )}


      <AnimatePresence>
        {confirmOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
      fixed inset-0 z-[9999]
      bg-black/60 backdrop-blur-md
      flex items-center justify-center
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
        rounded-[32px]
        p-8
        max-w-md
        w-full
        shadow-[0_30px_100px_rgba(0,0,0,0.25)]
        "
            >
              <div className="flex items-center gap-3 mb-5">
                <TriangleAlert
                  className="text-[#156445]"
                  size={32}
                />

                <h2 className="text-2xl font-bold text-[#156445]">
                  {confirmTitle}
                </h2>
              </div>

              <p className="text-gray-600 mb-8">
                {confirmMessage}
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
                  disabled={actionLoading}
                  onClick={async () => {
                    await confirmAction?.();
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
                  {
                    actionLoading
                      ? "Processing..."
                      : "Confirm"
                  }
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {successOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 50,
            }}
            className="
      fixed
      bottom-8
      right-8
      z-[9999]
      "
          >
            <div
              className="
        bg-[#156445]
        text-white
        px-6
        py-4
        rounded-2xl
        shadow-2xl
        font-semibold
        "
            >
              ✅ {successMessage}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </main>
    </div>
  );
}