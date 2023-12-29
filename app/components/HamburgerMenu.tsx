"use client"
import Image from 'next/image'
import React, {useState }  from 'react'
import {menu, close} from '../assets'
import {AnimatePresence, motion} from 'framer-motion'
import DropMenuLinks from './DropMenuLinks';


interface HamburgerMenuProps {
    backgroundColor: string;
  }
  
function HamburgerMenu({backgroundColor}:HamburgerMenuProps){
const [toggle, setToggle] = useState(false);

const variants = {
    open: {
      width: 350,
      height: 500, 
      opacity:1,
      transition:{duration:0.75, ease:[0.76,0,0.24,1]}
  
    },
    closed:{
      width: 17,
      height: 25,
      opacity:0,
      transition:{duration:0.75, delay:0.35 , ease:[0.76,0,0.24,1]}
  
    } 
  }   
  return (
    <div className="    ">
        <div className={`p-2 z-20 relative  rounded-full  bg-${backgroundColor}`}>
            <Image src={toggle ? close : menu }
            alt="menu"
            className="w-[28px] h-[28px]
            object-contain  cursor-pointer "
            onClick={() => setToggle((prev)=> !prev)} />
        </div>
        <motion.div 
        className={` 
         z-10  top-0 w-[300px] h-[400px]  absolute right-0 `}
        variants={variants}
        animate = {toggle ? "open" : "closed"}
        initial = "closed"
        > 
        <div className='flex   py-4  bg-primary   rounded-xl w-full h-full  '>
            <AnimatePresence>
                {toggle && <DropMenuLinks/>}
            </AnimatePresence>
        </div>
            
        </motion.div>

 
    </div>
  )
}

export default HamburgerMenu