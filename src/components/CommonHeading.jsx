import React from 'react'

function CommonHeading({heading}) {
  return (
    <div className='w-[80%] mx-auto mt-8'>
        <div className='mb-4 border-b-[1.5px] border-b-grey-900 py-1'>
            <div className='flex items-center justify-between'>
                <h1 className='text-xl tracking-wide'>{heading}</h1>
                <p className='text-[#3f9695]'>View Range</p>
            </div>
        </div>
    </div>
  )
}

export default CommonHeading