import React from 'react'
import { videosData } from '../utils/constant'

function VideoSection() {
  return (
    <section className="bg-yellow-200 p-8">
      <div className="container mx-auto">
        <h2 className="text-2xl text-[#333333] font-bold text-center mb-6">MEET OUR HAPPY CUSTOMERS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videosData?.map((video) => (
            <div key={video.id} className="bg-white rounded-lg shadow-lg">
              <iframe
                className="w-full h-56 rounded-lg"
                src={video.src}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VideoSection