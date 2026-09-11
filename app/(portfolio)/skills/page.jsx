
"use client";

import { motion } from "motion/react";

const skillGroups = [
  {
    title: "Frontend",
    number: "01",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "HTML / CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Backend",
    number: "02",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "REST APIs", level: 85 },
      { name: "Python", level: 75 },
      { name: "FastAPI", level: 70 },
    ],
  },
  {
    title: "Database",
    number: "03",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 75 },
      { name: "Mongoose", level: 80 },
      { name: "Database Design", level: 75 },
    ],
  },
  {
    title: "Tools & DevOps",
    number: "04",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Vercel", level: 85 },
      { name: "Postman", level: 85 },
      { name: "VS Code", level: 95 },
      { name: "Linux", level: 80 },
    ],
  },
  {
    title: "Creative",
    number: "05",
    skills: [
      { name: "Video Editing", level: 85 },
      { name: "Photo Editing", level: 80 },
      { name: "Motion Design", level: 70 },
      { name: "Visual Storytelling", level: 85 },
    ],
  },
  {
    title: "Content",
    number: "06",
    skills: [
      { name: "Content Writing", level: 85 },
      { name: "Script Writing", level: 80 },
      { name: "Blog Writing", level: 80 },
      { name: "Content Strategy", level: 75 },
    ],
  },
];

const technologies = [
  "React",
  "Next.js",
  "JavaScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Python",
  "FastAPI",
  "Tailwind",
  "Git",
  "GitHub",
  "Vercel",
];

export default function Skills() {
  return (
    <main className="min-h-screen bg-[#171614] px-6 py-32 text-[#F2E8D8] md:px-12 lg:px-20">
    
      {/* =====================================
          HEADER
      ====================================== */}

      <section className="mx-auto max-w-7xl">


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >  
          <p className="text-xs uppercase tracking-[0.4em] text-[#C8955B]">
            03 / Skills
          </p>

          <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <h1 className="max-w-4xl font-serif text-5xl leading-tight md:text-7xl">
              Tools I use to
              <br />
              <span className="text-[#C8955B]">
                bring ideas to life.
              </span>
            </h1>

            <p className="max-w-sm text-sm leading-relaxed text-white/45">
              From building full-stack applications to creating
              visual content, these are the tools and technologies
              I use to turn ideas into reality.
            </p>

          </div>
        </motion.div>


        {/* =====================================
            TECHNOLOGY MARQUEE
        ====================================== */}

        <div className="mt-20 overflow-hidden border-y border-white/[0.07] py-5">

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max gap-10"
          >
            {[...technologies, ...technologies].map(
              (technology, index) => (
                <div
                  key={index}
                  className="
                    flex
                    items-center
                    gap-3
                    whitespace-nowrap
                    text-sm
                    tracking-wide
                    text-white/40
                  "
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C8955B]" />

                  {technology}
                </div>
              )
            )}
          </motion.div>

        </div>


        {/* =====================================
            SKILL GROUPS
        ====================================== */}

        <div className="mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {skillGroups.map((group, groupIndex) => (

            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: groupIndex * 0.08,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.08]
                bg-[#1D1C19]/70
                p-6
                backdrop-blur-sm
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-[#C8955B]/30
              "
            >

              {/* Decorative glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-40
                  w-40
                  rounded-full
                  bg-[#C8955B]/[0.05]
                  blur-3xl
                  transition-all
                  duration-500
                  group-hover:bg-[#C8955B]/10
                "
              />


              {/* Card header */}

              <div className="relative z-10 mb-8 flex items-center justify-between">

                <div>
                  <p className="mb-2 text-[9px] uppercase tracking-[0.3em] text-white/25">
                    {group.number}
                  </p>

                  <h2 className="font-serif text-2xl text-[#F2E8D8]">
                    {group.title}
                  </h2>
                </div>

                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#C8955B]/20
                    text-xs
                    text-[#C8955B]
                  "
                >
                  ↗
                </div>

              </div>


              {/* Skills */}

              <div className="relative z-10 space-y-5">

                {group.skills.map((skill) => (

                  <div key={skill.name}>

                    <div className="mb-2 flex items-center justify-between">

                      <span className="text-xs text-white/65">
                        {skill.name}
                      </span>

                      <span className="text-[10px] text-white/25">
                        {skill.level}%
                      </span>

                    </div>

                    <div className="h-[2px] overflow-hidden rounded-full bg-white/[0.08]">

                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                          delay: 0.2,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="h-full bg-[#C8955B]"
                      />

                    </div>

                  </div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>


        {/* =====================================
            MERN STACK FEATURE
        ====================================== */}

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            relative
            mt-24
            overflow-hidden
            rounded-3xl
            border
            border-[#C8955B]/20
            bg-[#1D1C19]
            p-8
            md:p-12
          "
        >

          {/* Background decoration */}

          <div
            className="
              pointer-events-none
              absolute
              -right-32
              -top-32
              h-80
              w-80
              rounded-full
              bg-[#C8955B]/10
              blur-[100px]
            "
          />

          <div className="relative z-10 grid gap-10 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-[10px] uppercase tracking-[0.35em] text-[#C8955B]">
                Core Stack
              </p>

              <h2 className="mt-4 font-serif text-4xl md:text-5xl">
                MERN
                <br />
                <span className="text-white/40">
                  Full Stack Development
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/45">
                I use the MERN ecosystem to build modern,
                scalable web applications from frontend
                interfaces to backend APIs and databases.
              </p>

            </div>


            {/* MERN circles */}

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

              {["MongoDB", "Express", "React", "Node"].map(
                (item, index) => (

                  <motion.div
                    key={item}
                    whileHover={{ y: -6 }}
                    className="
                      flex
                      aspect-square
                      flex-col
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-white/[0.08]
                      bg-white/[0.02]
                      transition-colors
                      hover:border-[#C8955B]/30
                    "
                  >

                    <span className="font-serif text-3xl text-[#C8955B]">
                      {item.charAt(0)}
                    </span>

                    <span className="mt-3 text-[10px] text-white/40">
                      {item}
                    </span>

                  </motion.div>

                )
              )}

            </div>

          </div>

        </motion.section>


        {/* =====================================
            BOTTOM STATEMENT
        ====================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-28 border-t border-white/[0.07] pt-10"
        >

          <p className="max-w-4xl font-serif text-3xl leading-relaxed text-white/70 md:text-5xl">
            Technology is the tool.
            <br />
            <span className="text-[#C8955B]">
              Creativity is how I use it.
            </span>
          </p>

        </motion.div>

      </section>

    </main>
  );
}

