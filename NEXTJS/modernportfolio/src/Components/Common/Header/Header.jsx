'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import './Header.css'
import {FaBars} from "react-icons/fa"
const Header = () => {
  const[toggleBar,setToggleBar]=useState(false)
  return (
    <header className='flex-between'>
      <div className="logo">
        <Link href=''>Tenny</Link>
      </div>
      <nav>
        <ul className={`flex-row-md ${toggleBar && 'top-60'}`}>
          <li><Link href=''>Home</Link></li>
          <li><Link href=''>Services</Link></li>
          <li><Link href=''>About</Link></li>
          <li><Link href=''>Projects</Link></li>
          <li><Link href=''>Blogs</Link></li>
          <li><Link href=''>Testimonial</Link></li>
          <button className='cta-header cta-mobile'>Contact</button>
        </ul>
      </nav>

      <div className="header-btn">
        <button className='cta-header'>Contact</button>
      </div>

      <span className="header-bar" onClick={()=>(setToggleBar(!toggleBar))}>
        {toggleBar ? <FaBars/>: <FaBars/>}
      </span>
    </header>
  )
}

export default Header