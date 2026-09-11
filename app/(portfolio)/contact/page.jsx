
"use client";

import { motion } from "motion/react";
import { FormEvent, useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);


const handleSubmit = (e) => {
  e.preventDefault();

  // Add your API / email service here later

  setSubmitted(true);
};


  return (
    <main className="relative min-h-screen overflow-hidden bg-[#171614] px-5 pb-24 pt-32 text-[#F2E8D8] md:px-8">

      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-[#C8955B]/5 blur-[130px]" />

      <div className="pointer-events-none absolute -bottom-40 right-[-100px] h-[450px] w-[450px] rounded-full bg-[#C8955B]/5 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* ───────────────── HEADER ───────────────── */}

        <section className="border-b border-white/[0.07] pb-16">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex items-center gap-3"
          >
            <span className="h-[1px] w-10 bg-[#C8955B]" />

            <span className="text-[10px] uppercase tracking-[0.35em] text-[#C8955B]">
              05 / Contact
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-5xl font-serif text-5xl leading-[0.95] tracking-[-0.04em] md:text-7xl lg:text-8xl"
          >
            Let's make something
            <br />

            <span className="text-[#C8955B]">
              meaningful.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-8 max-w-xl text-sm leading-7 text-white/40 md:text-base"
          >
            Have an idea, project, or opportunity in mind?
            I'd love to hear about it. Send me a message and
            let's start a conversation.
          </motion.p>

        </section>


        {/* ───────────────── CONTACT CONTENT ───────────────── */}

        <section className="grid gap-16 py-20 lg:grid-cols-[0.8fr_1.2fr]">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            {/* Availability */}

            <div className="mb-12">

              <div className="mb-4 flex items-center gap-3">

                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C8955B] opacity-50" />

                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#C8955B]" />
                </span>

                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8955B]">
                  Available for opportunities
                </span>

              </div>

              <p className="max-w-sm text-sm leading-7 text-white/40">
                I'm currently open to interesting projects,
                collaborations, freelance opportunities, and
                full-time roles.
              </p>

            </div>


            {/* Contact details */}

            <div className="space-y-7">

              <div>

                <span className="text-[9px] uppercase tracking-[0.3em] text-white/25">
                  Email
                </span>

                <a
                  href="mailto:your@email.com"
                  className="mt-2 block text-lg text-white/70 transition-colors hover:text-[#C8955B]"
                >
                 dineshsethu15981@gmail.com
                </a>

              </div>


              <div>

                <span className="text-[9px] uppercase tracking-[0.3em] text-white/25">
                  Location
                </span>

                <p className="mt-2 text-lg text-white/70">
                  India
                </p>

              </div>

            </div>


            {/* Social */}

            <div className="mt-12">

              <span className="text-[9px] uppercase tracking-[0.3em] text-white/25">
                Find me online
              </span>

              <div className="mt-4 flex gap-3">

                <motion.a
                  href="https://github.com/DineshSethu001"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-full
                    border border-white/10
                    text-sm text-white/50
                    transition-colors
                    hover:border-[#C8955B]/50
                    hover:text-[#C8955B]
                  "
                >
                  GH
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/dinesh-thanigai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-full
                    border border-white/10
                    text-sm text-white/50
                    transition-colors
                    hover:border-[#C8955B]/50
                    hover:text-[#C8955B]
                  "
                >
                  in
                </motion.a>

              </div>

            </div>

          </motion.div>


          {/* RIGHT SIDE FORM */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              rounded-3xl
              border border-white/[0.08]
              bg-[#1D1C19]
              p-6
              md:p-9
            "
          >

            <div className="mb-8 flex items-center justify-between">

              <div>

                <span className="text-[9px] uppercase tracking-[0.3em] text-[#C8955B]">
                  Start a conversation
                </span>

                <h2 className="mt-2 font-serif text-2xl">
                  Tell me about your idea.
                </h2>

              </div>

              <span className="font-mono text-xs text-white/20">
                01
              </span>

            </div>


            {submitted ? (

              /* SUCCESS MESSAGE */

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="
                  flex
                  min-h-[400px]
                  flex-col
                  items-center
                  justify-center
                  text-center
                "
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#C8955B]/40 text-2xl text-[#C8955B]">
                  ✓
                </div>

                <h3 className="mt-6 font-serif text-2xl">
                  Message received.
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-white/40">
                  Thanks for reaching out. I'll get back to you
                  as soon as possible.
                </p>

              </motion.div>

            ) : (

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                {/* NAME */}

                <div className="group">

                  <label
                    htmlFor="name"
                    className="
                      mb-2 block
                      text-[9px]
                      uppercase
                      tracking-[0.25em]
                      text-white/30
                    "
                  >
FullName                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="DINESH"
                    className="
                      w-full
                      border-b
                      border-white/[0.1]
                      bg-transparent
                      px-0
                      py-3
                      text-sm
                      text-[#F2E8D8]
                      outline-none
                      placeholder:text-white/20
                      transition-colors
                      focus:border-[#C8955B]
                    "
                  />

                </div>


                {/* EMAIL */}

                <div>

                  <label
                    htmlFor="email"
                    className="
                      mb-2 block
                      text-[9px]
                      uppercase
                      tracking-[0.25em]
                      text-white/30
                    "
                  >
                    Email address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="
                      w-full
                      border-b
                      border-white/[0.1]
                      bg-transparent
                      px-0
                      py-3
                      text-sm
                      text-[#F2E8D8]
                      outline-none
                      placeholder:text-white/20
                      transition-colors
                      focus:border-[#C8955B]
                    "
                  />

                </div>


                {/* PROJECT TYPE */}

                <div>

                  <label
                    htmlFor="project"
                    className="
                      mb-2 block
                      text-[9px]
                      uppercase
                      tracking-[0.25em]
                      text-white/30
                    "
                  >
                    What are you looking for?
                  </label>

                  <select
                    id="project"
                    name="project"
                    className="
                      w-full
                      border-b
                      border-white/[0.1]
                      bg-[#1D1C19]
                      px-0
                      py-3
                      text-sm
                      text-white/60
                      outline-none
                      transition-colors
                      focus:border-[#C8955B]
                    "
                  >
                    <option value="website">
                      Website / Portfolio
                    </option>

                    <option value="webapp">
                      Web Application
                    </option>

                    <option value="backend">
                      Backend / API
                    </option>

                    <option value="analytics">
                      Data Analytics
                    </option>

                    <option value="other">
                      Something else
                    </option>
                  </select>

                </div>


                {/* MESSAGE */}

                <div>

                  <label
                    htmlFor="message"
                    className="
                      mb-2 block
                      text-[9px]
                      uppercase
                      tracking-[0.25em]
                      text-white/30
                    "
                  >
                    Your message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me a little about your project..."
                    className="
                      w-full
                      resize-none
                      border-b
                      border-white/[0.1]
                      bg-transparent
                      px-0
                      py-3
                      text-sm
                      leading-7
                      text-[#F2E8D8]
                      outline-none
                      placeholder:text-white/20
                      transition-colors
                      focus:border-[#C8955B]
                    "
                  />

                </div>


                {/* SUBMIT */}

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    bg-[#C8955B]
                    px-6
                    py-4
                    text-sm
                    font-medium
                    text-[#171614]
                    transition-colors
                    hover:bg-[#E0B47A]
                  "
                >
                  Send message

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>

                </motion.button>

              </form>

            )}

          </motion.div>

        </section>


        {/* ───────────────── BIG CTA ───────────────── */}

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="
            border-t
            border-white/[0.07]
            pt-16
            text-center
          "
        >

          <p className="text-[9px] uppercase tracking-[0.4em] text-white/25">
            Have an idea?
          </p>

          <a
            href="mailto:dineshsethu15981@gmail.com"
            className="
              mt-5
              inline-block
              font-serif
              text-3xl
              text-white/70
              transition-colors
              hover:text-[#C8955B]
              md:text-5xl
            "
          >
            dineshsethu15981@gmail.com
          </a>

        </motion.section>

      </div>
    </main>
  );
}

