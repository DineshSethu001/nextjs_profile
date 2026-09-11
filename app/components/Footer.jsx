
"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function Footer() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/" },
    { name: "LinkedIn", href: "https://linkedin.com/" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#171614] text-[#F2E8D8]">
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
          opacity-5
        "
      />

      {/* Decorative glow */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-[#C8955B]/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-[#C8955B]/10 blur-3xl" />

      {/* Top copper line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#C8955B] to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-20">

        {/* Main footer content */}
        <div className="grid gap-12 md:grid-cols-3">

          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="group inline-flex items-center gap-3">

              {/* Logo */}
              <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#C8955B]/60">

                <span className="font-serif text-lg text-[#F2E8D8]">
                  D
                </span>

                <span className="absolute inset-[-4px] rounded-full border border-dashed border-[#C8955B]/25" />
              </div>

              <div>
                <div className="font-serif text-xl tracking-wide">
                  Dinesh
                  <span className="text-[#C8955B]">.</span>
                </div>

                <p className="mt-1 text-[9px] uppercase tracking-[0.3em] text-white/30">
                  Developer
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/45">
              Building thoughtful digital experiences with clean code,
              modern technologies, and a little creative energy.
            </p>

            {/* Availability */}
            <div className="mt-6 flex items-center gap-2">

              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C8955B] opacity-60" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#C8955B]" />
              </span>

              <span className="text-xs text-white/40">
                Available for opportunities
              </span>
            </div>
          </motion.div>

          {/* NAVIGATION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#C8955B]">
              Navigation
            </p>

            <div className="grid grid-cols-2 gap-y-4">

              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex items-center gap-2 text-sm text-white/45 transition-colors duration-300 hover:text-[#F2E8D8]"
                >
                  <span className="h-[1px] w-0 bg-[#C8955B] transition-all duration-300 group-hover:w-3" />

                  {item.name}
                </Link>
              ))}

            </div>
          </motion.div>

          {/* SOCIAL / CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#C8955B]">
              Connect
            </p>

            <div className="flex flex-col gap-4">

              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="group flex items-center gap-3 text-sm text-white/45 transition-colors hover:text-[#F2E8D8]"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 transition-colors group-hover:border-[#C8955B]/50">
                    ↗
                  </span>

                  {social.name}
                </motion.a>
              ))}

              {/* Email */}
              <motion.a
                href="mailto:your@email.com"
                whileHover={{ x: 5 }}
                className="group flex items-center gap-3 text-sm text-white/45 transition-colors hover:text-[#F2E8D8]"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 transition-colors group-hover:border-[#C8955B]/50">
                  @
                </span>

                Email me
              </motion.a>

            </div>
          </motion.div>

        </div>

        {/* Big typography */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 overflow-hidden"
        >
          <h2 className="select-none font-serif text-[15vw] font-bold leading-[0.7] tracking-[-0.06em] text-white/[0.035] md:text-[12vw]">
            DINESH <span className="select-none font-serif text-[15vw] font-bold leading-[0.7] tracking-[-0.06em] text-white/[0.035] md:text-[12vw]">
            .
          </span> T
          </h2>
        </motion.div>

        {/* Bottom section */}
        <div className="mt-8 flex flex-col gap-4 border-t border-white/[0.07] pt-6 text-xs text-white/30 md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} Dinesh. All rights reserved.
          </p>

          <div className="flex items-center gap-6">

            <Link
              href="/privacy"
              className="transition-colors hover:text-[#C8955B]"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-[#C8955B]"
            >
              Terms
            </Link>

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="group flex items-center gap-2 transition-colors hover:text-[#C8955B]"
            >
              Back to top

              <span className="transition-transform duration-300 group-hover:-translate-y-1">
                ↑
              </span>
            </button>

          </div>

        </div>
      </div>
    </footer>
  );
}

