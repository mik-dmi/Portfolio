import type { Metadata } from 'next'

import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/app/components/Header'

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
    <html lang="en">
      
      <body className={poppins.variable}>
      
      
   
      {children}
      </body>
    </html>
  )
}
