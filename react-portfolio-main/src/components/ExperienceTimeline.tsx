import { motion } from "framer-motion";
import JobCard from "./ExperienceCard";
import { Experience } from "../types/experience";

const ExperienceTimeline = ({ experiences }: { experiences: Experience[] }) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="relative w-full max-w-6xl flex flex-col items-center py-10 overflow-hidden">
        {/* Timeline Line */}
        <div className="absolute left-1/2 mt-3 w-1 bg-black h-full -translate-x-1/2" />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`relative px-5 flex w-full mb-10  ${
              index === 0
                ? "justify-center"
                : index % 2 === 0
                ? "justify-start"
                : "justify-end"
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} // Only animate once
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Timeline Marker */}
            <JobCard experience={exp} showCursor={index == 0} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
