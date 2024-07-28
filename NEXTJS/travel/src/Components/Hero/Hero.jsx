import Image from 'next/image'
import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero-wrapper'>
      <article className='gap'>
        <h2>We'll Build House of Your Dream</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos veritatis ducimus saepe consequuntur nulla facere perspiciatis aut nostrum? At maxime optio possimus perferendis repudiandae eaque essema?</p>
      </article>

      <form action="">
        <div className="form-group">
          <input type="radio" />
          <label htmlFor="">Buy</label>
        </div>

        <div className="form-group">
          <input type="radio" />
          <label htmlFor="">Rent</label>
        </div>

        <div className="form-group">
          <input type="radio" />
          <label htmlFor="">Sale</label>
        </div>

        <div className="form-group">
          <input type="text" placeholder='Search For Property' />
        </div>
        <button className='cta'>Search</button>
      </form>
    </div>
  )
}


export default Hero