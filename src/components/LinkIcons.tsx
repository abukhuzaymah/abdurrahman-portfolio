import { motion } from "framer-motion";
import StarBorder from "./StarBorder";
import { Link } from "../types/link";

const LinkIcons = ({ links }: { links: Link[] }) => {
  return (
    <motion.nav className="flex gap-4">
      {links.map((link, index) => (
        <motion.div key={index} whileHover={{ y: -5, scale: 1.15 }}>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
          >
            <StarBorder className="rounded-md" color="gray" speed="3s">
              <link.icon />
            </StarBorder>
          </a>
        </motion.div>
      ))}
    </motion.nav>
  );
};

export default LinkIcons;
