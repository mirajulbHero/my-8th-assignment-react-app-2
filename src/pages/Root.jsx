import React from 'react'
import Navber from '../component/header/Navber'
import { Outlet } from 'react-router'
import Footer from '../component/footer/footer'

export default function Root() {
  return (
    <div>
        <Navber></Navber>
        <Outlet></Outlet>
        <Footer></Footer>
      
    </div>
  )
}
