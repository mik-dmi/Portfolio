"use client"
import React from 'react'
import SectionHeadings from './SectionHeadings'
import { ReactIcon, NextIcon, JavaScriptIcon,TypeScriptIcon, CssIcon, TailwindIcon, GitHub,NodeIcon } from '../assets/skills_SVG/svgsSkillsIcons';
import { useScroll , motion, useTransform} from 'framer-motion';
const svgComponents = [ReactIcon, NextIcon,JavaScriptIcon,TypeScriptIcon, CssIcon, TailwindIcon, GitHub,NodeIcon]; // Add more as needed



const Skills = () => {
    const fateInAnimation = {
        initial:{
            opacity:0,
            y:100,

        },
        animate: (index: number) => ({
            opacity:1,
            y: 0,
            scale: 1, 
            transition:{
                delay: 0.05 *index
            },
            
        }),
        hover: {
            
            scale: 1.15, // Scale up on hover
            y: -10, // Move up on hover
          },
    }
  return (
    <section className='flex flex-col justify-center items-center'>
        <SectionHeadings subHeader={"My Technical Knowledge"} header={"My Skills"}/> 
        <div className='  grid-cols-4 sm:grid-col-2 gap-[2rem] inline-grid place-items-center p-[2rem]'>
        {svgComponents.map((Icon, index) => (
            <motion.div
                key={index}
                className='flex w-[12rem] flex-col justify-center bg-slate-200 items-center p-6  shadow-md shadow-[#040c16] rounded-md  hoverCard duration-100  '
                variants={fateInAnimation}
                initial = "initial"
                whileInView = "animate"
                whileHover="hover"
                viewport={{
                    once:true,
                }}
                custom = {index}
            >
                <Icon />
            </motion.div>
        ))}
        </div>

    </section>
  )
}

export default Skills