import type { Metadata } from 'next'

import { Mulish } from 'next/font/google'
import './globals.css'
import ActiveSectionContextProvider from '@/context/active-section-context'

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-mulish',
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
    <html lang="en" className='!scroll-smooth'>
     
      <body className={`${mulish.variable}  text-[#1d1d1f] bg-[#f5f5f7]`}>
 
      <ActiveSectionContextProvider>
      
        {children}
      </ActiveSectionContextProvider>
      </body>
    </html>
  )
}
