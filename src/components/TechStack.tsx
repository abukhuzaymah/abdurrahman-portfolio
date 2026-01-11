import { motion } from "framer-motion";
import { Tech } from "../types/tech";

const TechStack = ({ techStack }: { techStack: Tech[] }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
      },
    },
  };

  // Animation variants for each item
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16">
      <div className="flex flex-col justify-center items-center container max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Tech Stack</h1>
        <motion.div
          className="flex flex-wrap justify-center gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Trigger when 10% of the first item is in view
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className="h-[100px] w-[100px] p-6 flex flex-col items-center justify-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
            >
              <div
                className="mb-2"
                style={{ color: tech.color || "inherit" }} // Apply color only if it exists
              >
                {tech.icon}
              </div>
              <span className="text-lg font-medium text-gray-700 whitespace-nowrap">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default TechStack;
