import SectionHeading from "../components/sectionHeading";
import Reveal from "../components/reveal";

export default function AboutMeComponent() {
  return (
    <>
      <Reveal>
        <SectionHeading eyebrow="Get to know me" title="About Me" />
      </Reveal>
      <Reveal delay={100}>
        <div className="glass glass-hover p-8 sm:p-6">
          <p className="text-lg leading-relaxed text-muted">
            A passionate{" "}
            <span className="font-semibold text-foreground">
              Full Stack Developer
            </span>{" "}
            specialized in bringing web and mobile applications to life. My
            toolkit is stocked with advanced technologies such as React.js,
            Node.js, and more — ensuring high performance and captivating user
            experiences. My journey is marked by a commitment to excellence,
            leadership in team settings, and a continuous pursuit of
            groundbreaking projects. Let&apos;s transform ideas into reality,
            together.
          </p>
        </div>
      </Reveal>
    </>
  );
}
