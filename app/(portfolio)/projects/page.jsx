
"use client";

import Link from "next/link";
import { motion } from "motion/react";

const projects = [
  {
    number: "01",
    title: "TechCare",
    category: "Full Stack Web Application",
    description:
      "A complete service platform built to connect customers with technical support services through a clean and modern digital experience.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: "/projects/techcare.png",
    live: "https://tech-care-project-2vrw.vercel.app/",
    github: "#",
    featured: true,
  },
  {
    number: "02",
    title: "Developer Portfolio",
    category: "Frontend / Creative Development",
    description:
      "A cinematic personal portfolio designed to showcase development, creative work, projects and technical skills.",
    tech: ["Next.js", "React", "Tailwind CSS", "Motion"],
    image: "/projects/portfolio.png",
    live: "#",
    github: "#",
    featured: false,
  },
  {
    number: "03",
    title: "AI Agent",
    category: "AI / Backend",
    description:
      "An intelligent application concept exploring AI agents, API integration and automated task execution.",
    tech: ["Python", "FastAPI", "AI", "REST API"],
    image: "/projects/ai-agent.png",
    live: "#",
    github: "#",
    featured: false,
  },
  {
    number: "04",
    title: "Analytics Dashboard",
    category: "Data / Analytics",
    description:
      "A dashboard concept for transforming raw data into useful visual insights and actionable information.",
    tech: ["Python", "SQL", "Pandas", "Data Visualization"],
    image: "/projects/analytics.png",
    live: "#",
    github: "#",
    featured: false,
  },
  {
    number: "05",
    title: "Content Studio",
    category: "Creative / Content",
    description:
      "A creative project combining content writing, visual storytelling, editing and digital media.",
    tech: ["Content", "Editing", "Storytelling", "Design"],
    image: "/projects/content.png",
    live: "#",
    github: "#",
    featured: false,
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#11110F] text-[#F2E8D8]">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <img
        src="/images/project_workspace.png"
        alt=""
        className="fixed inset-0 z-0 h-full w-full  opacity-20"
      />

      <div className="fixed inset-0 z-0 bg-[#11110F]/85" />

      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#C8955B]/10 blur-[160px]" />

        <div className="absolute -right-40 top-[45%] h-[500px] w-[500px] rounded-full bg-[#C8955B]/5 blur-[160px]" />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-32 pt-28 md:px-10 lg:px-16 lg:pt-36">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24 max-w-3xl"
        >
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-12 bg-[#C8955B]" />

            <span className="text-[11px] font-medium uppercase tracking-[0.4em] text-[#C8955B]">
              04 / Selected Work
            </span>
          </div>

          <h1 className="font-serif text-5xl leading-[0.9] tracking-tight md:text-7xl lg:text-8xl">
            Things I've
            <span className="block italic text-white/25">
              built.
            </span>
          </h1>

          <p className="mt-9 max-w-2xl text-base leading-8 text-white/40 md:text-lg">
            A collection of digital experiences where development,
            design and problem solving come together.
          </p>
        </motion.div>

        {/* =====================================================
            PROJECT GRID
        ====================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid gap-10 md:grid-cols-2"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              variants={itemVariants}
              className={`group relative ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >

              {/* =================================================
                  CARD
              ================================================== */}

              <div
                className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#1A1916]/80 backdrop-blur-xl transition-all duration-700 group-hover:border-[#C8955B]/30 group-hover:shadow-[0_30px_100px_rgba(0,0,0,0.45)] ${
                  project.featured
                    ? "min-h-[620px]"
                    : "min-h-[520px]"
                }`}
              >

                {/* =================================================
                    IMAGE
                ================================================== */}

                <div className="absolute inset-0 overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover grayscale transition-all duration-1000 ease-out group-hover:scale-110 group-hover:grayscale-0"
                  />

                  {/* Image darkness */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-[#11110F]" />

                  {/* Hover color */}
                  <div className="absolute inset-0 bg-[#C8955B]/0 transition-all duration-700 group-hover:bg-[#C8955B]/5" />

                </div>

                {/* =================================================
                    TOP INFORMATION
                ================================================== */}

                <div className="absolute left-6 right-6 top-6 z-10 flex items-start justify-between md:left-8 md:right-8 md:top-8">

                  {/* Number */}

                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/30 text-xs text-white/70 backdrop-blur-xl transition-all duration-500 group-hover:border-[#C8955B]/50 group-hover:text-[#C8955B]">
                    {project.number}
                  </div>

                  {/* Featured */}

                  {project.featured && (
                    <div className="rounded-full border border-[#C8955B]/40 bg-[#C8955B]/10 px-5 py-2.5 text-[9px] uppercase tracking-[0.3em] text-[#C8955B] backdrop-blur-xl">
                      Featured Project
                    </div>
                  )}

                </div>

                {/* =================================================
                    CENTER ARROW
                ================================================== */}

                {project.live !== "#" && (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute right-7 top-1/2 z-20 flex h-16 w-16 -translate-y-1/2 translate-x-16 items-center justify-center rounded-full bg-[#C8955B] text-2xl text-[#11110F] opacity-0 shadow-2xl transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 hover:scale-110 md:right-10"
                  >
                    ↗
                  </Link>
                )}

                {/* =================================================
                    BOTTOM CONTENT
                ================================================== */}

                <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-8 lg:p-10">

                  {/* Category */}

                  <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-[#C8955B]">
                    {project.category}
                  </p>

                  {/* Title */}

                  <h2
                    className={`font-serif tracking-tight text-white transition-transform duration-500 group-hover:-translate-y-1 ${
                      project.featured
                        ? "text-5xl md:text-6xl lg:text-7xl"
                        : "text-4xl md:text-5xl"
                    }`}
                  >
                    {project.title}
                  </h2>

                  {/* Description */}

                  <div className="mt-5 max-w-2xl overflow-hidden">
                    <p className="translate-y-3 text-sm leading-7 text-white/50 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:text-base">
                      {project.description}
                    </p>
                  </div>

                  {/* =================================================
                      BOTTOM META
                  ================================================== */}

                  <div className="mt-7 flex flex-wrap items-center justify-between gap-5">

                    {/* Technologies */}

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-[10px] text-white/55 backdrop-blur-md transition-all duration-300 group-hover:border-white/20 group-hover:text-white/80"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    {/* View project */}

                    {project.live !== "#" && (
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-[#C8955B] sm:flex"
                      >
                        View Project
                        <span>↗</span>
                      </Link>
                    )}

                  </div>

                </div>

              </div>

              {/* =================================================
                  PROJECT INDEX
              ================================================== */}

              <div className="mt-4 flex items-center justify-between px-2 text-[9px] uppercase tracking-[0.3em] text-white/20">
                <span>
                  Project {project.number}
                </span>

                <span>
                  2026
                </span>
              </div>

            </motion.article>
          ))}
        </motion.div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 border-t border-white/10 pt-14"
        >
          <div className="grid gap-10 md:grid-cols-2 md:items-end">

            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/25">
                Always building
              </p>

              <h3 className="mt-5 max-w-xl font-serif text-3xl leading-tight md:text-5xl">
                The next project is
                <span className="italic text-[#C8955B]">
                  {" "}already taking shape.
                </span>
              </h3>
            </div>

            <div className="md:text-right">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 text-sm text-white/50 transition-colors hover:text-[#C8955B]"
              >
                Have a project in mind?

                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition-all duration-500 group-hover:border-[#C8955B]/50 group-hover:bg-[#C8955B]/10">
                  ↗
                </span>
              </Link>
            </div>

          </div>
        </motion.div>

      </section>
    </main>
  );
}
