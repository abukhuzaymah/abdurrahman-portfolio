import { useState } from "react";
import { Experience } from "../types/experience";
import { HiCursorClick, HiExternalLink } from "react-icons/hi";
import { motion } from "framer-motion";

const ExperienceCard = ({
  experience,
  showCursor = false,
}: {
  experience: Experience;
  showCursor: boolean;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const formatDateRange = (start: Date, end: Date | null) => {
    const startMonth = start.toLocaleString("en-US", { month: "short" });
    const startYear = start.getFullYear();

    if (!end) {
      return `${startMonth} ${startYear} - Present`;
    }

    const endMonth = end.toLocaleString("en-US", { month: "short" });
    const endYear = end.getFullYear();

    return `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
  };

  return (
    <motion.div
      className="relative w-full max-w-2xl perspective cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ perspective: "1000px" }} // Required for 3D flip
      transition={{ y: { duration: 0.8, ease: "easeOut" } }}
      whileHover={{ y: -5 }}
    >
      {/* Card Container */}
      <motion.div
        className="w-full h-full bg-white shadow-lg p-6 border border-gray-200 rounded-2xl"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Front Side */}
        <motion.div className="w-full h-full">
          {showCursor && (
            <motion.div
              className="absolute top-4 right-4 text-gray-600"
              animate={{ scale: [1, 0.9, 1] }} // Click animation
              transition={{
                duration: 1, // Duration of one loop
                repeat: Infinity, // Loop infinitely
                ease: "easeInOut",
              }}
            >
              <HiCursorClick className="w-6 h-6" />
            </motion.div>
          )}
          <div className="flex items-start">
            <div className="w-24 h-24 flex-shrink-0 mr-6 flex items-center justify-center bg-gray-100 rounded-lg border border-gray-200">
              <img
                src={experience.logo}
                alt={`${experience.company} logo`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{experience.title}</h3>
              <p className="text-gray-500">
                {experience.website ? (
                  <a
                    href={experience.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center hover:underline"
                  >
                    {experience.company}
                    <HiExternalLink className="ml-1 text-sm text-gray-400" />
                  </a>
                ) : (
                  experience.company
                )}
              </p>
              <div className="text-sm text-gray-400">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <span>
                    {formatDateRange(experience.startDate, experience.endDate)}
                  </span>
                  <span style={{ margin: "0 4px" }}>•</span>
                  <span>{experience.jobType}</span>
                </div>
              </div>
              <p className="text-sm text-gray-400">{experience.location}</p>
            </div>
          </div>
          <p className="text-sm mt-2">{experience.description}</p>
          <ul className="mt-4 text-gray-700 list-disc pl-6">
            {experience.bulletPoints.map((point, index) => (
              <li key={index} className="mb-2 text-sm">
                {point}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Back Side */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{ transform: "rotateY(180deg) translateZ(1px)" }}
        >
          <div
            className="h-full flex justify-center bg-white shadow-lg border border-gray-200 rounded-2xl text-sm text-gray-700 items-center p-9 overflow-auto break-words"
            style={{
              padding: "1rem",
            }}
          >
            {experience.summary}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ExperienceCard;