import React from "react";
import { projects } from "../data/Projects";
import ProjectCard from "../cards/ProjectCard";

const Projects = () => {
  return (
    <div className="py-10 px-4 md:px-0">
      <div className="mb-8">
        <span className="bg-black text-white px-3 py-1 rounded-md text-sm">
          My Projects
        </span>
        <h1 className="text-2xl font-bold mt-3">Check out my latest work</h1>
        <p className="text-gray-400 mt-2">
          I've worked on a variety of AI/ML projects...
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
