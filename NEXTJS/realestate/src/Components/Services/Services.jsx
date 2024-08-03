'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaCreativeCommonsNd } from "react-icons/fa"
const Services = () => {
  const [services, setServices] = useState([{
    id: 1,
    icon: <FaCreativeCommonsNd />,
    title: 'Quick and Best Price',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat pariatur molestias dolores nostrum quis, necessitatibus tenetur natus tempora explicabo quae corrupti eveniet maiores repudiandae deserunt dicta recusandae at est quas.',
    path: '/'
  },
  {
    id: 2,
    icon: <FaCreativeCommonsNd />,
    title: 'Availability Everywhere',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat pariatur molestias dolores nostrum quis, necessitatibus tenetur natus tempora explicabo quae corrupti eveniet maiores repudiandae deserunt dicta recusandae at est quas.',
    path: '/'
  },
  {
    id: 3,
    icon: <FaCreativeCommonsNd />,
    title: 'Custum By Request',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat pariatur molestias dolores nostrum quis, necessitatibus tenetur natus tempora explicabo quae corrupti eveniet maiores repudiandae deserunt dicta recusandae at est quas.',
    path: '/'
  },
  ])
  return (
    <section className="services-wrapper">
      <div className="heading-between">
        <h2>More Than 500+ Have Joined the Search For a plce to live with Matrix</h2>
        <Link href='' className='cta-white'>View more Perks-</Link>

      </div>

      <div className="card-container grid-3">
        {services.map((item) => (
          <div className="card gap" key={item.id}>
            <div className="card-icon">
              <span>{item.icon}</span>
            </div>
            <div className="card-body gap">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <div className="card-footer">
              <Link href={item.path}>Learn More ------------</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services