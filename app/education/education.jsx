/* eslint-disable @next/next/no-img-element */
const educationDetails = [
  {
    universityName: "Masai School",
    address: "HSR Layout, Bangalore, India",
    major: "Full Stack Web Development",
    duration: "April 2021 - January 2022",
    courseWork: [
      "Data Structure Algorithm",
      "Mathematical Foundations of CS",
      "Database Systems",
      "User Interface Development",
      "Backend Development",
      "Server Deployments",
      "Component based Software Development",
      "Software Engineering Real Time Embedded Systems",
      "Advance Algorithms",
    ],
    concentration: "Concentration in MERN Stack Development",
    logo: "/assets/images/MasaiLogo.png",
  },
  {
    universityName: "Vivekananda Institute of Technology and Science",
    address: "Karimnagar, Telangana, India",
    major: "Bachelors of Technology in Computer Science and Engineering",
    duration: "Aug 2016 - January 2021",
    courseWork: [
      "Computer Programming in C",
      "Data Structures through C++",
      "Object oriented Programming through Java",
      "Design and Analysis of Algorithms",
      "Database Management Systems",
      "Computer Organization",
      "Digital Logic Design",
      "Compiler Design",
      "Web technologies",
      "Cryptography and Network Security",
      "Principle of Programming Languages",
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
      <h2 className="text-3xl mx-auto max-w-6xl font-bold mt-4 py-2 sm:text-2xl">
        Education
      </h2>
      <div className="mx-auto max-w-6xl lg:max-w-6xl">
        {educationDetails.map((education, index) => {
          return (
            <div
              key={index}
              className="mt-8 flex shadow-lg rounded-xl text-justify p-8 w-100 sm:flex-col dark:shadow-white"
            >
              <div className="flex flex-col w-1/3  border-black items-center justify-center sm:flex-row sm:w-full sm:border-0 sm:mb-4 dark:border-white">
                <img
                  src={education.logo}
                  alt={education.universityName}
                  className="w-36 h-36 object-cove mb-8 sm:flex-1 sm:mb-0 dark:ring-white"
                  width={100}
                  height={100}
                />

                <div className="sm:flex-1">
                  <p className="text-center flex-1 font-semibold text-base mt-4 sm:text-sm">
                    {education.duration}
                  </p>
                </div>
              </div>
              <div className="flex flex-col w-2/3 justify-center pl-8 sm:w-full sm:p-0">
                <div className="pb-2 mb-4">
                  <p className="text-2xl font-semibold sm:text-xl">
                    {education.universityName}
                  </p>
                  <p className="text-xl font-semibold sm:text-l">
                    {education.major}
                  </p>
                </div>
                <div>
                  <p className="text-base font-semibold sm:text-sm">
                    Coursework :
                  </p>
                  <ul className="list-disc">
                    {education.courseWork.map((course, index) => {
                      return (
                        <li key={index} className="text-sm ml-8">
                          {course}
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
