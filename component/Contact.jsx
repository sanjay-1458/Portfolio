import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "2d165571-89fb-4400-b229-5dcfcaffdc65");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully! I'll be in touch soon.");
        event.target.reset();
      } else {
        console.error("Web3Forms Error:", data);
        setResult(
          `Failed to send: ${data.message || "An unknown error occurred."}`
        );
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setResult(
        "Failed to send message. Please check your network connection."
      );
    }
  };

  return (
    <div
      id="contact"
      className="bg-black text-white w-full px-[5%] py-24 scroll-mt-20 relative overflow-hidden"
    >
      <ParticleBackground />
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="px-6 py-2 rounded-full border border-indigo-600/50 bg-indigo-900/30 text-indigo-300 font-medium tracking-wider">
            Connect with me
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-5xl md:text-6xl font-extrabold text-white mb-16"
        >
          Get in touch<span className="text-[#1cd8d2]">.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center max-w-3xl mx-auto mt-5 mb-16 font-Ovo text-gray-300"
        >
          If you have any questions, comments, or feedback, please use the form
          below. I will reply as soon as possible.
        </motion.p>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-2xl mx-auto p-8 md:p-10 rounded-xl bg-gray-900/80 shadow-2xl border border-gray-800"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              className="flex-1 p-3 outline-none rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-[#1cd8d2] transition-all text-white placeholder-gray-500"
              type="text"
              placeholder="Enter your name"
              name="name"
              required
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-3 outline-none rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-[#1cd8d2] transition-all text-white placeholder-gray-500"
              name="email"
              required
            />
          </div>

          <textarea
            className="w-full p-4 outline-none rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-[#1cd8d2] transition-all text-white placeholder-gray-500 mb-8"
            rows="6"
            placeholder="Enter your message"
            name="message"
            required
          ></textarea>

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            type="submit"
            className="py-3 px-8 w-max flex items-center justify-between gap-2 
                        bg-[#1cd8d2] text-gray-900 rounded-full font-semibold text-lg 
                        mx-auto transition-all duration-300 shadow-lg shadow-[#1cd8d2]/30 
                        hover:bg-[#15b5ac] hover:shadow-[#1cd8d2]/50"
          >
            Send Message
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-send"
            >
              <path d="m22 2-7 19-3-8-8-3Z" />
              <path d="M22 2 11 13" />
            </svg>
          </motion.button>

          <p
            className={`mt-6 text-center text-sm font-medium ${
              result.includes("Successfully")
                ? "text-green-400"
                : result.includes("Error") || result.includes("Failed")
                ? "text-red-400"
                : "text-gray-400"
            }`}
          >
            {result}
          </p>
        </motion.form>
      </div>
    </div>
  );
}

export default Contact;
