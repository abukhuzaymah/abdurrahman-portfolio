import React from "react";

type StarBorderProps<T extends React.ElementType> =
  React.ComponentPropsWithoutRef<T> & {
    as?: T;
    className?: string;
    children?: React.ReactNode;
    color?: string;
    speed?: React.CSSProperties["animationDuration"];
  };

const StarBorder = <T extends React.ElementType = "button">({
  as,
  className = "",
  color = "white",
  speed = "6s",
  children,
  ...rest
}: StarBorderProps<T>) => {
  const Component = as || "button";

  return (
    <Component
      className={`relative inline-block py-[1px] rounded overflow-hidden ${className}`}
      {...rest}
    >
      <div
        className="absolute rounded w-[400%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] animate-star-movement-bottom z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className="absolute rounded w-[400%] h-[50%] opacity-70 top-[-10px] left-[-250%] animate-star-movement-top z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className={`relative z-1 bg-[#27272A] rounded border border-white text-white text-center py-[8px] px-[8px] ${className}`}
      >
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
