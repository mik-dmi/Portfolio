import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex text-secondary flex-col h-[100vh] justify-between items-center  px-6 pt-[6rem] pb-6 ' >
        <div className="pb-[6rem] flex flex-col items-center justify-center">
            <h1 className='text-[6.5rem]  leading-[6rem] font-semibold text-center mb-[1rem]  '>Let's work together!</h1>
            <h2 className='text-[4.5rem] font-medium mt-2 tracking-wider headersColorHero'>Start by saying Hi</h2>
            <ul className='flex  mt-[4rem] self-center gap-12 px-12 '>
                <li  className='bg-primary/[0.7] px-3 items-center py-1 w-[12rem] flex justify-center text-[1.8rem] font-semibold uppercase tracking-wider text-white rounded-full'>
                    <Link href="https://www.linkedin.com/" target="_blank">
                        <span>Linkedin</span>
                    </Link>
                </li>
                <li  className='bg-primary/[0.7] px-3 py-1 items-center w-[12rem] flex justify-center text-[1.8rem] font-semibold uppercase tracking-wider text-white rounded-full'>
                    <Link href="https://www.linkedin.com/" target="_blank">
                        <span>Email</span>
                    </Link>  
                </li>
            </ul>
        </div>
        <ul className='flex gap-10 tracking-wider text-[1rem]  '>
            <li>
                <Link href="#home">
                    <span className='hover:text-primary underline underline-offset-4'>Home</span>
                </Link>
            </li>
            <li>
                <Link href="#about">
                    <span className='hover:text-primary underline underline-offset-4'>About</span>
                </Link>
            </li>
            <li>
                <Link href="#skills">
                    <span className=' hover:text-primary underline underline-offset-4'>Skills</span>
                </Link>
            </li>
            <li>
                <Link href="#projects">
                    <span className=' hover:text-primary underline underline-offset-4'>Projects</span>
                </Link>                
            </li>
        </ul>
    </footer>
  )
}

export default Footer