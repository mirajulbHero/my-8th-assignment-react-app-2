import React from 'react'
import logoImage from "../../assets/images/logo.png"
import githubImage from "../../assets/images/github.png"

export default function Navber() {

    const links = <>
        <li><a>Home</a></li>
        <li><a>Apps</a></li>
        <li><a>Installation</a></li>
    
    </>

  return (
    <>
        <div className='bg-base-100 max-w-7xl mx-auto'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                    </div>
                    <img className='w-[40px]' src={logoImage} alt="" />
                    <a className="btn btn-ghost text-[16px] text-[16px] text-[#632EE3]">HERO.IO</a>
                </div>
                <div className="navbar-center hidden lg:flex justify-center items-center">
                    <ul className="menu menu-horizontal px-2 text-[16px] font-semibold hover:bg-amber-0">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    
                    <a className="btn text-white bg-blue-600"><img src={githubImage} alt="" />Contribute</a>
                </div>
                </div>
        
            </div>
    </>
  )
}
