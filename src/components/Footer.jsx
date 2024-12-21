import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0C0841] text-white py-8">
      {/* Main Content */}
      <div className="px-10 mb-16">
        <h1 className="text-4xl font-sans mb-4">
          Buy The Best Eyewear From Lenskart
        </h1>
        <p className="text-sm md:text-base leading-6 mb-4">
          Lenskart is the leading e-commerce portal for eyewear in India. It has
          revolutionised the eyewear industry in the country with its
          omni-channel approach. From an ever-growing number of offline stores
          across major cities in the country to innovative integration of
          technology while purchasing online, Lenskart caters to every customer
          with several deals and offers.
        </p>
        <p className="text-sm md:text-base leading-6">
          A one-stop online solution for purchasing eyewear and its
          accessories, Lenskart delivers 
          them right at your doorstep with
          convenient methods of payment.{" "}
          <span className="text-cyan-300">Sunglasses</span> as well as{" "}
          <span className="text-cyan-300">Eyeglasses</span> are available for
          men and women in a diverse array of styles and trendy colours. If you
          want to try out{" "}
          <span className="text-cyan-300">Contact Lenses</span>, pick the ones
          of your choice from the extensive variety of coloured contact lenses
          from our online store.
        </p>
      </div>

      {/* Links */}
      <div className="text-sm md:text-base py-8 border-t border-gray-2">
        <div>
          <h3 className="font-bold mb-2">Services</h3>
          <p>Store Locator</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">About Us</h3>
          <p>We Are Hiring</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Help</h3>
          <p>FAQs</p>
        </div>
      </div>

      {/* App Store Buttons */}
      <div className="flex justify-center space-x-4 pb-6">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Google_Play_Store_badge_EN.svg"
          alt="Google Play"
          className="w-32"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Download_on_the_App_Store_Badge.svg"
          alt="App Store"
          className="w-32"
        />
      </div>
    </footer>
  );
};

export default Footer;
