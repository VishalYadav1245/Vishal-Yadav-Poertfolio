"use client";

import { motion } from "framer-motion";
import { useState } from "react";

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

    // Send request to Backend API
    const res = await fetch("/api/sendmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setLoading(false);

    if (res.ok) {
      setSent(true);
      e.target.reset();
    } else {
      alert("Message failed to send!");
    }
  }

  return (
    <section
      id="contact"
      className="px-6 py-16 bg-[rgba(0,0,0,0.55)] backdrop-blur-md w-full"
    >
      <div className="w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-12"
        >
          Contact <span className="text-purple-400">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side */}
          <div className="space-y-6">
            <p className="text-gray-200 text-lg">vy0369156@gmail.com</p>
          </div>

          {/* Right side - Form */}
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

              <button className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full shadow-lg">
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
