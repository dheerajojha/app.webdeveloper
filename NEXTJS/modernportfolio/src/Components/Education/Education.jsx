'use client'
import React, { useState } from 'react'
import './Education.css'
import { FaBookReader } from "react-icons/fa";
import { IoBagHandleSharp } from "react-icons/io5";
const Education = () => {
  const [education, setEducation] = useState([{
    id: 1,
    title: 'Hermony Institute',
    subtitle: 'Masters In Visual Arts',
    duration: '2020-2022',
    type: 'education'
  },
  {
    id: 2,
    title: 'Hermony Institute',
    subtitle: 'Masters In Visual Arts',
    duration: '2020-2022',
    type: 'education'
  },
  {
    id: 3,
    title: 'Hermony Institute',
    subtitle: 'Masters In Visual Arts',
    duration: '2020-2022',
    type: 'education'
  },
  {
    id: 4,
    title: 'Insight Lancer',
    subtitle: 'Visual Artist',
    duration: '2020-2022',
    type: 'experience'
  },
  {
    id: 5,
    title: 'Self Employed',
    subtitle: 'Product Designer',
    duration: '2020-2022',
    type: 'experience'
  },
  {
    id: 6,
    title: 'MG Graphic Studio',
    subtitle: 'Web Designer',
    duration: '2020-2022',
    type: 'experience'
  },
  ])
  return (
    <section className="education-wrapper">
      <div className="heading">
        <span>Education & Work</span>
        <h2>My <span>Education  & Work Experience</span></h2>
      </div>
      <div className="card-container grid-2">
        <div className="card gap">
          <div className="card-header">
            <span><FaBookReader /></span>
            <h3>Education</h3>
          </div>
          {education.filter((f) => (
            f.type === 'education'
          )).map((item) => (
            <div className="card-body" key={item.id}>
              <div className="flex-between">
                <h4>{item.subtitle}</h4>
                <p>{item.duration}</p>
              </div>
              <p>{item.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="card gap">
          <div className="card-header">
            <span><IoBagHandleSharp /></span>
            <h3>Experience</h3>
          </div>
          {education.filter((f) => (
            f.type === 'experience'
          )).map((item) => (
            <div className="card-body" key={item.id}>
              <div className="flex-between">
                <h4>{item.subtitle}</h4>
                <p>{item.duration}</p>
              </div>
              <p>{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education