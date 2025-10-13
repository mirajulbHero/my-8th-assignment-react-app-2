import React from 'react'
import useApps from '../../hooks/useApps';
import AppCard from '../../component/appCard/AppCard';

export default function Apps() {
  const {apps} = useApps();
  return (
      <div className='pb-28'>
                <div className='flex justify-between my-3 max-w-7xl mx-auto'>
                  <h2 className='font-bold text-[48px] '>All Apps</h2>
                  <input type="text" placeholder='Search' />
                </div>
                <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-1 gap-y-7 max-w-7xl mx-auto'>
                  {
                    apps.map (app => (
                      <AppCard key ={app.id} app ={app}></AppCard>
                    ))
                  }
                </div>
                {/* <div className='text-center mt-12'>
                    <button  className='btn btn-primary font-semibold text-[16px]'>Show All<button>
                </div>
                 */}
    </div>
  )
}
