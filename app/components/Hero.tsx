"use client"
import React, { useState, useEffect , useRef} from 'react';
import {
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useTransform, useScroll, motion } from 'framer-motion';
import Header from './Header';
import About from './About';


const Hero = () => {
    const socialLinks = [
      { href: 'https://linkedin.com/', icon: <FaLinkedin size={25} /> },
      { href: 'https://github.com/', icon: <FaGithub size={25} /> },
      { href: 'https://stackoverflow.com/', icon: <BsFillPersonLinesFill size={25} /> },
    ];
  
    const [activeLink, setActiveLink] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setActiveLink((prevActiveLink) => (prevActiveLink + 1) % socialLinks.length);
      }, 1000);
  
      return () => clearInterval(interval);
    }, [activeLink, socialLinks.length]);



    const targetRef = useRef(null);
    const {scrollYProgress} = useScroll({
      target: targetRef,

    })
    const hue = useTransform(scrollYProgress, [0, 0.25 ,0.6, 0.95 ,1], [0,0, 40, 65 ,100]);
    const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0 ,0]);

    const backgroundColor = useTransform(
      hue,
      [0, 100],
      ['#0a192f', 'rgb(248, 250, 252)']
    );

  return (

        <div ref={targetRef} className=' w-full  flex    '>
          <motion.div
            className='relative h-full w-full  bg-[#0a192f] origen-center'
            style={{ backgroundColor }} 
          >

            <motion.div 
            className=' h-screen  mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl  flex flex-col justify-between mb-[2rem] '
            style={{ opacity }}
            >
  
              <Header/>
          
                <div className='flex '>
                  <div className=' flex  flex-col justify-end bottom-0 left-4 items-center  '>
                    <ul>
                      {socialLinks.map((link, index) => (
                        <li key={index} className={`my-[2rem] text-[#8892b0] flex justify-center items-center ${activeLink === index ? 'active' : ''}`}>
                          <a href={link.href} target="_blank" className="">
                            {link.icon}
                          </a>
                        </li>
                      ))}
                    </ul>

                    <div className='flex '>
                      <div className="h-[5rem] w-[0.2rem] bg-[#8892b0] "/>
              
                    </div>
                  </div>   
                    <div className='max-w-[1000px]  pb-[15rem] m-auto pl-16 flex flex-col justify-center h-full'>
                      <p className='text-primary'>Hi, my name is</p>
                      <h1 className='text-4xl sm:text-7xl font-bold headersColorHero'>
                        Miguel Caridade 
                      </h1>
                      <h2 className='text-4xl sm:text-7xl font-bold paragraphColorHero'>
                        I'm a Software Engineer.
                      </h2>
                      <p className='paragraphColorHero leading-relaxed py-4 max-w-[700px]'>
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
            </motion.div>
          

            <div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl '>
            <About/>
            </div>
          </motion.div> 
        
          

        
          
    </div>
    
  )
}

export default Hero