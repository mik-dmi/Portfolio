"use client"
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Project from "./components/Projects";
import Skills from "./components/Skills";
import { useTransform, useScroll, motion } from 'framer-motion';
import React, { useState, useEffect , useRef} from 'react';

export default function Home() {
  const targetRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: targetRef,

  })
  const hueProject = useTransform(scrollYProgress, [0,0.8 ,1], [0, 0 ,100]);
  const opacityProject = useTransform(scrollYProgress, [0, 0.7, 0.8, 1], [1,1, 0 ,0]);
  const opacityFooter = useTransform(scrollYProgress, [0, 0.9, 1], [0, 0,1]);

  const backgroundColorProject = useTransform(
    hueProject,
    [0, 100],
    [ '#f5f5f7','#0a192f']
  );

  return (
    <div> 
            <Hero/>     
        <div className=" mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">       
          <Skills/>
        </div>
        <div ref={targetRef}>  
          <motion.div style={{ backgroundColor: backgroundColorProject }} >
            <motion.div className=" mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl"style={{  opacity: opacityProject }}>
              <Project/>
            </motion.div>
            
            <motion.div style={{ opacity: opacityFooter }} >
              <Footer/>
            </motion.div>
          </motion.div> 
        </div> 
    </div>
  )
}
