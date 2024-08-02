import React from 'react'
import './Header.css'
import Link from 'next/link'
const Header = () => {
  return (
    <header className='flex-between'>
      <div className="logo">
        <Link href=''>RealEstate</Link>
      </div>
      <nav>
        <ul className='flex-row-md'>
          <li> <Link href=''>Home</Link></li>
          <li> <Link href=''>Property</Link></li>
          <li> <Link href=''>Services</Link></li>
          <li>  <Link href=''>Blog</Link></li>
          <li> <Link href=''>Contact</Link></li>
          <li>  <Link href=''>Faq</Link></li>
        </ul>
      </nav>

      <div className="hero-btn flex-row-md">
        <button className='cta'>SignUp</button>
        <button className='cta-white'>Sigin</button>
      </div>
    </header>
  )
}

export default Header