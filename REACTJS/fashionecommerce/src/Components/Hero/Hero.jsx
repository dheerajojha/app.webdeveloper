import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";
import './Hero.css'
const Hero = () => {
  return (
    <section className="hero-wrapper grid-3">
      <div className="col-l gap">
        <h1>The Way Discovering <span>Lifestyle</span></h1>
        <p>Life is Hard Even Let me make it bit easier for you</p>
        <Link to='' className='flex-row-sm'>
          <span className='icon-container'><FaArrowRight /></span>
          <small>Explore more</small>
        </Link>

        <div className="dropdown-mobile">
          <div className="flex-between">
            <small>Links</small>
            <span><IoIosArrowDown /></span>
          </div>
          <ul>
            <li><Link>Offer</Link></li>
            <li><Link>Night Dressign</Link></li>
            <li><Link>Swim Wear</Link></li>
            <li><Link>Bunky Jeens</Link></li>
            <li><Link>Casual Wear</Link></li>
          </ul>
        </div>
      </div>
      <div className="col-m">
        <img src='/Images/heropic.png' alt="" />
      </div>
      <div className="col-r">
        <Link>Offer</Link>
        <Link>Night Dressign</Link>
        <Link>Swim Wear</Link>
        <Link>Bunky Jeens</Link>
        <Link>Casual Wear</Link>
      </div>
    </section>
  )
}

export default Hero