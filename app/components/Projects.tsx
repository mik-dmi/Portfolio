"use client"
import React, { useEffect } from 'react'
import {projectsData} from "@/lib/data"
import SectionHeadings from './SectionHeadings';
import Project from './ProjectCards';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useInView } from 'react-intersection-observer';



const Projects = () => {
  const{ref, inView} = useInView();
  const {setActiveSection} = useActiveSectionContext();
  
  useEffect(()=> {
      if(inView){
          setActiveSection("Projects");
      }
  },[inView, setActiveSection]);
  
  return (
    <section ref={ref} id="projects-section" className='flex  scroll-mt-28 flex-col w-full  px-[1rem] mb-28'>
      <div className='flex flex-col justify-center items-center px-[1rem] sm:px-[2rem]'>
        <SectionHeadings subHeader={"Explore my recent"} header={"Projects"}/>  
      </div>
      <div className='flex flex-col justify-center items-center py-4'>
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