import React from 'react';

const projects = [
  {
    title: "Portfolio Website",
    desc: "A personal portfolio built with React and Tailwind CSS.",
    emoji: "📸",
  },
  {
    title: "Task Manager",
    desc: "A productivity app to manage daily tasks efficiently.",
    emoji: "📝",
  },
  {
    title: "Weather App",
    desc: "A simple app showing live weather updates.",
    emoji: "☀️",
  },
];

export default function Projects() {
  return (
    <div className="w-full min-h-screen bg-yellow-50 p-10 rounded-xl">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
        My Projects
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`bg-white shadow-xl p-6 rounded-lg w-72 border border-gray-200 transform ${
              index % 2 === 0 ? "rotate-2" : "-rotate-2"
            } hover:scale-105 transition duration-300`}
          >
            <div className="text-4xl mb-4">{project.emoji}</div>
            <h3 className="text-xl font-semibold text-gray-800">
              {project.title}
            </h3>
            <p className="text-gray-600 mt-3">{project.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}