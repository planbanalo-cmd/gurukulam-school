"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const API = "https://gurukulam-backend.onrender.com";

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

  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Dashboard</h1>

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