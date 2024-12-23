import React from "react";
import { ImFacebook2, ImInstagram, ImTwitter } from "react-icons/im";
import { FOOTER_HEADING } from "../utils/constant";
import { LuMessageCircleMore } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="bg-[#0C0841] text-white py-8">
      {/* Main Content */}
      <div className="px-10 mb-16">
        <h1 className="text-4xl font-sans mb-4">
          Buy The Best Eyewear From Lenskart
        </h1>
        <p className="text-sm md:text-base leading-6 mb-4">{FOOTER_HEADING}</p>
        <p className="text-sm md:text-base leading-6">
          A one-stop online solution for purchasing eyewear and its accessories,
          Lenskart delivers them right at your doorstep with convenient methods
          of payment. <span className="text-cyan-300">Sunglasses</span> as well
          as <span className="text-cyan-300">Eyeglasses</span> are available for
          men and women in a diverse array of styles and trendy colours. If you
          want to try out <span className="text-cyan-300">Contact Lenses</span>,
          pick the ones of your choice from the extensive variety of coloured
          contact lenses from our online store.
        </p>
      </div>

      {/* Links */}
      <div className="text-sm px-10 flex gap-4 justify-between">
        <div className="flex gap-6">
          <div className="flex flex-col gap-4">
            <h3 className="font-bold mb-2">Services</h3>
            <p>Store Locator</p>
            <p>Buying Guide</p>
            <p>Frame Size</p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-bold mb-2">About Us</h3>
            <p>We Are Hiring</p>
            <p>Refer And Earn</p>
            <p>About us</p>
            <p>Lenskart Coupons</p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-bold mb-2">Help</h3>
            <p>FAQs</p>
          </div>
        </div>

        {/* App Store Buttons */}
        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="flex gap-2">
            <img
              src="https://static.lenskart.com/media/desktop/img/play-store.svg"
              alt="Google Play"
              className="w-28"
            />
            <img
              src="https://static.lenskart.com/media/desktop/img/app-store.svg"
              alt="App Store"
              className="w-28"
            />
          </div>
          <div className="text-center">
            <p>
              Download Lenskart App to buy <br />
              Eyeglasses, Sunglasses and Contact Lenses
            </p>
          </div>
        </div>
      </div>

      <div className=" border-t border-gray-600 my-8"></div>
      <div className="flex justify-between items-center mx-8">
        <div className="flex gap-4 text-sm items-center">
          <p>T & C</p>
          <p>Privacy</p>
          <p>Disclaimer</p>
        </div>
        <div className="flex gap-4 items-center">
          <p className="text-sm">Version 1.0.0 || Follow Us</p>
          <ImFacebook2 />
          <ImInstagram />
          <ImTwitter />
          <LuMessageCircleMore />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
