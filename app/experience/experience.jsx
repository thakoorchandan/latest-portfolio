/* eslint-disable @next/next/no-img-element */
import SectionHeading from "../components/sectionHeading";
import Reveal from "../components/reveal";

const experience = [
  {
    companyName: "Shanti Infosoft LLP",
    title: "MERN Stack Engineer",
    duration: "Jan 2024 – May 2024",
    location: "Indore, Madhya Pradesh",
    description: [
      "Worked as a MERN Stack Developer focusing on the BatterSea Edtech Platform and the NimbleFi Central Banking project (Educational & Financial Technologies).",
      "Involved in developing the BatterSea Edtech platform, focusing on an interactive and user-friendly educational experience.",
      "Contributed to the NimbleFi Central Banking project, developing robust and secure banking solutions.",
      "Utilized a diverse tech stack including PostgreSQL, DBeaver, React.js, TypeScript, Redux, Node.js, Knex.js, Express, HTML, CSS, SCSS, Bootstrap, and Tailwind CSS to deliver scalable, high-performance web applications.",
    ],
    logo: "/assets/images/ShantiInfosoft.png",
  },
  {
    companyName: "Tekion Corp",
    title: "Associate Software Engineer",
    duration: "Feb 2022 – Sep 2023",
    location: "Chennai / Bangalore",
    description: [
      "Contributed to the design and development of end-to-end UI flows for Vehicle Inventory management in the automotive retail industry.",
      "Worked on development and integration of advanced features in Tekion's ARC and DRP Vehicle Inventory module using React.",
      "Conducted Knowledge Transfer (KT) sessions for new team members, ensuring a solid understanding of project requirements.",
      "Addressed and implemented critical hotfixes to ensure optimal application performance and reliability.",
      "Developed custom reusable React components and SCSS mixins for the organization's design system.",
      "Created a dynamic table solution for enhanced data visualization and interaction.",
      "Resolved critical production issues promptly using browser debugging techniques.",
      "Collaborated with cross-functional teams for seamless feature integration and great user experience.",
      "Conducted thorough unit and integration tests for application reliability.",
      "Employed Agile methodologies for efficient project management and feature delivery.",
      "Actively participated in code reviews, fostering a culture of continuous improvement.",
    ],
    logo: "/assets/images/Tekion.png",
  },
];

function ExperienceComponent() {
  return (
    <>
      <Reveal>
        <SectionHeading eyebrow="Where I've worked" title="Experience" />
      </Reveal>
      <div className="flex flex-col gap-6">
        {experience.map((exp, index) => (
          <Reveal key={index} delay={index * 120}>
            <div className="glass glass-hover p-8 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white p-2 shadow-inner ring-1 ring-black/5">
                    <img
                      src={exp.logo}
                      alt={exp.companyName}
                      className="h-full w-full object-contain"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold sm:text-lg">
                      {exp.title}
                    </h3>
                    <p className="text-sm font-medium text-muted">
                      {exp.companyName} · {exp.location}
                    </p>
                  </div>
                </div>
                <span className="glass-soft rounded-full px-3 py-1 text-sm font-semibold text-accent">
                  {exp.duration}
                </span>
              </div>

              <ul className="mt-6 flex flex-col gap-3">
                {exp.description.map((desc, i) => (
                  <li key={i} className="flex gap-3 text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-accent to-accent-soft" />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}

export default ExperienceComponent;
