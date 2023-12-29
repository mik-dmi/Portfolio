import type { Metadata } from 'next'

import { Poppins } from 'next/font/google'
import './globals.css'
import HamburgerMenu from './components/HamburgerMenu'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',

})

export const metadata: Metadata = {
  title: 'Miguel Portfolio',
  description: 'Miguel Portfolio is Web Developer Portfolio of a Software Engineer',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
     
      <body className={`${poppins.variable}  text-[#1d1d1f] bg-[#f5f5f7]`}>
 
   
      {children}
      </body>
    </html>
  )
}
