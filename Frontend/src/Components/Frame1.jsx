import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import heroImg from "../assets/hero.webp"; // keep inside src/assets
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function Frame1() {
  return (
    <section id="home" className="w-full min-h-screen bg-[#0D1B2A] flex flex-col md:flex-row items-center justify-between px-6 md:px-20 overflow-hidden">
      {/* Left Section - Text */}
      <motion.div
        className="max-w-5xl text-white md:pr-10 text-center md:text-left mt-20 md:mt-0"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <span className="uppercase text-xs sm:text-sm font-semibold tracking-wide bg-[#13274F] text-white px-3 py-1 rounded inline-block">
          Pratyaksh Chaudhary
        </span>

        <h2 className=" sm:text-xl md:text-5xl lg:text-6xl font-extrabold leading-snug mt-6 font-['Poppins']">
          HEY! I’M <span className="text-white">PRATYAKSH</span>
          <br />
          <span className="text-blue-500 block">
            I’M A FULL STACK WEB DEVELOPER
          </span>
        </h2>

        <p className="text-white text-base sm:text-lg md:text-xl mt-6 leading-relaxed font-['Roboto']">
          Full-stack web developer with strong expertise in Html, Css, Tailwind,
          Bootstrap, JavaScript, React, Node.js, Express, and MongoDB,
          specializing in building scalable and user-friendly web applications.
          Skilled at creating responsive front-end interfaces with React and
          Tailwind
        </p>

        {/* Buttons + Social */}
       <div className="mt-8 flex flex-col sm:flex-row items-center gap-6">
  {/* Contact Button */}
  <Link
    to="contact"
    smooth={true}
    duration={500}
    className="bg-[#2F2F2F] hover:bg-blue-600 px-6 py-3 rounded-lg font-medium shadow-lg transition transform hover:scale-105"
  >
    <p className="text-white">GET IN TOUCH →</p>
  </Link>

  {/* Social Icons */}
  <div className="flex space-x-4">
    {[
      { icon: FaGithub, url: "https://github.com/Pratyakshjinghala" },
      { icon: FaLinkedinIn, url: "https://www.linkedin.com/in/pratyaksh-chaudhary-a57b22326/" },
    ].map(({ icon: Icon, url }, i) => (
      <motion.a
        key={i}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2, rotate: 10 }}
        className="p-3 rounded-full border border-gray-600 text-white hover:bg-pink-500 hover:text-white transition"
      >
        <Icon className="text-white" />
      </motion.a>
    ))}
  </div>
</div>

      </motion.div>

      {/* Right Section - Image */}
      <motion.div
        className="mt-10 md:mt-0 flex justify-center md:justify-end w-full md:w-1/2"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.img
          src={heroImg}
          alt="Profile"
          className="w-[300px] sm:w-[300px] md:w-[500px] lg:w-[600px] object-contain drop-shadow-2xl"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
