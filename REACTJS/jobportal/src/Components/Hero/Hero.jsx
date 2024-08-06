import React from 'react'
import './Hero.css'
import { FaSearch } from "react-icons/fa"
import { FaLocationPin } from 'react-icons/fa6'
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <article className='gap'>
        <h1>Make The <span>Best Move</span> <br /> to choose your new job</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam nulla consequatur, sunt beatae quidem inventore</p>
      </article>

      <form action="">
        <div className="form-group flex-row-sm">
          <FaSearch />
          <input type="text" placeholder='Search Job' />
        </div>
        <div className="form-group flex-row-sm">
          <FaLocationPin />
          <input type="text" placeholder='Location' />
        </div>
        <button className='cta'>Search</button>
      </form>
    </section>
  )
}

export default Hero