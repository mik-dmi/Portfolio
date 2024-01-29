"use client"
import React, { useEffect } from 'react'
import SectionHeadings from './SectionHeadings'
import { ReactIcon, NextIcon,AngularIcon, JavaScriptIcon,TypeScriptIcon, CssIcon, TailwindIcon, Git,NodeIcon, HTMLIcon, Python , CIcon} from '../assets/skills_SVG/svgsSkillsIcons';
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useActiveSectionContext } from '@/context/active-section-context';
import { useInView } from 'react-intersection-observer';
const svgComponents = [
    {icon: ReactIcon,
     tag:  "React.js" ,
    },
    {
        icon: NextIcon,
        tag: "Next.js",
    },
    {
      icon: AngularIcon,
      tag: "Angular",
    },
    {
        icon: JavaScriptIcon,
        tag: "JavaScript",
    },
    {
        icon: TypeScriptIcon,
        tag: "TypeScript",
    },
    {
        icon: CssIcon,
        tag: "CSS",
    },
    {
        icon: TailwindIcon,
        tag: "Tailwind",
    },
    {
        icon: Git,
        tag: "Git",
    },   
    {
        icon: NodeIcon,
        tag: "Node.js",
    },
    {
        icon:HTMLIcon,
        tag: "HTML",
    },
    {
        icon:Python,
        tag:"Python"
    },
    {
        icon: CIcon,
        tag: "C",
    },
    ]    
        /*,, GitHub,NodeIcon]; */// Add more as needed



const Skills = () => {
  const{ref, inView} = useInView({

    threshold:0.85,
  });
  const {setActiveSection, timeOfLastClick} = useActiveSectionContext();
  
  useEffect(()=> {
      if(inView && Date.now() - timeOfLastClick >1000){
          setActiveSection("Skills");
      }
  },[inView, setActiveSection, timeOfLastClick]);



    return (
        <section ref={ref} id="skills-section" className='flex flex-col sm:scroll-mt-28 scroll-mt-20 justify-center items-center  lg:mb-60 mb-[12rem]'>
          <SectionHeadings subHeader={"My Technical Knowledge"} header={"My Skills"} />
            <ul className='max-w-[60rem] mt-4 flex flex-wrap justify-center gap-4 text-lg '>
            {svgComponents.map(({ icon: Icon, tag }, index) => {
              const x = useMotionValue(0);
              const y = useMotionValue(0);
    
              const mouseXSpring = useSpring(x);
              const mouseYSpring = useSpring(y);
    
              const rotateX = useTransform(
                mouseYSpring,
                [-0.5, 0.5],
                ["10.5deg", "-10.5deg"]
              );
              const rotateY = useTransform(
                mouseXSpring,
                [-0.5, 0.5],
                ["-15.5deg", "15.5deg"]
              );
    
              const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                const rect = (e.target as HTMLElement).getBoundingClientRect();
    
                const width = rect.width;
                const height = rect.height;
    
                const mouseX = e.clientX - rect.left;
                const mouseY = e.clientY - rect.top;
    
                const xPct = mouseX / width - 0.5;
                const yPct = mouseY / height - 0.5;
    
                x.set(xPct);
                y.set(yPct);
              };
    
              const handleMouseLeave = () => {
                x.set(0);
                y.set(0);
              };
    
              const fadeAnimation = {
                initial: {
                  opacity: 0,
                  y: 100,
                },
                animate: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    delay: 0.05 * index,
                  },
                },
              };
    
              return (
                <div key={index}
                className=' '>
                <motion.div
                  
                  className=' flex px-6 gap-2  justify-center items-center  bg-white   shadow-sm border-[1px] border-primary/[0.2] rounded-xl  '
                  style={{
                    rotateY,
                    rotateX,
                    transformStyle: "preserve-3d",
                  }}
                  variants={fadeAnimation}
                  initial='initial'
                  whileInView='animate'
                  viewport={{
                    once: true,
                  }}
                  custom={index}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >   
                <div   className='sm:w-[2rem] w-[1.5rem]'
                 style={{
                    transform: "translateZ(50px)",
                  }}>
                  <Icon />
                </div>
                  <p
                    style={{
                      transform: "translateZ(50px)",
                    }}
                    className='tracking-wider sm:text-[1.5rem] text-[1.1rem] py-4 headersColor headersColor '
                  >
                    {tag}
                  </p>
                </motion.div>
                </div>
              );
            })}
          </ul>
        </section>
      );
    };
    
    export default Skills;

