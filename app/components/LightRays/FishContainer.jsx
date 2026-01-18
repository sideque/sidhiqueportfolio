import React from 'react';
import styles from './LightRays.module.css';

const Fish = ({ className = '' }) => {
  return (
    <div className={`${styles.fish} ${className}`}>
      <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
        {/* Fish Body */}
        <ellipse cx="45" cy="25" rx="35" ry="15" fill="rgba(0, 200, 255, 0.7)" />
        
        {/* Fish Tail */}
        <path
          d="M 10 25 Q 0 15, 5 25 Q 0 35, 10 25 Z"
          fill="rgba(0, 180, 235, 0.7)"
        />
        
        {/* Fish Fins */}
        <ellipse cx="35" cy="35" rx="8" ry="12" fill="rgba(0, 180, 235, 0.6)" />
        <ellipse cx="55" cy="35" rx="6" ry="10" fill="rgba(0, 180, 235, 0.6)" />
        
        {/* Fish Eye */}
        <circle cx="65" cy="22" r="3" fill="rgba(255, 255, 255, 0.9)" />
        <circle cx="66" cy="21" r="1.5" fill="rgba(0, 0, 0, 0.8)" />
        
        {/* Scales Detail */}
        <g opacity="0.3">
          <circle cx="40" cy="25" r="3" fill="rgba(255, 255, 255, 0.4)" />
          <circle cx="48" cy="23" r="3" fill="rgba(255, 255, 255, 0.4)" />
          <circle cx="48" cy="27" r="3" fill="rgba(255, 255, 255, 0.4)" />
          <circle cx="56" cy="25" r="3" fill="rgba(255, 255, 255, 0.4)" />
        </g>
        
        {/* Dorsal Fin */}
        <path
          d="M 50 10 Q 45 5, 48 15 Z"
          fill="rgba(0, 180, 235, 0.7)"
        />
      </svg>
    </div>
  );
};

const FishContainer = () => {
  return (
    <div className={styles.fishContainer}>
      {/* Forward swimming fish */}
      <Fish />
      <Fish />
      <Fish />
      <Fish />
      <Fish />
      <Fish />
      
      {/* Reverse swimming fish */}
      <Fish className={styles.reverse} />
      <Fish className={styles.reverse} />
      <Fish className={styles.reverse} />
      <Fish className={styles.reverse} />
    </div>
  );
};

export default FishContainer;