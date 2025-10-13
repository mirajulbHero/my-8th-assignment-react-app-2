import React from 'react'
import "./TrastArea.css"

export default function TrastArea() {
  return (
    <div className='bg-[#7039E6]'>
        <div className='max-w-7xl mx-auto text-center py-8 text-white'>
            <h2 className='text-3xl text-bold'>Trusted by Millions, Built for You</h2>
            <div className='grid grid-cols-3 gap-5 justify-center items-center py-8'>
                <div>
                    <p className='text-[16px]'>Total Downloads</p>
                    <h2 className='text-6xl font-bold my-3'>29.6M</h2>
                    <p className='text-[16px]'>21% more than last month</p>
                </div>
                <div>
                    <p className='text-[16px]'>Total Reviews</p>
                    <h2 className='text-6xl font-bold my-3'>906K</h2>
                    <p className='text-[16px]'>46% more than last month</p>
                </div>
                <div>
                    <p className='text-[16px]'>Active Apps</p>
                    <h2 className='text-6xl font-bold my-3'>132+</h2>
                    <p className='text-[16px]'>31 more will Launch</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}
