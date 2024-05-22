import Link from "next/link";

export default function AboutMeComponent() {
  return (
    <>
      <h2 className="text-3xl font-bold mt-4 py-2 sm:text-4xl">About Me</h2>
      <div className="mx-auto max-w-6xl lg:max-w-6xl">
        <blockquote className="text-xl italic hover:bg-opacity-90">
          <p className="my-8 text-justify">
            {`"A passionate Full Stack Developer, I specialize in bringing web and mobile applications to life. My toolkit is stocked with advanced technologies such as React.Js, Node.js, and more, ensuring high performance and captivating user experiences. My journey is marked by a commitment to excellence, leadership in team settings, and a continuous pursuit of groundbreaking projects. Join me in forging digital pathways that resonate with creativity, precision, and endless possibilities. Let’s transform ideas into reality, together."`}
          </p>
        </blockquote>
      </div>
    </>
  );
}
