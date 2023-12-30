"use client"
import { motion } from 'framer-motion';
import React, { ReactNode, useRef, useState } from 'react';

interface MagneticIconsProps {
  children: ReactNode;
}

function MagneticText({ children }: MagneticIconsProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const mouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;

    // Use optional chaining to handle the null case
    const boundingClientRect = ref.current?.getBoundingClientRect();

    if (boundingClientRect) {
      const { width, height, left, top } = boundingClientRect;
      const x = (clientX - (left + width / 2)) * 0.3;
      const y = (clientY - (top + height / 2) ) * 0.3;
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
      ref={ref}
      animate={{ x, y }}
      className='w-full h-full flex items-center justify-center '
      
    >
      {children}
    </motion.div>
  );
}

export default MagneticText;
