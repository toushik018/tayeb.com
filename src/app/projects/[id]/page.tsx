import React from "react";
import { getProjectById, Project } from "@/lib/getProjects";
import Image from "next/image";

type ProjectDetailsProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: ProjectDetailsProps) {
  const project = await getProjectById(params.id);
  return {
    title: project ? project.title : "Project Not Found",
    description: project
      ? project.description
      : "No project description available",
  };
}

const ProjectDetails = async ({ params }: ProjectDetailsProps) => {
  const project = await getProjectById(params.id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <section className="project-details p-4 md:p-8">
      <h1 className="text-2xl md:text-4xl font-bold mb-4">{project.title}</h1>
      <Image
        src={project.thumbnail}
        alt={project.title}
        width={800}
        height={450}
        className="rounded-md mb-4"
      />
      <p className="text-lg mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Live Demo
        </a>
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 text-sm font-medium text-white bg-gray-600 rounded-md hover:bg-gray-700"
        >
          Source Code
        </a>
      </div>
    </section>
  );
};

export default ProjectDetails;
