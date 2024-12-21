import React from 'react'
import Subslider from './Subslider'
import { sliderImages2 } from '../utils/constant'

function Explore() {
  return (
    <div className='px-10 ml-10 mt-16'>
        <div className='flex items-center my-6 w-full'>
            <div className='flex flex-col gap-4 w-[25%]'>
                <p className='text-[rgb(51, 51, 51)] text-3xl tracking-wider'>WEAR</p>
                <p className=' text-[rgb(51, 51, 51)] text-3xl tracking-wider'>THE</p>
                <p className='font-[sans-700] text-5xl'>TREND</p>
                <p className='font-sans text-sm'>Our hottest collections</p>
            </div>
            <div className='flex items-center justify-center w-[80%]'>
             <Subslider sliderData={sliderImages2}/>
            </div>
        </div>
    </div>
  )
}

export default Explore