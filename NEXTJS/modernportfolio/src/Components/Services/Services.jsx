'use client'
import React, { useState } from 'react'
import './Services.css'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa"

const Services = () => {
  const [service, setService] = useState([
    {
      id: 1,
      title: 'UI/UX Design',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid quo quaerat consectetur possimus debitis error saepe nisi eveniet, minus voluptatibus pariatur a excepturi doloribus, nesciunt ut ipsam similique eius harum!',
      image: 'UX'
    },
    {
      id: 2,
      title: 'App Design',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid quo quaerat consectetur possimus debitis error saepe nisi eveniet, minus voluptatibus pariatur a excepturi doloribus, nesciunt ut ipsam similique eius harum!',
      image: 'AD'
    },
    {
      id: 3,
      title: 'Web Design',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid quo quaerat consectetur possimus debitis error saepe nisi eveniet, minus voluptatibus pariatur a excepturi doloribus, nesciunt ut ipsam similique eius harum!',
      image: 'WD'
    }
  ])
  return (
    <div className="services-wrapper">
      <div className="heading-left">
        <span>SERVICES</span>
        <h2>My Services</h2>
      </div>
      <div className="card-container grid-3">
        {service.map((item) => (
          <div className="card gap" key={item.id}>
            <div className="card-img">
              {item.image}
            </div>
            <div className="card-body gap">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="flex-row-sm">
                <Link href=''>Learn more</Link>
                <FaArrowRight />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services