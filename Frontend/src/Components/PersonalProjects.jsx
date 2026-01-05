import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaBootstrap,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaCode,
  FaGlobe,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiExpress, SiMongodb } from "react-icons/si";

const PersonalProjects = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const projects = [
  {
    id: 1,
    title: "IT Company Portfolio Website",
    description:
      "A modern and responsive portfolio website for an IT company showcasing their services, team, and projects. Features include animated sections, service cards, and a contact form with validation.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1473&q=80",
    technologies: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    ],
    status: "Completed",
    date: "Jan 2023",
    link: "https://webarc-nu.vercel.app/",
  },

  {
    id: 2,
    title: "SPTraveler - Flight Booking Platform",
    description:
      "An ongoing flight booking and travel platform that allows users to search for flights, compare prices, and book tickets. Features include user authentication, payment integration, and personalized travel recommendations.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc11?auto=format&fit=crop&w=1474&q=80",
    technologies: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-yellow-400" /> },
      { name: "Express.js", icon: <SiExpress className="text-blue-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    ],
    status: "Ongoing",
    date: "Nov 2025 - Present",
    link: "https://travel-beta-nine.vercel.app/",
  },

  {
    id: 3,
    title: "HealthLife – Online Doctor Consultation Platform",
    description:
      "A healthcare consultation website where patients can book appointments and consult doctors online. Includes doctor listings, patient scheduling, secure consultations, and a user-friendly healthcare-focused UI.",
    image: "/healthlife.png", // ← replace with your HealthLife image path
    technologies: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-yellow-400" /> },
      { name: "Express.js", icon: <SiExpress className="text-blue-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    ],
    status: "Completed",
    date: "Aug 2025 - Sep 2025",
    link: "#",
  },

  {
    id: 4,
    title: "EduConsult – Student & Teacher Consultation Platform",
    description:
      "A consultation platform connecting students with teachers for guidance, mentorship, and academic consulting. Features include expert profiles, booking sessions, and structured knowledge-sharing workflows.",
    image: "/educonsult.png", // ← replace with your EduConsult image path
    technologies: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-yellow-400" /> },
      { name: "Express.js", icon: <SiExpress className="text-blue-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    ],
    status: "Completed",
    date: "Sep 2025 - Nov 2025",
    link: "#",
  },
];


  return (
    <div id="project" className="w-full bg-[#0a192f] py-16 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-14"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-wide"
          >
            PERSONAL PROJECTS
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-cyan-400 font-semibold"
          >
            My Recent Work
          </motion.p>
        </motion.div>

        {/* Project Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ scale: 1.03, rotateX: 2, rotateY: -2 }}
              className="relative bg-[#112240] rounded-2xl shadow-xl overflow-hidden group border border-transparent hover:border-cyan-400/40 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.05 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 6,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#112240] via-transparent to-transparent opacity-80"></div>

                {/* Status badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === "Completed"
                        ? "bg-green-500 text-white"
                        : "bg-yellow-500 text-gray-900"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-300 mb-5 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center text-gray-400 text-sm mb-4">
                  <FaCalendarAlt className="mr-2 text-cyan-400" />
                  <span>{project.date}</span>
                </div>

                <h4 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center">
                  <FaCode className="mr-2" />
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center bg-[#0a192f] px-3 py-1 rounded-full border border-cyan-500/20"
                    >
                      <span className="mr-1">{tech.icon}</span>
                      <span className="text-white text-sm">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyan-400 relative group/link"
                    whileHover={{ x: 3 }}
                  >
                    <span className="mr-2">View Project</span>
                    <FaExternalLinkAlt />
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-cyan-400 transition-all group-hover/link:w-full"></span>
                  </motion.a>

                  {project.status === "Ongoing" && (
                    <div className="flex items-center text-yellow-400 text-sm animate-pulse">
                      <FaGlobe className="mr-1" />
                      <span>In Development</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div variants={itemVariants} className="mt-16 text-center">
          <p className="text-gray-400 mb-5">Want to explore more of my work?</p>
          <motion.a
            href="https://github.com/Pratyakshjinghala"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="relative inline-flex items-center justify-center px-8 py-3 font-bold text-white rounded-lg overflow-hidden group"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500 group-hover:from-blue-500 group-hover:to-cyan-500 animate-pulse"></span>
            <span className="relative flex items-center z-10">
              <FaGithub className="mr-2 text-white"/>
             <p className="text-white"> View My GitHub</p>
            </span>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default PersonalProjects;
