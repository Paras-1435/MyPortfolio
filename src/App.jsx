import { useContext, useState } from 'react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import AppLayout from './components/layout/AppLayout'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Certificate from './pages/Certificate'
import Contact from './pages/Contact'
import HomeAnimated from './pages/HomeAnimated'

import ProjectsSection from './pages/Project'



const router= createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
    {
    path:'/',
    element:<Home/> 
  },
  {
    path:'/about',
    element:<About/> 
  },
  {
    path:'/skills',
    element:<Skills/> 
  },
  {
    path:'/certificates',
    element:<Certificate/> 
  },
  {
    path:'/contact',
    element:<Contact/> 
  },
  {
    path:'/projects',
    element:<ProjectsSection/> 
  },
    ]
  }
  
])

function App() {
  

  return  <RouterProvider router={router}></RouterProvider>
}

export default App
