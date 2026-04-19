import { useState, useEffect } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export default function ScrambleText({ text, className = '', delay = 0 }: ScrambleTextProps) {
  const [scrambled, setScrambled] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDone(false);
    setScrambled('');

    const timeout = setTimeout(() => {
      let iteration = 0;

      const id = setInterval(() => {
        const next = text.split('').map((char, index) => {
          if (char === ' ') return '\u00A0'; // non-breaking space — same width as space
          if (index < iteration) return text[index];
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        }).join('');

        setScrambled(next);
        iteration += 1 / 3;

        if (iteration >= text.length) {
          clearInterval(id);
          setDone(true);
        }
      }, 30);

      return () => clearInterval(id);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    // Outer: position:relative, sized by the REAL invisible text — layout never shifts
    <span className={className} style={{ position: 'relative', display: 'inline-block', whiteSpace: 'pre-wrap' }}>
      {/* Ghost: invisible real text that holds the exact layout space */}
      <span style={{ visibility: 'hidden', userSelect: 'none' }} aria-hidden>
        {text}
      </span>
      {/* Scramble layer: absolutely on top, never affects layout */}
      <span
        aria-live="polite"
        style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
        }}
      >
        {done ? text : scrambled}
      </span>
    </span>
  );
}
