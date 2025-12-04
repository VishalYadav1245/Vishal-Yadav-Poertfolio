"use client";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function SocialBar() {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 flex flex-col gap-5 z-50">

      <a
        href="https://www.linkedin.com/in/vishal-yadav-802ba02a3/"
        target="_blank"
        className="p-3 bg-white/10 backdrop-blur-lg rounded-full hover:bg-purple-500 transition text-white"
      >
        <FaLinkedin size={20} />
      </a>

      <a
        href="https://github.com/VishalYadav1245"
        target="_blank"
        className="p-3 bg-white/10 backdrop-blur-lg rounded-full hover:bg-purple-500 transition text-white"
      >
        <FaGithub size={20} />
      </a>

      <a
        href="https://www.instagram.com/zyntrixio/"
        target="_blank"
        className="p-3 bg-white/10 backdrop-blur-lg rounded-full hover:bg-purple-500 transition text-white"
      >
        <FaInstagram size={20} />
      </a>

    </div>
  );
}
