import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './LightRays.module.css';

/* ───────────────────────────────────────────────────────────────
   SEA TREE (Kelp / Seaweed)
   ─────────────────────────────────────────────────────────────── */
const SeaTree = ({ left, height = 180, color = '#1aaa6a', sway = 12, delay = 0, variant = 0 }) => {
  const id = `kelp-${left}-${variant}`;

  // Each strand has a slightly different curve
  const strands = variant === 0
    ? [
        { cx1: 0.3, cy1: 0.6, cx2: -0.2, cy2: 0.3, endX: -0.1 },
        { cx1: 0.5, cy1: 0.7, cx2: 0.6, cy2: 0.4, endX: 0.2 },
        { cx1: -0.2, cy1: 0.5, cx2: 0.1, cy2: 0.2, endX: 0.05 },
      ]
    : variant === 1
    ? [
        { cx1: -0.3, cy1: 0.65, cx2: 0.2, cy2: 0.35, endX: 0.1 },
        { cx1: 0.1, cy1: 0.7, cx2: -0.3, cy2: 0.3, endX: -0.15 },
      ]
    : [
        { cx1: 0.4, cy1: 0.6, cx2: -0.1, cy2: 0.25, endX: -0.05 },
        { cx1: -0.1, cy1: 0.55, cx2: 0.3, cy2: 0.35, endX: 0.18 },
        { cx1: 0.2, cy1: 0.7, cx2: -0.2, cy2: 0.4, endX: 0.08 },
        { cx1: -0.3, cy1: 0.6, cx2: 0.1, cy2: 0.3, endX: -0.1 },
      ];

  const w = 40;

  return (
    <>
      <style>{`
        @keyframes sway-${id} {
          0%, 100% { transform: rotate(0deg); }
          50%      { transform: rotate(${sway}deg); }
        }
      `}</style>
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: `${left}%`,
        width: `${w}px`,
        height: `${height}px`,
        transformOrigin: 'bottom center',
        animation: `sway-${id} ${3 + variant * 0.7}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        pointerEvents: 'none',
        zIndex: 0,
      }}>
        <svg width={w} height={height} viewBox={`0 0 ${w} ${height}`} style={{ overflow: 'visible' }}>
          {strands.map((s, i) => {
            const startX = w / 2;
            const startY = height;
            const cp1x = startX + s.cx1 * w;
            const cp1y = startY - s.cy1 * height;
            const cp2x = startX + s.cx2 * w;
            const cp2y = startY - s.cy2 * height;
            const endX = startX + s.endX * w;
            const endY = 0;

            const hue = 150 + i * 10 - variant * 5;
            const sat = 60 + i * 5;
            const lit = 35 + i * 3;
            const strandColor = `hsl(${hue}, ${sat}%, ${lit}%)`;

            return (
              <path
                key={i}
                d={`M ${startX} ${startY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${endY}`}
                stroke={strandColor}
                strokeWidth={variant === 2 ? 4 : 3.5}
                fill="none"
                strokeLinecap="round"
                opacity={0.85 - i * 0.05}
              />
            );
          })}
          <ellipse
            cx={w / 2 + (strands[0]?.endX || 0) * w}
            cy={4}
            rx={3}
            ry={5}
            fill={`hsl(${140 + variant * 8}, 55%, 38%)`}
            opacity={0.7}
          />
        </svg>
      </div>
    </>
  );
};

/* ───────────────────────────────────────────────────────────────
   FISH SVG (same visual as original)
   ─────────────────────────────────────────────────────────────── */
const FishSVG = () => (
  <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    <ellipse cx="45" cy="25" rx="35" ry="15" fill="rgba(0, 200, 255, 0.7)" />
    <path d="M 10 25 Q 0 15, 5 25 Q 0 35, 10 25 Z" fill="rgba(0, 180, 235, 0.7)" />
    <ellipse cx="35" cy="35" rx="8" ry="12" fill="rgba(0, 180, 235, 0.6)" />
    <ellipse cx="55" cy="35" rx="6" ry="10" fill="rgba(0, 180, 235, 0.6)" />
    <circle cx="65" cy="22" r="3" fill="rgba(255, 255, 255, 0.9)" />
    <circle cx="66" cy="21" r="1.5" fill="rgba(0, 0, 0, 0.8)" />
    <g opacity="0.3">
      <circle cx="40" cy="25" r="3" fill="rgba(255, 255, 255, 0.4)" />
      <circle cx="48" cy="23" r="3" fill="rgba(255, 255, 255, 0.4)" />
      <circle cx="48" cy="27" r="3" fill="rgba(255, 255, 255, 0.4)" />
      <circle cx="56" cy="25" r="3" fill="rgba(255, 255, 255, 0.4)" />
    </g>
    <path d="M 50 10 Q 45 5, 48 15 Z" fill="rgba(0, 180, 235, 0.7)" />
  </svg>
);

/* ───────────────────────────────────────────────────────────────
   FISH – chases the mouse, swims when no mouse nearby
   ─────────────────────────────────────────────────────────────── */

const FISH_SIZES = [
  { w: 60, h: 30 }, { w: 45, h: 22 }, { w: 70, h: 35 }, { w: 50, h: 25 },
  { w: 55, h: 28 }, { w: 65, h: 32 }, { w: 58, h: 29 }, { w: 48, h: 24 },
  { w: 62, h: 31 }, { w: 52, h: 26 }, { w: 42, h: 21 }, { w: 68, h: 34 },
  { w: 47, h: 23 }, { w: 57, h: 28 }, { w: 63, h: 31 }, { w: 44, h: 22 },
  { w: 53, h: 26 }, { w: 59, h: 29 }, { w: 46, h: 23 }, { w: 51, h: 25 },
];

const FISH_LANES = [8,18,28,38,48,58,68,78,88,12,22,32,42,52,62,72,82,15,45,75];
const BASE_SPEEDS = [90,75,110,85,95,100,88,78,105,92,80,115,87,98,102,82,94,108,86,96];

const CHASE_RADIUS = 220;
const CHASE_SPEED_MULT = 1.8;

const Fish = ({ index, mousePos }) => {
  const fishRef = useRef(null);
  const posRef = useRef({ x: -100, y: FISH_LANES[index % FISH_LANES.length] });
  const velRef = useRef({ x: 1, y: 0 });
  const chaseRef = useRef(false);
  const animRef = useRef(null);
  const lastTimeRef = useRef(performance.now());
  const [renderPos, setRenderPos] = useState({ x: -100, y: FISH_LANES[index % FISH_LANES.length] });
  const [facingLeft, setFacingLeft] = useState(false);

  const size = FISH_SIZES[index % FISH_SIZES.length];
  const baseSpeed = BASE_SPEEDS[index % BASE_SPEEDS.length];
  const startDelay = (index * 1.3) % 8;

  useEffect(() => {
    const startLeft = index % 3 !== 0;
    posRef.current = {
      x: startLeft ? -(size.w + 50) : window.innerWidth + size.w + 50,
      y: FISH_LANES[index % FISH_LANES.length],
    };
    velRef.current = { x: startLeft ? 1 : -1, y: 0 };
    setFacingLeft(!startLeft);

    const timer = setTimeout(() => {
      lastTimeRef.current = performance.now();
      const tick = (now) => {
        const dt = Math.min((now - lastTimeRef.current) / 1000, 0.05);
        lastTimeRef.current = now;

        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const pos = posRef.current;
        const vel = velRef.current;

        const mx = mousePos.current ? mousePos.current.x * vw : -9999;
        const my = mousePos.current ? mousePos.current.y * vh : -9999;

        const fx = pos.x + size.w / 2;
        const fy = (pos.y / 100) * vh + size.h / 2;

        const dx = mx - fx;
        const dy = my - fy;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let speed = baseSpeed;
        let targetVelX = vel.x;
        let targetVelY = 0;

        if (dist < CHASE_RADIUS && dist > 0) {
          // Chase!
          chaseRef.current = true;
          speed = baseSpeed * CHASE_SPEED_MULT;
          targetVelX = -dx / dist;
          targetVelY = -dy / dist;
        } else {
          chaseRef.current = false;
          targetVelX = vel.x > 0 ? 1 : -1;
          targetVelY = 0;
        }

        const smoothFactor = chaseRef.current ? 0.12 : 0.06;
        vel.x += (targetVelX - vel.x) * smoothFactor;
        vel.y += (targetVelY - vel.y) * smoothFactor;

        pos.x += vel.x * speed * dt;
        const pxY = (pos.y / 100) * vh + vel.y * speed * dt;
        pos.y = (pxY / vh) * 100;

        if (pos.x > vw + size.w + 40) {
          pos.x = -(size.w + 40);
          pos.y = FISH_LANES[index % FISH_LANES.length];
          vel.x = 1;
          vel.y = 0;
        } else if (pos.x < -(size.w + 40)) {
          pos.x = vw + size.w + 40;
          pos.y = FISH_LANES[index % FISH_LANES.length];
          vel.x = -1;
          vel.y = 0;
        }

        pos.y = Math.max(2, Math.min(92, pos.y));

        setFacingLeft(vel.x < -0.05);
        setRenderPos({ x: pos.x, y: pos.y });

        animRef.current = requestAnimationFrame(tick);
      };
      animRef.current = requestAnimationFrame(tick);
    }, startDelay * 1000);

    return () => {
      clearTimeout(timer);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <div
      ref={fishRef}
      className={styles.fish}
      style={{
        position: 'absolute',
        left: `${renderPos.x}px`,
        top: `${renderPos.y}%`,
        width: `${size.w}px`,
        height: `${size.h}px`,
        transform: facingLeft ? 'scaleX(-1)' : 'scaleX(1)',
        transition: 'transform 0.3s ease',
        animation: 'none',
        willChange: 'transform, left, top',
        filter: 'drop-shadow(0 0 8px rgba(0, 255, 255, 0.5))',
        pointerEvents: 'auto',
        cursor: 'pointer',
        zIndex: 1,
      }}
    >
      <FishSVG />
    </div>
  );
};

const TOTAL_FISH = 20;

const FishContainer = () => {
  const mousePosRef = useRef({ x: -1, y: -1 });

  useEffect(() => {
    const onMove = (e) => {
      mousePosRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };
    const onLeave = () => {
      mousePosRef.current = { x: -1, y: -1 };
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div className={styles.fishContainer} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      {Array.from({ length: TOTAL_FISH }, (_, i) => (
        <Fish key={`fish-${i}`} index={i} mousePos={mousePosRef} />
      ))}
    </div>
  );
};

export default FishContainer;
