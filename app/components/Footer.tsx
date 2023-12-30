import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer id="contact-section" className='flex text-secondary flex-col h-[100vh] justify-between items-center  px-6 pt-[6rem] pb-6 ' >
        <div className="pb-[6rem] flex flex-col items-center justify-center">
            <h1 className='text-[6.5rem]  leading-[6rem] font-semibold text-center mb-[1rem]  '>Let's work together!</h1>
            <h2 className='text-[4.5rem] font-medium mt-2 tracking-wider headersColorHero'>Start by saying Hi</h2>
            <ul className='flex  mt-[4rem] self-center gap-12 px-12 '>
                    <a href="https://www.linkedin.com/in/mig-caridade/" target="_blank">
                        <button className='text-white w-[180px] group border-2 text-[1.8rem] tracking-wider px-6 py-3 my-2 flex items-center hover:bg-primary hover:border-primary transition  justify-center'>
                            <span>Linkedin</span>               
                        </button>
                    </a>
                    <a href="mailto:miguel.caridade.work@gmail.com" target="_blank">
                        <button className='text-white w-[180px] group border-2 text-[1.8rem] tracking-wider px-6 py-3 my-2 flex items-center hover:bg-primary hover:border-primary transition  justify-center'>
                            <span>Email</span>               
                        </button>
                    </a>
                
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