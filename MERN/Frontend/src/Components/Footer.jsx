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
            <li><Link to="/">Women Jeens</Link></li>
            <li><Link to="/">Top & Shirts</Link></li>
            <li><Link to="/">Heels & Flats</Link></li>
            <li><Link to="/">Women Jacket</Link></li>
            <li><Link to="/">Women Accessories</Link></li>
          </ul>
        </div>
        <div className="col"> <ul>
          <li><h4>For Him</h4></li>
          <li><Link to="/">Men Braclets</Link></li>
          <li><Link to="/">Men Shirts</Link></li>
          <li><Link to="/">Men Jeens</Link></li>
          <li><Link to="/">Men Jacket</Link></li>
          <li><Link to="/">Men Accessories</Link></li>
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
      a{
        color:var(--blackColor);
      }
    }
  }
  &:nth-child(1){
    padding-bottom:2rem;
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,auto));
    justify-content:center;
    gap:2rem;
  }
  &:nth-child(2){
    border-top:1px solid var(--grayColor);
    padding-top:2rem;
    flex-wrap:wrap;
    a{
      color:var(--blackColor);
    }
  }
}

@media screen and (max-width:768px) { 
  .row{
    text-align:center;
    justify-content:center; 
    gap:1rem;   
  }  
}

`



export default Footer