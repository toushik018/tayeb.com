"use client";

import React, { useEffect, useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { getProjects, Project } from "@/lib/getProjects";
import Link from "next/link";

const ProjectList = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const fetchedProjects = await getProjects();
      setProjects(fetchedProjects.slice(0, 6));
      setLoading(false);
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <ul>
        {projects.map((project) => (
          <li key={project._id} className="py-1">
            <Link href={`/projects/${project._id}`}>
              <ProjectCard project={project} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectList;
