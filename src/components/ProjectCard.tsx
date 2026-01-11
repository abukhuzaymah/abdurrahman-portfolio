import { motion } from "framer-motion";
import { HiExternalLink } from "react-icons/hi";
import { Project } from "../types/project";
import TiltedCard from "./TiltedCard";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <TiltedCard
      rotateAmplitude={7}
      className="w-full max-w-[400px] bg-white border border-gray h-[500px] flex flex-col"
    >
      <div className="p-6 flex flex-col h-full">
        <div className="h-40 flex-shrink-0 flex items-center justify-center bg-gray-100 rounded-lg border border-gray-200 mb-4">
          <img src={project.image} alt={`logo`} className="w-full max-h-full object-cover rounded-lg" />
        </div>

        <div className="flex-1 flex flex-col">
          <h2 className="text-xl font-semibold mb-2 line-clamp-2">{project.title}</h2>

          {/* Live Project Link */}
          {project.link && (
            <a
              href={project.link}
              className="project-link inline-flex items-center text-gray-400 hover:underline mb-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.span
                className="w-2 h-2 bg-red-500 rounded-full mr-2"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.8, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />{" "}
              Live Project
              <HiExternalLink className="ml-1 text-sm text-gray-400" />
            </a>
          )}

          <p className="mb-3 text-sm line-clamp-3 flex-1">{project.description}</p>
          <p className="project-impact text-xs italic mb-3 text-gray-600 line-clamp-2">{project.impact}</p>

          {/* Technologies Used */}
          <div className="project-tech flex flex-wrap gap-2 mt-auto">
            {project.technologies.map((tech, index) => (
              <span key={index} className="bg-[#3a3a3a] text-xs text-white px-2 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </TiltedCard>
  );
};

export default ProjectCard;
