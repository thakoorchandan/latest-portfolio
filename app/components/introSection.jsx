/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import Reveal from "./reveal";

const introData = [
  "Passionate Software Developer!",
  "A Technologist at Heart!",
  "Devoted to Computer Science!",
  "Nature Enthusiast!",
  "Culinary Explorer!",
];

function IntroSection() {
  return (
    <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
      {/* Text */}
      <Reveal className="flex-1 text-center lg:text-left">
        <span className="glass-soft inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          Available for opportunities
        </span>

        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-3xl lg:text-5xl">
          Hi, I&apos;m <span className="text-gradient">Thakoor Chandan</span>
        </h1>

        <div className="mt-4 text-2xl font-semibold text-muted sm:text-xl lg:text-3xl">
          <Typewriter
            words={introData}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={1500}
          />
        </div>

        <p className="mx-auto mt-6 max-w-xl text-muted lg:mx-0">
          Full Stack Developer crafting performant, delightful web and mobile
          experiences with React, Node.js and the modern JavaScript ecosystem.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
          <Link
            href="mailto:thakoorchandan@gmail.com"
            target="_blank"
            className="icon-link"
            aria-label="Email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
            </svg>
            <span className="sr-only">Mail</span>
          </Link>

          <Link
            href="https://www.linkedin.com/in/thakoor-chandan/"
            target="_blank"
            className="icon-link"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
            <span className="sr-only">LinkedIn</span>
          </Link>

          <Link
            href="https://github.com/thakoorchandan"
            target="_blank"
            className="icon-link"
            aria-label="GitHub"
          >
            <svg width="22" height="22" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
            </svg>
            <span className="sr-only">GitHub</span>
          </Link>

          <Link href="/documents/ThakoorChandan.pdf" target="_blank">
            <button className="btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
              </svg>
              Resume
            </button>
          </Link>
        </div>
      </Reveal>

      {/* Avatar */}
      <Reveal delay={150} className="relative shrink-0">
        <div className="animate-float">
          <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-accent/40 to-accent-soft/30 blur-3xl" />
          <div className="glass relative rounded-full p-2">
            <img
              src="/assets/images/MyPic.png"
              alt="Thakoor Chandan"
              className="relative h-60 w-60 rounded-full object-cover lg:h-72 lg:w-72"
              width={288}
              height={288}
            />
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default IntroSection;
