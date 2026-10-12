import { createContext, useState } from "react";

export const themeContext = createContext();

export const ThemeProvider=({children})=>{
    // all dynamic variable and data comes here which is export or used in other components 

    const [theme,setTheme]=useState('dark');

    const toggleTheme=()=>{
        setTheme(prev=>(prev==='dark'?'light':'dark'))
    }


    return <themeContext.Provider value={{theme,toggleTheme}}>
     {children}
    </themeContext.Provider>
}