import React, {useState} from 'react'
import {motion} from 'framer-motion'
const SwitchName = () => {
    

    return (
      <div className="relative w-[10rem]  overflow-hidden ">
        <div
          className="relative w-full h-full "
          style={{
            position: "relative",
            top: 0,
            animation: "moveUpDown  10s infinite", // Adjust the duration as needed
          }}
        
        >
          <div className="w-full h-full  flex items-center justify-center">
            <p className="py-2 h-full">Miguel</p>
          </div>
          <div className="w-full h-full flex items-center justify-center absolute top[100%]">
            <p className="py-[0.2rem] h-full text-primary">The Developer </p>
          </div>
        </div>
      </div>
    );
  };

export default SwitchName