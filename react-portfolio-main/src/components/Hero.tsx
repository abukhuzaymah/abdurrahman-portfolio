import { Link } from "../types/link";
import LinkIcons from "./LinkIcons";
import { motion } from "framer-motion";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const Hero = ({
  name,
  title,
  city,
  country,
  links,
}: {
  name: string;
  title: string;
  city: string;
  country: string;
  links: Link[];
}) => {
  return (
    <section className="flex flex-col h-screen">
      <motion.div
        className="flex flex-col justify-center items-center flex-grow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.6 }}
      >
        {/* Responsive Name */}
        <h1
          className="text-nowrap overflow-hidden text-primary font-extrabold"
          style={{ fontSize: "clamp(2rem, 14vw, 4.5rem)" }}
        >
          {name}
        </h1>

        {/* Responsive Title */}
        <p
          className="text-nowrap overflow-hidden font-semibold text-gray-400 inline-flex animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-transparent"
          style={{ fontSize: "clamp(1rem, 5vw, 1.7rem)" }}
        >
          {title}
        </p>
        <p className="font-semibold text-gray-400 flex">
          {city + ", " + country}
        </p>
        <div className="mt-6">
          <LinkIcons links={links} />
        </div>
      </motion.div>

      <motion.div
        className="flex justify-center py-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          opacity: { duration: 1, ease: "easeInOut", delay: 1.6 },
          y: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1,
            ease: "easeInOut",
            delay: 1.6,
          },
        }}
      >
        <MdOutlineKeyboardDoubleArrowDown className="text-4xl text-gray-400" />{" "}
      </motion.div>
    </section>
  );
};

export default Hero;
