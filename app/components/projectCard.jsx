/* eslint-disable @next/next/no-img-element */
function ProjectCard(props) {
  const { name, imageUrl, link, techStack, description } = props.projectDetails;
  return (
    <div className="w-72 h-auto shadow-lg flex flex-col justify-between items-center m-8 p-6 relative group dark:border-2 border-white rounded">
      <img src={imageUrl} alt="skill" className="w-full h-48 object-cover rounded-md mb-4"></img>
      <div className="text-[20px] text-black dark:text-white font-bold py-2 text-center">
        {name}
      </div>
      <div className="text-[14px] text-black dark:text-white font-semibold text-center mb-2">
        {techStack}
      </div>
      <div className="text-[12px] text-black dark:text-white py-2 text-center">
        {description}
      </div>
      <a
        href={link}
        rel="noopener"
        target="_blank"
        className="text-black text-[16px] underline font-bold dark:text-white mt-4"
      >
        Link
      </a>
    </div>
  );
}

export default ProjectCard;
