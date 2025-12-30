"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Project() {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20 bg-[rgba(0,0,0,0.55)] backdrop-blur-md"
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-12"
        >
          My <span className="text-purple-400">Projects</span>
        </motion.h2>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 gap-10  ">

          {/* ---------- PROJECT 1: LABOUR CONTRACTOR ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-white/10  rounded-2xl shadow-lg hover:scale-105 transition cursor-pointer"
          >
            <img
              src="/labor.webp"
              alt="Labour Contractor"
              className="w-full h-52 object-cover rounded-xl mb-5"
            />

            <h3 className="text-2xl font-bold text-white mb-3 text-center">
              Labour Contractor Management
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              A full-stack platform connecting labourers with contractors. 
              Includes registration, login, job assignment, contractor panel, and worker details.
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 justify-center mb-5">
              <span className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-xs">React</span>
              <span className="px-3 py-1 bg-blue-600/30 text-blue-300 rounded-full text-xs">Node.js</span>
              <span className="px-3 py-1 bg-green-600/30 text-green-300 rounded-full text-xs">MongoDB</span>
              <span className="px-3 py-1 bg-yellow-600/30 text-yellow-300 rounded-full text-xs">Express</span>
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/VishalYadav1245/Labour-Contractor-Services.git"
                className="flex items-center gap-2 px-5 py-2 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition"
              >
                Live Demo <FaExternalLinkAlt size={14} />
              </a>

              <a
                href="https://github.com/VishalYadav1245/Labour-Contractor-Services.git"
                className="flex items-center gap-2 px-5 py-2 bg-white/20 text-white rounded-full font-semibold hover:bg-white/30 transition"
              >
                Code <FaGithub size={18} />
              </a>
            </div>
          </motion.div>

          {/* ---------- PROJECT 2: CRICBUZZ ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-white/10  rounded-2xl shadow-lg hover:scale-105 transition cursor-pointer"
          >
            <img
              src="/images.png"
              alt="Cricbuzz Clone"
              className="w-full h-52 object-cover rounded-xl mb-5"
            />

            <h3 className="text-2xl font-bold text-white mb-3 text-center">
              Cricbuzz Clone – Live Cricket App
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              A cricket live-score dashboard with match details, team info, and real-time updates.
              Inspired by Cricbuzz UI and built with modern web technologies.
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 justify-center mb-5">
              <span className="px-3 py-1 bg-blue-600/30 text-blue-300 rounded-full text-xs">React</span>
              <span className="px-3 py-1 bg-black/40 text-white rounded-full text-xs">Next.js</span>
              <span className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-xs">API Data</span>
              <span className="px-3 py-1 bg-green-600/30 text-green-300 rounded-full text-xs">Tailwind</span>
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-4">
              <a
  href="https://vishal-cric.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-5 py-2 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition"
>
  Live Demo <FaExternalLinkAlt size={14} />
</a>

              <a
  href="https://github.com/VishalYadav1245/Vishal-Cric"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-5 py-2 bg-white/20 text-white rounded-full font-semibold hover:bg-white/30 transition"
>
  Code <FaGithub size={18} />
</a>
            </div>
          </motion.div>
          {/* ---------- PROJECT 3: ECOMMERCE ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-white/10  rounded-2xl shadow-lg hover:scale-105 transition cursor-pointer"
          >
            <img
              src="/Color-Catch.png"
              alt="Cricbuzz Clone"
              className="w-full h-52 object-cover rounded-xl mb-5"
            />

            <h3 className="text-2xl font-bold text-white mb-3 text-center">
              Color Catcher Game – Live Color Catcher Game
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Color Catcher Game is a fast-paced interactive game built with React.js where players control a catcher to collect falling objects. The game features smooth animations, increasing difficulty, keyboard and mobile touch controls, and a modern responsive UI.
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 justify-center mb-5">
              <span className="px-3 py-1 bg-blue-600/30 text-blue-300 rounded-full text-xs">React</span>
              <span className="px-3 py-1 bg-black/40 text-white rounded-full text-xs"></span>
              
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-4">
              <a
  href="https://color-catcher-game-one.vercel.app"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-5 py-2 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition"
>
  Live Demo <FaExternalLinkAlt size={14} />
</a>

              <a
  href="https://github.com/VishalYadav1245/Color-Catcher-Game.git"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-5 py-2 bg-white/20 text-white rounded-full font-semibold hover:bg-white/30 transition"
>
  Code <FaGithub size={18} />
</a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
