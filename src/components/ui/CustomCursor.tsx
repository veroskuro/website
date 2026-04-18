import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);

  // High-fidelity spring physics
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);
  const dotX = useSpring(0, { damping: 40, stiffness: 400, mass: 0.2 });
  const dotY = useSpring(0, { damping: 40, stiffness: 400, mass: 0.2 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target as HTMLElement;
      setIsHovering(
        !!target.closest('a') || 
        !!target.closest('button') || 
        !!target.closest('.redacted') ||
        !!target.closest('.glow-card') ||
        !!target.closest('.magnetic')
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY, dotX, dotY]);

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 w-10 h-10 border border-primary/40 rounded-full pointer-events-none z-[10000] mix-blend-difference"
        style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'var(--color-primary)' : 'transparent',
          opacity: isHovering ? 0.2 : 1
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.div 
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-primary rounded-full pointer-events-none z-[10001]"
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
        animate={{ scale: isHovering ? 0 : 1 }}
      />
    </>
  );
}
