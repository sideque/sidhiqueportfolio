"use client";

import { Button } from "@frontend/components/ui/Button";
import useBackToTop from "@frontend/hooks/useBackToTop";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

type Props = {
  id: string;
};

export default function BackToTop({ id }: Props) {
  const { backToTop, handleScrollIntoView } = useBackToTop();
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [flip, setFlip] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const startArmsRef = useRef<gsap.core.Timeline | null>(null);

  const armsTL = () => {
    const tl = gsap.timeline();
    tl.add('startarms')
      .to('#backhand', {
        x: -18,
        rotation: 160,
        transformOrigin: '50% 50%',
        duration: 1.5,
        ease: 'power2.inOut'
      }, 'startarms')
      .to('#rightarm', {
        rotation: 35,
        transformOrigin: '100% 0',
        duration: 1.5,
        ease: 'power2.inOut'
      }, 'startarms')
      .to('#newrightarm', {
        x: -95,
        y: -920,
        rotation: 12,
        transformOrigin: '100% 100%',
        duration: 1.5,
        ease: 'power2.inOut'
      }, 'startarms')
      .to('#hand', {
        x: -17,
        y: -8,
        rotation: 95,
        transformOrigin: '50% 50%',
        duration: 1.5,
        ease: 'power2.inOut'
      }, 'startarms')
      .to('#leftarm', {
        rotation: 25,
        transformOrigin: '100% 0',
        duration: 1.5,
        ease: 'power2.inOut'
      }, 'startarms')
      .to('#newleftarm', {
        x: -102,
        y: -925,
        transformOrigin: '100% 100%',
        duration: 1.5,
        ease: 'power2.inOut'
      }, 'startarms');
    return tl;
  };

  const processInteraction = (clientX: number, clientY: number) => {
    if (!buttonRef.current) return;
    
    const buttonBox = buttonRef.current.getBoundingClientRect();
    const buttonCenterX = buttonBox.left + buttonBox.width / 2;
    const buttonCenterY = buttonBox.top + buttonBox.height / 2;

    if (!startArmsRef.current) {
      startArmsRef.current = armsTL();
    }

    // Calculate relative position
    const relativeX = clientX - buttonCenterX;
    const relativeY = clientY - buttonCenterY;

    setY(relativeY / 60);
    
    if (clientX > buttonCenterX) {
      setX(-(relativeX / 150));
      setFlip(true);
    } else {
      setX(relativeX / 150);
      setFlip(false);

      const progress = Math.max(0, Math.min(1, (buttonCenterX - clientX) / buttonBox.width));
      
      gsap.set("#righteyeb2", {
        scaleX: 1 + progress / 4,
        ease: 'power1.out'
      });
      gsap.set("#lefteyeb2", {
        scaleX: 1 + progress / 4,
        ease: 'power1.out'
      });

      if (startArmsRef.current) {
        startArmsRef.current.progress(progress).pause();
      }
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      processInteraction(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      processInteraction(touch.clientX, touch.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    // Entrance animation
    if (buttonRef.current) {
      gsap.fromTo(buttonRef.current, 
        {
          scale: 0,
          rotation: -180,
          opacity: 0,
        },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'elastic.out(1, 0.5)',
          delay: 0.2
        }
      );

      // Floating animation
      gsap.to(buttonRef.current, {
        y: -10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }

    // Blinking animation
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });
    tl.add('redo')
      .to('#lefteye', {
        rotation: 6,
        duration: 0.4,
        repeat: 3,
        yoyo: true,
        transformOrigin: '100% 50%',
        ease: 'sine.out'
      }, 'redo')
      .to('#righteye', {
        rotation: -6,
        duration: 0.4,
        repeat: 3,
        yoyo: true,
        transformOrigin: '0% 30%',
        ease: 'sine.out'
      }, 'redo')
      .fromTo('#lefteyeball', {
        scaleY: 1
      }, {
        scaleY: 0.2,
        duration: 0.1,
        repeat: 3,
        yoyo: true,
        transformOrigin: '50% 50%',
        ease: 'circ.out'
      }, 'redo+=3')
      .fromTo('#righteyeball', {
        scaleY: 1
      }, {
        scaleY: 0.2,
        duration: 0.1,
        repeat: 3,
        yoyo: true,
        transformOrigin: '50% 50%',
        ease: 'circ.out'
      }, 'redo+=3')
      .to('#eyecontain', {
        rotation: -20,
        duration: 0.5,
        repeat: 1,
        yoyo: true,
        transformOrigin: '50% 50%',
        ease: 'sine.inOut'
      }, 'redo+=2');

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      tl.kill();
    };
  }, []);

  return (
    <>
      <Button
        ref={buttonRef}
        id="back-to-top-button"
        onClick={() => handleScrollIntoView(`${id}`)}
        aria-label="back-to-top"
        variant="icon"
        size="max"
        className={`fixed right-8 bottom-8 sm:right-12 sm:bottom-12 lg:right-24 lg:bottom-16 p-2 z-[100] bg-transparent hover:bg-white/10 dark:hover:bg-white/5 border-0 ${backToTop}`}
        style={{ width: '120px', height: '120px' }}
      >
        <svg 
          id="walle" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 139.4 129.4"
          className="w-full h-full"
        >
          <defs>
            <clipPath id="clip-path">
              <circle cx="140.5" cy="978.2" r="4.3" fill="none" transform="translate(-81.8 -924.4)" />
            </clipPath>
            <clipPath id="clip-path-2">
              <path d="M148.5,976.5s1.3,5.2-3.2,6.7l3.4,3.6,9.3-2.1-5-8.3Z" fill="none" transform="translate(-81.8 -924.4)" />
            </clipPath>
            <clipPath id="clip-path-3">
              <circle cx="155.8" cy="983.6" r="4.3" fill="none" transform="translate(-81.8 -924.4)" />
            </clipPath>
            <clipPath id="clip-path-4">
              <path d="M130.4,1007.6s1.3-.4,1.9.7a1.5,1.5,0,0,1-.3,1.8c-.2.3-4.5,2.9-4.5,2.9l-20.6,13.7-3.5-6.4Z" fill="none" transform="translate(-81.8 -924.4)" />
            </clipPath>
            <clipPath id="clip-path-5">
              <path d="M150.6,1000s1.4.3,1.3,1.5a1.5,1.5,0,0,1-1.1,1.5c-.3.2-5.3.5-5.3.5l-24.6,2.3v-7.3Z" fill="none" transform="translate(-81.8 -924.4)" />
            </clipPath>
          </defs>
          <g id="Layer_2">
            <g className={flip ? 'head-flipped' : 'head'} style={{ transformOrigin: '50% 50%' }}>
              <g id="neck">
                <g id="neckb">
                  <path d="M157.8,995.6a2.6,2.6,0,1,1-4.1-2.2,6.1,6.1,0,0,0-1.7-.3c-1-.2-.9-1.3-.8-1.8a1.6,1.6,0,0,1-.5-1.2,1.7,1.7,0,1,1,3.4,0,1.6,1.6,0,0,1-.5,1.2,5.8,5.8,0,0,0,1.7,1.8A2.6,2.6,0,0,1,157.8,995.6Z" transform="translate(-81.8 -924.4)" fill="#a2b2b3" />
                  <circle cx="70.6" cy="65.6" r="0.9" fill="#636767" />
                </g>
                <g id="neckf">
                  <path fill="#a2b2b3" d="M64.6 67.1L65.3 67.6 69.3 67.5 69.6 67 64.6 67.1z" />
                  <path d="M149.8,983.4l.2,2.6-1.9,2.3-1.7.2s-2.5,1.9.3,3.1h4.8s-1.9-2,.5-2.8l-1.5-.2,2.4-2.3L152,983Z" transform="translate(-81.8 -924.4)" fill="#ddeced" />
                  <path d="M147,992l4.1-.2,1.1,1.3h2.1a3,3,0,0,0-1.7,2.4h-7.6a2.6,2.6,0,0,1,2.3-2.6Z" transform="translate(-81.8 -924.4)" fill="#ddeced" />
                </g>
              </g>
              <g id="eyecontain">
                <g id="eyes" style={{ transform: `translate3d(${x}px, ${y}px, 0)` }}>
                  <g id="lefteye">
                    <path id="lefteyeb2" d="M143.8,972.7l-6.1,1.1a6.2,6.2,0,0,0-4.1,8s2.3,4.4,6.6,3.7l5.4-.6a5.7,5.7,0,0,0,4.4-6l-.6-4.1S148.7,971.8,143.8,972.7Z" transform="translate(-81.8 -924.4)" fill="#a2b2b3" />
                    <path id="lefteyeb1" d="M145.1,972.1l-8.1,1s-5.8,1.6-4.1,7.3a4.9,4.9,0,0,0,5.6,3.4l5.4-.6s4.6-.8,4.4-5.4l-.6-4.6S147.9,971.6,145.1,972.1Z" transform="translate(-81.8 -924.4)" fill="#ddeced" />
                    <g id="lefteyeball">
                      <circle cx="58.7" cy="53.8" r="4.3" fill="#0c1112" />
                      <g clipPath="url(#clip-path)">
                        <circle cx="59.7" cy="54.8" r="4.3" fill="#394848" />
                      </g>
                      <circle cx="61.5" cy="51.2" r="1.4" fill="#fff" />
                    </g>
                  </g>
                  <g id="eyespace">
                    <g clipPath="url(#clip-path-2)">
                      <circle cx="66.4" cy="56.1" r="3.6" fill="#f49123" />
                    </g>
                  </g>
                  <g id="righteye">
                    <path id="righteyeb2" d="M158.8,978.7l4.1,4.7a6.2,6.2,0,0,1-1.8,8.8s-4.5,2.1-7.4-1.2l-3.9-3.9a5.7,5.7,0,0,1,.2-7.4l3-2.8S155.5,974.9,158.8,978.7Z" transform="translate(-81.8 -924.4)" fill="#a2b2b3" />
                    <path id="righteyeb1" d="M156.4,976l5.4,6.1s3.3,5-1.8,8.2a4.9,4.9,0,0,1-6.4-1.2l-3.7-4s-2.9-3.6.3-7l3.5-3.1S154.7,973.8,156.4,976Z" transform="translate(-81.8 -924.4)" fill="#ddeced" />
                    <g id="righteyeball">
                      <circle cx="74" cy="59.2" r="4.3" fill="#0c1112" />
                      <g clipPath="url(#clip-path-3)">
                        <circle cx="75" cy="60.2" r="4.3" fill="#394848" />
                      </g>
                      <circle cx="74.7" cy="56.1" r="1.4" fill="#fff" />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g className="body">
              <g id="rightarm" style={{ transformOrigin: '100% 0' }}>
                <path d="M140.9,999.3l-10.9,6.9a3.2,3.2,0,0,0-.4,4.5c1.9,2.6,5,.1,5,.1l9.2-5.1s3.8-2.3,1.9-5.1A3.8,3.8,0,0,0,140.9,999.3Z" transform="translate(-81.8 -924.4)" fill="#c6690c" />
                <g clipPath="url(#clip-path-4)">
                  <path id="newrightarm" d="M130.6,1008.4l10.8-6.2a.6.6,0,0,1,.8,0c.3.3.8.5.1,1.1s-10.8,6.5-10.8,6.5-.8.5-1,.4-.6-.9-.6-.9S129.6,1009.1,130.6,1008.4Z" transform="translate(-81.8 -924.4)" fill="#a2b2b3" />
                </g>
                <circle cx="48.5" cy="85" r="1.3" fill="#636767" />
                <g id="backhand">
                  <path d="M131,1011.5c.9.6,1.6-.2,2.4-.4a3.8,3.8,0,0,1,1.5-.3c.1.8-.4,1.4-.5,2.1l-1.4.4c-1.5.7-2.8.7-3.9-.7a.9.9,0,0,0-.5-.7,2,2,0,0,1-.5-1.8c-.1-.7.5-.8.9-1s1.8.7,1.7,1.9A.5.5,0,0,0,131,1011.5Zm-1.1-.9c-.1-.3-.2-.6-.6-.6s-.6.1-.6.5a.7.7,0,0,0,.7.7C129.8,1011.2,129.9,1010.9,130,1010.7Z" transform="translate(-81.8 -924.4)" fill="#636767" />
                  <path d="M133.4,1016.1a3.9,3.9,0,0,1-4.3,3.6c-.9-.1-1.3-.9-1.8-1.6a5.5,5.5,0,0,1,.5-1.8c.2-.8.4-.6.8-.1a1.8,1.8,0,0,0,2.4.7Z" transform="translate(-81.8 -924.4)" fill="#424e4f" />
                </g>
              </g>
              <g id="front">
                <path fill="#f49123" d="M55.1 73.1H76.6V92.9H55.1z" />
                <rect x="54.8" y="72.9" width="21.2" height="7.67" rx="1" ry="1" fill="#ddeced" />
                <rect x="53.6" y="71.2" width="23" height="1.92" rx="1" ry="1" fill="#ddeced" />
                <path fill="#a2b2b3" d="M59.5 73.1H70.3V79.1H59.5z" />
                <path fill="#bedb45" d="M66.2 74.1H68.4V77.9H66.2z" />
                <path fill="#636767" d="M61.3 74H64.2V78H61.3z" />
                <circle cx="62.4" cy="75.6" r="0.5" fill="#f76f6f" />
              </g>
              <g id="leftarm" style={{ transformOrigin: '100% 0' }}>
                <g id="bicep">
                  <path d="M165.2,998.3H151.2a3.5,3.5,0,0,0-2.7,4.2c.4,2.3,4.4,2.4,4.4,2.4l11.9-.3s4.2.8,3.9-2.8A3.5,3.5,0,0,0,165.2,998.3Z" transform="translate(-81.8 -924.4)" fill="#f2791e" />
                  <path d="M154.1,998.4h12.7s2.2.2,2.2,3.1c0,0,.3,2.8-1.8,3s-13.1.3-13.1.3Z" transform="translate(-81.8 -924.4)" fill="#ddeced" />
                </g>
                <g clipPath="url(#clip-path-5)">
                  <path id="newleftarm" d="M150.1,1000.7s-1.8-.3-2,.9,1.8,1,1.8,1l17-.2s1.1-.7.3-1.5S150.1,1000.7,150.1,1000.7Z" transform="translate(-81.8 -924.4)" fill="#a2b2b3" />
                </g>
                <g id="hand">
                  <ellipse cx="66.8" cy="77.3" rx="0.9" ry="0.9" fill="#636767" />
                  <path d="M146.1,998.7l4.5,4.9a.8.8,0,0,1-.3,1.1l-3.5,2.1s-.5,0-.4.8,1,1.5.1,2-5.7-2.6-5.7-2.6l-2-4.5a1.7,1.7,0,0,1,1.3-2Z" transform="translate(-81.8 -924.4)" fill="#a2b2b3" />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </Button>

      <style jsx>{`
        .head-flipped {
          transform: scaleX(-1);
          transform-origin: 50% 50%;
        }
      `}</style>
    </>
  );
}