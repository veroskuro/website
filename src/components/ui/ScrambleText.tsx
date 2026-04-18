import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*+<>?/\\';

export default function ScrambleText({ text, className = '', delay = 0 }: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [isScrambling, setIsScrambling] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    // Start after delay
    timeout = setTimeout(() => {
      setIsScrambling(true);
      let iteration = 0;
      let scrambleInterval: NodeJS.Timeout;

      scrambleInterval = setInterval(() => {
        setDisplayText((prev) =>
          text
            .split('')
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
            })
            .join('')
        );

        if (iteration >= text.length) {
          clearInterval(scrambleInterval);
          setIsScrambling(false);
        }

        iteration += 1 / 3; // 3 frames per character resolve
      }, 30); // 30ms per frame

      return () => clearInterval(scrambleInterval);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <motion.span 
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1, delay }}
    >
      {displayText || text.replace(/./g, '_')}
    </motion.span>
  );
}
