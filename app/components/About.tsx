"use client"
import React from 'react'
import MagneticIcons from './MagneticIcons'
import SectionHeadings from './SectionHeadings'
import Image from 'next/image'
import { profilePic } from '../assets'

const About = () => {   
  return (
    <section id="about-section" className='flex w-full pt-[2rem] mb-60 scroll-mt-28 px-[1rem] '>

        <div className=' w-[50%] flex items-start justify-center'>
            <Image src={profilePic} alt="Profile picture" quality={95} width={400} placeholder="blur" priority={true} className='profilePic '/>
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