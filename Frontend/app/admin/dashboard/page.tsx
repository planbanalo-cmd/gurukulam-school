"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { API } from "@/lib/api";


type Notice = {
  _id: string;
  title: string;
  description: string;
};

export default function Dashboard() {
  const router = useRouter();

  const [notices, setNotices] = useState<Notice[]>([]);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  // 🔐 Protect route
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/admin/login");
    } else {
      fetchNotices();
    }
  }, []);

  // 📥 Get notices
  const fetchNotices = async () => {
    const res = await fetch(`${API}/api/notices`);
    const data = await res.json();
    setNotices(data);
  };

  // ➕ Add notice
  const addNotice = async () => {
    const token = localStorage.getItem("token");

    await fetch(`${API}/api/notices`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({ title, description }),
    });

    setTitle("");
    setDescription("");
    fetchNotices();
  };

  // 🗑️ Delete notice
  const deleteNotice = async (id: string) => {
    const token = localStorage.getItem("token");

    await fetch(`${API}/api/notices/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    fetchNotices();
  };
const handleLogout = () => {
  localStorage.removeItem("token");
  router.push("/admin/login");
};
  return (
   <div className="min-h-screen bg-[#f8faf9] p-6 md:p-10">
      <div className="flex items-center justify-between mb-10">
  
  <div>
    <h1 className="text-3xl font-bold text-[#156445]">
      Admin Dashboard
    </h1>

    <p className="text-gray-500 mt-1">
      Manage school notices and updates
    </p>
  </div>

  <button
    onClick={handleLogout}
    className="
      bg-red-500 hover:bg-red-600
      text-white
      px-5 py-2.5
      rounded-xl
      font-semibold
      shadow-md
      transition-all duration-300
      hover:scale-105
    "
  >
    Logout
  </button>

</div>

      <h3>Add Notice</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
      />
      <br /><br />

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setDescription(e.target.value)
        }
      />
      <br /><br />

      <button onClick={addNotice}>Add Notice</button>

      <hr />

      <h3>All Notices</h3>

      {notices.map((n) => (
        <div key={n._id} style={{ marginBottom: "10px" }}>
          <strong>{n.title}</strong>
          <p>{n.description}</p>
          <button onClick={() => deleteNotice(n._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}