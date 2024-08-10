import React from 'react'
import { Gallery, Hero, Newsletter, Popular, Stat, Testimonial } from "../Components"
const Home = () => {
  return (
    <>
      <Hero />
      <Stat/>
      <Gallery/>
      <Popular/>
      <Testimonial/>
      <Newsletter/>
    </>
  )
}

export default Home