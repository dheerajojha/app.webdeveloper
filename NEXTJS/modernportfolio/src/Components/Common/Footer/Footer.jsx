import React from 'react'
import './Footer.css'
import Link from 'next/link'
import { IoSend } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaTwitch, FaTwitter } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
      <div className="row-1">
        <div className="col gap">
          <div className="logo">
            <Link href=''>Jenny</Link>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nihil sit distinctio, consequatur ipsum nobis a aliquam suscipit in natus fugiat consequuntur architecto ipsam maiores nulls molestias!</p>
          <div className="social flex-row-md">
            <Link href=''><FaFacebook /></Link>
            <Link href=''><FaTwitch /></Link>
            <Link href=''><FaTwitter /></Link>
            <Link href=''><FaInstagram /></Link>
          </div>
        </div>
        <div className="col">
           <h4>Navigation</h4>
          <Link href=''>Home</Link>
          <Link href=''>Services</Link>
          <Link href=''>About</Link>
          <Link href=''>Projects</Link>
          <Link href=''>Blogs</Link>
          <Link href=''>FAQS</Link>
        </div>
        <div className="col">
        <h4>Contact</h4>
          <Link href=''>+093-92093-993</Link>
          <Link href=''>tenny@gmail.com</Link>
          <Link href=''>tenny@work@gmail.com</Link>
          <Link href=''>1982 Royal In Road Dublin Iceland</Link>
        </div>
        <div className="col">
          <h4>Get the Latest information</h4>
          <form action="">
           <div className="form-group">
            <input type="text" placeholder='email' />
            <button><IoSend /></button>
            </div> 
          </form>
        </div>
      </div>

      <div className="row-2 flex-between">
        <div className="col">
          <p>@Copyright Claim 2024</p>
        </div>
        <div className="col">
          <p>User Term & Condition | Privacy Policy</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer