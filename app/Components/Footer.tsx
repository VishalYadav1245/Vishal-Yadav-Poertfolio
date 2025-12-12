"use client";

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-[rgba(0,0,0,0.45)] backdrop-blur-md border-t border-white/20 ">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-gray-300">

        {/* NAME */}
        <h3 className="text-lg font-semibold text-white">
          © {new Date().getFullYear()} Vishal Yadav
        </h3>

        {/* SOCIAL ICONS */}
        <div className="flex gap-6 mt-4 md:mt-0">

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/vishal-yadav-802ba02a3/"
            target="_blank"
            className="text-gray-300 hover:text-purple-400 transition text-xl"
          >
            <FaLinkedin />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/VishalYadav1245"
            target="_blank"
            className="text-gray-300 hover:text-purple-400 transition text-xl"
          >
            <FaGithub />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/zyntrixio/"
            target="_blank"
            className="text-gray-300 hover:text-purple-400 transition text-xl"
          >
            <FaInstagram />
          </a>

        </div>

      </div>
    </footer>
  );
}
