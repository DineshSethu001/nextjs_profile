"use client";

import { useState } from "react";
import Link from "next/link";
import { FiHome } from "react-icons/fi";

export default function AdminLogin() {
  const [isCreateMode, setIsCreateMode] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

async function handleSubmit(e) {
  e.preventDefault();

  try {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error("Login error:", error);
  }

  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#171614] px-4">
      <img
        src="/images/footer_workspace.png"
        alt="Developer workspace"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
          opacity-50
        "
      />

      {/* Home Button */}
      <Link
        href="/"
        className="
          absolute left-6 top-6
          flex h-10 w-10 items-center justify-center
          rounded-full
          border border-white/10
          bg-white/[0.04]
          text-[#E8D8C0]
          transition-all duration-300
          hover:border-[#C8955B]/50
          hover:bg-[#C8955B]/10
          hover:text-[#C8955B]
        "
        aria-label="Go to homepage"
      >
        <FiHome size={18} />
      </Link>

      {/* Background Glow */}
      <div className="
        absolute left-1/2 top-0
        h-[300px] w-[500px]
        -translate-x-1/2
        rounded-full
        bg-[#C8955B]/10
        blur-[120px]
      " />

      {/* Login Card */}
      <div className="relative w-full max-w-md">

        <div className="
          overflow-hidden
          rounded-2xl
          border border-white/10
        
          shadow-[0_15px_50px_rgba(0,0,0,0.35)]
          backdrop-blur-xl
        ">

          {/* Top Accent */}
          <div className="
            h-[2px] w-full
            bg-gradient-to-r
            from-transparent
            via-[#C8955B]
            to-transparent
          " />

          <div className="p-8 md:p-10">

            {/* Logo */}
            <div className="mb-6 flex justify-center">
              <div className="
                relative flex h-14 w-14
                items-center justify-center
                rounded-full
                border border-[#C8955B]/60
              ">
                <span className="font-serif text-xl text-[#E8D8C0]">
                  D
                </span>

                <span className="
                  absolute inset-[-5px]
                  rounded-full
                  border border-dashed
                  border-[#C8955B]/30
                " />
              </div>
            </div>

            {/* Heading */}
            <div className="mb-8 text-center">

              <h1 className="
                font-serif text-3xl
                tracking-wide
                text-[#F2E8D8]
              ">
                {isCreateMode ? "Create Admin" : "Admin Login"}
              </h1>

              <p className="mt-2 text-sm text-white/40">
                {isCreateMode
                  ? "Create your administrator account"
                  : "Welcome back, administrator"}
              </p>

            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Email */}
              <div>
                <label className="
                  mb-2 block
                  text-[11px]
                  uppercase
                  tracking-[0.2em]
                  text-white/40
                ">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="admin@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="
                    w-full rounded-xl
                    border border-white/10
                    bg-white/[0.04]
                    px-4 py-3.5
                    text-sm
                    text-[#F2E8D8]
                    placeholder:text-white/20
                    outline-none
                    transition-all
                    focus:border-[#C8955B]/60
                    focus:bg-white/[0.06]
                  "
                />
              </div>

              {/* Password */}
              <div>
                <label className="
                  mb-2 block
                  text-[11px]
                  uppercase
                  tracking-[0.2em]
                  text-white/40
                ">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="
                    w-full rounded-xl
                    border border-white/10
                    bg-white/[0.04]
                    px-4 py-3.5
                    text-sm
                    text-[#F2E8D8]
                    placeholder:text-white/20
                    outline-none
                    transition-all
                    focus:border-[#C8955B]/60
                    focus:bg-white/[0.06]
                  "
                />
              </div>

              {/* Message */}
              {message && (
                <p className="
                  text-center
                  text-sm
                  text-[#C8955B]
                ">
                  {message}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="
                  w-full
                  rounded-full
                  bg-[#C8955B]
                  px-5 py-3.5
                  text-sm
                  font-medium
                  tracking-wide
                  text-[#171614]
                  transition-all
                  hover:-translate-y-0.5
                  hover:bg-[#E0B47A]
                  active:translate-y-0
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                "
              >
                {loading
                  ? "Please wait..."
                  : isCreateMode
                    ? "Create Admin"
                    : "Sign In"}
              </button>
            </form>

            {/* Switch Login / Create */}
            <div className="mt-6 text-center">

              <button
                type="button"
                onClick={() => {
                  setIsCreateMode(!isCreateMode);
                  setMessage("");
                  setEmail("");
                  setPassword("");
                }}
                className="
                  text-xs
                  tracking-wide
                  text-white/40
                  transition-colors
                  hover:text-[#C8955B]
                "
              >
                {isCreateMode
                  ? "Already have an account? Sign In"
                  : "Need an admin account? Create Admin"}
              </button>

            </div>

            {/* Footer */}
            <div className="mt-8 text-center">
              <p className="
                text-[10px]
                uppercase
                tracking-[0.25em]
                text-white/20
              ">
                Dinesh Thanigaivel · Admin Panel
              </p>
            </div>

          </div>

          {/* Bottom Accent */}
          <div className="
            h-[1px] w-full
            bg-gradient-to-r
            from-transparent
            via-white/10
            to-transparent
          " />

        </div>
      </div>
    </main>
  );
}