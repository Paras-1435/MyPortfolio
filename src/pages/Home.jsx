import React, { useContext, useEffect, useReducer, useRef } from 'react'
import TypingEffect from '../components/Typing'
import TypingName from '../components/TypingName'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { themeContext } from '../useContext/store'
import ToggleTheme from '../components/ToggleTheme'

export default function Home() {
   const {theme}=useContext(themeContext)

  return (
    <>
    <main className={theme==='dark'?'':'bg-[#d6d6d6] text-black [&_div]:text-black  '}>

    <ToggleTheme/>
      
        <div id='dyn-text'>
        <TypingEffect />
        </div>

      <div className="left-hero grid gap-8 mt-5  mx-auto  w-[75%] ">
        <p id='dym-text' className=' px-4 bg-zinc-800 glow-border py-5 rounded-lg mt-5 font-bold text-[15px] text-[#fdf8f8] capitalize font-mono'>"I’m not a complete beginner, not yet an expert — but I build smart,
          modern web projects using the power of AI."</p>
      </div>
   

      <div className="hero-sec  w-[80%] mx-auto shadow-black shadow-md rounded-lg md:flex items-center  gap-5   p-5 mt-20 text-white">

        <div className='img-con border-1  w-[40%] h-[40%] rounded-full overflow-hidden  mx-auto '>
          <img className="w-full h-full " src="../images/pic2.jpg"alt="Paras"/>
        </div>

        <div className='name  md:w-1/2 text-center md:text-left  font-mono h-auto tracking-wider p-4'>
          <div >
            <h1 className="font-extrabold leading-20  text-2xl sm:text-3xl lg:text-4xl">Hii, I'm Paras</h1>
            <h2 className="text-lg sm:text-xl  lg:text-2xl leading-8">Frontend Developer</h2>
            <p className="text-sm sm:text-base">React.js | Tailwind CSS | JavaScript</p>
        </div>

          <div className="flex border-t-1 pt-2  text-green-400  items-center  mt-5 h-auto space-x-6 text-xl foo-icon ">
            <span className='font-mono transition-transform hover:scale-105 '>Follow me:</span><a href="https://github.com/Paras-1435/" target="_blank" rel="noreferrer">
              <FaGithub className="" />
            </a>
            <a href="https://www.linkedin.com/in/paras-kir-5bb493374/" target="_blank" rel="noreferrer">
              <FaLinkedin className="" />
            </a>
            <a href="https://www.instagram.com/parth_14355/" target="_blank" rel="noreferrer">
              <FaInstagram className="" />
            </a>
          </div>

        </div>

      </div>
       <div className={theme==='dark'?'':'  [&_p]:text-black  '}>
      <p className=' mt-15 shadow-lg py-5 font-bold w-[75%] mx-auto text-[15px] text-[#d6d6d6] capitalize font-mono'>I am a BCA fresher with a strong foundation in programming and web development. I am eager to apply my skills, learn from industry professionals, and contribute to real-world projects while continuously improving my technical expertise.</p>
      </div>
       </main>

    </>
  )
}
