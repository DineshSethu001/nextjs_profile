
"use client";

import Image from "next/image";
export default function Home() {
    
  return (
   <section className="min-h-screen bg-[#171614] text-[#F2E8D8]">

  <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">

    {/* LEFT */}
    <div>
      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#C8955B]">
        Full Stack Developer • Creator
      </p>

      <h1 className="text-6xl font-bold leading-tight">
        I build.
        <br />
        I create.
        <br />
        I tell stories.
      </h1>

      <p className="mt-6 max-w-xl text-lg text-white/60">
        I build modern web applications with the MERN stack,
        create engaging content, edit visual stories, and write
        content that connects with people.
      </p>

      <div className="mt-8 flex gap-4">
        <button>
          View My Work
        </button>

        <button>
          Contact Me
        </button>
      </div>
    </div>


    {/* RIGHT */}
    <div>
      <Image
        src="/profile.png"
        alt="Dinesh portfolio"
        width={675}       height={675}
        className="rounded-4xl mt-6"
        priority
      />
    </div>

  </div>

</section>
  );
}


