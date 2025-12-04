"use client";

import { motion } from "framer-motion";
import { 
  FaReact, FaNodeJs, FaDatabase, FaGitAlt 
} from "react-icons/fa";

import { 
  SiNextdotjs, SiTailwindcss, SiMongodb, 
  SiExpress, SiPostman, SiTypescript 
} from "react-icons/si";

export default function Skill() {
  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-20 bg-[rgba(0,0,0,0.55)] backdrop-blur-md"
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-10"
        >
          My <span className="text-purple-400">Skills</span>
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">

          {[
            { name: "React.js", icon: <FaReact size={40} color="#61DBFB" /> },
            { name: "Next.js", icon: <SiNextdotjs size={40} color="white" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss size={40} color="#38BDF8" /> },
            { name: "Node.js", icon: <FaNodeJs size={40} color="#5FA04E" /> },
            { name: "Express.js", icon: <SiExpress size={40} color="white" /> },
            { name: "MongoDB", icon: <SiMongodb size={40} color="#4DB33D" /> },
            { name: "TypeScript", icon: <SiTypescript size={40} color="#3178C6" /> },
            { name: "Git & GitHub", icon: <FaGitAlt size={40} color="#F4511E" /> },
            { name: "Postman", icon: <SiPostman size={40} color="#EF5B25" /> },
            { name: "MySQL", icon: <FaDatabase size={40} color="#1E90FF" /> },
          ].map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg hover:scale-105 transition cursor-pointer"
            >
              <div className="flex flex-col items-center gap-3">
                {skill.icon}
                <p className="text-white font-semibold">{skill.name}</p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
