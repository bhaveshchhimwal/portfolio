"use client";

import { BackgroundGradient } from "@/components/ui/background-gradient";

const SkillSection = () => {
  const SKILLS = [
    {
      category: "Programming Language",
      value: "C, C++, JavaScript, Python, MySQL",
    },
    {
      category: "Frameworks/ Libraries",
      value:
        "React.js, Node.js, Express.js",
    },
    {
      category: "Database",
      value: "PostgreSQL, MongoDB",
    },
    {
      category: "Subjects",
      value: "OOPS, Data Structures, Algorithms, OS, DBMS"
    },
  ];
  return (
    <BackgroundGradient className="rounded-[22px] w-[100%] p-4 sm:p-10 bg-white dark:bg-dark-color-2">
      <h1 className="text-xl md:text-2xl font-bold text-center">My Technical Skills</h1>
      <div className="mx-auto">
        {SKILLS.map((skill, key) => (
          <div key={key} className="flex gap-1 md:gap-3 mt-5 text-sm md:text-base">
            <div className="dark:text-blue-400">{skill.category}:</div>
            <div>{skill.value}</div>
          </div>
        ))}
      </div>
    </BackgroundGradient>
  );
};

export default SkillSection;
