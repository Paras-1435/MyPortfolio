import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion";


function HomeAnimated() {
     const [loaded, setLoaded] = useState(false);
     const BtnRef =useRef()
     const DivREf=useRef()
     const offRef= useRef()
    const addClass = () => {
    BtnRef.current.classList.add("hide-blur"); // add a class
   
    DivREf.current.classList.add("showdiv"); // add a class
     DivREf.current.classList.remove("hide-showdiv"); // add a class

  };

  const cancel=()=>{
    DivREf.current.classList.add("hide-showdiv"); // add a class
     BtnRef.current.classList.remove("hide-blur"); // add a class
    BtnRef.current.classList.remove("scale1"); // add a class
  }
     

  useEffect(() => {
    setLoaded(true); // trigger animation after component mounts
  }, []);
  return (
    
    <>
    <div className='min-h-screen  bg-zinc-800 flex justify-center items-center'>

 {/* <div className='relative border-1 border-amber-400 h-90  rounded-lg flex justify-center items-center w-120'>


    <motion.div
      initial={{ 
        y: 0,        // start 100px below
        width: 0,      // start width
        height: 0,     // start height
        opacity: 0     // start invisible
      }}
      animate={{ 
        y: 0,          // move to original position
        width: 300,    // final width in px
        height: 150,   // final height in px
        opacity: 1
      }}
      transition={{ 
        duration: 1,   // 1 second animation
        ease: "easeOut"
      }}
      className="bg-amber-200 rounded-2xl flex items-center justify-center"
    >
      <motion.h1 
      initial={{
       
      }}

      className="text-xl font-bold">Hello!</motion.h1>
    </motion.div>
     </div> */}

     <div className="btn flex justify-center items-center gap-2  border-amber-400 border-1 w-120 h-70 rounded-lg">
        <div ref={DivREf} id='box' className='bg-amber-400 font-semibold px-2 py-3 hidden  text-zinc-800'>
         <p>Are you sure you want to become a Motion expert?</p>
         <button ref={offRef} onClick={cancel} className='absolute hover:scale-110 transition-all ease-in-out duration-200 scale mt-7 ml-15 border-amber-400 border-1 py-2 px-5 font-semibold rounded-lg text-amber-400 bg-zinc-700'>Cancel</button>
        </div>
        <button onClick={addClass} ref={BtnRef} className='absolute hover:scale-110 transition-all ease-in-out duration-200 scale border-amber-400 border-1 py-3 px-4 font-semibold rounded-lg bg-amber-400 text-zinc-700'>open model</button> 
     </div>
    </div>

    </>
  )
}

export default HomeAnimated