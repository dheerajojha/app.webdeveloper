import Link from 'next/link'
import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <header className='flex-between'>
      <div className="logo">
        <Link href='/'>Dreamy</Link>
      </div>

      <nav>
        <ul className='flex-row-m'>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/'>Listings</Link></li>
          <li><Link href='/'>Featured</Link></li>
          <li><Link href='/'>Pages</Link></li>
          <li><Link href='/'>Add Property</Link></li>
        </ul>
      </nav>

      <button className='cta'>Sign in</button>
    </header>
  )
}

export default Header