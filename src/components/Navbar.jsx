import React from 'react'

function Navbar() {
  return (
       <div>
        <nav className='flex justify-between p-5 text-xs '>
       <div className='flex gap-2 font-Lksans'>
           <a href='#'>Do More, Be More</a>|
           <a href='#'>Tryin3D</a>|
           <a href='#'>StoreLocator</a>|
           <a href='#'>Singapore</a>|
           <a href='#'>UAE</a>|
           <a href='#'>John Jacobs</a>|
           <a href='#'>Aqualens</a>|
           <a href='#'>Cobrowsing</a>|
           <a href='#'>Engineering Blog</a>|
           <a href='#'>Partner With Us</a>
        </div>
        <div>
            <a href=''>Contact Us</a>
        </div>
       </nav>
       </div>
  )
}

export default Navbar