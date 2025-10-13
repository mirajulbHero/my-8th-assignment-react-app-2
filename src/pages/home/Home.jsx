import React from 'react'
import Banner from '../../component/banner/Banner'
import TrastArea from '../../component/trastArea/TrastArea'
import { useLoaderData } from 'react-router'
import AppCard from '../../component/appCard/AppCard';

export default function Home() {
  const allApps = useLoaderData();
  console.log(allApps);
  return (
    <div>

        <Banner></Banner>
        <TrastArea></TrastArea>
        <div className='pb-28'>
          <div className='text-center my-3'>
            <h2 className='font-bold text-[48px] '>Trending Apps</h2>
            <p className='text-[20px]'>Explore All Trending Apps on the Market developed by us</p>
          </div>
          <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-1 gap-y-7 max-w-7xl mx-auto'>
            {
              allApps.map (app => (
                <AppCard key ={app.id} app ={app}></AppCard>
              ))
            }
          </div>
        </div>
        

    </div>
  )
}
