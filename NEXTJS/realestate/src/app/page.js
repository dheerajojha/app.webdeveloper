import { Hero, Listings, Newlistings, Services, Testimonial } from '@/Components'
import React from 'react'

const page = () => {
  return (
    <>
      <Hero />
      <Services />
      <Listings />
      <Newlistings />
      <Testimonial />
    </>
  )
}

export default page