"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from "next/navigation";
import { useState } from 'react'
import {menu, close} from '../assets'
import Image from 'next/image';
import {AnimatePresence, motion} from 'framer-motion'
import {linksDropDownMenu} from '@/lib/data'
import DropMenuLinks from './DropMenuLinks';
import SwitchName from './SwitchName';



const Header = () => {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);


const variants = {
  open: {
    width: 350,
    height: 500, 
    opacity:1,
    transition:{duration:0.75, ease:[0.76,0,0.24,1]}

  },
  closed:{
    width:0,
    height: 0,
    opacity:0,
    transition:{duration:0.75, delay:0.35 , ease:[0.76,0,0.24,1]}

  } 
}   





  return (
    <header className=' pt-[1rem]'>
      <div className='flex items-center justify-between '> 
        <Link href="/">
          <h1 className='text-4xl text-white font-bold'>
            <SwitchName/>
          </h1>
        </Link>
        <nav className="hidden gap-11 lg:flex 2xl:ml-16">
        {linksDropDownMenu.map((link, id) => (
          <div key={id}>
            
                <Link className="text-lg font-semibold text-white hover:text-primary" href={link.href}>
                  {link.name}
                </Link>
          
          </div>
        ))}
        </nav>
        <div className="lg:hidden flex flex-1 justify-end items-center">
        <Image src={toggle ? close : menu }
        alt="menu"
        className="w-[28px] h-[28px]
        object-contain z-20 cursor-pointer"
        onClick={() => setToggle((prev)=> !prev)} />
        <motion.div 
        className={`flex   py-4 px-12 bg-primary 
        absolute z-10 top-0 -right-2 mx-4 my-2 w-[300px] h-[400px] rounded-xl `}
        variants={variants}
        animate = {toggle ? "open" : "closed"}
        initial = "closed"
        > 
          <AnimatePresence>
            {toggle && <DropMenuLinks/>}
          </AnimatePresence>
            
        </motion.div>

       
        </div>
        




      </div> 
      
      
      
    
    
    
    
    </header>
  )
}

export default Header