"use client";

import React, { useEffect, useState } from "react";
import { getSkills } from "@/lib/getSkills";
import { ISkill } from "@/types/skill";

const TechList = () => {
  const [skills, setSkills] = useState<ISkill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      const fetchedSkills = await getSkills();
      setSkills(fetchedSkills);
      setLoading(false);
    };

    fetchSkills();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const groupedSkills = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, ISkill[]>,
  );

  const stack = {
    title: "Development Powerhouse - Stack",
    subtitle: "Essential software and hardware tools that fuel my projects.",
    groups: Object.keys(groupedSkills).map((category) => ({
      id: category,
      title: category.replace(/-/g, " ").toLocaleLowerCase(),
      items: groupedSkills[category],
    })),
  };

  return (
    <section>
      <div className="flex flex-col gap-7 mb-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">{stack.title}</h2>
          <p className="text-xl text-gray-800 dark:text-gray-100">
            {stack.subtitle}
          </p>
        </div>
        {stack.groups.map((group) => (
          <div key={group.id} className="flex flex-col gap-4 ">
            <h3 className="text-xl font-medium dark:text-gray-100">
              {group.title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {group.items.map((item) => (
                <a
                  key={item._id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-800 dark:text-gray-100 hover:text-blue-800 transition-colors"
                >
                  <span className="w-4 h-4 text-blue-800">•</span> {item.title}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechList;
