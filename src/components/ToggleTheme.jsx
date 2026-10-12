import React, { useContext } from 'react'
import { themeContext } from '../useContext/store'
import { LuSun } from "react-icons/lu";
import { BsFillMoonStarsFill } from "react-icons/bs";


function ToggleTheme() {

    const {theme,toggleTheme}= useContext(themeContext);


  return (
<>
  {/* <div  className='border m-2 w-16 h-7 fixed top-18 right-4 z-50 bg-amber-50 rounded-2xl flex gap-2 justify-around items-center '>
    <button id='btnThemeToggle'  className={theme==='dark'?'absolute left-1 transition-all ease-in-out duration-500':'absolute left-9.5 transition-all ease-in-out duration-500'}></button>
    <span onClick={toggleTheme}><LuSun /></span>
    <span onClick={toggleTheme}><BsFillMoonStarsFill /></span>
   
  </div> */}

  <div className='border m-2 w-16 h-7 fixed top-18 right-4 z-50 bg-amber-50 rounded-2xl flex gap-2 justify-around items-center '>
  <div
    id='btnThemeToggle'
    className={theme==='dark'?'absolute z-50  left-1 transition-all ease-in-out duration-500':'absolute z-50 left-9.5 transition-all ease-in-out duration-500'}
  ></div>

  {/* Sun Icon with Tooltip */}
  <span onClick={toggleTheme} className=" relative  group cursor-pointer">
    <LuSun />
    <span className="absolute w-0 overflow-hidden top-full -translate-y-6 h-0 mt-3 right-0 z-[-90px] transform translate-x-0 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:w-30 group-hover:-translate-x-8 transition-all ease-in-out group-hover:opacity-100 group-hover:h-6  duration-400  whitespace-nowrap">
      Switch Night Theme
    </span>
  </span>

  {/* Moon Icon with Tooltip */}
  <span onClick={toggleTheme} className=" relative group cursor-pointer">
    <BsFillMoonStarsFill />
    <span 
     className="absolute w-0 overflow-hidden top-full -translate-y-6  h-0 mt-3 right-0 z-[-90px] transform translate-x-0 bg-white text-black font-semibold text-xs px-2 py-1 rounded opacity-0 group-hover:w-30 group-hover:-translate-x-16 transition-all ease-in-out group-hover:opacity-100 group-hover:h-6  duration-400  whitespace-nowrap" >
      Switch Light Theme
    </span>
  </span>
</div>

</>
  )
}

export default ToggleTheme


