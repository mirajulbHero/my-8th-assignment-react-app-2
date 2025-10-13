import React from 'react'
import Banner from '../../component/banner/Banner'
import TrastArea from '../../component/trastArea/TrastArea'
import { Link, useLoaderData } from 'react-router'
import AppCard from '../../component/appCard/AppCard';
import useApps from '../../hooks/useApps';

export default function Home() {
  // const allApps = useLoaderData();
  const {apps, loading, error}= useApps();
  const featureApp = apps.slice(0, 8);
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
              featureApp.map (app => (
                <AppCard key ={app.id} app ={app}></AppCard>
              ))
            }
          </div>
          <div className='text-center mt-12'>
              <Link to ="/Apps" className='btn btn-primary font-semibold text-[16px]'>Show All</Link>
          </div>
          
        </div>
        

    </div>
  )
}
