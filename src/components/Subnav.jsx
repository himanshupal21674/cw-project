import React, { useState } from "react";
import { subnavData } from "../utils/constant";

function Subnav() {
const [hoverItem,setHoverItem] = useState('');
  return (
    <div className="bg-[#faf9f7] w-full">
    <div className="px-8">
    <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-[#232235] font-semibold relative">
          <a href="" onMouseOver={()=>setHoverItem('eyeglasses')} onMouseLeave={()=>setHoverItem('')}>EYEGLASSES</a>
          <a href="">SCREEN GLASSES</a>
          <a href="">KIDS GLASSES</a>
          <a href="">CONTACT LENSES</a>
          <a href="">SUNGLASSES</a>
          <a href="">HOME EYE-TEST</a>
          <a href="">STORE LOCATOR</a>
        </div>
        {hoverItem==='eyeglasses' && <div
        className="border border-red-700 w-screen h-80 absolute top-1/4 left-0"
        ></div>}
        <div className="flex items-center gap-1">
          <div>
            <img
              className="h-8 w-16"
              src="https://static1.lenskart.com/media/desktop/img/May22/3dtryon1.png"
              alt="3D try on"
            />
          </div>
          <div>
            <img
              className="h-8 w-16"
              src="https://static1.lenskart.com/media/desktop/img/Mar22/13-Mar/blulogo.png"
              alt="Blu"
            />
          </div>
          <div>
            <img
              className="h-8 w-16"
              src="https://static5.lenskart.com/media/uploads/gold_max_logo_dc.png"
              alt="Gold"
            />
          </div>
        </div>
      </div>
      <div className="flex mt-4 gap-6">
        {subnavData.map((item)=>(
            <div className="bg-white rounded-lg p-2 mb-6">
                <div><img src={item.url}/></div>
                <div className="text-center text-gray-900/60 py-2">{item.title}</div>
            </div>
        ))}
      </div>
    
    </div>
    </div>
  );
}

export default Subnav;
