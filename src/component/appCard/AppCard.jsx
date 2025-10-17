import React from 'react'
import downloadImg from "../../assets/images/icon-downloads.png"
import starImg from "../../assets/images/icon-ratings.png"
import { Link } from 'react-router'

export default function AppCard({app}) {
    // console.log(app)
  return (
    <Link to ={`/app/${app.id}`}>
        <div className="card bg-base-200 p-4 w-72 gap-3 shadow-sm hover:scale-105 ease-in-out transition">
            <figure>
                <img className='w-[200px]'
                src={app.image}
                alt="appImg" />
            </figure>
            <div className="">
                <h2 className="card-title">{app.title}</h2>
                <div className="flex justify-between">
                    <button className="btn bg-gray-200 mt-3 font-bold text-[#00D390]"><img className='w-4' src={downloadImg}></img>{app.downloads} M</button>
                    <button className="btn bg-amber-100 mt-3 font-bold text-[#FE8A17]"><img className='w-4 text-[#FE8A17]' src={starImg}></img>{app.reviews}</button>
                </div>
            </div>
        </div>
    </Link>
  )
}
