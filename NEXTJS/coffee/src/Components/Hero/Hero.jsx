'use client'
import React, { useState } from 'react'
import './Hero.css'
import Image from 'next/image'

const Hero = () => {
  const [incredients, setIncredients] = useState([{
    id: 1,
    title: 'Energy',
    weight: '321g'
  },
  {
    id: 2,
    title: 'Protien',
    weight: '21g'
  },
  {
    id: 3,
    title: 'Total Fat',
    weight: '32mg'
  },
  {
    id: 4,
    title: 'Conto',
    weight: '36g'
  },
  {
    id: 5,
    title: 'Energy',
    weight: '321g'
  },
  {
    id: 6,
    title: 'Energy',
    weight: '321g'
  },
  {
    id: 7,
    title: 'Energy',
    weight: '321g'
  },

  ])
  return (
    <section className="hero-wrapper">
      <div className="row-1 grid-2">
        <div className="col-l gap">
          <article className='gap'>
            <span>We Make Confectionery</span>
            <h1>Magic</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt facere dicta rerum nemo, minus, voluptates quibusdam deleniti ad facilis laborum autem numquam ipsum sit aperiam molestiae repellendus quod nam nesciunt.<br /> <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur qui, ipsum, non soluta ipsam consequatur eos, perferendis repudiandae nostrum facere sequi sint nesciunt ratione illum distinctio hic quas. Fugit, dolore!</p>
          </article>

          <div className="hero-btn flex-row-sm">
            <button className='cta'>Shop Now</button>
            <h3>@32.3</h3>
          </div>
        </div>
        <div className="col-r">
          <Image src='/Images/hero-pic.png' width={200} height={500} />
        </div>
      </div>

      <div className="row-2">
        {incredients.map((item) => (
          <div className='incredient'>
            <p>{item.title}</p>
            <h3>{item.weight}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero