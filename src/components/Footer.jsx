
// import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa";
// import { NavLink } from "react-router-dom";

// export default function Footer() {
//   // Smooth scroll to top
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <footer className="bg-gray-900 border-t-1 border-gray-400 text-gray-300 py-6  relative">
//       <div className="container mx-auto text-center space-y-4">

//         {/* Quick Links */}
//         <nav id="foo-nav" className="flex  justify-center gap-10 w-[80%] mx-auto ">
//           <NavLink className='relative font-mono  inline-block  text-white after:absolute after:inset-x-0 after:bottom-[-4px] after:h-[3px] after:bg-gradient-to-r after:from-transparent after:via-white after:to-transparent after:scale-x-0 after:origin-center after:transition-transform after:duration-500 hover:after:scale-x-100'  to="/">Home</NavLink>
//           <NavLink className='relative font-mono  inline-block  text-white after:absolute after:inset-x-0 after:bottom-[-4px] after:h-[3px] after:bg-gradient-to-r after:from-transparent after:via-white after:to-transparent after:scale-x-0 after:origin-center after:transition-transform after:duration-500 hover:after:scale-x-100'  to="/about">About
//           </NavLink>
//           <NavLink className='relative font-mono  inline-block  text-white after:absolute after:inset-x-0 after:bottom-[-4px] after:h-[3px] after:bg-gradient-to-r after:from-transparent after:via-white after:to-transparent after:scale-x-0 after:origin-center after:transition-transform after:duration-500 hover:after:scale-x-100'  to="/skills">Skills
//           </NavLink>
//           <NavLink className='relative font-mono  inline-block  text-white after:absolute after:inset-x-0 after:bottom-[-4px] after:h-[3px] after:bg-gradient-to-r after:from-transparent after:via-white after:to-transparent after:scale-x-0 after:origin-center after:transition-transform after:duration-500 hover:after:scale-x-100'  to="/certificates">Certificates</NavLink>
//           <NavLink className='relative font-mono  inline-block  text-white after:absolute after:inset-x-0 after:bottom-[-4px] after:h-[3px] after:bg-gradient-to-r after:from-transparent after:via-white after:to-transparent after:scale-x-0 after:origin-center after:transition-transform after:duration-500 hover:after:scale-x-100'  to="/projects">Projects</NavLink>

//           <NavLink className='relative font-mono  inline-block  text-white after:absolute after:inset-x-0 after:bottom-[-4px] after:h-[3px] after:bg-gradient-to-r after:from-transparent after:via-white after:to-transparent after:scale-x-0 after:origin-center after:transition-transform after:duration-500 hover:after:scale-x-100'  to="/contact">Contact
//           </NavLink>
//         </nav>

//         {/* Social Links */}
//         <div id="foo-icon" className="flex justify-center space-x-6 text-xl text-green-400 foo-icon">
//           <a href="https://github.com/Paras-1435/" target="_blank" rel="noreferrer">
//             <FaGithub className="hover:text-white transition" />
//           </a>
//           <a href="https://www.linkedin.com/in/paras-kir-5bb493374/" target="_blank" rel="noreferrer">
//             <FaLinkedin className="hover:text-white transition" />
//           </a>
//           <a href="https://www.instagram.com/parth_14355/" target="_blank" rel="noreferrer">
//             <FaInstagram className="hover:text-white transition" />
//           </a>
//         </div>

//         {/* Copyright */}
//         <p className="text-sm font-mono font-semibold text-gray-300">
//           © {new Date().getFullYear()} Paras Kir | All Rights Reserved
//         </p>

//         {/* Small credit */}
//         <p className="text-xs font-mono font-semibold text-green-400">
//           Designed & Built by Paras Kir
//         </p>
//       </div>

//       {/* Back to Top Button */}
//       <button
//         onClick={scrollToTop}
//         className="absolute backToTop right-6 bottom-6 bg-green-500  hover:bg-green-600 text-black p-3 rounded-full shadow-lg transition"
//         aria-label="Back to Top"
//       >
//         <FaArrowUp />

//       </button>
//     </footer>
//   );
// }


//code-2

