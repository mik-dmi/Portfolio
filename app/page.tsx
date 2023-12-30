"use client"
import About from "./components/About";
import Footer from "./components/Footer";
import HamburgerMenu from "./components/HamburgerMenu";
import Header from "./components/Header";
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
  const hueHero = useTransform(scrollYProgress, [0, 0.25 ,0.6, 0.70, 0.9 ,1], [0,0, 40, 65,100 ,100]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0 ,0]);
  const opacityAboutSection = useTransform(scrollYProgress, [0, 0.7,  0.9, 1], [0, 0,1,1]);

  const backgroundColorHero = useTransform(
    hueHero,
    [0, 100],
    ['#0a192f', '#f5f5f7']
  );

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  const targetEndSectionRef = useRef(null);
   
  const { scrollYProgress: scrollYProgressEndSection } = useScroll({
    target: targetEndSectionRef,
  });
  


  const hueProject = useTransform(scrollYProgressEndSection, [0,0.8 ,1], [0, 0 ,100]);
  const opacityProject = useTransform(scrollYProgressEndSection, [0, 0.7, 0.8, 1], [1,1, 0 ,0]);
  const opacityFooter = useTransform(scrollYProgressEndSection, [0, 0.9, 1], [0, 0,1]);
  const scaleHamburger = useTransform(scrollYProgress, [0.7 ,0.9,1], [0.3,1, 1]);
  
  const backgroundColorProject = useTransform(
    hueProject,
    [0, 100],
    [ '#f5f5f7','#0a192f']
  );


  return (
  
      <div  className="h-fit">

         
        
        <div ref={targetRef} className=' w-full  flex    '>
          <motion.div
            className=' h-full w-full  bg-[#0a192f] origen-center'
            style={{ backgroundColor: backgroundColorHero }} 
          >
            <motion.div 
                className=' h-screen  lg:mx-auto  px-4 sm:px-6 lg:max-w-7xl  flex flex-col justify-between mb-[2rem] '
                style={{ opacity: opacityHero}}
                >  
              <Header/>   
              <Hero/>   
            </motion.div>
            <motion.div 
                className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl '
                style={{ opacity: opacityAboutSection }} 
                >        
                <motion.div  
                style={{ scale:scaleHamburger  }}
                className="fixed top-4 right-4 z-20"
               > 
                  <HamburgerMenu backgroundColor={"primary"}/>
                </motion.div >
                <About/>
            </motion.div>
          </motion.div>     
      
      </div>  
      <div className=" mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">       
        <Skills/>
      </div>
      <div ref={targetEndSectionRef}>  
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
