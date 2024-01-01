"use client"
import Link from 'next/link'
import React from 'react'
import {linksDropDownMenu} from '@/lib/data'
import {motion} from 'framer-motion'
import { useActiveSectionContext } from '@/context/active-section-context'

const footerLinks = [
  { name: "Linkedin", href: "https://www.linkedin.com/in/mig-caridade/" },
  { name: "Mail", href: "mailto:miguel.caridade.work@gmail.com" },
  { name: "GitHub", href: "https://github.com/mik-dmi" },
  { name: "Resume", href: "/Resume_Miguel_Caridade.pdf" },
]

const slideIn = {
  initial: {
      opacity: 0,
      y: 20
  },
  enter: (id: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
          duration: 0.5,
          delay: 0.75 + (id * 0.1), 
          ease: [.22,.61,.36,1]
      }
  }),

  exit: {

      opacity: 0,

      transition: { duration: 0.5, type: "tween", ease: "easeInOut"}

  }

}


const perspective = {
  initial:{
    opacity:0,
    rotateX: 90,
    translateY: 50,
    translateX: -15,

  },
  enter: (index: number) => ({
    opacity:1,
    rotateX: 0,
    translateY: 0,
    translateX:0,
    transition:{
      duration: 0.6,
      opacity:{duration: 0.35},
      delay: 0.5+ (index*0.1)},
      ease: [.215,.61,.351,1],
    
  }),
  exit:{
    opacity:0,
    transition:{duration: 0.5, ease:[0.7 , 0 ,0.25 , 1]}
  }
}


  
 const DropMenuLinks = () => {
  const {activeSection, setActiveSection, setTimeOfLastClick} = useActiveSectionContext()
  return (
    <div className='flex flex-col justify-between pl-12'>
      <div
      className=' flex flex-col  gap-6 box-border pt-[3rem] text-4xl font-bol '>
        {linksDropDownMenu.map((nav,index)=>(
        <div className='linkContainerPerspective'
        key={index}>
          <motion.div  
            
          
            custom={index}
            variants={perspective}
            animate="enter"
            exit="exit"
            initial="initial"
            > 
                <Link className={`font-semibold font-poppins cursor-pointer  hover:text-backgroundHero ${activeSection && nav.name ===activeSection  ? "text-xl text-backgroundHero   border-backgroundHero border-b-[3px]		line " : "text-white hover:text-backgroundHero text-lg"}`}
                onClick={()=> {
                  setActiveSection(nav.name)
                  setTimeOfLastClick(Date.now())
                }}
                href={nav.href}
               
                >
        
                  <span
                   
                   
                  >
                   {nav.name }
                  </span>
                </Link>
            </motion.div>
          </div>
            ))}   
        </div>
        <motion.div className="flex flex-wrap w-[100%] justify-between ">

          {footerLinks.map( (link, i) => {
            return (
              <motion.div 
              className='w-[40%]'
              variants={slideIn}
              custom={i} 
              initial="initial"
              animate="enter"
              exit="exit"
              key={`f_${i}`}
              >
                <a 
                className="text-lg font-poppins cursor-pointer text-white hover:text-backgroundHero w-[50%] mt-4 " 
                href={link.href} target="_blank"
                >
                  {link.name}
                </a>
              </motion.div>
            )
          })}
        </motion.div>
</div>
  )
}

export default DropMenuLinks