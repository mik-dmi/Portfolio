import gsap from 'gsap';
import React, { ReactNode, useRef, useEffect } from 'react';

interface MagneticIconsProps {
  children: ReactNode;
}

function MagneticAnimation({ children }: MagneticIconsProps) {
  const magnetic = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (magnetic.current) {
      const xTo = gsap.quickTo(magnetic.current, 'x', { duration: 1, ease: 'elastic.out(1,0.3)' });
      const yTo = gsap.quickTo(magnetic.current, 'y', { duration: 1, ease: 'elastic.out(1,0.3)' });

      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { width, height, left, top } = magnetic.current?.getBoundingClientRect() || { width: 0, height: 0, left: 0, top: 0 };
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        xTo(x * 6);
        yTo(y  * 6);
      };

      const handleMouseLeave = () => {
        gsap.to(magnetic.current, { x: 0, duration: 0.5, ease: 'power4.out' });
        gsap.to(magnetic.current, { y: 0, duration: 0.5, ease: 'power4.out' });
      };

      // Add event listeners
      magnetic.current.addEventListener('mousemove', handleMouseMove);
      magnetic.current.addEventListener('mouseleave', handleMouseLeave);

      // Cleanup: Remove event listeners
      return () => {
        magnetic.current?.removeEventListener('mousemove', handleMouseMove);
        magnetic.current?.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return React.cloneElement(children as React.ReactElement, { ref: magnetic });
}

export default MagneticAnimation;
