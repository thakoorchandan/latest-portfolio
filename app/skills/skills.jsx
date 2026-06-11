"use client";
import { useTheme } from "next-themes";
import SkillCard from "../components/skillCard";
import SoftSkillCard from "../components/softSkillsCard";
import SectionHeading from "../components/sectionHeading";
import Reveal from "../components/reveal";

function SkillsComponent() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const technicalSkills = [
    { name: "HTML", imageUrl: "/assets/svgs/html5.svg" },
    { name: "CSS", imageUrl: "/assets/svgs/css.svg" },
    { name: "JavaScript", imageUrl: "/assets/svgs/javascript.svg" },
    { name: "TypeScript", imageUrl: "/assets/svgs/typescript.svg" },
    { name: "React", imageUrl: "/assets/svgs/react.svg" },
    { name: "Next.js", imageUrl: "/assets/images/nextJs1.jpeg" },
    { name: "Tailwind", imageUrl: "/assets/images/tailwind.webp" },
    {
      name: "Node.js",
      imageUrl: isDark
        ? "/assets/svgs/node-js.svg"
        : "/assets/svgs/nodejs.svg",
    },
    {
      name: "Express",
      imageUrl: isDark
        ? "/assets/images/express.png"
        : "/assets/svgs/express.svg",
    },
    { name: "Postgres", imageUrl: "/assets/svgs/postgresql.svg" },
    { name: "MySQL", imageUrl: "/assets/svgs/mysql.svg" },
    { name: "MongoDB", imageUrl: "/assets/svgs/mongodb.svg" },
    {
      name: "AWS",
      imageUrl: isDark ? "/assets/svgs/aws-dark.svg" : "/assets/svgs/aws.svg",
    },
    { name: "Git", imageUrl: "/assets/svgs/git.svg" },
    { name: "Postman", imageUrl: "/assets/svgs/postman.svg" },
    { name: "npm", imageUrl: "/assets/svgs/npm.svg" },
  ];

  const softSkills = [
    "Leadership",
    "Effective Communication",
    "Team Management",
    "Problem-Solving",
    "Collaboration",
    "Learning Agility",
    "Critical Thinking",
    "Time Management",
  ];

  return (
    <>
      <Reveal>
        <SectionHeading eyebrow="What I work with" title="Skills" />
      </Reveal>

      <Reveal>
        <h3 className="mb-4 text-lg font-semibold">Technical Skills</h3>
      </Reveal>
      <div className="flex flex-wrap gap-3">
        {technicalSkills.map((skill, index) => (
          <Reveal key={index} delay={index * 45}>
            <SkillCard name={skill.name} imageUrl={skill.imageUrl} />
          </Reveal>
        ))}
      </div>

      <Reveal>
        <h3 className="mb-4 mt-10 text-lg font-semibold">Soft Skills</h3>
      </Reveal>
      <div className="flex flex-wrap gap-3">
        {softSkills.map((skill, index) => (
          <Reveal key={index} delay={index * 45}>
            <SoftSkillCard name={skill} />
          </Reveal>
        ))}
      </div>
    </>
  );
}

export default SkillsComponent;
