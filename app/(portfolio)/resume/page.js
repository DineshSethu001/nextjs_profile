import Link from "next/link";

const resumeUrl =
  "https://drive.google.com/file/d/1eKcmwmFlFPOLnj8CrTmNjlDyV-epR0vo/view?usp=sharing";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#11110F] px-6 py-32 text-[#F2E8D8]">
      <section className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-12">
          <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-[#C8955B]">
            Resume
          </p>

          <h1 className="font-serif text-5xl md:text-7xl">
            My Resume
          </h1>

          <p className="mt-6 max-w-xl text-white/40">
            View my resume online or download a copy for your reference.
          </p>
        </div>

        {/* Actions */}
        <div className="mb-10 flex flex-wrap gap-4">

          <Link
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#C8955B] px-7 py-4 text-sm font-medium text-[#11110F] transition hover:scale-105"
          >
            View Resume ↗
          </Link>

          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/15 px-7 py-4 text-sm text-white/70 transition hover:border-[#C8955B]/50 hover:text-[#C8955B]"
          >
            Download Resume ↓
          </a>

        </div>

        {/* Resume Preview */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">

          <iframe
            src={resumeUrl}
            title="My Resume"
            className="h-[80vh] w-full"
          />

        </div>

      </section>
    </main>
  );
}