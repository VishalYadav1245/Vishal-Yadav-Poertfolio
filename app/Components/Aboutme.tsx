"use client";

import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-20 bg-[rgba(0,0,0,0.55)] backdrop-blur-md"
    >
      <div className="max-w-5xl mx-auto text-center">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-wide"
        >
          About <span className="text-purple-400">Me</span>
        </motion.h2>

        {/* Subtitle Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          I’m a passionate <span className="text-white font-semibold">Full Stack Developer</span> 
          who loves building modern, scalable, and visually appealing web applications. 
          My focus is on creating fast, responsive frontends and powerful backend systems.
        </motion.p>

        {/* About Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold text-white mb-3">🚀 Frontend Developer</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              I convert ideas into interactive UI using React, Next.js, Tailwind CSS and clean design principles.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="p-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold text-white mb-3">🛠 Backend Developer</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Skilled in Node.js, Express, REST APIs, authentication systems, and building secure backend logic.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="p-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold text-white mb-3">💾 Database & Tools</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Experienced with MongoDB, MySQL, Git, GitHub, Postman, and deploying full-stack apps.
            </p>
          </motion.div>

        </div>

        {/* Bottom paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-300 text-base max-w-3xl mx-auto mt-12 leading-relaxed"
        >
          I enjoy transforming complex problems into elegant solutions.  
          Always learning, improving, and working to build applications that make a real impact.
        </motion.p>

      </div>
    </section>
  );
}
