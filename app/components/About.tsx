"use client"
import React from 'react'
import MagneticIcons from './MagneticIcons'
import SectionHeadings from './SectionHeadings'

const About = () => {   
  return (
    <section className='flex w-full py-[2rem] px-[1rem] min-h-[40rem]'>

        <div className=' w-[50%] flex items-center justify-center'>
        </div>
            
        <div className=' w-[50%] px-[2rem] pb-[2rem]'>
            <SectionHeadings subHeader={"What I do"} header={"About me"}/>        
            <p className='paragraphColor leading-relaxed pb-4'> Hi! I'm Miguel and I'm a Software Engineer with a <span className='font-medium'>Master's degree in Computer Science
                and Engineering</span>. I'm passionate about developing excellent software that improves 
                users experiences on the Web. </p>
            <p className='paragraphColor py-4'> </p>
        </div>

      
    </section>
  )
}

export default About