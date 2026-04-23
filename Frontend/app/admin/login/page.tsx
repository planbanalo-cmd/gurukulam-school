"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const API = "https://gurukulam-backend.onrender.com"; // replace if needed

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data: { token?: string } = await res.json();

      if (data.token) {
        localStorage.setItem("token", data.token);
        router.push("/admin/dashboard");
      } else {
        alert("Invalid credentials ❌");
      }
    } catch (err) {
      alert("Server error ❌");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Admin Login</h1>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
        />
        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <br /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}