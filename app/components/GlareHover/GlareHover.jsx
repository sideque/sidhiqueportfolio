"use client";
import styles from "./GlareHover.module.css";

const GlareHover = ({
  width = "100%",
  height = "100%",
  background = "transparent",
  borderRadius = "14px",
  borderColor = "transparent",
  children,
  glareColor = "#ffffff",
  glareOpacity = 0.35,
  glareAngle = -30,
  glareSize = 300,
  transitionDuration = 800,
  playOnce = false,
  autoPlay = false,
}) => {
  const hex = glareColor.replace("#", "");
  let rgba = glareColor;

  if (/^[0-9A-Fa-f]{6}$/.test(hex)) {
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;
  }

  const vars = {
    "--gh-width": width,
    "--gh-height": height,
    "--gh-bg": background,
    "--gh-br": borderRadius,
    "--gh-angle": `${glareAngle}deg`,
    "--gh-duration": `${transitionDuration}ms`,
    "--gh-size": `${glareSize}%`,
    "--gh-rgba": rgba,
    "--gh-border": borderColor,
  };

  return (
    <div
      className={`
        ${styles.glareHover}
        ${autoPlay ? styles.autoPlay : ""}
        ${playOnce ? styles.playOnce : ""}
      `}
      style={vars} 
    >
      {children}
    </div>
  );
};

export default GlareHover;
