"use client";

import { BackgroundGradient } from "@/components/ui/background-gradient";

const SkillSection = () => {
  const SKILLS = [
    {
      category: "Languages",
      value: 
        "C, C++, JavaScript, Python, SQL",
    },
    {
      category: "Frameworks/ Libraries",
      value:
        "React.js, Node.js, Express.js, MongoDB, Firebase, PostgreSQL",
    },
    {
      category: "Subjects",
      value: "OOPS, Data Structures, Algorithms, OS, DBMS",
    },
    {
      category: "Tools",
      value: "Git, GitHub, Postman",
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
