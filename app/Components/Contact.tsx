"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { 
  FaEnvelope, 
  FaPhoneAlt, 
  FaLinkedin, 
  FaInstagram, 
  FaGithub, 
  FaMapMarkerAlt 
} from "react-icons/fa";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    emailjs.init("Ltttaizx70nG01pr2");
  }, []);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSent(false);

    try {
      await emailjs.sendForm(
        "service_lea9qf8",
        "template_f3xwr1e",
        formRef.current!,
        "Ltttaizx70nG01pr2"
      );

      setSent(true);
      formRef.current?.reset();
      setTimeout(() => setSent(false), 5000);
    } catch (err: any) {
      setError(err.text || "Failed to send message");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-20 bg-[rgba(0,0,0,0.4)] backdrop-blur-xl"
    >
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-12"
        >
          Contact <span className="text-purple-400">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE CONTACT DETAILS */}
          <div className="space-y-6 pl-5">

            {/* Email */}
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-purple-400" size={26} />
              <p className="text-gray-200 text-lg">vy0369156@gmail.com</p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-purple-400" size={26} />
              <p className="text-gray-200 text-lg">6388218393</p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-purple-400" size={26} />
              <p className="text-gray-200 text-lg">New Delhi, India</p>
            </div>

            {/* Social Links */}
            <div className="space-y-4 pt-4">

              <a href="https://www.linkedin.com/in/vishal-yadav-802ba02a3/"
                 target="_blank"
                 className="flex items-center gap-4 text-gray-200 text-lg hover:text-white transition">
                <FaLinkedin className="text-purple-400" size={26} />
                LinkedIn Profile
              </a>

              <a href="https://www.instagram.com/zyntrixio/"
                 target="_blank"
                 className="flex items-center gap-4 text-gray-200 text-lg hover:text-white transition">
                <FaInstagram className="text-purple-400" size={26} />
                Instagram Profile
              </a>

              <a href="https://github.com/VishalYadav1245"
                 target="_blank"
                 className="flex items-center gap-4 text-gray-200 text-lg hover:text-white transition">
                <FaGithub className="text-purple-400" size={26} />
                GitHub Profile
              </a>

            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-10 border border-white/20"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">

              {/* 2 Inputs */}
              <div className="grid grid-cols-2 gap-4">
                <input 
                  name="firstName" 
                  required 
                  placeholder="First Name *"
                  className="contact-input" 
                />

                <input 
                  name="lastName" 
                  required 
                  placeholder="Last Name *"
                  className="contact-input" 
                />
              </div>

              {/* Email */}
              <input 
                name="email" 
                required 
                type="email"
                placeholder="Email *"
                className="contact-input" 
              />

              {/* Subject */}
              <input 
                name="subject" 
                required 
                placeholder="Subject *"
                className="contact-input" 
              />

              {/* Message */}
              <textarea 
                name="message" 
                rows={4} 
                required 
                placeholder="Your Message *"
                className="contact-input" 
              />

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg rounded-full shadow-lg hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {sent && (
                <p className="text-green-400 text-center font-semibold mt-2">
                  Message Sent Successfully ✔
                </p>
              )}

              {error && (
                <p className="text-red-400 text-center font-semibold mt-2">
                  {error}
                </p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}