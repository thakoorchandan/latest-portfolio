import ProjectCard from "../components/projectCard";
import SectionHeading from "../components/sectionHeading";
import Reveal from "../components/reveal";

function ProjectsComponent() {
  const projects = [
    {
      name: "Management Dashboard",
      imageUrl:
        "/assets/images/Panorbit.png",
      link: "https://panorbit-xi.vercel.app/",
      github: "https://github.com/thakoorchandan/Panorbit",
      techStack: "HTML, CSS, JavaScript, React, Tailwind CSS, Chakra UI",
      description:
        "My project includes a user-friendly interface with visually appealing elements. I utilized the latest web development practices to create a modern and efficient application",
    },
    {
      name: "Chat NBX",
      imageUrl:
        "/assets/images/ChatGptClone.png",
      link: "https://chatgpt-gn6b.onrender.com/login",
      github: "https://github.com/thakoorchandan/ChatGPT",
      techStack: "HTML, CSS, JavaScript, Next.Js, Tailwind CSS, Material UI, Bootstrap, Supabase, Vector DB",
      description:
        "Nimble.AI is a ChatGPT clone with enhanced features for makers built on top of using Next.js, TypeScript, Supabase, Jotai and Tailwind CSS.",
    },
    {
      name: "Movie Base",
      imageUrl:
        "/assets/images/MovieBase.png",
      link: "https://gsiv-23-thakoor-chandan.vercel.app/",
      github: "https://github.com/thakoorchandan/GSIV23_Thakoor_Chandan",
      techStack: "Typescript, React, NodeJs, Express",
      description:
        "This is a movie search engine application, User can view the list of movies and has a search functionality implemented using debouncing logic, an impressive UI, Clicking on any movie card can redirect to the movie details page, where user can view the movie ratings, movie description, movie genere along with the Recommended movies matching the genere are listed",
    },
    {
      name: "Star Wars Base",
      imageUrl:
        "/assets/images/Starwars.png",
      link: "https://thakoor-star-wars-app.netlify.app/",
      github: "https://github.com/thakoorchandan/Star-Wars-API",
      techStack: "HTML, CSS, JavaScript, API Integration",
      description:
        "This application is designed to showcase a beautiful user interface and includes a search functionality that allows users to look up characters from the Star Wars universe.",
    },
    {
      name: "Dosa Blendz",
      imageUrl: "/assets/images/Dosa-Blendz.png",
      link: "https://dosa-blendz.vercel.app/",
      github: "",
      techStack: "React with Nextjs, Typescript,Tailwind, MongoDb, NextAuth,",
      description: "Welcome to Dosa-Blendz, the premier online platform for ordering the most delicious and authentic dosas right to your doorstep. Whether you're a fan of the classic Masala Dosa, adventurous enough to try a Cheese Dosa, or craving a spicy Paneer Dosa, we've got you covered!",
    },
    {
      name: "TryCents",
      imageUrl: "/assets/images/cents-animated.png",
      link: "https://www.trycents.com/",
      github: "",
      techStack:
        "React, React Native, NodeJs, Redux, Hooks, Postgresql, ExpressJs, Sass, Jest and Enzyme, Chai and Mocha",
      description:
        "Engineered web and mobile applications from ground for laundry automation, which encompasses custom CRM, dashboard, live-link, and dedicated apps for employees, drivers, and intake.",
    },
    {
      name: "Human Anatomy POC",
      imageUrl: "/assets/images/HumanAnatomy.png",
      link: "https://human-anatomy.vercel.app/",
      github: "",
      techStack: "React, NodeJs, Express, MongoDB",
      description:
        "Human Anatomy proof of concept requirement where a user can mark any specific part by clicking on the svg and provide a name along with description",
    },
    {
      name: "Anime Base",
      imageUrl: "/assets/images/AnimeLobb.png",
      link: "https://lobb-anime-assignment.vercel.app/",
      github: "https://github.com/thakoorchandan/loob-anime-app",
      techStack: "React, Redux, Cordova, Twilio, Pushy",
      description:
        "This is a mobile version application, Generate any random anime cards by clicking on refresh and view the details of the Anime by clicking on the card",
    },
  ];
  return (
    <>
      <Reveal>
        <SectionHeading
          eyebrow="Things I've built"
          title="Projects"
          subtitle="A selection of applications I've designed and engineered."
        />
      </Reveal>
      <div className="grid grid-cols-3 gap-6 sm:grid-cols-1 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={index} delay={(index % 3) * 100} className="h-full">
            <ProjectCard projectDetails={project} />
          </Reveal>
        ))}
      </div>
    </>
  );
}

export default ProjectsComponent;
