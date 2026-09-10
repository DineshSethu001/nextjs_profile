export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0b0b0b]">

      {/* Background Image */}
      <img
        src="/images/developer-workspace.png"
        alt="Developer workspace"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
          opacity-70
        "
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center text-center text-white">

        <div>

          <p className="mb-3 text-sm uppercase tracking-[0.3em]">
            Full-Stack Developer
          </p>

          <h1 className="text-5xl font-bold md:text-7xl">
            Dinesh T
          </h1>

          <p className="mt-5 text-lg text-gray-300">
            MERN • Next.js • Agentic AI
          </p>

          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Building scalable web applications and turning ideas
            into practical digital products.
          </p>

          <div className="mt-8 flex justify-center gap-4">

            <button className="rounded-lg bg-white px-6 py-3 text-black">
              View Projects
            </button>

            <button className="rounded-lg border border-white/40 px-6 py-3 text-white">
              Resume
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}