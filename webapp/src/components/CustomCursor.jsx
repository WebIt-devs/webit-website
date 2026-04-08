import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * CustomCursor — fixed version
 *
 * Changes from original:
 * 1. Never sets `cursor: none` globally. The custom cursor is purely ADDITIVE —
 *    it layers on top of the OS cursor instead of replacing it. This preserves
 *    OS-level accessibility affordances (cursor themes, high-contrast mode, etc.)
 * 2. Only mounts on true pointer-fine (mouse) devices AND only when the user
 *    has not requested reduced motion. Touch/stylus/keyboard users are unaffected.
 * 3. `pointer-events: none` on the overlay elements so they never block clicks.
 */
export default function CustomCursor() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [prefersReduced, setPrefersReduced] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  const ringConfig = { damping: 30, stiffness: 200, mass: 1 };
  const ringX = useSpring(cursorX, ringConfig);
  const ringY = useSpring(cursorY, ringConfig);

  useEffect(() => {
    const pointerFine = window.matchMedia('(pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    setIsDesktop(pointerFine.matches);
    setPrefersReduced(reducedMotion.matches);

    // Keep in sync if user changes OS settings mid-session
    const onPointerChange = (e) => setIsDesktop(e.matches);
    const onMotionChange = (e) => setPrefersReduced(e.matches);
    pointerFine.addEventListener('change', onPointerChange);
    reducedMotion.addEventListener('change', onMotionChange);

    return () => {
      pointerFine.removeEventListener('change', onPointerChange);
      reducedMotion.removeEventListener('change', onMotionChange);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop || prefersReduced) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isDesktop, prefersReduced, cursorX, cursorY]);

  // Don't render on touch devices or when user prefers reduced motion
  if (!isDesktop || prefersReduced) return null;

  return (
    <>
      {/* Small dot — purely additive, does NOT hide the native cursor */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{ scale: isHovering ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        aria-hidden="true"
      />
      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/50 pointer-events-none z-[9998] mix-blend-difference"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0)',
        }}
        transition={{ duration: 0.2 }}
        aria-hidden="true"
      />
    </>
  );
}