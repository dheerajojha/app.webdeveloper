import React, { useState } from 'react'
import styled from 'styled-components'
import { web, app, ux } from "../assets/Images"
import {Link} from "react-router-dom"
const Services = () => {
  const [services, setService] = useState([{
    id: 1,
    title: 'ux designer',
    description: '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo id maxime ex eligendi est nulla neque minus eos debitis, voluptatem ratione pariatur quisquam tenetur placeat quos illum reiciendis dolorem quia.',
    image: ux
  },
  {
    id: 2,
    title: 'APP Developer',
    description: '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo id maxime ex eligendi est nulla neque minus eos debitis, voluptatem ratione pariatur quisquam tenetur placeat quos illum reiciendis dolorem quia.',
    image: app
  },
  {
    id: 3,
    title: 'Web Developer',
    description: '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo id maxime ex eligendi est nulla neque minus eos debitis, voluptatem ratione pariatur quisquam tenetur placeat quos illum reiciendis dolorem quia.',
    image: web
  },
  ])
  return (
    <ServicesWrapper>
      <div className="left-heading flex-between">
        <div>
          <span>Services</span>
          <h2>Services i Provide</h2>
        </div>
        <button className='cta-green'>View All Services</button>
      </div>


      <div className="card-container">
        {services.map((item) => (
          <div className="card gap" key={item.id}>
            <div className="card-img">
              <img src={item.image} alt="" />
            </div>
            <div className="card-body gap">
              <h3>{item.title}</h3>
              <p>{item.description.slice(0, 80)}</p>
              <Link>Learn More👉</Link>
            </div>
          </div>
        ))}
      </div>
    </ServicesWrapper>
  )
}

const ServicesWrapper = styled.section`
.left-heading{
  span{
    color:var(--primary);
    font-weight:600;
  }
}
.card-container{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
  gap:1rem;
  margin-top:4rem;
  .card{
    background-color:var(--cardBg);
    padding:1rem;
    border-radius:5px;
   .card-img{width:40px;}
    }
}

@media screen and (max-width:768px) {
    .left-heading{
        display:flex;
        justify-content:center;
        text-align:center;
        button{
            display:none;
        }
    }
}
`

export default Services