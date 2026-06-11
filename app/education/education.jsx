/* eslint-disable @next/next/no-img-element */
import SectionHeading from "../components/sectionHeading";
import Reveal from "../components/reveal";

const educationDetails = [
  {
    universityName: "Masai School",
    address: "HSR Layout, Bangalore, India",
    major: "Full Stack Web Development",
    duration: "April 2021 - January 2022",
    courseWork: [
      "Data Structure & Algorithms",
      "Mathematical Foundations of CS",
      "Database Systems",
      "User Interface Development",
      "Backend Development",
      "Server Deployments",
      "Component based Software Development",
      "Real Time Embedded Systems",
      "Advanced Algorithms",
    ],
    concentration: "Concentration in MERN Stack Development",
    logo: "/assets/images/MasaiLogo.png",
  },
  {
    universityName: "Vivekananda Institute of Technology and Science",
    address: "Karimnagar, Telangana, India",
    major: "B.Tech in Computer Science and Engineering",
    duration: "Aug 2016 - January 2021",
    courseWork: [
      "Computer Programming in C",
      "Data Structures through C++",
      "OOP through Java",
      "Design and Analysis of Algorithms",
      "Database Management Systems",
      "Computer Organization",
      "Digital Logic Design",
      "Compiler Design",
      "Web Technologies",
      "Cryptography and Network Security",
      "Python Programming",
      "Machine Learning",
      "Cloud Computing",
    ],
    logo: "/assets/images/VITS.jpg",
  },
];

export default function EducationComponent() {
  return (
    <>
      <Reveal>
        <SectionHeading eyebrow="My background" title="Education" />
      </Reveal>
      <div className="flex flex-col gap-6">
        {educationDetails.map((education, index) => (
          <Reveal key={index} delay={index * 120}>
            <div className="glass glass-hover flex gap-8 p-8 sm:flex-col sm:gap-6 sm:p-6">
              <div className="flex w-1/4 flex-col items-center gap-4 text-center sm:w-full sm:flex-row sm:text-left">
                <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white p-2 shadow-inner ring-1 ring-black/5">
                  <img
                    src={education.logo}
                    alt={education.universityName}
                    className="h-full w-full object-contain"
                    width={96}
                    height={96}
                  />
                </div>
                <p className="glass-soft rounded-full px-3 py-1 text-sm font-semibold text-accent">
                  {education.duration}
                </p>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold sm:text-lg">
                  {education.universityName}
                </h3>
                <p className="text-base font-medium text-muted">
                  {education.major}
                </p>
                <p className="mt-1 text-sm text-muted">{education.address}</p>

                <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-foreground">
                  Coursework
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {education.courseWork.map((course, i) => (
                    <span
                      key={i}
                      className="glass-soft rounded-full px-3 py-1 text-xs font-medium text-muted"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}
