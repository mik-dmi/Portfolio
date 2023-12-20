import Link from 'next/link'
import React from 'react'
import {
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';


const Hero = () => {
  return (
    <div className=' w-full flex h-screen'>
      
      <div className='flex  flex-col justify-end left-0 items-center  '>
        <ul>
                  <li className='my-[2rem] flex justify-center items-center'>
                    <a href={"https://linkedin.com/"} target="_blank" className="social-link text-lg font-semibold text-[#ccd6f6] hover:text-white transition duration-100 hover:text-primary">
                      <FaLinkedin size = {25} />
                    </a>
                  </li>
                  <li className='my-[2rem] flex justify-center items-center'>
                    <a href={"https://github.com/"} target="_blank" className="social-link text-lg font-semibold text-[#ccd6f6] hover:text-white transition duration-100 hover:text-primary">
                      <FaGithub size={25} />
                    </a>
                  </li>
                  <li className='my-[2rem] flex justify-center items-center'>
                    <a href={"https://stackoverflow.com/"} target="_blank"className="social-link  text-lg font-semibold  text-[#ccd6f6] hover:text-white transition duration-100 hover:text-primary">
                      <BsFillPersonLinesFill size={25} />

                    </a>
                  </li>
        </ul>
        <div className='flex '>
          <div className="h-[5rem] w-[0.2rem] bg-[#8892b0] "/>
  
        </div>
      </div>
      <div>
        <div className='max-w-[1000px] mx-auto pl-16 flex flex-col justify-center h-full'>
          <p className='text-pink-600'>Hi, my name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
            Miguel Caridade 
          </h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
            I'm a Software Engineer.
          </h2>
          <p className='text-[#8892b0] py-4 max-w-[700px]'>
            I’m a Web Developer that focuses on Frontend. I specialize in crafting seamless 
            and responsive web applications to enhance user interactions online.
          </p>
          <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
              View Work
              <span className='group-hover:rotate-90 duration-300'>
              { /*<HiArrowNarrowRight className='ml-3 ' />*/}
              </span>
            </button>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Hero