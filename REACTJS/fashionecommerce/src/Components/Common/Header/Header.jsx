import React, { useState } from 'react'
import { FaBars, FaCartShopping } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
  const [togglebar, setTogglebar] = useState(false)
  return (
    <header className='flex-between'>
      <div className="logo logo-mobile">
        <Link to=''>Fashion</Link>
      </div>
      <nav className='nav-desktop'>
        <ul className='flex-row-md'>
          <li><Link to=''>Home</Link></li>
          <li><Link to=''>How it Works</Link></li>
          <li><Link to=''>Contact</Link></li>
        </ul>
      </nav>

      <nav className={`nav-mobile ${togglebar && 'top-100'}`}>
        <ul>
          <li><Link to=''>Home</Link></li>
          <li><Link to=''>How it Works</Link></li>
          <li><Link to=''>Contact</Link></li>
          <li><Link to=''><FaCartShopping /></Link></li>
        </ul>
        <div className="flex-between">
          <button>Signup</button>
          <button>Contact</button>
        </div>
      </nav>

      <div className="logo logo-desktop">
        <Link to=''>Fashion</Link>
      </div>

      <div className="header-btn flex-row-md">
        <Link to=''> Signup</Link>
        <Link to=''> Login</Link>
        <span className='icon-container'><FaCartShopping /></span>
      </div>

      <span className="bar" onClick={() => (setTogglebar(!togglebar))}>
        {togglebar ? <FaBars /> : <FaBars />}
      </span>
    </header>
  )
}

export default Header