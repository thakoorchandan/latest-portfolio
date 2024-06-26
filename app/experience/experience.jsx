/* eslint-disable @next/next/no-img-element */
const experience = [
  {
    companyName: "Shanti Infosoft LLP",
    title: "MERN Stack Engineer",
    duration: "Jan 2024 – May 2024",
    location: "Indore, Madhya Pradesh",
    description: [
      "Currently working as a MERN Stack Developer at Shanti Infosoft, focusing on the BatterSea Edtech Platform and NimbleFi Central Banking Project (Educational & Financial Technologies)",
      "nvolved in the development of the BatterSea Edtech platform, focusing on creating an interactive and user-friendly educational experience.",
      "Contributing to the NimbleFi Central Banking project, developing robust and secure banking solutions.",
      "Utilizing a diverse tech stack including PostgreSQL, DBeaver, React.js, Typescript, Redux, Node.js, Knex.js, Express, HTML, CSS, SCSS, Bootstrap, and Tailwind CSS to deliver scalable and high-performance web applications.",
    ],
    logo: "/assets/images/ShantiInfosoft.png",
  },
  {
    companyName: "Tekion Corp",
    title: "Associate Software Engineer",
    duration: "Feb 2022 – Sep 2023",
    location: "Chennai, Tamilnadu / Bangalore, Karnataka",
    description: [
      "Contributed to the design and development of end-to-end UI flow for Vehicle Inventory management in the automotive retail industry.",
      "Worked on the development and integration of advanced features in Tekion's ARC and DRP Vehicle Inventory module using React.",
      "Conducted Knowledge Transfer (KT) sessions for new team members in the Vehicle Inventory team, ensuring a solid understanding of project requirements.",
      "Addressed and implemented critical hotfixes to ensure optimal application performance and reliability.",
      "Guided freshers through the project's codebase, assisting in task selection and code comprehension for effective onboarding.",
      "Developed custom reusable React components and SCSS mixins for the organization's design system.",
      "Created a dynamic table solution for enhanced data visualization and interaction.",
      "Resolved critical production issues promptly with browser debugging techniques.",
      "Collaborated with cross-functional teams for seamless feature integration and user experience.",
      "Conducted thorough unit and integration tests for application reliability and user satisfaction.",
      "Employed Agile methodologies for efficient project management, feature delivery, and adaptation to changes.",
      "Actively participated in code reviews and provided constructive feedback to peers, fostering a culture of continuous improvement and coding excellence.",
    ],
    logo: "/assets/images/Tekion.png",
  },
];

function ExperienceComponent() {
  return (
    <>
      <h2 className="text-3xl mx-auto max-w-6xl font-bold mt-4 py-2 sm:text-2xl">
        Experience
      </h2>
      <div className="mx-auto max-w-6xl lg:max-w-6xl">
        {experience.map((experience, index) => {
          return (
            <div
              key={index}
              className="mt-8 flex shadow-lg rounded-xl p-8 w-100 sm:flex-col dark:shadow-white"
            >
              <div className=" sm:flex-row sm:w-full sm:border-0 sm:mb-4 dark:border-white">
                <div className="flex items-center sm:flex-col sm:justify-center">
                  <img
                    src={experience.logo}
                    alt={experience.companyName}
                    className="w-auto h-16 object-cover sm:flex-1 sm:mb-0 dark:ring-white sm:object-none sm:h-auto"
                    width={100}
                    height={100}
                  />
                  {/* <p className="ml-8 text-2xl font-bold mt-1  sm:text-xl">
                    {experience.title}
                  </p> */}
                  <div className="ml-8 sm:ml-0 sm:mt-4 sm:items-center">
                    <p className="text-lg font-semibold sm:text-m">
                      {experience.companyName} -{" "}
                      <span className="font-medium text-base">
                        {experience.location}
                      </span>
                    </p>
                    <p className="italic sm:text-sm ">{experience.duration}</p>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-2xl font-bold mt-1  sm:text-xl">
                    {experience.title}
                  </p>
                  {/* <p className="text-lg font-semibold sm:text-m">
                    {experience.companyName} -{" "}
                    <span className="font-medium text-base">
                      {experience.location}
                    </span>
                  </p>
                  <p className="italic sm:text-sm">{experience.duration}</p> */}
                </div>
                <div className="pt-4">
                  <ul className="list-disc">
                    {experience.description.map((desc, index) => {
                      return (
                        <li key={index} className="sm:text-m">
                          {desc}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ExperienceComponent;
