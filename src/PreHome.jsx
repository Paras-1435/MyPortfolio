import React from 'react'

export default function PreHome() {
  return (
   <>
   <div className="hero-con w-full h-auto flex flex-col justify-center  p-2 mt-2  border-white text-white">

        <div className="left-hero grid gap-8 mt-5  mx-auto  w-[75%] ">
          <TypingEffect />
          <p className='  px-4 bg-zinc-800 glow-border py-5 rounded-lg mt-5 font-bold text-[15px] text-[#fdf8f8] capitalize font-mono'>"I’m not a complete beginner, not yet an expert — but I build smart,
            modern web projects using the power of AI."</p>

        </div>

        {/* <div className="right-hero mt-15 border-b-0 mx-auto rounded shadow-amber-50 bg-zinc-800 shadow-lg flex justify-evenly items-center m-2 md:w-[50%] border-1  ">
         
         <div className="name w-60 text-nowrap font-mono   md:w-[50%] h-auto tracking-wider">
          <h1 className='font-extrabold text-3xl '>Hii, I'm Paras</h1>
          <h2 className='text-xl leading-10'>Frontend Developer</h2>
          <p className='text-[15px]'>React.js | Tailwind CSS | JavaScript</p>
         </div>
         <div className="img w-40 h-50  rounded-full m-5 overflow-hidden">
          <img className='bg-cover w-full h-full' src="../images/pic2.jpg" alt="" />
         </div>
         

        </div> */}

        <div className="right-hero border-1 mt-15  mx-auto rounded shadow-amber-50 bg-zinc-800 shadow-lg 
                flex  justify-evenly items-center m-2 w-200 h-100 px-2  border-white/10">

          {/* Text Section */}
          <div className="name w-full md:w-1/2 text-center md:text-left font-mono h-auto tracking-wider p-4">
            <h1 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl">Hii, I'm Paras</h1>
            <h2 className="text-lg sm:text-xl lg:text-2xl leading-8">Frontend Developer</h2>
            <p className="text-sm sm:text-base">React.js | Tailwind CSS | JavaScript</p>
          </div>

          {/* Image Section */}
          <div className='w-[60%] border-2 mx-auto h-70'>
             {/* <div className="img rounded-full  m-5 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="../images/pic2.jpg"
              alt="Paras"
            />
          </div> */}
          </div>
         


        </div>



        <p className=' mt-15 shadow-lg font-bold w-[75%] mx-auto text-[15px] text-[#d6d6d6] capitalize font-mono'>I am a BCA fresher with a strong foundation in programming and web development. I am eager to apply my skills, learn from industry professionals, and contribute to real-world projects while continuously improving my technical expertise.</p>
      </div>

    

      <div>
        
      </div>

   </>
  )
}
