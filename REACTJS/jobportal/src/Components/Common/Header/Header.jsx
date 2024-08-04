import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
    <header className='flex-between'>
      <div className="logo">
        <Link to=''>Jobportal</Link>
      </div>

      <nav>
        <ul className='flex-row-md'>
          <li><Link to=''>Home</Link></li>
          <li><Link to=''>About</Link></li>
          <li><Link to=''>Contact</Link></li>
          <li><Link to=''>Services</Link></li>
          <li><Link to=''>Home</Link></li>
        </ul>
      </nav>

      <div className="hero-btn">
        <button className='cta'>Contact</button>
      </div>
    </header>
  )
}

export default Header