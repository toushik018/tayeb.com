"use client"; // Add this at the top of the file to indicate client-side rendering

import React, { useEffect, useState } from "react";
import Head from "next/head";
import { ProjectCard } from "../../components/project-card";
import { getProjects, Project } from "@/lib/getProjects";

const Projects = () => {
  const [webApps, setWebApps] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const projects = await getProjects();
      setWebApps(projects);
      setLoading(false);
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const projects = {
    id: "projects",
    title: "Projects",
    subtitle: "A collection of web applications I've built.",
    groups: [
      {
        id: "web-apps",
        title: "Web Apps",
        items: webApps,
      },
    ],
  };

  return (
    <React.Fragment>
      <Head>
        <title>Projects - A collection of web applications Ive built.</title>
        <meta
          name="description"
          content="A collection of web applications I've built."
        />
      </Head>
      <section id={projects.id}>
        <h1 className="mb-4 text-2xl font-bold tracking-tighter">
          {projects.title}
        </h1>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
          {projects.subtitle}
        </p>
        {projects.groups.map((group) => (
          <div key={group.id} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 lg:gap-2">
              {group.items.map((project: Project, idx: any) => (
                <ProjectCard project={project} key={idx} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </React.Fragment>
  );
};

export default Projects;
