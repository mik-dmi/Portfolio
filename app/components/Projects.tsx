import React from 'react'
import {projectsData} from "@/lib/data"
import Image from 'next/image';

type ProjectInterface = (typeof projectsData)[number];


const Projects = () => {
  return (
    <section className='flex flex-col w-full py-[2rem] px-[1rem]'>
      <div className='flex flex-col px-[1rem] sm:px-[2rem]'>
        <p className='text-primary'>Explore my recent </p>
        <h2 className=' text-3xl sm:text-6xl font-bold text-[#ccd6f6]'>Projects</h2> 
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

function Project({
  title,
  description,
  features,
  tags,
  imageUrl,
}:ProjectInterface){
  return(
    <section className=' group bg-gray-100 max-w-[62rem] sm:h-[25rem] border
     border-black/5 overflow-hidden sm:pr-8 relative mb-3 sm:mb-8 last:mb-0 even:pl-2 hover:bg-gray-200 transition'>
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
  )
}


export default Projects