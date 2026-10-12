import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '../ScrollToTop'

export default function AppLayout() {
  
  return (
    <>
    <ScrollToTop/>
    <Header />
    <Outlet/>
    <Footer />
    </>
  )
}
