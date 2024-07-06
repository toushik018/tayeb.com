"use client"; // Add this at the top of the file to indicate client-side rendering

import React, { useEffect, useState } from "react";
import { ISkill } from "@/types/skill";

const SkillList = () => {
  const [skills, setSkills] = useState<ISkill[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch("/api/skills");
        const data = await response.json();
        setSkills(data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching skills:", error);
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <ul>
        {skills.map((skill) => (
          <li key={skill._id} className="py-1">
            <div className="skill-card">
              <h3>{skill.title}</h3>
              <a href={skill.url} target="_blank" rel="noopener noreferrer">
                {skill.url}
              </a>
              <p>{skill.category}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SkillList;
