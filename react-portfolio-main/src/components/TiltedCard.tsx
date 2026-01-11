import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface TiltedCardProps {
  className?: string;
  rotateAmplitude?: number; // Amplitude of the tilt effect
  scaleOnHover?: number; // Scale effect on hover
  children?: React.ReactNode;
}

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

const TiltedCard: React.FC<TiltedCardProps> = ({
  className = "",
  rotateAmplitude = 14,
  scaleOnHover = 1.05,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => {
    scale.set(scaleOnHover);
  };

  const handleMouseLeave = () => {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="relative w-full h-full [perspective:800px]"
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className={`w-full h-full rounded-lg shadow-lg ${className} [transform-style:preserve-3d]`}
        style={{
          rotateX,
          rotateY,
          scale,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default TiltedCard;
