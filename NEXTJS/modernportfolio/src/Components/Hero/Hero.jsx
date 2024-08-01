import React from 'react'
import './Hero.css'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa"
import Marquee from 'react-fast-marquee'
const Hero = () => {
  return (
    <div className="hero-wrapper">
      <article>
        <h1>I'm <span>Tenny</span>,<br />Product Designer</h1>
      </article>
      {/* hero img start */}
      <div className="hero-img">
        <span className='triangle' />
        <Image src='/Images/heropic2.png' alt='heropic' width={400} height={400} />
        <div className="hero-btn">
          <button className='cta'>
            <small>Portfolio</small>
            <span><FaArrowRight /></span>
          </button>
          <button className='cta-white'>Hire me</button>
        </div>
      </div>
      {/* marguee start */}
      <Marquee className='marquee'>
        <h3 className='m-text'>Web Design | App Design | Dashboard | Wireframe | User Research Web Design | App Design | Dashboard | Wireframe | User Research</h3>
      </Marquee>
    </div>
  )
}

export default Hero