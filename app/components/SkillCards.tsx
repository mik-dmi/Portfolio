"use client"
import React, {useRef} from 'react'
import { useScroll, motion, useTransform} from 'framer-motion'
type Props ={
    children: React.ReactNode;
}


function SkillCards({children} : Props) {
    const ref = useRef(null)
    
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.5 1", "1.7 1"],
  });

  // Adjust the scale range based on your design preference
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1,]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

    
    
    return (
        <motion.div
        className='flex w-[12rem] flex-col self-start  bg-slate-200  p-6  shadow-md shadow-[#040c16] rounded-md mx-12   '
        ref={ref}
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
        }}
        initial={{ scale: 0.6, opacity: 0.5 }} // Initial state when the component mounts
        exit={{ scale: 0.6, opacity: 0.5 }}

        >
            {children}

        </motion.div>
    )
}

export default SkillCards