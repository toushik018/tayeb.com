"use client";

import { GitHubIcon } from "@/components/icons";
import { SocialLink } from "@/components/social-link";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Project = {
  _id: string;
  title: string;
  repo: string;
  thumbnail: string;
  description: string;
  tags: string[];
};

type Props = {
  project: Project;
};

export const ProjectCard = ({ project }: Props) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/projects/${project._id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="relative my-4 flex flex-col sm:flex-row items-start gap-3 md:gap-5 group lg:transition-opacity border border-gray-300 dark:border-gray-700 backdrop-blur-3xl px-4 py-4 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition-transform duration-700 cursor-pointer"
    >
      <div className="relative flex-shrink-0 rounded border-2 border-base-6 group-hover:border-blue-500 transition-colors overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          width={150}
          height={90}
          className="group-hover:scale-110 transition-transform will-change-transform"
        />
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-medium">{project.title}</h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          {project.description}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex flex-wrap gap-1">
            {project.tags.map((techStackItem, idx) => (
              <span
                className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                key={idx}
              >
                {techStackItem}
              </span>
            ))}
          </div>
          <div className="flex items-center">
            <SocialLink
              icon={GitHubIcon}
              href={project.repo}
              className="h-6 w-6 flex-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
