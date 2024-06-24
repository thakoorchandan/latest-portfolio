/* eslint-disable @next/next/no-img-element */
function ProjectCard(props) {
  const { name, imageUrl, link, techStack, description, github } = props.projectDetails;
  return (
    <div className="project-card w-72 h-auto shadow-lg flex flex-col justify-between items-center m-8 p-6 relative group dark:border-2 border-white rounded">
      <img src={imageUrl} alt="skill" className="project-card-logo w-full h-48 object-cover rounded-md mb-4" />
      <div className="project-card-content flex-grow">
        <div className="project-card-title text-[20px] text-black dark:text-white font-bold py-2 text-center">
          {name}
        </div>
        <div className="project-card-tech-stack text-[14px] text-black dark:text-white font-semibold text-center mb-2">
          {techStack}
        </div>
        <div className="project-card-description text-[12px] text-black dark:text-white py-2 text-center">
          {description}
        </div>
      </div>
      <div className="project-card-actions flex flex-col items-center mt-4">
        <a
          href={github ? github : ""}
          rel="noopener"
          target="_blank"
          className="text-black text-[16px] underline font-bold dark:text-white mb-2"
        >
          {github ? "Github" : "Private Repo"}
        </a>
        <a
          href={link}
          rel="noopener"
          target="_blank"
          className="text-black text-[16px] underline font-bold dark:text-white"
        >
          Link
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
