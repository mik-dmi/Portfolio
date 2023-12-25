import React, { ReactNode } from 'react';

interface MainButtonsProps {
  children: ReactNode;
  backgroundColor?: string;

}

function MainButtons({ children, backgroundColor, ...attributes }: MainButtonsProps) {
  return (
    <div className={`${backgroundColor} `} >
      {children}  
      <div className="w-full h-[150%] absolute rounded-[50%] top-[100%]"></div>
    </div>
  )
}

export default MainButtons