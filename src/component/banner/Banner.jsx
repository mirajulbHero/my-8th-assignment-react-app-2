import React from 'react'
import "./Banner.css"
import playStore from "../../assets/images/playstore.png"
import appStore from "../../assets/images/appstore.png"
import heroImg from "../../assets/images/hero.png"


export default function Banner() {
  return (
    <div className='bg-[#F5F5F5] pt-16'>
        <div className='banner-area text-center max-w-7xl mx-auto'>
            <h1 className='text-5xl font-bold'>We Build <br></br> <span className='text-[#8451E9]'>Productive </span>Apps</h1>
            <p className='text-[#627382] font-semibold mt-4'> At Hero.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br></br>Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='mt-8'>
                <a className='btn mr-2'><img className='inline-block' src={playStore} alt="" />Google Play</a>
                <a className='btn'><img className='inline-block' src={appStore} alt="" />Google Play</a>
            </div>
            <div className='flex justify-center items-center mt-6'>
                <img src={heroImg} alt="" />
            </div>
            
        </div>
    </div>
  )
}
