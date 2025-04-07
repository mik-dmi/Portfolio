"use client"
import React, { useEffect } from 'react'
import {projectsData} from "@/lib/data"
import SectionHeadings from './SectionHeadings';
import Project from './ProjectCards';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useInView } from 'react-intersection-observer';



const Projects = () => {
  const{ref, inView} = useInView({
    threshold:0.25,
  });
  const {setActiveSection, timeOfLastClick} = useActiveSectionContext();
  
  useEffect(()=> {
      if(inView && Date.now() - timeOfLastClick >1000){
          setActiveSection("Projects");
      }
  },[inView, setActiveSection, timeOfLastClick]);
  
  return (
    <section ref={ref} id="projects-section" className='flex  sm:scroll-mt-28 scroll-mt-17 flex-col w-full  px-[1rem] mb-28'>
      <div className='flex flex-col justify-center items-center px-[1rem] sm:px-[2rem]'>
        <SectionHeadings subHeader={"Explore my recent"} header={"Projects"}/>  
      </div>
      <div className='flex flex-col justify-center items-center  pb-40'>
        {projectsData.map((project, index)=>(
          <React.Fragment key={index}> 
            <Project {...project}/>
          </React.Fragment >  
        ))}
      </div>
      <div>



      </div>
    </section>
  )
}



export default Projects