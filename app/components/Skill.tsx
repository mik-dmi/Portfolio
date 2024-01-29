import React from 'react'
import SectionHeadings from './SectionHeadings'
import { ReactIcon, NextIcon,AnggularIcon, JavaScriptIcon,TypeScriptIcon, CssIcon, TailwindIcon, Git,NodeIcon } from '../assets/skills_SVG/svgsSkillsIcons';
import SkillCards from './SkillCards';

const Skill = () => {
    const svgComponentsLeftSide  = [ReactIcon,JavaScriptIcon, CssIcon, Git];
    const svgComponentsRightSide = [ NextIcon,TypeScriptIcon, TailwindIcon,NodeIcon];
    
    return (
        <section className='flex w-full gap-20 py-4 items-start' >
            <div className='w-full  py-[20vh]'>
                <ul className='flex flex-col gap-5 '>
                    {svgComponentsLeftSide.map((Icon, index) => (
                        <li key={index}>
                            <SkillCards>
                                <Icon />
                            </SkillCards>
                        </li>
                    ))}
                </ul>
            </div>            
            <div className='sticky w-full top-0 flex h-[70vh] pt-[5rem] items-start  '>
                <div className='w-full'>
                    <SectionHeadings subHeader={"My Technical Knowledge"} header={"My Skills"}/>
                </div>
            </div>
            <div className='w-full  py-[30vh]'>
                <ul className='flex flex-col gap-5 '>
                    {svgComponentsRightSide.map((Icon, index) => (
                         <li key={index}>
                            <SkillCards>
                                <Icon />
                            </SkillCards>
                        </li>
                    ))}
                </ul>
            </div>
 




        </section>
  )
}

export default Skill