import React, {useState} from 'react'

const SwitchName = () => {
    

    return (
      <div className="relative w-[10rem]  overflow-hidden ">
   <div className="relative w-full h-full">
  <div className="w-full h-full flex items-center justify-center">
    <p
      className="py-2 h-full"
      style={{
        animation: "showUpAndGoUp 10s infinite",
      }}
    >
      Miguel
    </p>
  </div>
  <div className="w-full h-full flex items-center justify-center absolute top-0">
    <p
      className="py-[0.2rem] h-full text-primary"
      style={{
        animation: "showUpAndGoUp 10s infinite, showUpAndComeFromBottom 10s infinite",
        animationDelay: "10s", // Delay the second animation to start after the first one
      }}
    >
      The Developer
    </p>
  </div>
</div>

      </div>
    );
  };

export default SwitchName