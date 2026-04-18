import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setDotPosition({ x: e.clientX, y: e.clientY });
      // Slight delay for the outer circle for a fluid feel
      setTimeout(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      }, 50);

      const target = e.target as HTMLElement;
      setIsHovering(
        !!target.closest('a') || 
        !!target.closest('button') || 
        !!target.closest('.redacted') ||
        !!target.closest('.glow-card')
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div 
        className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div 
        className="custom-cursor-dot"
        style={{ left: `${dotPosition.x}px`, top: `${dotPosition.y}px` }}
      />
    </>
  );
}
