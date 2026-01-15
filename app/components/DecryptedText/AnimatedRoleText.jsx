"use client";

import { useEffect, useState } from "react";
import DecryptedText from "@app/components/DecryptedText/DecryptedText";

const roles = [
  "Software engineer",
  "Full-stack developer",
  "MERN stack developer",
  "Web developer",
];

export default function AnimatedRoleText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block min-w-[300px] text-primary">
      <DecryptedText
        key={roles[index]}
        text={roles[index]}
        animateOn="view"
        sequential
        speed={40}
      />
    </span>
  );
}
