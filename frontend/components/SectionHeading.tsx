import { ReactNode } from "react";

type SectionHeadingProps = {
  name?: string;
  className?: string;
  children?: ReactNode;
};

export default function SectionHeading({
  name,
  className,
  children,
}: SectionHeadingProps) {
  return (
    <h1
      className={`capitalize text-4xl md:text-5xl font-bold mb-3 ${className}`}
    >
      {children ? children : name}
    </h1>
  );
}
