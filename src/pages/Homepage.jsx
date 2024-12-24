import React from "react";
import Navbar from "../components/Navbar";
import LogoSection from "../components/LogoSection";
import Subnav from "../components/Subnav";
import Heroimg from "../components/Heroimg";
import SliderComponent from "../components/Slider";
import Wrapper from "../components/Wrapper";
import Explore from "../components/Explore";
import Wrappers from "../components/Wrappers";
import WrapperSecond from "../components/WrapperSecond";
import CommonHeading from "../components/CommonHeading";
import CommonSlider from "../components/CommonSlider";
import { images1, images10, images2, images3, images4, images5, images6, images7, images8, images9 } from "../utils/constant";
import VideoSection from "../components/VideoSection";


const Homepage = () => {
  return (
    <div className="container">
      <Navbar />
      <LogoSection />
      <Subnav />
      <Heroimg />
      <SliderComponent />
      <Wrapper />
      <Explore />
      <Wrappers />
      <WrapperSecond />
      <CommonHeading heading={"EYEGLASSES"} />
      <CommonSlider data={images1}/>
      <CommonHeading heading={"SUNGLASSES"} />
      <CommonSlider data={images2}/>
      <img src='https://static1.lenskart.com/media/desktop/img/Nov22/Updated%20brand%20banner%20jj%20.jpg'/>
      <CommonHeading heading={"EYEGLASSES"} />
      <CommonSlider data={images3}/>
      <CommonHeading heading={"SUNGLASSES"} />
      <CommonSlider data={images4}/>
      <img src='https://static1.lenskart.com/media/desktop/img/Aug21/25-Aug/LK-AIR-Banner.jpg'/>
      <CommonHeading heading={"EYE GLASSES"} />
      <CommonSlider data={images5}/>
      <img src='https://static1.lenskart.com/media/desktop/img/Aug21/25-Aug/LK-Readers-Banner.jpg'/>
      <CommonHeading heading={"EYE GLASSES"} />
      <CommonSlider data={images6}/>
      <img src='https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/Banner05_Final2ndDec21.jpg'/>
      <CommonHeading heading={"WITH POWER COMPUTER BLU LENSES"} />
      <CommonSlider data={images7}/>
      <CommonHeading heading={"WITH ZERO POWER COMPUTER BLU LENSES"} />
      <CommonSlider data={images8}/>
      <img src='https://static1.lenskart.com/media/desktop/img/June22/Our-Brands-Banner.jpg'/>
      <CommonHeading heading={"CONTACT LENSES"} />
      <CommonSlider data={images9}/>
      <CommonHeading heading={"COLOR CONTACT LENSES"} />
      <CommonSlider data={images10}/>
      <img src='https://static5.lenskart.com/media/uploads/reachcs1.jpg'/>
      <VideoSection />

    </div>
  );
};

export default Homepage;
