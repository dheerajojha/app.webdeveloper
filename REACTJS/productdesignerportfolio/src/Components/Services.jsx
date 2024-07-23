import React, { useState } from 'react'
import styled from 'styled-components'
const Services = () => {
  const[services,setService]=useState([{
    id:1,
    title:'ux designer',
    description:'  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo id maxime ex eligendi est nulla neque minus eos debitis, voluptatem ratione pariatur quisquam tenetur placeat quos illum reiciendis dolorem quia.',
    image:""
  },
  {
    id:2,
    title:'APP Developer',
    description:'  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo id maxime ex eligendi est nulla neque minus eos debitis, voluptatem ratione pariatur quisquam tenetur placeat quos illum reiciendis dolorem quia.',
    image:""
  },
  {
    id:3,
    title:'Web Developer',
    description:'  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo id maxime ex eligendi est nulla neque minus eos debitis, voluptatem ratione pariatur quisquam tenetur placeat quos illum reiciendis dolorem quia.',
    image:""
  },
])
  return (
    <ServicesWrapper>
      <div className="flex-between">
        <div className="heading flex-between">
          <span>Services</span>
          <h2>Services i Provide</h2>
        </div>
        <button className='cta-green'>View All Services</button>
      </div>
    

      <div className="row"></div>
    </ServicesWrapper>
  )
}

const ServicesWrapper = styled.section``

export default Services