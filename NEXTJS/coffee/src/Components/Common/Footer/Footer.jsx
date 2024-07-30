import React from 'react'
import './Footer.css'
import Link from 'next/link'
import {FaFacebook,FaInstagram,FaTwitter,FaLinkedin} from "react-icons/fa"
const Footer = () => {
  return (
   <footer>
    <div className="row-1 grid-3">
      <div className="col">
        <div className="logo">
          <Link href=''>Coffee</Link>
        </div>
      </div>
      <div className="col flex-row-md">
        <Link href=''>Home</Link>
        <Link href=''>Features</Link>
        <Link href=''>Review</Link>
        <Link href=''>About us</Link>
      </div>
      <div className="col flex-row-md">
        <Link href=''><FaFacebook/></Link>
        <Link href=''><FaLinkedin/></Link>
        <Link href=''><FaTwitter/></Link>
        <Link href=''><FaInstagram/></Link>
      </div>
    </div>

    <div className="row-2">
      <p>@Copyright claim ALL Right Reserved</p>
    </div>
   </footer>
  )
}

export default Footer