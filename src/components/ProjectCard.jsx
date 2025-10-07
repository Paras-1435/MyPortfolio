import React from "react";

function ProjectCard({ title, description, image, liveLink, githubLink }) {
  return (
    <div className="relative group rounded-2xl overflow-hidden shadow-xl transition-transform transform hover:scale-105">
      {/* Project Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover group-hover:brightness-75 transition-all"
      />

      {/* Overlay on hover */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:bg-black/50 group-hover:opacity-500 transition-opacity">
        <h3 className="text-white  text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300  mb-4">{description}</p>
        <div className="flex gap-4">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition-colors"
            >
              Live Demo
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
