
"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function About() {
  const text = "About Me";

  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 120);

      return () => clearTimeout(timer);
    }
  }, [index]);

  const services = [
    {
      number: "01",
      title: "Frontend Development",
      description:
        "Building responsive, accessible, and interactive interfaces using React, Next.js, TypeScript, and Tailwind CSS.",
      tags: ["React", "Next.js", "TypeScript"],
    },
    {
      number: "02",
      title: "Backend Development",
      description:
        "Creating reliable APIs, authentication systems, server-side logic, and database-driven applications.",
      tags: ["Node.js", "Express", "MongoDB"],
    },
    {
      number: "03",
      title: "Data & Analytics",
      description:
        "Exploring data, discovering meaningful patterns, and transforming information into useful insights.",
      tags: ["Python", "SQL", "Analytics"],
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#171614] px-5 pb-24 pt-32 text-[#F2E8D8] md:px-8">

      {/* Background decoration */}
      <div className="pointer-events-none fixed left-[-200px] top-[20%] h-[400px] w-[400px] rounded-full bg-[#C8955B]/5 blur-[120px]" />

      <div className="pointer-events-none fixed bottom-[-200px] right-[-150px] h-[400px] w-[400px] rounded-full bg-[#C8955B]/5 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* ───────────────── HEADER ───────────────── */}

        <section className="min-h-[70vh] border-b border-white/[0.07] pb-20">

          <div className="grid items-end gap-12 md:grid-cols-[1fr_280px]">

            <div>

              {/* Small label */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8 flex items-center gap-3"
              >
                <span className="h-[1px] w-10 bg-[#C8955B]" />

                <span className="text-[10px] uppercase tracking-[0.35em] text-[#C8955B]">
                  {displayText}
                  <span className="ml-1 animate-pulse">|</span>
                </span>
              </motion.div>

              {/* Main heading */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-[-0.04em] md:text-7xl lg:text-8xl"
              >
                I turn ideas into
                <br />

                <span className="text-[#C8955B]">
                  digital experiences.
                </span>
              </motion.h1>

            </div>

            {/* Side number */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="hidden md:block"
            >
              <div className="border-l border-[#C8955B]/40 pl-5">

                <span className="text-[9px] uppercase tracking-[0.3em] text-white/30">
                  Profile
                </span>

                <p className="mt-3 text-sm leading-6 text-white/45">
                  Full Stack Developer
                  <br />
                  Data & Technology
                </p>

              </div>
            </motion.div>

          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-20 flex items-center gap-3"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="text-[#C8955B]"
            >
              ↓
            </motion.div>

            <span className="text-[9px] uppercase tracking-[0.3em] text-white/25">
              Scroll to explore
            </span>
          </motion.div>

        </section>


        {/* ───────────────── INTRODUCTION ───────────────── */}

        <section className="grid gap-12 border-b border-white/[0.07] py-20 md:grid-cols-[180px_1fr]">

          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C8955B]">
              01 / Introduction
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >

            <p className="font-serif text-2xl leading-relaxed text-[#F2E8D8] md:text-4xl">
              I'm Dinesh Thanigaivel, a Computer Science graduate and Full
              Stack Developer who enjoys turning ideas into useful digital
              products.
            </p>

            <div className="mt-10 space-y-6 text-[15px] leading-8 text-white/45">

              <p>
                I enjoy working across the complete development process,
                from designing intuitive interfaces and building reusable
                React components to developing backend APIs and working with
                databases.
              </p>

              <p>
                My primary technologies include React, Next.js, Node.js,
                Express.js, MongoDB, JavaScript, TypeScript, and Tailwind CSS.
              </p>

              <p>
                I believe technology becomes meaningful when it solves real
                problems. That's why I learn by building practical projects,
                experimenting with ideas, and continuously improving the
                things I create.
              </p>

            </div>

          </motion.div>

        </section>


        {/* ───────────────── WHAT I DO ───────────────── */}

        <section className="border-b border-white/[0.07] py-20">

          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>

              <span className="text-[10px] uppercase tracking-[0.3em] text-[#C8955B]">
                02 / Expertise
              </span>

              <h2 className="mt-4 font-serif text-4xl md:text-5xl">
                What I do.
              </h2>

            </div>

            <p className="max-w-sm text-sm leading-6 text-white/35">
              From interface to backend logic, I enjoy understanding how the
              complete system works.
            </p>

          </div>


          {/* Service cards */}
          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-3">

            {services.map((service, index) => (

              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -5 }}
                className="
                  group
                  relative
                  min-h-[340px]
                  bg-[#1D1C19]
                  p-7
                  transition-colors
                  duration-500
                  hover:bg-[#24221E]
                "
              >

                {/* Number */}
                <div className="flex items-start justify-between">

                  <span className="font-mono text-xs text-[#C8955B]">
                    {service.number}
                  </span>

                  <span className="text-xl text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#C8955B]">
                    ↗
                  </span>

                </div>

                <div className="mt-20">

                  <h3 className="font-serif text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-white/40">
                    {service.description}
                  </p>

                </div>

                {/* Tags */}
                <div className="absolute bottom-7 left-7 flex flex-wrap gap-2">

                  {service.tags.map((tag) => (

                    <span
                      key={tag}
                      className="
                        rounded-full
                        border border-white/[0.08]
                        px-3 py-1
                        text-[9px]
                        uppercase
                        tracking-wider
                        text-white/30
                      "
                    >
                      {tag}
                    </span>

                  ))}

                </div>

              </motion.div>

            ))}

          </div>

        </section>


        {/* ───────────────── PHILOSOPHY ───────────────── */}

        <section className="grid gap-12 py-20 md:grid-cols-[180px_1fr]">

          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C8955B]">
              03 / Philosophy
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <h2 className="max-w-3xl font-serif text-4xl leading-tight md:text-6xl">

              Learn.
              <span className="text-[#C8955B]"> Build.</span>
              <br />
              Improve.

            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/40">
              I approach development with curiosity and a problem-solving
              mindset. I learn new technologies by understanding the
              fundamentals, applying them to real projects, and continuously
              refining what I build.
            </p>

          </motion.div>

        </section>


        {/* ───────────────── FINAL STATEMENT ───────────────── */}

        <motion.section
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            relative
            overflow-hidden
            rounded-3xl
            border border-[#C8955B]/20
            bg-[#1D1C19]
            px-7 py-14
            text-center
            md:px-12 md:py-20
          "
        >

          <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-[#C8955B]/10 blur-[80px]" />

          <span className="relative text-[9px] uppercase tracking-[0.4em] text-[#C8955B]">
            Let's build something useful
          </span>

          <h2 className="relative mx-auto mt-6 max-w-3xl font-serif text-3xl leading-tight md:text-5xl">
            Good software starts with a good idea.
            <br />
            <span className="text-white/35">
              Great software makes that idea useful.
            </span>
          </h2>

        </motion.section>

      </div>
    </main>
  );
}

