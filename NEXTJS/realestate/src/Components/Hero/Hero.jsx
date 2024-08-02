import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <div className="hero-wrapper grid-2">
      <div className="col-l gap">
        <article>
          <h1>Find Your Own Rental Estate According to Current Developments</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium assumenda deserunt quibusdam? Fugiat asperiores saepe voluptate magni nulla aperiam veniam repellendus ratione labore natus tenetur, et nisi. Exercitationem, ducimus fuga.</p>
        </article>
        <div className="hero-btn">
          <button className='cta'>Contact us Now</button>
        </div>
      </div>
      <div className="col-r"></div>
    </div>
  )
}

export default Hero