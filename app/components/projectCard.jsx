/* eslint-disable @next/next/no-img-element */
function ProjectCard(props) {
  const { name, imageUrl, link, techStack, description, github } =
    props.projectDetails;

  const techList = techStack
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  return (
    <div className="glass glass-hover group flex h-full w-full flex-col overflow-hidden">
      <div className="relative h-44 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold">{name}</h3>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {techList.map((tech, i) => (
            <span
              key={i}
              className="rounded-md bg-accent/10 px-2 py-0.5 text-[11px] font-medium text-accent"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="mt-3 line-clamp-4 flex-1 text-sm text-muted">
          {description}
        </p>

        <div className="mt-5 flex items-center gap-3">
          <a
            href={link}
            rel="noopener noreferrer"
            target="_blank"
            className="btn-primary flex-1 text-sm"
          >
            Live Demo
          </a>
          {github ? (
            <a
              href={github}
              rel="noopener noreferrer"
              target="_blank"
              className="btn-ghost text-sm"
            >
              GitHub
            </a>
          ) : (
            <span className="btn-ghost cursor-default text-sm opacity-70">
              Private
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
