import React from 'react'
import { styled } from "styled-components"
import { Link } from "react-router-dom"
import {FaFacebook,FaTwitter,FaInstagram} from "react-icons/fa"
const Footer = () => {
  return (
    <FooterWrapper >
      <div className="row grid-4">
        <div className="col">
          <div className="logo"><h3>BlockChain</h3></div>
          <p>Lorem ipsum dolor lit. Odio aut vel, officia iste quia quae omnis sequi ipsam sapiente vero, libero rem! Laboriosam assumenda dolores accusantium suscipit labore? Cum, incidunt.</p>
        </div>
        <div className="col">
          <ul>
            <li><h4>Community</h4></li>
            <li><Link to='/'>For Talent</Link></li>
            <li><Link to='/'>For Companies</Link></li>
            <li><Link to='/'>Facebook Group</Link></li>
            <li><Link to='/'>FAQ</Link></li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li><h4>About us</h4></li>
            <li><Link to='/'>Meet the Team</Link></li>
            <li><Link to='/'>Our Story</Link></li>
            <li><Link to='/'>Career</Link></li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li><h4>Useful</h4></li>
            <li><Link to='/'>Ultra secure</Link></li>
            <li><Link to='/'>Checking</Link></li>
            <li><Link to='/'>Support</Link></li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col socials flex-between">
          <p>Choose Your Language English | Native</p>
          <div className="socials flex-row">
          <span><FaFacebook/></span>
          <span><FaInstagram/></span>
          <span><FaTwitter/></span>
          </div>
        </div>
        <div className="col">
          <p>Block chain Pvt 2024</p>
        </div>
      </div>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
padding:2rem;
background-color:var(--grayColor);
.row:nth-child(1){
  .logo{
    h3{
    font-style:italic;
    letter-spacing:.4rem;
  }
  }
  a{
  line-height:2rem;
}
}

.row:nth-child(2){
.col:nth-child(2){
  p{
  text-align:center;
  padding:1rem;
  border-top:1px solid var(--blackColor);
  margin-top:1rem;
 }
}
}
`

export default Footer