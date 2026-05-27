"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import {
  Eye,
  EyeOff,
  ShieldCheck,
  Mail,
  Lock,
} from "lucide-react";

import { API } from "@/lib/api";

export default function LoginPage() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  useEffect(() => {

    const token = localStorage.getItem("token");

    if (token) {
      router.push("/admin/dashboard");
    }

  }, []);

  const handleLogin = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();
    setError("");
    setLoading(true);

    try {

      const res = await fetch(
        `${API}/api/auth/login`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await res.json();

      if (data.token) {

        localStorage.setItem(
          "token",
          data.token
        );

        localStorage.setItem(
          "admin",
          JSON.stringify(data.admin)
        );

        router.push("/admin/dashboard");

      } else {

        setError(data.message || "Login failed");
      }

    } catch (err) {

     setError("Server error. Please try again.");

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#eef5f1] via-[#f8faf9] to-[#f5f1e8] px-4">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 border border-[#156445]/10">

        {/* Logo */}
        <div className="flex justify-center mb-6">

          <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#E4CC6F] shadow-lg">

            <Image
              src="/images/Gurukulamlogo.jpeg"
              alt="Logo"
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />

          </div>
        </div>

        {/* Heading */}

        <div className="text-center mb-8">

          <div className="flex justify-center mb-3">

            <div className="bg-[#156445]/10 p-3 rounded-full">
              <ShieldCheck className="w-8 h-8 text-[#156445]" />
            </div>

          </div>

          <h1 className="text-3xl font-bold text-[#156445]">
            Admin Login
          </h1>

          <p className="text-gray-500 mt-2">
            Welcome back to Gurukulam
          </p>

        </div>

        {/* Form */}

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >

          {/* Email */}

          <div>

            <label className="block text-sm font-semibold text-[#156445] mb-2">
              Email Address
            </label>

            <div className="relative">

              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#156445] w-5 h-5" />

              <input
                type="email"
                placeholder="Enter admin email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                required
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#156445] text-black placeholder:text-gray-400"
              />

            </div>
          </div>

          {/* Password */}

          <div>

            <label className="block text-sm font-semibold text-[#156445] mb-2">
              Password
            </label>

            <div className="relative">

              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#156445] w-5 h-5" />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Enter password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                required
                className="w-full pl-12 pr-12 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#156445] text-black placeholder:text-gray-400"
              />


              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#156445]"
              >

                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}

              </button>

            </div>

          </div>

          {/* Forgot Password */}

          <div className="text-right">

            <Link
              href="/admin/forgot-password"
              className="text-sm text-[#156445] hover:underline font-medium"
            >
              Forgot Password?
            </Link>

          </div>
          {
            error && (
              <div className="bg-red-100 text-red-600 text-sm p-3 rounded-xl">
                {error}
              </div>
            )
          }
          {/* Button */}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-[#156445] to-[#0D6453] text-white font-bold shadow-lg hover:scale-[1.02] transition-all duration-300 disabled:opacity-70"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Logging in...
              </span>
            ) : (
              "Login"
            )}
          </button>

        </form>

      </div>

    </div>
  );
}