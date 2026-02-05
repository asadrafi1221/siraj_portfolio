import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = "",
  id,
  ...props
}) => {
  return (
    <section
      id={id}
      className={`w-full relative ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};