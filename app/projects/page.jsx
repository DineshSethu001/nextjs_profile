
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
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#171614] text-[#F2E8D8]">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-15%] top-[15%] h-[500px] w-[500px] rounded-full bg-[#C8955B]/5 blur-[140px]" />

        <div className="absolute right-[-10%] top-[45%] h-[450px] w-[450px] rounded-full bg-[#C8955B]/5 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Main content */}
      <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-28 md:px-10 lg:px-16 lg:pt-36">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-3xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#C8955B]" />

            <span className="text-xs font-medium uppercase tracking-[0.35em] text-[#C8955B]">
              04 / Projects
            </span>
          </div>

          <h1 className="font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">
            Things I've
            <span className="block italic text-white/35">built.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-7 text-white/45 md:text-lg">
            A collection of projects where development, design and problem
            solving come together to create useful digital experiences.
          </p>
        </motion.div>

        {/* Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          {projects.map((project) => (
            <motion.article
              key={project.number}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-[#1D1C19]/70 backdrop-blur-sm ${
                project.featured ? "lg:min-h-[560px]" : ""
              }`}
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#C8955B]/10 blur-[100px]" />
              </div>

              <div
                className={`relative grid ${
                  project.featured
                    ? "lg:grid-cols-[1.25fr_0.75fr]"
                    : "lg:grid-cols-2"
                }`}
              >
                {/* Image */}
                <div
                  className={`relative overflow-hidden ${
                    project.featured ? "min-h-[350px] lg:min-h-[560px]" : "min-h-[320px]"
                  }`}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[#22201C]" />
                  )}

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171614] via-[#171614]/20 to-transparent" />

                  {/* Number */}
                  <div className="absolute left-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/20 text-xs text-white/60 backdrop-blur-md">
                    {project.number}
                  </div>

                  {/* Featured label */}
                  {project.featured && (
                    <div className="absolute right-6 top-6 rounded-full border border-[#C8955B]/30 bg-[#C8955B]/10 px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-[#C8955B] backdrop-blur-md">
                      Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between p-7 md:p-10 lg:p-12">
                  <div>
                    <p className="mb-4 text-xs uppercase tracking-[0.25em] text-[#C8955B]">
                      {project.category}
                    </p>

                    <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
                      {project.title}
                    </h2>

                    <p className="mt-6 max-w-xl text-sm leading-7 text-white/45 md:text-base">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="mt-8 flex flex-wrap gap-2">
                      {project.tech.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/55 transition-colors duration-300 group-hover:border-[#C8955B]/20 group-hover:text-white/70"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="mt-10 flex flex-wrap items-center gap-4">
                    {project.live !== "#" && (
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-3 rounded-full bg-[#C8955B] px-5 py-3 text-sm font-medium text-[#171614] transition-all duration-300 hover:scale-105 hover:bg-[#d8aa72]"
                      >
                        View Project

                        <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                          ↗
                        </span>
                      </Link>
                    )}

                    {project.github !== "#" && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 rounded-full border border-white/10 px-5 py-3 text-sm text-white/65 transition-all duration-300 hover:border-[#C8955B]/40 hover:text-[#C8955B]"
                      >
                        GitHub
                        <span>↗</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-28 border-t border-white/10 pt-12"
        >
          <div className="grid gap-8 md:grid-cols-2 md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                Always building
              </p>

              <h3 className="mt-4 max-w-xl font-serif text-3xl leading-tight md:text-4xl">
                The next project is
                <span className="italic text-[#C8955B]"> already taking shape.</span>
              </h3>
            </div>

            <div className="md:text-right">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-[#C8955B]"
              >
                Have a project in mind?

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-[#C8955B]/40 group-hover:bg-[#C8955B]/10">
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

