import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';

interface MagneticIconsProps {
  children: React.ReactNode; // Use React.ReactNode instead of string
}

function MagneticIcons({ children }: MagneticIconsProps) {
  const magnetic = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const mouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const boundingClientRect = magnetic.current?.getBoundingClientRect();

    if (boundingClientRect) {
      const { width, height, left, top } = boundingClientRect;
      const x = (clientX - (left + width / 2)) * 0.7;
      const y = (clientY - (top + height / 2) ) * 0.7;
      setPosition({ x, y });
    }
  };

  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      ref={magnetic}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness: 140, damping: 5, mass: 0.5 }}
    >
      {children} {/* Use children directly */}
    </motion.div>
  );
}

export default MagneticIcons;
