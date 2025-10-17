import React from 'react'
import { Link, useParams } from 'react-router'
import useApps from '../../hooks/useApps'
import downloadImg from "../../assets/images/icon-downloads.png"
import ratingImg from "../../assets/images/icon-ratings.png"
import reviewImg from "../../assets/images/icon-review.png"

export default function AppsDetails() {
    const {id} = useParams()
    const {apps,loading} = useApps()
    const app = apps.find(app => String(app.id)=== id)
    console.log(app)
    if (loading) return <p className='text- text-center mt-7'><span className="loading loading-bars loading-5xl "></span></p> 
    const {title, image, reviews, ratingAvg, downloads, companyName} = app
    
  return (
    <div className='max-w-7xl mx-auto py-32'>
        <div className='flex'>
            <img className='w-[200px]' src={image} alt="" />
            <div className=' ml-[200px]'>
                <h2 className='text-[40px] font-bold'>{title}</h2>
                <p className='text-[20px]'>Developed by <span className='text-[#884EEC] font-semibold'>{companyName}</span></p>
                <div className='flex gap-10 my-6'>
                    <div>
                        <img src={downloadImg} alt="" /><br></br>
                        <p className='mt-[-15px]'>Downloads</p>
                        <p className='text-6xl font-bold'>{downloads}M</p>
                    </div>
                    <div>
                        <img src={ratingImg} alt="" /><br></br>
                        <p className='mt-[-15px]'>Average Ratings</p>
                        <p className='text-6xl font-bold'>{ratingAvg}</p>
                    </div>
                    <div>
                        <img src={reviewImg} alt="" /><br></br>
                        <p className='mt-[-15px]'>Total Reviews</p>
                        <p className='text-6xl font-bold'>{reviews}K</p>
                    </div>
                </div>
                <Link className='btn bg-[#00D390] text-[white] font-bold'>Install Now (291 MB)</Link>
            </div>
        </div>
    </div>
  )
}
