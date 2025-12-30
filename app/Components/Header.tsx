"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hidden, setHidden] = useState(false);

  // ********* NAVBAR HIDE/SHOW ON SCROLL *********
  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 100) setHidden(true);
      else setHidden(false);

      lastScroll = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ********* ACTIVE LINK HIGHLIGHT *********
  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "contact"];

    const handleActive = () => {
      const scrollPos = window.scrollY + 200;

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const height = section.clientHeight;

          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleActive);
    return () => window.removeEventListener("scroll", handleActive);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-all duration-500 z-50 
      ${hidden ? "-translate-y-full" : "translate-y-0"} 
      bg-black/20 backdrop-blur-lg`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-5 px-6 text-white">

        {/* LOGO */}
        <h1 className="text-3xl font-extrabold tracking-wider cursor-pointer">VISHAL</h1>

        {/* DESKTOP NAV */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-10 text-lg font-semibold">
            {[
              { name: "Home", id: "home" },   // ✅ FIXED
              { name: "Skill", id: "skills" },
              { name: "Project", id: "projects" },
              { name: "About", id: "about" },
              { name: "Contact", id: "contact" },
            ].map((item) => (
              <li key={item.id} className="relative group">
                <a
                  href={`#${item.id}`}
                  className={`${
                    activeSection === item.id ? "text-purple-400" : "text-white"
                  } transition`}
                >
                  {item.name}
                </a>

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-purple-400 transition-all duration-300 ${
                    activeSection === item.id
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </li>
            ))}
          </ul>
        </nav>

        {/* MOBILE HAMBURGER */}
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1 cursor-pointer"
        >
          <span
            className={`h-[3px] w-7 bg-white rounded transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`h-[3px] w-7 bg-white rounded transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`h-[3px] w-7 bg-white rounded transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/40 backdrop-blur-lg py-4"
        >
          <ul className="flex flex-col items-center gap-6 text-lg font-semibold text-white pb-4">
            {[
              { name: "Home", id: "home" },   // ✅ FIXED
              { name: "Skill", id: "skills" },
              { name: "Project", id: "projects" },
              { name: "About", id: "about" },
              { name: "Contact", id: "contact" },
            ].map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-purple-400 transition"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
}
