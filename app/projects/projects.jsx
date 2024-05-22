import ProjectCard from "../components/projectCard";

function ProjectsComponent() {
  const projects = [
    {
      name: "Managent Dashboard",
      imageUrl:
        "/assets/images/Panorbit.png",
      link: "https://panorbit-xi.vercel.app/",
      techStack: "HTML, CSS, JavaScript, React, Tailwind CSS, Chakra UI",
      description:
        "My project includes a user-friendly interface with visually appealing elements. I utilized the latest web development practices to create a modern and efficient application",
    },
    {
      name: "Movie Base",
      imageUrl:
        "/assets/images/MovieBase.png",
      link: "https://gsiv-23-thakoor-chandan.vercel.app/",
      techStack: "Typescript, React, NodeJs, Express",
      description:
        "This is a movie search engine application, User can view the list of movies and has a search functionality implemented using debouncing logic, an impressive UI, Clicking on any movie card can redirect to the movie details page, where user can view the movie ratings, movie description, movie genere along with the Recommended movies matching the genere are listed",
    },
    {
      name: "Portfolio",
      imageUrl:
        "data:image/jpeg;base64,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",
      link: "https://thakoor-portfolio.vercel.app/",
      techStack: "React with Nextjs, Tailwind",
      description: "An introductory site to my profile where you can view all my experience, education, and project work.",
    },
    {
      name: "Dosa Blendz",
      imageUrl: "/assets/images/Dosa-Blendz.png",
      link: "https://dosa-blendz.vercel.app/",
      techStack: "React with Nextjs, Typescript,Tailwind, MongoDb, NextAuth,",
      description: "Welcome to Dosa-Blendz, the premier online platform for ordering the most delicious and authentic dosas right to your doorstep. Whether you're a fan of the classic Masala Dosa, adventurous enough to try a Cheese Dosa, or craving a spicy Paneer Dosa, we've got you covered!",
    },
    {
      name: "TryCents",
      imageUrl: "/assets/images/cents-animated.png",
      link: "https://www.trycents.com/",
      techStack:
        "React, React Native, NodeJs, Redux, Hooks, Postgresql, ExpressJs, Sass, Jest and Enzyme, Chai and Mocha",
      description:
        "Engineered web and mobile applications from ground for laundry automation, which encompasses custom CRM, dashboard, live-link, and dedicated apps for employees, drivers, and intake.",
    },
    {
      name: "Human Anatomy POC",
      imageUrl: "/assets/images/HumanAnatomy.png",
      link: "https://human-anatomy.vercel.app/",
      techStack: "React, NodeJs, Express, MongoDB",
      description:
        "Human Anatomy proof of concept requirement where a user can mark any specific part by clicking on the svg and provide a name along with description",
    },
    {
      name: "Anime Base",
      imageUrl: "/assets/images/AnimeLobb.png",
      link: "https://lobb-anime-assignment.vercel.app/",
      techStack: "React, Redux, Cordova, Twilio, Pushy",
      description:
        "This is a mobile version application, Generate any random anime cards by clicking on refresh and view the details of the Anime by clicking on the card",
    },
  ];
  return (
    <>
      <h2 className="text-3xl mx-auto max-w-6xl font-bold mt-4 py-2 sm:text-2xl">
        Projects
      </h2>
      <div className="mx-auto max-w-6xl lg:max-w-6xl flex justify-center flex-wrap sm:flex-nowrap sm:flex-col">
        {projects.map((project, index) => {
          return <ProjectCard key={index} projectDetails={project} />;
        })}
      </div>
    </>
  );
}

export default ProjectsComponent;
