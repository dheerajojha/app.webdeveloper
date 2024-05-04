import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="row">
        <div className="col"><ul>
          <li><h3>Logo.</h3></li>
          <li><p>The best look anytime, anywhere.</p></li>
        </ul></div>
        <div className="col">
          <ul>
            <li><h4>For Her</h4></li>
            <li><Link to="/">Jeens</Link></li>
            <li><Link to="/">Jeens</Link></li>
            <li><Link to="/">Jeens</Link></li>
            <li><Link to="/">Jeens</Link></li>
            <li><Link to="/">Jeens</Link></li>
          </ul>
        </div>
        <div className="col"> <ul>
          <li><h4>For Him</h4></li>
          <li><Link to="/">Jeens</Link></li>
          <li><Link to="/">Jeens</Link></li>
          <li><Link to="/">Jeens</Link></li>
          <li><Link to="/">Jeens</Link></li>
          <li><Link to="/">Jeens</Link></li>
        </ul></div>
        <div className="col"> <ul>
          <li><h4>Subscribe</h4></li>
          <li><input type="text" />
            <Link to="" className='cta'>Subscibe</Link>
          </li>
        </ul></div>
      </div>

      <div className="row flexBetween">
        <div className="left">
          <p>Copyright © 2024 Brandstore. Powered by Brandstore.</p>
        </div>
        <div className="right"><ul className='flexRow'>
          <li><Link to="/"><FaFacebook /></Link></li>
          <li><Link to="/"><FaYoutube /></Link></li>
          <li><Link to="/"><FaTwitter /></Link></li>
          <li><Link to="/"><FaWhatsapp /></Link></li>
          <li><Link to="/"><FaInstagram /></Link></li>
        </ul></div>
      </div>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
.row{
  ul{
    li{
      line-height:2rem;
    }
  }
  &:nth-child(1){
    padding-bottom:2rem;
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
  }
  &:nth-child(2){
    border-top:1px solid var(--grayColor);
    padding-top:2rem;
    flex-wrap:wrap;
    text-align:center;
    a{
      color:var(--blackColor);
    }
  }
}


`



export default Footer