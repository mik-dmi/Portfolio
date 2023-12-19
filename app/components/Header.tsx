"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from "next/navigation";
import { useState } from 'react'
import {menu, close} from '../assets'
import Image from 'next/image';


const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about-section" },
  { name: "Projects", href: "/#projects-section" }, 
  { name: "Contact", href: "/#contact-section" },
];

const Header = () => {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);
  return (
    <header className='bg-[#0a192f]  pt-[0.5rem]'>
      <div className='flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl'> 
        <Link href="/">
          <h1 className='text-4xl font-bold'>Header</h1>
        </Link>
        <nav className="hidden gap-11 lg:flex 2xl:ml-16">
        {links.map((link, id) => (
          <div key={id}>
            {link.href !== null ? (
              pathname === link.href ? (
                <Link className="text-lg font-semibold text-white hover:text-primary" href={link.href}>
                  {link.name}
                </Link>
              ) : (
                <Link href={link.href} className="text-lg font-semibold text-white transition duration-100 hover:text-primary">
                  {link.name}
                </Link>
              )
            ) : (
              <span className="text-lg font-semibold text-gray-600 hover:text-primary">
                {link.name}
              </span>
            )}
          </div>
        ))}
        </nav>
        <div className="lg:hidden flex flex-1 justify-end items-center">
        <Image src={toggle ? close : menu }
        alt="menu"
        className="w-[28px] h-[28px]
        object-contain"
        onClick={() => setToggle((prev)=> !prev)} />
        <div 
          className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black 
          absolute z-10 top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
            <ul className='list-none flex-col  justify-end items-center flex-1'>
              {links.map((nav,index)=>(
                <li key={index} className={`font-poppins font-normal cursor-pointer 
                text-[16px] ${index === links.length - 1 ? 'mr-0' : 'mb-4'} text-white `}> 
                    <Link className="text-lg font-semibold hover:text-primary" href={nav.href}>
                 
                      {nav.name}
                    </Link>


                </li>
              ))}
            </ul>
            
        </div>

       
        </div>
        <div className='flex fixed flex-col top-[35%] left-0'>
                <ul>
                  <li>
                    <Link href={"/#contact-section"} className="text-lg font-semibold text-white transition duration-100 hover:text-primary">
                      L
                    </Link>
                  </li>
                </ul>
        </div>









      </div> 
      
      
      
    
    
    
    
    </header>
  )
}

export default Header