import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Footer() {
  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 border-t-1 border-gray-400 text-gray-300 py-6 relative">
      <div className="container mx-auto text-center space-y-4">

        {/* Quick Links */}
        <nav id="foo-nav"
        //  className="flex justify-center gap-10 w-[80%] mx-auto"
         className="grid  md:grid-cols-2  justify-center  gap-4"
         >
          <div className=" grid  md:flex justify-end gap-2 md:gap-4">
          <NavLink className='relative font-mono inline-block text-white after:absolute after:inset-x-0 after:bottom-[-4px] after:h-[3px] after:bg-gradient-to-r after:from-transparent after:via-white after:to-transparent after:scale-x-0 after:origin-center after:transition-transform after:duration-500 hover:after:scale-x-100' to="/">Home</NavLink>
          <NavLink className='relative font-mono inline-block text-white after:absolute after:inset-x-0 after:bottom-[-4px] after:h-[3px] after:bg-gradient-to-r after:from-transparent after:via-white after:to-transparent after:scale-x-0 after:origin-center after:transition-transform after:duration-500 hover:after:scale-x-100' to="/about">About</NavLink>
          <NavLink className='relative font-mono inline-block text-white after:absolute after:inset-x-0 after:bottom-[-4px] after:h-[3px] after:bg-gradient-to-r after:from-transparent after:via-white after:to-transparent after:scale-x-0 after:origin-center after:transition-transform after:duration-500 hover:after:scale-x-100' to="/skills">Skills</NavLink>
          </div>

          <div className=" grid  md:flex gap-2 md:gap-4">

          <NavLink className='relative font-mono inline-block text-white after:absolute after:inset-x-0 after:bottom-[-4px] after:h-[3px] after:bg-gradient-to-r after:from-transparent after:via-white after:to-transparent after:scale-x-0 after:origin-center after:transition-transform after:duration-500 hover:after:scale-x-100' to="/certificates">Certificates</NavLink>
          <NavLink className='relative font-mono inline-block text-white after:absolute after:inset-x-0 after:bottom-[-4px] after:h-[3px] after:bg-gradient-to-r after:from-transparent after:via-white after:to-transparent after:scale-x-0 after:origin-center after:transition-transform after:duration-500 hover:after:scale-x-100' to="/projects">Projects</NavLink>
          <NavLink className='relative font-mono inline-block text-white after:absolute after:inset-x-0 after:bottom-[-4px] after:h-[3px] after:bg-gradient-to-r after:from-transparent after:via-white after:to-transparent after:scale-x-0 after:origin-center after:transition-transform after:duration-500 hover:after:scale-x-100' to="/contact">Contact</NavLink>
          </div>
        </nav>

        {/* Quick Links */}
{/* <nav
  id="foo-nav"
  className="
    flex flex-wrap justify-center gap-4 sm:gap-10 w-[80%] mx-auto
    sm:flex-nowrap sm:justify-center
  "
>
  <NavLink
    className="relative font-mono w-1/2 sm:w-auto text-center text-white after:absolute after:inset-x-0 after:bottom-[-4px] after:h-[3px] after:bg-gradient-to-r after:from-transparent after:via-white after:to-transparent after:scale-x-0 after:origin-center after:transition-transform after:duration-500 hover:after:scale-x-100"
    to="/"
  >
    Home
  </NavLink>

  <NavLink
    className="relative font-mono w-1/2 sm:w-auto text-center text-white after:absolute after:inset-x-0 after:bottom-[-4px] after:h-[3px] after:bg-gradient-to-r after:from-transparent after:via-white after:to-transparent after:scale-x-0 after:origin-center after:transition-transform after:duration-500 hover:after:scale-x-100"
    to="/about"
  >
    About
  </NavLink>

  <NavLink
    className="relative font-mono w-1/2 sm:w-auto text-center text-white after:absolute after:inset-x-0 after:bottom-[-4px] after:h-[3px] after:bg-gradient-to-r after:from-transparent after:via-white after:to-transparent after:scale-x-0 after:origin-center after:transition-transform after:duration-500 hover:after:scale-x-100"
    to="/skills"
  >
    Skills
  </NavLink>

  <NavLink
    className="relative font-mono w-1/2 sm:w-auto text-center text-white after:absolute after:inset-x-0 after:bottom-[-4px] after:h-[3px] after:bg-gradient-to-r after:from-transparent after:via-white after:to-transparent after:scale-x-0 after:origin-center after:transition-transform after:duration-500 hover:after:scale-x-100"
    to="/certificates"
  >
    Certificates
  </NavLink>

  <NavLink
    className="relative font-mono w-1/2 sm:w-auto text-center text-white after:absolute after:inset-x-0 after:bottom-[-4px] after:h-[3px] after:bg-gradient-to-r after:from-transparent after:via-white after:to-transparent after:scale-x-0 after:origin-center after:transition-transform after:duration-500 hover:after:scale-x-100"
    to="/projects"
  >
    Projects
  </NavLink>

  <NavLink
    className="relative font-mono w-1/2 sm:w-auto text-center text-white after:absolute after:inset-x-0 after:bottom-[-4px] after:h-[3px] after:bg-gradient-to-r after:from-transparent after:via-white after:to-transparent after:scale-x-0 after:origin-center after:transition-transform after:duration-500 hover:after:scale-x-100"
    to="/contact"
  >
    Contact
  </NavLink>
</nav> */}


        {/* Social Links */}
        <div id="foo-icon" className="flex justify-center space-x-6 text-xl text-green-400 foo-icon">
          <a href="https://github.com/Paras-1435/" target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-white transition" />
          </a>
          <a href="https://www.linkedin.com/in/paras-kir-5bb493374/" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:text-white transition" />
          </a>
          <a href="https://www.instagram.com/parth_14355/" target="_blank" rel="noreferrer">
            <FaInstagram className="hover:text-white transition" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm font-mono font-semibold text-gray-300">
          © {new Date().getFullYear()} Paras Kir | All Rights Reserved
        </p>

        {/* Small credit */}
        <p className="text-xs font-mono font-semibold text-green-400">
          Designed & Built by Paras Kir
        </p>
      </div>

      {/* Back to Top Button with Tooltip */}
      <div className="absolute  right-6 bottom-6 group">
        <button
          onClick={scrollToTop}
          className="bg-green-500 cursor-pointer  hover:bg-green-600 text-black p-3 rounded-full shadow-lg transition relative"
          aria-label="Back to Top"
        >
          <FaArrowUp />
        </button>

        {/* Tooltip with Slide-Up Animation */}
        <span className="absolute w-0 overflow-hidden top-1/3 right-12 -translate-y-1/2 text-sm font-mono bg-green-500 text-black px-2 py-1 rounded opacity-0 font-semibold translate-x-8 group-hover:opacity-100 group-hover:w-25 group-hover:translate-x-12 group-hover:-translate-y-15 transition-all duration-400 whitespace-nowrap">
          Back to top
        </span>

      </div>
    </footer>
  );
}
