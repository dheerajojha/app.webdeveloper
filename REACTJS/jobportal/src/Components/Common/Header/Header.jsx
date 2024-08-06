import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { FaBars } from 'react-icons/fa'
const Header = () => {
  const [togglebar, setTogglebar] = useState(false)
  return (
    <header className='flex-between'>
      <div className="logo">
        <Link to=''>Jobportal</Link>
      </div>

      <nav>
        <ul className={`flex-row-md ${togglebar && 'top-100'}`}>
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

      <span className="hero-bar" onClick={()=>setTogglebar(!togglebar)}>
        {togglebar ? <FaBars /> : <FaBars />}
      </span>
    </header>
  )
}

export default Header