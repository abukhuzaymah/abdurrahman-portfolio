import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AzizBaatout } from "./AzizBaatout";
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
          name={AzizBaatout.name}
          title={AzizBaatout.title}
          city={AzizBaatout.city}
          country={AzizBaatout.country}
          links={AzizBaatout.links}
        />
        <ExperienceTimeline experiences={AzizBaatout.experiences} />
        <Projects projects={AzizBaatout.projects.filter((project) => project.showInFrontend)} />
        <TechStack techStack={AzizBaatout.techstack} />
      </div>
    </div>
  </StrictMode>
);
