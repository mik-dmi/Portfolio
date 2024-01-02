"use client"
import Link from 'next/link'
import React from 'react'
import {linksDropDownMenu} from '@/lib/data'
import HamburgerMenu from './HamburgerMenu';
import { useActiveSectionContext } from '@/context/active-section-context';



const Header = () => {

  const {activeSection, setActiveSection, setTimeOfLastClick} = useActiveSectionContext()
  return (
    <header className=' pt-[1rem] flex items-center'>
      <div className='flex items-center w-full sm:justify-between  '> 
        <Link href="/">
          <h1 className='text-xl text-white font-bold '>
           {/* <SwitchName/>*/}
          </h1>
        </Link>
        <nav className="hidden gap-11 lg:flex 2xl:ml-16">
        {linksDropDownMenu.map((link, id) => (
          <div key={id}>
                <Link 
                className={`font-semibold ${activeSection && link.name ===activeSection  ? "text-xl text-primary   border-primary border-b-[3px]		line " : "text-white hover:text-primary text-lg"} `}
                onClick={()=> {
                  setActiveSection(link.name)
                  setTimeOfLastClick(Date.now())
                }}
                href={link.href}>
                  {link.name}
                </Link>
          </div>
        ))}
        </nav>
        <div className="lg:hidden fixed top-4 right-4 z-20">
          <HamburgerMenu backgroundColor={""}/>
        </div>  
      </div>  
    </header>
  )
}

export default Header