import { ReactNode } from "react";
import { DiMsqlServer } from "react-icons/di";
import { FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import {
  SiApachekafka,
  SiApachespark,
  SiExpress,
  SiFastapi,
  SiGithubactions,
  SiPulumi,
  SiScikitlearn,
  SiTensorflow,
  SiTerraform,
} from "react-icons/si";
import { TbFileCv } from "react-icons/tb";
import StackIcon from "tech-stack-icons";
import data from "./AzizBaatout.json";
import { Experience } from "./types/experience";
import { Link } from "./types/link";
import { Project } from "./types/project";
import { Tech } from "./types/tech";

interface AzizBaatout {
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

const getjobSummary = (company: string, title: string, summary: string) => {
  switch (company + ", " + title) {
    case "Ghent University, Full-stack Developer":
      return (
        <div>
          As part of the {""}
          <a
            href="https://gentsestudentenraad.be/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline hover:no-underline transition-all duration-300"
          >
            Ghent Student Council
          </a>
          , I developed and maintained {""}
          <a
            href="http://studium.gent/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline hover:no-underline transition-all duration-300"
          >
            Studium
          </a>
          , a platform for students to share notes, summaries, and other academic documents. These documents are
          protected by Ghent University's copyright policies. I was the sole developer, handling both the backend and
          frontend with technologies like Django, GraphQL, Vue.js, and Nuxt.js. I was also responsible for documenting
          the codebase to ensure smooth handovers for future developers.
        </div>
      );
    default:
      return <div>{summary}</div>;
  }
};

const mapping: Record<string, ReactNode> = {
  Python: <StackIcon name="python" className="w-10 h-10" />,
  Java: <StackIcon name="java" className="w-10 h-10" />,
  JavaScript: <StackIcon name="js" className="w-10 h-10" />,
  TypeScript: <StackIcon name="typescript" className="w-10 h-10" />,
  "Node.js": <StackIcon name="nodejs" className="w-10 h-10" />,
  Angular: <StackIcon name="angular17" className="w-10 h-10" />,
  React: <StackIcon name="reactjs" className="w-10 h-10" />,
  "Next.js": <StackIcon name="nextjs2" className="w-10 h-10" />,
  Vue: <StackIcon name="vuejs" className="w-10 h-10" />,
  "Nuxt.js": <StackIcon name="nuxtjs" className="w-10 h-10" />,
  Tailwind: <StackIcon name="tailwindcss" className="w-10 h-10" />,
  Express: <SiExpress className="w-10 h-10" />,
  Django: <StackIcon name="django" className="w-10 h-10" />,
  FastAPI: <SiFastapi className="w-10 h-10" color="#009486" />,
  Flask: <StackIcon name="flask" className="w-10 h-10" />,
  GraphQL: <StackIcon name="graphql" className="w-10 h-10" />,
  Redis: <StackIcon name="redis" className="w-10 h-10" />,
  MySQL: <StackIcon name="mysql" className="w-10 h-10" />,
  PostgreSQL: <StackIcon name="postgresql" className="w-10 h-10" />,
  "SQL Server": <DiMsqlServer className="w-10 h-10" />,
  MongoDB: <StackIcon name="mongodb" className="w-10 h-10" />,
  AWS: <StackIcon name="aws" className="w-10 h-10" />,
  GCloud: <StackIcon name="gcloud" className="w-10 h-10" />,
  Linux: <StackIcon name="linux" className="w-10 h-10" />,
  Docker: <StackIcon name="docker" className="w-10 h-10" />,
  Kafka: <SiApachekafka className="w-10 h-10" />,
  Spark: <SiApachespark className="w-10 h-10" />,
  Git: <StackIcon name="git" className="w-10 h-10" />,
  Terraform: <SiTerraform className="w-10 h-10" color="#7B42BC" />,
  Pulumi: <SiPulumi className="w-10 h-10" color="#8A3391" />,
  TensorFlow: <SiTensorflow className="w-10 h-10" color="#FF6F00" />,
  "Scikit-learn": <SiScikitlearn className="w-10 h-10" color="#F7931E" />,
  "GH Actions": <SiGithubactions className="w-10 h-10" color="#2088FF" />,
};

const links = data.links.map((link) => ({
  ...link,
  icon: getLinkIcons(link.name) || "",
}));

links.push({
  name: "CV",
  url: "/aziz-baatout-resume.pdf",
  icon: getLinkIcons("CV"),
});

export const AzizBaatout: AzizBaatout = {
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
