import Achievement from '@/Components/Achievement/Achievement'
import Featuredproperty from '@/Components/Featuredproperty/Featured-property'
import Hero from '@/Components/Hero/Hero'
import Recentproperty from '@/Components/Recentproperty/Recent-property'
import React from 'react'

const page = () => {
  return (
    <>
    <Hero/>
    <Achievement/>
    <Featuredproperty/>
    <Recentproperty/>
    </>
  )
}

export default page