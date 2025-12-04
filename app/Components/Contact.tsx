"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const data = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const res = await fetch("/api/sendMail", {
      method: "POST",
      body: JSON.stringify(data),
    });

    setLoading(false);
    if (res.ok) {
      setSent(true);
      e.target.reset();
    }
  }

  return (
    <section
      id="contact"
      className="px-6 py-16 bg-[rgba(0,0,0,0.55)] backdrop-blur-md w-full"
    >
      {/* FULL WIDTH FIX HERE */}
      <div className="w-full">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-12"
        >
          Contact <span className="text-purple-400">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-purple-400" size={26} />
              <p className="text-gray-200 text-lg">vy0369156@gmail.com</p>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-purple-400" size={26} />
              <p className="text-gray-200 text-lg">6388218393</p>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-purple-400" size={26} />
              <p className="text-gray-200 text-lg">New Delhi, India</p>
            </div>

            <div className="space-y-4">
              <a href="https://www.linkedin.com/in/vishal-yadav-802ba02a3/"
                 className="flex items-center gap-4 text-gray-200 hover:text-white">
                <FaLinkedin className="text-purple-400" size={26} /> LinkedIn Profile
              </a>

              <a href="https://www.instagram.com/zyntrixio/"
                 className="flex items-center gap-4 text-gray-200 hover:text-white">
                <FaInstagram className="text-purple-400" size={26} /> Instagram Profile
              </a>

              <a href="https://github.com/VishalYadav1245"
                 className="flex items-center gap-4 text-gray-200 hover:text-white">
                <FaGithub className="text-purple-400" size={26} /> GitHub Profile
              </a>
            </div>

          </div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl p-10 border border-white/20"
          >
            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="grid grid-cols-2 gap-4">
                <input className="contact-input" required name="firstName" placeholder="First Name *" />
                <input className="contact-input" required name="lastName" placeholder="Last Name *" />
              </div>

              <input className="contact-input" required type="email" name="email" placeholder="Email *" />
              <input className="contact-input" required name="subject" placeholder="Subject *" />
              <textarea className="contact-input" rows={4} required name="message" placeholder="Your Message *"></textarea>

              <button
                className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full shadow-lg"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {sent && (
                <p className="text-green-400 text-center font-semibold">
                  Message Sent Successfully ✔
                </p>
              )}

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
