import { ReactNode } from "react";
import { FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import {
  SiFastapi,
  SiScikitlearn,
  SiTensorflow,
  SiPytorch,
  SiOpenai,
} from "react-icons/si";
import { TbFileCv } from "react-icons/tb";
import StackIcon from "tech-stack-icons";
import data from "./AbdurrahmanIsmath.json";
import { Experience } from "./types/experience";
import { Link } from "./types/link";
import { Project } from "./types/project";
import { Tech } from "./types/tech";

interface AbdurrahmanIsmath {
  name: string;
  title: string;
  city: string;
  country: string;
  links: Link[];
  experiences: Experience[];
  projects: Project[];
  techstack: Tech[];
}

const getLinkIcons = (linkName: string) => {
  switch (linkName) {
    case "LinkedIn":
      return FaLinkedinIn;
    case "GitHub":
      return FiGithub;
    case "Email":
      return FaEnvelope;
    case "CV":
      return TbFileCv;
    default:
      throw new Error("No icon for:" + linkName);
  }
};

const getjobSummary = (_company: string, _title: string, summary: string) => {
  // Return summary as-is, no custom formatting needed
  return <div>{summary}</div>;
};

const mapping: Record<string, ReactNode> = {
  Python: <StackIcon name="python" className="w-10 h-10" />,
  JavaScript: <StackIcon name="js" className="w-10 h-10" />,
  TypeScript: <StackIcon name="typescript" className="w-10 h-10" />,
  "Node.js": <StackIcon name="nodejs" className="w-10 h-10" />,
  React: <StackIcon name="reactjs" className="w-10 h-10" />,
  "Next.js": <StackIcon name="nextjs2" className="w-10 h-10" />,
  Tailwind: <StackIcon name="tailwindcss" className="w-10 h-10" />,
  Django: <StackIcon name="django" className="w-10 h-10" />,
  Flask: <StackIcon name="flask" className="w-10 h-10" />,
  FastAPI: <SiFastapi className="w-10 h-10" color="#009486" />,
  TensorFlow: <SiTensorflow className="w-10 h-10" color="#FF6F00" />,
  PyTorch: <SiPytorch className="w-10 h-10" color="#EE4C2C" />,
  "Scikit-learn": <SiScikitlearn className="w-10 h-10" color="#F7931E" />,
  XGBoost: <StackIcon name="python" className="w-10 h-10" />,
  Pandas: <StackIcon name="python" className="w-10 h-10" />,
  OCR: <StackIcon name="python" className="w-10 h-10" />,
  NLP: <StackIcon name="python" className="w-10 h-10" />,
  LLM: <SiOpenai className="w-10 h-10" color="#412991" />,
  RAG: <StackIcon name="python" className="w-10 h-10" />,
  Leaflet: <StackIcon name="js" className="w-10 h-10" />,
  PostgreSQL: <StackIcon name="postgresql" className="w-10 h-10" />,
  PostGIS: <StackIcon name="postgresql" className="w-10 h-10" />,
  Linux: <StackIcon name="linux" className="w-10 h-10" />,
  Docker: <StackIcon name="docker" className="w-10 h-10" />,
  Git: <StackIcon name="git" className="w-10 h-10" />,
};

const links = data.links.map((link) => ({
  ...link,
  icon: getLinkIcons(link.name) || "",
}));

links.push({
  name: "CV",
  url: "/Muhammad-Abdurrahman-Ismath-FlowCV-Resume-20251009 (1).pdf",
  icon: getLinkIcons("CV"),
});

export const AbdurrahmanIsmath: AbdurrahmanIsmath = {
  ...data,
  links,
  experiences: data.experiences.map((exp) => ({
    ...exp,
    startDate: new Date(exp.startDate),
    endDate: exp.endDate ? new Date(exp.endDate) : null,
    summary: getjobSummary(exp.company, exp.title, exp.summary),
  })),
  techstack: data.techstack.map((tech) => ({
    name: tech.name,
    icon: mapping[tech.name],
  })),
};

