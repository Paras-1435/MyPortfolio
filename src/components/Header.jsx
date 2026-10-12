import React, { useContext, useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { NavLink, useLocation } from 'react-router-dom'
import { themeContext } from '../useContext/store';

export default function Nav() {
    const {theme}=useContext(themeContext)
    const [isOpen,setIsOpen]=useState(false)
     const [scrolled, setScrolled] = useState(false);
    const showHamIcon=()=>{
         setIsOpen(!isOpen);
    }
   const loactor=useLocation();
   useEffect(()=>{
    switch(loactor.pathname){
        case '/': document.title='MyPortfolio | Home';
        break;
        case '/about': document.title='MyPortfolio | About';
        break;
        case '/skills': document.title='MyPortfolio | Skills';
        break;
        case '/certificates': document.title='MyPortfolio | Certificates';
        break;
        case '/contact': document.title='MyPortfolio | Contact';
    
    }
   },[loactor])

    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
   
    return (
        <>
        <div style={{position:'sticky',top:'0', zIndex:'50'}} className={theme==='dark'?'':'shadow-black shadow-lg'}>
            <div  className="nav z-50 sticky top-[0%] flex items-center justify-between px-5 gap-5 w-full h-18  bg-white/50 " >
                <div className="title text-3xl font-mono relative inline-block  text-black after:absolute after:inset-x-0 after:bottom-[-4px] after:h-[3px] after:bg-gradient-to-r after:from-transparent after:via-black after:to-transparent after:scale-x-0 after:origin-center after:transition-transform after:duration-500 hover:after:scale-x-100">
                    <NavLink to="/">
                        <h1>My Portfolio</h1>
                    </NavLink>
                </div>
                <nav className={isOpen?"menu-mobi":"menu-web"}>
                    <ul className='flex gap-5 font-semibold font-mono  '>
                        <button onClick={showHamIcon} className=' md:hidden text-xl border-1 p-1 rounded-lg glow-border'>
                            <ImCross />
                        </button>
                       
                        <li onClick={showHamIcon}>
                            <NavLink id='navlink' className={({ isActive }) =>`${isActive?" bg-black  text-white":""}`} to="/">Home
                            </NavLink>
                        </li>
                         
                        <li className='shade' onClick={showHamIcon}>
                            <NavLink id='navlink' className={({ isActive }) =>`${isActive?" bg-black  text-white":""}`} to="/about">About
                            </NavLink>
                        </li>

                        <li onClick={showHamIcon}>
                            <NavLink id='navlink' className={({ isActive }) =>`${isActive?" bg-black  text-white":""}`} to="/skills">Skills
                            </NavLink>
                        </li>

                        <li onClick={showHamIcon}>
                            <NavLink id='navlink' className={({ isActive }) =>`${isActive?" bg-black  text-white":""}`} to="/certificates">Certificates</NavLink>
                        </li>
                        <li onClick={showHamIcon}>
                            <NavLink id='navlink' className={({ isActive }) =>`${isActive?" bg-black  text-white":""}`} to="/projects">Projects</NavLink>
                        </li>

                        <li onClick={showHamIcon}>
                            <NavLink id='navlink' className={({ isActive }) =>`${isActive?" bg-black  text-white":""}`} to="/contact">Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className='hambug-menu text-2xl'>
                 <button onClick={showHamIcon}>
                  <GiHamburgerMenu />
                 </button>
                </div>
            </div>
            </div>
        </>
    )
}
