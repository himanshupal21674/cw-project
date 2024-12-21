import React from 'react'
import { wrappers } from '../utils/constant'

const Wrappers = () => {
  return (
    <div className='mt-16'>
     {
        wrappers?.map((item,index)=>(
            <div className='text-center text-3xl mt-16' key={index}>
            <div className='flex items-center '>
            <hr className={`${index === 6 ? 'w-[20%]' : 'w-1/3'} ml-10`} />
            <h1 className={`${index === 6 ? 'w-[60%]' : 'w-1/3'} uppercase`} >{item?.title}</h1>
       <hr className={`${index === 6 ? 'w-[20%]' : 'w-1/3'} mr-10`} />
   
            </div>
               <img src={item.url} className='mt-6'/>
           </div>
        ))
     }
    </div>
  )
}

export default Wrappers