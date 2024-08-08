import React from 'react'
import { FaArrowRightToBracket } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
  return (
    <footer>
      <div className="row-1">
        <div className="col">
          <h4>Services</h4>
          <Link to=''>Graphic Designer</Link>
          <Link to=''>Web developer</Link>
          <Link to=''>App Developer</Link>
          <Link to=''>Engenering</Link>
          <Link to=''>Marketing</Link>
        </div>
        <div className="col">
          <h4>Resources</h4>
          <Link to=''>Virtual Assistant</Link>
          <Link to=''>Accountant</Link>
          <Link to=''>Book keeper</Link>
          <Link to=''>Freetaxer</Link>
          <Link to=''>Marketing</Link>
        </div>
        <div className="col">
          <h4>Company</h4>
          <Link to=''>Partnership</Link>
          <Link to=''>Privacy</Link>
          <Link to=''>Sitemap</Link>
          <Link to=''>Term & Condition</Link>
        </div>
        <div className="col gap">
          <h4>Get In Touch</h4>
          <p>You will find next Frelance Profile Here</p>
          <form action="">
            <div className="form-group">
              <input type="text" placeholder='email' />
              <span><FaArrowRightToBracket color='#000' /></span>
            </div>
          </form>
        </div>
      </div>

      <div className="row-2 flex-between">
        <div className="col">
          <div className="logo">
            <Link to=''>Fashion</Link>
          </div>
        </div>
        <div className="col">
          <p>@copyright claim @2024</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer