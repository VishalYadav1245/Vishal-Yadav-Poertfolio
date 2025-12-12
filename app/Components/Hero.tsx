"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"   // ✅ IMPORTANT: Fixed ID so Header → Home scrolls correctly
      className="min-h-screen px-6 py-20 bg-[rgba(0,0,0,0.55)] backdrop-blur-md"
    >
      {/* FLEX: column on mobile, row on desktop */}
      <div className="flex flex-col md:flex-row items-center md:items-center gap-12 md:gap-20 max-w-7xl mx-auto">

        {/* ---- LEFT: PROFILE IMAGE ---- */}
        <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 p-1 animate-spin-slow">
            <div className="w-full h-full rounded-full bg-black/40 p-1">
              <div className="w-full h-full rounded-full overflow-hidden shadow-[0_0_25px_rgba(255,255,255,0.5)] hover:scale-105 transition duration-500">
                <Image
                  src="/vishal.jpg"
                  alt="Vishal Yadav"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ---- RIGHT: TEXT CONTENT ---- */}
        <div className="text-white text-center md:text-left md:translate-x-4">

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-wide leading-tight">
            Vishal Yadav
          </h1>

          <p className="text-3xl sm:text-4xl md:text-6xl mt-3 font-semibold">
            Full Stack Developer
          </p>

          <p className="mt-6 text-base sm:text-lg text-gray-300 max-w-md mx-auto md:mx-0 leading-relaxed">
            I build modern web applications using React, Next.js, Tailwind,
            Node.js, and MongoDB. Passionate about UI, performance, and
            real-world project development.
          </p>

          {/* BUTTON GROUP */}
          <div className="mt-8 flex justify-center md:justify-start gap-6">
            <a
              href="#projects"
              className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
            >
              View My Work
            </a>

            <a
              href="/resume.pdf"
              download="Vishal_Yadav_Resume.pdf"
              className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition"
            >
              Download Resume
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
