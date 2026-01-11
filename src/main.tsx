import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AbdurrahmanIsmath } from "./AbdurrahmanIsmath";
import ExperienceTimeline from "./components/ExperienceTimeline";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="full-background">
      <div className="relative max-h-screen overflow-y-auto">
        <Hero
          name={AbdurrahmanIsmath.name}
          title={AbdurrahmanIsmath.title}
          city={AbdurrahmanIsmath.city}
          country={AbdurrahmanIsmath.country}
          links={AbdurrahmanIsmath.links}
        />
        <ExperienceTimeline experiences={AbdurrahmanIsmath.experiences} />
        <Projects projects={AbdurrahmanIsmath.projects.filter((project) => project.showInFrontend)} />
        <TechStack techStack={AbdurrahmanIsmath.techstack} />
      </div>
    </div>
  </StrictMode>
);
