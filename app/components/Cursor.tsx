"use client"
import React, { useEffect, useState } from 'react'
import {motion, useMotionValue, useSpring} from 'framer-motion'










export default function Cursor({ stickyElement }: { stickyElement: React.MutableRefObject<null> }) {

  
    const [isHovered, setIsHovered] = useState(false);
    const cursorSize = isHovered ? 60 : 15;
  
    const mouse = {
      x: useMotionValue(0),
      y: useMotionValue(0)
    }
  
    //Smooth out the mouse values
    const smoothOptions = {damping: 20, stiffness: 300, mass: 0.5}
    const smoothMouse = {
      x: useSpring(mouse.x, smoothOptions),
      y: useSpring(mouse.y, smoothOptions)
    }
  
    const manageMouseMove = e => {
      const { clientX, clientY } = e;
      const boundingClientRect = stickyElement.current?.getBoundingClientRect();
  
      //center position of the stickyElement
      if (boundingClientRect) {
        const { left, top, height, width } = boundingClientRect;
    
        // Center position of the stickyElement
        const center = { x: left + width / 2, y: top + height / 2 };
    
  
        if (isHovered) {
            // Distance between the mouse pointer and the center of the custom cursor
            const distance = { x: clientX - center.x, y: clientY - center.y };
      
            // Move mouse to the center of stickyElement + slightly move it towards the mouse pointer
            mouse.x.set(center.x - cursorSize / 2 + distance.x * 0.1);
            mouse.y.set(center.y - cursorSize / 2 + distance.y * 0.1);
          } else {
            // Move custom cursor to the center of stickyElement
            mouse.x.set(center.x - cursorSize / 2);
            mouse.y.set(center.y - cursorSize / 2);
          }

    }
  
    const manageMouseOver = e => {
      setIsHovered(true)
    }
  
    const manageMouseLeave = e => {
      setIsHovered(false)
    }
  
    useEffect( () => {
      stickyElement.current.addEventListener("mouseenter", manageMouseOver)
      stickyElement.current.addEventListener("mouseleave", manageMouseLeave)
      window.addEventListener("mousemove", manageMouseMove);
      return () => {
        stickyElement.current.removeEventListener("mouseenter", manageMouseOver)
        stickyElement.current.removeEventListener("mouseleave", manageMouseLeave)
        window.removeEventListener("mousemove", manageMouseMove)
      }
    }, [isHovered])
  return (
    <motion.div
     className='w-[16px] h-[16px] bg-primary fixed rounded-full'
     style={{

        left: smoothMouse.x, 

        top: smoothMouse.y,

      }} 

      animate={{

        width: cursorSize,

        height: cursorSize

      }} >


    </motion.div>
  )
}

