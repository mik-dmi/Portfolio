"use client"
import { projectsData } from '@/lib/data';
import { useScroll , motion, useTransform} from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

type ProjectInterface = (typeof projectsData)[number];



export default function Project({
    title,
    description,
    features,
    tags,
    imageUrl,
  }:ProjectInterface){
    const ref = useRef<HTMLDivElement>(null)
    const {scrollYProgress} =useScroll({
      target:ref,
      offset:["0 1", "1.33 1"],
  
    })
    const scaleProgress = useTransform(scrollYProgress, [0,1] , [0.8,1]);
    const opacityProgress = useTransform(scrollYProgress, [0,1] , [0.6,1]);
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
            className=' rounded-lg bg-slate-200 max-w-[62rem] sm:h-[25rem] border
            border-black/5 overflow-hidden sm:pr-8 relative group-even:pl-2 hover:bg-slate-300 transition'
            >

                <div className='pt-4 pb-6 h-full px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col group-even:ml-[29rem]'>
                    <h3 className='text-2xl font-semibold mb-2'>{title}</h3>
                    <p className=" leading-relaxed text-gray-700">{description}</p>
                    <h4 className='text-xl font-semibold mb-1'>Features</h4>
                    <ul className='flex flex-col flex-wrap max-h-[5rem]'>
                        {features.map((feature , index)=>(
                        <li className='ml-2 leading-relaxed text-gray-800' key={index}>- {feature}</li>
                        ))}
                    </ul>
                    <ul className='flex flex-wrap mt-auto gap-2'>
                        {tags.map((skill , index)=>(
                        <li key={index} className='bg-primary/[0.7] px-3 py-1 text-[0.9rem] font-semibold uppercase tracking-wider text-white rounded-full'>{skill}</li>
                        ))}
                    </ul>
                </div>
                <Image src={imageUrl} alt='My projects' quality={95} className='absolute top-10 -right-40 w-[38rem]
                rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40 group-hover:-translate-x-3 
                group-hover:translate-y-3 group-hover:-rotate-2  group-even:group-hover:translate-x-3 
                group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-hover:scale-[1.07]   transition' />
            </section>
        </motion.div>
    )
  }
  