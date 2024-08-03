
'use client'
import React, { useState } from 'react'
import './Header.css'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'
const Header = () => {
  const [toggleBar, setToggleBar] = useState(false)
  return (
    <header className='flex-between'>
      <div className="logo">
        <Link href=''>RealEstate</Link>
      </div>
      <nav>
        <ul className={`flex-row-md ${toggleBar && 'top-100'}`}>
          <li> <Link href=''>Home</Link></li>
          <li> <Link href=''>Property</Link></li>
          <li> <Link href=''>Services</Link></li>
          <li>  <Link href=''>Blog</Link></li>
          <li> <Link href=''>Contact</Link></li>
          <li>  <Link href=''>Faq</Link></li>
        </ul>
      </nav>

      <div className="header-btn flex-row-md">
        <button className='cta'>SignUp</button>
        <button className='cta-white'>Sigin</button>
      </div>

      <span className="header-bar" onClick={()=>setToggleBar(!toggleBar)}>
        {toggleBar ? <FaBars /> : <FaBars />}
      </span>
    </header>
  )
}

export default Header