import React, { useContext } from 'react'
import { themeContext } from '../useContext/store';
import ToggleTheme from '../components/ToggleTheme';



export default function About() {
  const {theme}=useContext(themeContext)
  return (
<>
{/* className="bg-black text-gray-200 py-16 px-6" */}
     <ToggleTheme/>
    <section id="about" className={theme==='dark'?'':'[&_h2]:text-black [&_h3]:text-blue-600 [&_span]:text-blue-600 [&_span]:font-bold [&_div]:bg-[#d6d6d6] [&_div]:text-black bg-[#d6d6d6]'} >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-center font-mono mb-12">About Me</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Introduction */}
          <div className="bg-gray-800 border-1 border-b-0 rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3 text-green-400">Who I Am</h3>
            <p>
              Hi, I'm <span className="font-semibold">Paras</span>, a BCA fresher passionate about 
              <span className="text-green-400"> frontend development</span> and creating 
              modern, responsive websites. I enjoy turning ideas into interactive digital experiences.
            </p>
          </div>

          {/* Skills */}
          <div className="bg-gray-800 border-1 border-b-0 rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3 text-green-400">Skills</h3>
            <ul className="space-y-2">
              <li>⚡ HTML, CSS, JavaScript</li>
              <li>⚡ React & TailwindCSS</li>
              <li>⚡ Git & GitHub</li>
              <li>⚡ Responsive Web Design</li>
            </ul>
          </div>

          {/* Goals */}
          <div className="bg-gray-800 border-1 border-b-0 rounded-lg shadow-lg p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3 text-green-400">My Goal</h3>
            <p>
              I aim to work on <span className="text-green-400">real-world projects</span>, 
              collaborate with industry professionals, and grow into a skilled frontend developer.  
              Beyond coding, I enjoy exploring tech trends and designing creative UI layouts.
            </p>
          </div>
        </div>

        {/* CV Button */}
        <div className={theme==='dark'?'':'[&_a]:text-white [&_a]:bg-blue-500 hover:[&_a]:bg-blue-600'}>
           <div className="text-center mt-10  ease-in-out duration-600 transition-transform hover:scale-120">
          <a 
            href="../Doc/Parth-CV.pdf" 
            download 
            className="bg-green-500  hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-lg shadow-lg "
          >
            Download CV
          </a>
        </div>
        </div>
       
      </div>
    </section>
   
    </>
  );
}

