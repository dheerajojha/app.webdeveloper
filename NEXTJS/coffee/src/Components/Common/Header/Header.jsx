'use client'
import React, { useState } from 'react'
import './Header.css'
import Link from 'next/link'
import { FaBars } from "react-icons/fa"
import { IoCloseSharp } from "react-icons/io5";
const Header = () => {
  const [toggleBar, setToggleBar] = useState(false)
  return (
    <header className='flex-between'>
      <div className="logo">
        <Link href='/'> Coffee</Link>
      </div>
      <nav>
        <ul className={`flex-row-md ${toggleBar && 'top-12'}`}>
          <li><Link href='#home'>Home</Link></li>
          <li><Link href='#home'>Product</Link></li>
          <li><Link href='#home'>Features</Link></li>
          <li><Link href='#home'>Review</Link></li>
          <div className="mobile-btn">
            <li><Link href='#home' className='cta-white'>Login</Link></li>
            <li><Link href='#home' className='cta'>Register</Link></li>
          </div>
        </ul>
      </nav>

      <div className="hero-btn flex-row-md">
        <button className='cta-white'>Login</button>
        <button className='cta'>Register</button>
      </div>

    
        <span className='hero-bar' onClick={()=>setToggleBar(!toggleBar)}>{toggleBar ? <IoCloseSharp /> : < FaBars/>}</span>
    
    </header>
  )
}

export default Header