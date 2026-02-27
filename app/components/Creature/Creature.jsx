'use client';

import { useEffect, useRef } from "react";
import { animate, createTimeline, createTimer, stagger, utils } from "animejs";

const ROWS = 13;
const GRID = [ROWS, ROWS];
const FROM = "center";

const particleStyle = `
  .creature-particle {
    transform-style: preserve-3d;
    position: relative;
    width: 2em;
    height: 2em;
    margin: 1.5em;
    border-radius: 50%;
    will-change: transform;
    mix-blend-mode: plus-lighter;
    background: radial-gradient(circle at 35% 35%, #ffffff, #a0c8ff 60%, #4488cc);
  }
`;

export default function Creature() {
  const creatureRef = useRef(null);

  useEffect(() => {
    const creatureEl = creatureRef.current;
    if (!creatureEl) return;

    const viewport = { w: window.innerWidth * 0.5, h: window.innerHeight * 0.5 };
    const cursor = { x: 0, y: 0 };

    const scaleStagger = stagger([1, 3], { ease: "inQuad", grid: GRID, from: FROM });
    const opacityStagger = stagger([1, 0.2], { grid: GRID, from: FROM });

    for (let i = 0; i < ROWS * ROWS; i++) {
      const div = document.createElement("div");
      div.className = "creature-particle";
      creatureEl.appendChild(div);
    }

    const particuleEls = creatureEl.querySelectorAll(".creature-particle");

    utils.set(creatureEl, {
      width: ROWS * 6 + "em",
      height: ROWS * 6 + "em",
    });

    utils.set(particuleEls, {
      x: 0,
      y: 0,
      scale: scaleStagger,
      opacity: opacityStagger,
      boxShadow: stagger([6, 1], {
        grid: GRID,
        from: FROM,
        modifier: (v) => `0px 0px ${utils.round(v, 0)}em 0px rgba(200, 230, 255, 0.8)`,
      }),
      zIndex: stagger([ROWS * ROWS, 1], {
        grid: GRID,
        from: FROM,
        modifier: utils.round(0),
      }),
    });

    const pulse = () => {
      animate(particuleEls, {
        keyframes: [
          {
            scale: 3,
            opacity: 1,
            delay: stagger(90, { start: 1650, grid: GRID, from: FROM }),
            duration: 150,
          },
          {
            scale: scaleStagger,
            opacity: opacityStagger,
            ease: "inOutQuad",
            duration: 600,
          },
        ],
      });
    };

    const mainLoop = createTimer({
      frameRate: 15,
      onUpdate: () => {
        animate(particuleEls, {
          x: cursor.x,
          y: cursor.y,
          delay: stagger(40, { grid: GRID, from: FROM }),
          duration: stagger(120, { start: 750, ease: "inQuad", grid: GRID, from: FROM }),
          ease: "inOut",
          composition: "blend",
        });
      },
    });

    const autoMove = createTimeline()
      .add(
        cursor,
        {
          x: [-viewport.w * 0.45, viewport.w * 0.45],
          modifier: (x) => x + Math.sin(mainLoop.currentTime * 0.0007) * viewport.w * 0.5,
          duration: 3000,
          ease: "inOutExpo",
          alternate: true,
          loop: true,
          onBegin: pulse,
          onLoop: pulse,
        },
        0
      )
      .add(
        cursor,
        {
          y: [-viewport.h * 0.45, viewport.h * 0.45],
          modifier: (y) => y + Math.cos(mainLoop.currentTime * 0.00012) * viewport.h * 0.5,
          duration: 1000,
          ease: "inOutQuad",
          alternate: true,
          loop: true,
        },
        0
      );

    const manualMovementTimeout = createTimer({
      duration: 1500,
      onComplete: () => autoMove.play(),
    });

    const followPointer = (e) => {
      const event = e.type === "touchmove" ? e.touches[0] : e;
      cursor.x = event.pageX - viewport.w;
      cursor.y = event.pageY - viewport.h;
      autoMove.pause();
      manualMovementTimeout.restart();
    };

    document.addEventListener("mousemove", followPointer);
    document.addEventListener("touchmove", followPointer);

    return () => {
      document.removeEventListener("mousemove", followPointer);
      document.removeEventListener("touchmove", followPointer);
      mainLoop.cancel?.();
      autoMove.cancel?.();
      manualMovementTimeout.cancel?.();
      while (creatureEl.firstChild) creatureEl.removeChild(creatureEl.firstChild);
    };
  }, []);

  return (
    <>
      <style>{particleStyle}</style>
      <div
        style={{
          position: "absolute",
          overflow: "hidden",
          width: "100%",
          height: "100%",
          background: "#000",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: 0,
            left: 0,
            overflow: "hidden",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            ref={creatureRef}
            style={{
              fontSize: "0.15vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "80em",
              height: "80em",
              flexWrap: "wrap",
            }}
          />
        </div>
      </div>
    </>
  );
}