import { About, Blog, Education, Faq, Hero, Newsletter, Services, Testimonial } from '@/Components'
import React from 'react'

const page = () => {
  return (
    <>
    <Hero/>
    <Services/>
    <About/>
    <Education/>
    <Testimonial/>
    <Blog/>
    <Faq/>
    <Newsletter/>
    </>
  )
}

export default page