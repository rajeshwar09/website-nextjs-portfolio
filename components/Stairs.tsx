import React from 'react'

import { animate, motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: [ "100%", "0%" ],
  },
};

// Calculate reverse index for staggered delay
const reverseInex = (index: any) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* Render 6 motion divs, each representing a stepof stairs */}
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div 
            key={index} 
            variants={stairAnimation} 
            initial="initial" 
            animate="animate" 
            exit="exit" 
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseInex(index) * 0.1,
            }} 
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  )
}

export default Stairs