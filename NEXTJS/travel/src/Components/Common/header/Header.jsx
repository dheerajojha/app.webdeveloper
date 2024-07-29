'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import './Header.css'
import { IoMdClose } from "react-icons/io";
import { FaBars} from "react-icons/fa"
const Header = () => {
  const[toggleBar,setToggleBar]=useState(false)
  return (
    <header className='flex-between'>
      <div className="logo">
        <Link href='/'>Dreamy</Link>
      </div>

      <nav>
        <ul className={`flex-row-m ${toggleBar && 'top-1000'}`}>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/'>Listings</Link></li>
          <li><Link href='/'>Featured</Link></li>
          <li><Link href='/'>Pages</Link></li>
          <li><Link href='/'>Add Property</Link></li>
          <li><Link href='/' className='sign-in-mobile cta'>Sign in</Link></li>
        </ul>
      </nav>

      <button className='sign-in-desktop cta'>Sign in</button>
      <span onClick={()=>setToggleBar(!toggleBar)} className='bar'>{toggleBar ? <IoMdClose />:<FaBars  />}</span>
    </header>
  )
}

export default Header