"use client"
import { projectsData } from '@/lib/data';
import { useScroll , motion, useTransform} from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


type ProjectInterface = (typeof projectsData)[number];



export default function Project({
    title,
    description,
    features,
    tags,
    imageUrl,
    demoUrl,
    codeUrl,

  }:ProjectInterface){
    const ref = useRef<HTMLDivElement>(null)
    const {scrollYProgress} =useScroll({
      target:ref,
      offset:["0 1", "1.33 1"],
  
    })
    const scaleProgress = useTransform(scrollYProgress, [0,1] , [0.8,1]);
    const opacityProgress = useTransform(scrollYProgress, [0,1] , [0.7,1]);
    return(
        <motion.div
        ref = {ref} 
        style ={{
            scale:scaleProgress,
            opacity:opacityProgress,

        }}
        className='mb-3 sm:mb-8 last:mb-0 group'
        >
            <section
            className='lg:p-0 p-2 rounded-lg bg-slate-200 lg:max-w-[62rem] w-full xl:h-[500px]  h-lg:h-[650px] sm:max-h-[670px] max-h-[600px] border
            border-black/5 overflow-hidden lg:pr-8 relative lg:group-even:pl-2 hover:bg-slate-300 transition lg:block flex flex-col sm:text-[1rem] text-[0.9rem]'
            >

                <div className='order-2 pb-6 lg:h-full  h-[55%] px-5 lg:pl-10 sm:pr-2 lg:pt-6 pt-5 lg:max-w-[52%] w-full flex flex-col lg:group-even:ml-[29rem] group-even:ml-[0rem] lg:group-odd:mr-[29rem] group-odd:mr-[0rem]'>
                    <h3 className='text-2xl font-semibold mb-2 lg:text-left text-center'>{title}</h3>
                    <p className=" leading-relaxed sm:text-[1rem] text-[0.8rem] text-gray-700">{description}</p>
                    <div className='mt-auto flex lg:flex-col flex-row justify-between'>
                        <div className='lg:w-full w-[50%]  md:block hidden'>
                            <h4 className='text-xl font-semibold mb-1 lg:text-left text-center'>Features</h4>
                            <ul className='flex flex-col flex-wrap max-h-[5rem] ml-4  gap-x-5'>
                                {features.map((feature , index)=>(
                                <li className='ml-1 leading-relaxed text-gray-800 list-disc ' key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                        <div className=' lg:w-full  md:w-[50%] w-full  md:pb-2 pb-4'>
                            <h4 className='text-xl font-semibold md:mb-1 mb-3 lg:text-left text-center'>Technologies</h4>
                            <ul className='flex flex-row  flex-wrap lg:justify-start justify-center lg:mb-4 my-auto gap-2'>
                                {tags.map((skill , index)=>(
                                <li key={index} className='bg-primary/[0.8] px-3 py-1 md:text-[0.9rem] text-[0.8rem] font-semibold uppercase tracking-wider text-white rounded-full'>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='flex sm:gap-4 gap-2 mt-auto lg:mx-0 mx-auto mb-2'>
                    <a  href={demoUrl} target="_blank">
                        <button className='bg-backgroundHero text-white hover:bg-primary hover:border-primary transition border-2 border-white px-2 py-2 color-white flex items-center justify-center gap-2 sm:text-[1rem] text-[0.9rem] sm:w-[10rem] w-[7rem]'><span className='sm:block hidden'>Live </span>Demo<FaArrowUpRightFromSquare/></button>
                    </a>
                    <a  href={codeUrl} target="_blank">
                        <button className='bg-backgroundHero text-white hover:bg-primary hover:border-primary transition border-2 border-white px-2 py-2 color-white flex items-center justify-center gap-2 sm:text-[1rem] text-[0.9rem] sm:w-[10rem] w-[7rem]'><span className='sm:block hidden'> Source</span>Code<FaGithub/></button>
                    </a>
                    </div>
                </div>
                <Image src={imageUrl} alt='My projects' quality={95} className='absolute hidden lg:block  bottom-0 -right-40 lg:w-[38rem] w-[28rem]
                rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40 group-hover:-translate-x-3 
                group-hover:translate-y-3 group-hover:-rotate-2  group-even:group-hover:translate-x-3 
                group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-hover:scale-[1.07]   
 
                transition' />
                <div className='lg:hidden block lg:h-[50%]  object-center overflow-hidden sm:h-[45%] min-h-[170px] '>
                <Image src={imageUrl} alt='My projects' quality={95} className='order-1  w-full object-fill  rounded-t-lg ' />
                            


                </div>

            </section>
        </motion.div>
    )
  }
  