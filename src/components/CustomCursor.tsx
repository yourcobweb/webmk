import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  const cursorX = useSpring(0, { stiffness: 450, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 450, damping: 28 });

  useEffect(() => {
    // Only enable on pointer devices (not touch screens)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const moveHandler = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = !!target.closest('button, a, input, select, textarea, [role="button"]');
        setIsPointer(isClickable);
      }
    };

    const leaveHandler = () => setIsVisible(false);
    const enterHandler = () => setIsVisible(true);

    window.addEventListener('mousemove', moveHandler);
    document.addEventListener('mouseleave', leaveHandler);
    document.addEventListener('mouseenter', enterHandler);

    return () => {
      window.removeEventListener('mousemove', moveHandler);
      document.removeEventListener('mouseleave', leaveHandler);
      document.removeEventListener('mouseenter', enterHandler);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer ambient glow ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-indigo-500/40 mix-blend-screen"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          width: isPointer ? 48 : 28,
          height: isPointer ? 48 : 28,
          backgroundColor: isPointer ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
          boxShadow: isPointer ? '0 0 24px rgba(99, 102, 241, 0.4)' : 'none',
          transition: 'width 0.2s, height 0.2s, background-color 0.2s, box-shadow 0.2s',
        }}
      />
      {/* Inner precise dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full bg-indigo-400"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          width: isPointer ? 6 : 4,
          height: isPointer ? 6 : 4,
        }}
      />
    </>
  );
};
