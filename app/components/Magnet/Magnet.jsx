"use client";

import { useEffect, useRef } from "react";

const Magnet = ({
  children,
  padding = 40,
  disabled = false,
  magnetStrength = 4,
  speed = 0.18, // 👈 smoothness (0.12–0.25 best)
  wrapperClassName = "",
  innerClassName = "",
  ...props
}) => {
  const wrapperRef = useRef(null);
  const innerRef = useRef(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const raf = useRef(null);

  useEffect(() => {
    if (disabled) return;

    const animate = () => {
      current.current.x += (target.current.x - current.current.x) * speed;
      current.current.y += (target.current.y - current.current.y) * speed;

      if (innerRef.current) {
        innerRef.current.style.transform = `
          translate3d(${current.current.x}px, ${current.current.y}px, 0)
        `;
      }

      raf.current = requestAnimationFrame(animate);
    };

    raf.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(raf.current);
  }, [speed, disabled]);

  useEffect(() => {
    if (disabled) return;

    const handleMouseMove = e => {
      if (!wrapperRef.current) return;

      const rect = wrapperRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const dx = e.clientX - cx;
      const dy = e.clientY - cy;

      if (
        Math.abs(dx) < rect.width / 2 + padding &&
        Math.abs(dy) < rect.height / 2 + padding
      ) {
        target.current.x = dx / magnetStrength;
        target.current.y = dy / magnetStrength;
      } else {
        target.current.x = 0;
        target.current.y = 0;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [padding, magnetStrength, disabled]);

  return (
    <div
      ref={wrapperRef}
      className={wrapperClassName}
      style={{ display: "inline-block" }}
      {...props}
    >
      <div
        ref={innerRef}
        className={innerClassName}
        style={{ willChange: "transform" }}
      >
        {children}
      </div>
    </div>
  );
};

export default Magnet;
