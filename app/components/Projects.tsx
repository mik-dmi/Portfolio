import React from 'react'
import {projectsData} from "@/lib/data"
import SectionHeadings from './SectionHeadings';
import Project from './ProjectCards';



const Projects = () => {
  
  return (
    <section  id="projects-section" className='flex flex-col w-full py-[2rem] px-[1rem]'>
      <div className='flex flex-col px-[1rem] sm:px-[2rem]'>
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