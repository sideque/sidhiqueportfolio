import React from 'react';
import LightRays from './LightRays';
import FishContainer from './FishContainer';

const UnderwaterScene = () => {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        background: 'linear-gradient(to bottom, #001a33 0%, #003366 50%, #004d80 100%)',
      }}
    >
      {/* Light Rays Background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      >
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.4}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      {/* Swimming Fish */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 2,
        }}
      >
        <FishContainer />
      </div>

      {/* Your Content Here */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          padding: '20px',
        }}
      >
        <div>
          <h1 style={{ 
            fontSize: 'clamp(2rem, 5vw, 4rem)', 
            marginBottom: '1rem',
            textShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
          }}>
            Underwater Paradise
          </h1>
          <p style={{ 
            fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Hover over the fish to interact with them!
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnderwaterScene;