import { SOCIALS } from "../data/socials";
import { SocialLink } from "@/components/social-link";
import React from "react";
import { LINKS } from "@/lib/constants";
import Link from "next/link";
import HeaderAnimations from "@/components/headerAnimation";
import TechList from "@/components/teachList";
import { getDescription } from "@/lib/getDescription";
import { getProjects } from "@/lib/getProjects";
import ProjectList from "@/components/ProjectList";
import Description from "@/components/Description";

export default async function Home() {
  const description = await getDescription();
  const projects = await getProjects();
  const displayedProjects = projects.slice(0, 6);

  return (
    <React.Fragment>
      <section className="mb-5">
        <HeaderAnimations />

        <Description />

        <div className="flex space-x-4 mb-2 mt-4">
          {SOCIALS.map((social) => (
            <SocialLink
              key={social.label}
              aria-label={`Follow on ${social.label}`}
              href={social.href}
              icon={social.icon}
            />
          ))}
        </div>
        <p className="mt-4">
          <Link
            href={LINKS.RESUME}
            download="tayeb_resume.pdf"
            className="group relative inline-block overflow-hidden rounded px-3 py-1 text-base font-bold text-slate-900 border-b border-blue-950 dark:border-gray-400 cursor-pointer hover:text-gray-100 dark:text-gray-100 transition-transform duration-300 ease-in-out"
          >
            <span className="absolute inset-0 z-0 h-full rounded transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-8 bg-[hsla(222,50%,20%,0.7)] dark:bg-[hsla(222,80%,30%,1)]" />
            <span className="relative z-10">Download Resume</span>
          </Link>
        </p>
      </section>

      <div className="my-8 w-full border-t border-blue-950 dark:border-gray-400 opacity-30" />

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <div className="text-black dark:text-gray-300">
          <p className="mb-2">
            <strong>Khwaja Yunus Ali University</strong> - Bachelor of Science
            in Computer Science and Engineering
          </p>
          <p className="mb-2">2019 - May 2023</p>
        </div>
      </section>

      <TechList />

      <div className="my-8 w-full border-t border-blue-950 dark:border-gray-400 opacity-30" />

      <div className="mt-4">
        <h2 className="mb-6 text-2xl font-bold">New Projects</h2>

        <ProjectList />
      </div>
    </React.Fragment>
  );
}
