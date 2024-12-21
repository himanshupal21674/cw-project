import React from 'react'
import Navbar from '../components/Navbar'
import LogoSection from '../components/LogoSection'
import Subnav from '../components/Subnav'
import Heroimg from '../components/Heroimg'
import SliderComponent from '../components/Slider'
import Wrapper from '../components/Wrapper'
import Explore from '../components/Explore'
import Wrappers from '../components/Wrappers'
import WrapperSecond from '../components/WrapperSecond'


const Homepage = () => {
  return (
    <div className='container'>
          <Navbar/>
          <LogoSection/>
          <Subnav/>
          <Heroimg/>
        <SliderComponent/>
        <Wrapper/>
        <Explore/>
        <Wrappers/>
        <WrapperSecond/>
    </div>
  )
}

export default Homepage