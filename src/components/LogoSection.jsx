import React from "react";

function LogoSection() {
  return (
    <div className="w-full min-w-full">
      <div className="flex items-center gap-4">
        <img src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg"></img>
        <img className="h-8" src="https://static.lenskart.com/media/desktop/img/DesignStudioIcons/toll_phone.png"></img>
        <input className="border h-8 p-2 border-[#232235] rounded-lg w-[45%] " type="text" placeholder="What Are You looking For?" />

        <div className="flex items-center gap-6 justify-end w-1/2 px-8">
          <p className="text-sm whitespace-nowrap">Track Order</p>
          <p className="text-sm whitespace-nowrap">Sign In & Sign Up</p>
          <img src="src\assets\wishlist.svg" />
          <p className="text-sm whitespace-nowrap">Wishlist</p>
          <img className="w-4" src="src\assets\cart.svg" />
          <p className="text-sm whitespace-nowrap">Cart</p>
        </div>
      </div>
    </div>
  );
}

export default LogoSection;
