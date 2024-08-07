import React from 'react'
import { FaCartShopping } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
    <header className='flex-between'>
      <nav>
        <ul className={`flex-row-md`}>
          <li><Link to=''>Home</Link></li>
          <li><Link to=''>How it Works</Link></li>
          <li><Link to=''>Contact</Link></li>
        </ul>
      </nav>

      <div className="logo">
        <Link to=''>Fashion</Link>
      </div>

      <div className="header-btn flex-row-md">
        <Link to=''> Signup</Link>
        <Link to=''> Login</Link>
        <span className='icon-container'><FaCartShopping /></span>
      </div>
    </header>
  )
}

export default Header