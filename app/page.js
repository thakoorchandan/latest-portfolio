"use client";

import { useEffect } from "react";

import IntroSection from "./components/introSection";
import AboutMeComponent from "./about-me/about-me";
import EducationComponent from "./education/education";
import SkillsComponent from "./skills/skills";
import ExperienceComponent from "./experience/experience";
import ProjectsComponent from "./projects/projects";

export default function Home() {
  // When the page loads with a #hash, jump to that section once mounted.
  useEffect(() => {
    const { hash } = window.location;
    if (!hash) return;
    const el = document.getElementById(hash.substring(1));
    if (el) {
      requestAnimationFrame(() =>
        el.scrollIntoView({ behavior: "smooth", block: "start" })
      );
    }
  }, []);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 pt-24 sm:px-5 lg:px-8">
      <section className="py-12 sm:py-8">
        <IntroSection />
      </section>

      <section id="about-me" className="py-12 sm:py-10">
        <AboutMeComponent />
      </section>

      <section id="education" className="py-12 sm:py-10">
        <EducationComponent />
      </section>

      <section id="experience" className="py-12 sm:py-10">
        <ExperienceComponent />
      </section>

      <section id="skills" className="py-12 sm:py-10">
        <SkillsComponent />
      </section>

      <section id="projects" className="py-12 sm:py-10">
        <ProjectsComponent />
      </section>
    </div>
  );
}
