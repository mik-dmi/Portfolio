"use client"
import React, { useEffect } from 'react'
import SectionHeadings from './SectionHeadings'
import Image from 'next/image'
import { profilePic } from '../assets'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/active-section-context'
import ReactCountryFlag from "react-country-flag"

const About = () => {   


  const{ref, inView} = useInView({
    threshold:0.2,
  });
  const {setActiveSection, timeOfLastClick} = useActiveSectionContext();
  
  useEffect(()=> {
      if(inView && Date.now() - timeOfLastClick >1000){
          setActiveSection("About");
      }
  },[inView, setActiveSection, timeOfLastClick]);

  return (
    <section ref={ref} id="about-section" className='flex lg:flex-row flex-col w-full pt-[2rem] lg:mb-60 mb-[12rem] sm:scroll-mt-28 scroll-mt-15 px-[1rem] '>

        <div className=' lg:w-[50%] sm:w-full  w-fit flex items-start justify-center lg:order-1 order-2 lg:mt-0 mt-10'>
            <Image src={profilePic} alt="Profile picture" quality={95} width={400} placeholder="blur" priority={true} className='profilePic '/>
        </div>
            
        <div className=' lg:w-[50%] w-full px-[2rem] pb-[2rem] lg:order-2 order-1'>
            <div className='lg:w-full w-fit'>
              <SectionHeadings subHeader={"What I do"} header={"About me"}/>        
            </div>
            <p className='paragraphColor leading-relaxed '> Hi! I'm Miguel and I'm a <span className='font-medium'>Software Engineer</span> with a <span className='font-medium'>Master's degree in Computer Science and Engineering</span>. 
              I'm passionate about developing software that <span className='font-medium'>improves user experiences on the Web</span>. 
              I am a <span className='font-medium'>Web Developer</span> with knowledge in both <span className='font-medium'>Backend</span> and <span className='font-medium'>Frontend</span>, focusing on <span className='font-medium'>Frontend Development</span></p>.

            <p className='paragraphColor leading-relaxed pt-2 pb-4'>Beyond Coding and  Web Development, I'm also passionate about doing <span className='font-medium'>KickBoxing</span>, <span className='font-medium'>Scuba Diving</span> and <span className='font-medium'>Learning Languages</span>
            (I'm fluent in <span className='font-medium'>Portuguese</span> <ReactCountryFlag countryCode="PT" svg style={{marginBottom:"0.2rem"}} />, <span className='font-medium'>English</span> <ReactCountryFlag countryCode="Gb" style={{marginBottom:"0.2rem"}} svg />  and <span className='font-medium'>Swedish</span> <ReactCountryFlag countryCode="SE" svg style={{marginBottom:"0.2rem"}}/>)  </p>
            
        </div>

      
    </section>
  )
}

export default About