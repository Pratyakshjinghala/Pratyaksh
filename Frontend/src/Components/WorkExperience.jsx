import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaBootstrap,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBriefcase,
  FaPhp,
  FaCss3,
} from "react-icons/fa";
import { SiExpress, SiJavascript, SiMongodb, SiTailwindcss } from "react-icons/si";

const WorkExperience = () => {
  const [activeTab, setActiveTab] = useState("experience");

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const projects = [
    {
      id: 1,
      title: "Webacrlight.com",
      description:
        "A comprehensive web analytics platform providing real-time insights and reporting for businesses. Features include dashboard visualization, user behavior tracking, and conversion optimization tools.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      technologies: [
        { name: "Javascript", icon: <SiJavascript className="text-cyan-400" /> },
        { name: "Php", icon: <FaPhp className="text-green-500" /> },
        { name: "Html", icon: <FaHtml5 className="text-green-600" /> },
        { name: "Css", icon: <FaCss3 className="text-sky-400" /> },
      ],
      link: "https://www.webarclight.com/",
    },
    {
      id: 2,
      title: "HMS Hospital Management System",
      description:
        "A complete Hospital Consultancy management System where Pateint can easily consult online with doctor or a person It provides doctor scheduling, Pateint record management, billing, and reporting features — all designed to streamline hospital operations and improve patient care experience.",
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      technologies: [
        { name: "React", icon: <FaReact className="text-cyan-400" /> },
        { name: "Express", icon: <SiExpress className="text-gray-300" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        {
          name: "Tailwind",
          icon: <SiTailwindcss className="text-purple-600" />,
        },
      ],
      link: "http://www.cywala.com/",
    },
  ];

  return (
    <div id="experience" className="w-full bg-[#0a192f] py-10 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-white mb-2"
          >
            EXPERIENCE
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-cyan-400 font-semibold"
          >
            MY WORK EXPERIENCE
          </motion.p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-[#112240] rounded-lg p-1">
            <button
              onClick={() => setActiveTab("experience")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                activeTab === "experience"
                  ? "bg-cyan-500 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                activeTab === "projects"
                  ? "bg-cyan-500 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Projects
            </button>
          </div>
        </div>

        {/* Experience Section */}
        {activeTab === "experience" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#112240] rounded-xl shadow-xl overflow-hidden"
          >
            <div className="md:flex">
              {/* Left Column - Job Details */}
              <div className="md:w-2/5 bg-gradient-to-br from-cyan-600 to-blue-600 p-6 md:p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-white bg-opacity-20 p-3 rounded-lg mr-4">
                    <FaBriefcase className="text-yellow-900 text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Front-end Developer
                    </h3>
                    <p className="text-cyan-100">WEBARCLIGTH | INTERN</p>
                  </div>
                </div>

                <div className="flex items-center mb-4 text-white">
                  <FaCalendarAlt className="mr-3 text-cyan-200" />
                  <span>JUNE 2025 - SEPT</span>
                </div>

                <div className="flex items-center mb-6 text-white">
                  <FaMapMarkerAlt className="mr-3 text-cyan-200" />
                  <span>REMOTE</span>
                </div>

                <button className="w-full bg-white text-white font-bold py-3 px-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
                  FULL TIME
                </button>
              </div>

              {/* Right Column - About Company */}
              <div className="md:w-3/5 p-6 md:p-8">
                <h3 className="text-xl font-bold text-white mb-4">
                  About Company
                </h3>
                <p className="text-gray-300 mb-4">
                  Webarclight is a leading technology company specializing in
                  innovative digital solutions for businesses worldwide. With a
                  focus on cutting-edge technologies and user-centered design,
                  we help companies transform their digital presence.
                </p>
                <p className="text-gray-300 mb-4">
                  Our team of experts is dedicated to delivering high-quality
                  products that exceed client expectations and drive business
                  growth. We foster a culture of innovation, collaboration, and
                  continuous learning.
                </p>
                <p className="text-gray-300">
                  At Webarclight, we believe in the power of technology to solve
                  complex problems and create meaningful experiences for users
                  across various industries.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Projects Section */}
        {activeTab === "projects" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: project.id * 0.1 }}
                className="bg-[#112240] rounded-xl shadow-xl overflow-hidden group"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#112240] to-transparent opacity-70"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <div
                          key={index}
                          className="flex items-center bg-[#0a192f] px-3 py-1 rounded-full"
                        >
                          <span className="mr-1">{tech.icon}</span>
                          <span className="text-white text-sm">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                  >
                    <span className="mr-2">View Project</span>
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default WorkExperience;
