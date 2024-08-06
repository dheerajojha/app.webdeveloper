import React from 'react'
import { FaPhone } from 'react-icons/fa'
import { FaMailchimp } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
  return (
    <footer>
      <div className="row-1">
        <div className="col gap">
          <div className="logo">
            <Link>JobPortal</Link>
          </div>
          <p>933-920-2- Dublin Near Mkv Pk new</p>
          <p>@copyright claim 2024 all right reserved</p>
        </div>
        <div className="col">
          <h4>About us</h4>
          <Link to=''>Our Story</Link>
          <Link to=''>Designer</Link>
          <Link to=''>Partnership</Link>
          <Link to=''>Resources</Link>
        </div>
        <div className="col">
          <h4>Support</h4>
          <Link to=''>Our Story</Link>
          <Link to=''>Designer</Link>
          <Link to=''>Partnership</Link>
          <Link to=''>Resources</Link>
        </div>
        <div className="col">
          <h4>Contact us</h4>
          <Link to='' className='flex-row-sm'>
            <span><FaPhone /></span>
            <small>+0390-303902</small>
          </Link>
          <Link to='' className='flex-row-sm'>
            <span><FaMailchimp /></span>
            <small>tenny@gmail.com</small>
          </Link>
        </div>
      </div>

      <div className="row-2">
        <div className="col">
          <Link to=''>Privacy Policy |</Link>
          <Link to=''>Term Of Use |</Link>
          <Link to=''>Dubline Code</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer