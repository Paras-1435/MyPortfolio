import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNodejs } from "react-icons/tb";
import { FcLinux } from "react-icons/fc";
import { SiMongodb } from "react-icons/si";
import { useContext } from "react";
import { themeContext } from "../useContext/store";
import ToggleTheme from "../components/ToggleTheme";

export default function Skills() {
    const {theme}=useContext(themeContext)
  return (

    // className="bg-gray-950 text-gray-200 py-16 px-6"
    <>
      <ToggleTheme/>
    <section id="skills" className={theme==='dark'?'':'bg-[#d6d6d6] [&_h2]:text-black'} >
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-bold font-mono mb-12">My Skills</h2>

        {/* Grid of Skills */}
        <div className="grid grid-cols-2 font-mono text-xs sm:grid-cols-3 md:grid-cols-6 gap-8">
          
          {/* HTML */}
          <div className={theme==='dark'?'':'[&_div]:bg-[#d6d6d6] [&_p]:font-bold text-black '}>
            <div className="flex flex-col items-center bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition border-1 border-b-0 shadow-gray-500">
            <FaHtml5 className="text-orange-500 text-5xl mb-3" />
            <p className="font-semibold">HTML5</p>
          </div>
          </div>
          

          {/* CSS */}
          <div className={theme==='dark'?'':'[&_div]:bg-[#d6d6d6] [&_p]:font-bold text-black '}>
             <div className="flex flex-col items-center bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition border-1 border-b-0 shadow-gray-500">
            <FaCss3Alt className="text-blue-500 text-5xl mb-3" />
            <p className="font-semibold">CSS3</p>
          </div>
          </div>
         

          {/* JavaScript */}
          <div className={theme==='dark'?'':'[&_div]:bg-[#d6d6d6] [&_p]:font-bold text-black  '}>
             <div className="flex flex-col items-center bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition border-1 border-b-0 shadow-gray-500">
            <FaJs className=" rounded-lg text-5xl mb-3" />
            <p className="font-semibold">JavaScript</p>
          </div>
          </div>
         

          {/* React */}
          <div  className={theme==='dark'?'':'[&_div]:bg-[#d6d6d6] [&_p]:font-bold text-black '}>
             <div className="flex flex-col items-center bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition border-1 border-b-0 shadow-gray-500">
            <FaReact className="text-cyan-600 text-5xl mb-3" />
            <p className="font-semibold">React</p>
          </div>
          </div>
         

          {/* Tailwind */}
          <div  className={theme==='dark'?'':'[&_div]:bg-[#d6d6d6] [&_p]:font-bold text-black '}>
           <div className="flex flex-col items-center bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition border-1 border-b-0 shadow-gray-500">
            <SiTailwindcss className="text-sky-400 text-5xl mb-3" />
            <p className="font-semibold">TailwindCSS</p>
          </div> 
          </div>
          

          {/* GitHub */}
          <div  className={theme==='dark'?'':'[&_div]:bg-[#d6d6d6] [&_p]:font-bold text-black '}>
            <div className="flex flex-col items-center bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition border-1 border-b-0 shadow-gray-500">
            <FaGithub className=" text-5xl mb-3" />
            <p className="font-semibold">Git & GitHub</p>
          </div>
          </div>
          
         <div  className={theme==='dark'?'':'[&_div]:bg-[#d6d6d6] [&_p]:font-bold text-black '}>
          <div className="flex flex-col items-center bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition border-1 border-b-0 shadow-gray-500">
            <TbBrandNodejs className="text-green-400 text-5xl mb-3"  />
            <p className=" text-xs font-semibold">Node.Js (Basic)</p>
          </div>
         </div>
          
         <div  className={theme==='dark'?'':'[&_div]:bg-[#d6d6d6] [&_p]:font-bold text-black '}>
           <div className="flex flex-col items-center bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition border-1 border-b-0 shadow-gray-500">
            <FcLinux className="text-gray-300 text-5xl mb-3" />
            <p className=" text-xs font-semibold">Linux (Basic)</p>
          </div>
         </div>
         
          <div  className={theme==='dark'?'':'[&_div]:bg-[#d6d6d6] [&_p]:font-bold text-black '}>
             <div className="flex flex-col items-center bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition border-1 border-b-0 shadow-gray-500">
            <SiMongodb className="text-green-500 text-5xl mb-3" />
            <p className=" text-xs font-semibold">MongoDB (Basic)</p>
          </div>
          </div>
         

        </div>
      </div>
    </section>
    </>
  );
}
