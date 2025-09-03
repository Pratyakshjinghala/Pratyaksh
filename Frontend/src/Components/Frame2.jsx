import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
];

export default function Frame2() {
  return (
    <div id="skills" className="w-full bg-[#0a192f] py-10 px-6">
      <h2 className="text-white text-3xl font-bold text-center mb-8">
        My Skills
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-[#112240] rounded-xl p-6 shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <span className="text-5xl mb-3">{skill.icon}</span>
            <span className="text-white text-lg font-semibold">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
