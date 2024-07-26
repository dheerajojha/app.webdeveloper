import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { IoSend } from "react-icons/io5";
import { FaFacebook, FaLinkedin, FaTwitter, FaTwitch } from "react-icons/fa";
const Footer = () => {
  return (
    <FooterWrapper>
      <div className="col gap">
        <h2>Olivia</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eligeipsum fuga?</p>
        <div className="social">
          <Link to=''><FaFacebook /></Link>
          <Link to=''><FaLinkedin /></Link>
          <Link to=''><FaTwitter /></Link>
          <Link><FaTwitch /></Link>
        </div>
      </div>
      <div className="col">
        <h3>Navigation</h3>
        <Link to='/'>home</Link>
        <Link to='/'>Service</Link>
        <Link to='/'>About</Link>
        <Link to='/'>Project</Link>
        <Link to='/'>Blogs</Link>
        <Link to='/'>FAQS</Link>
      </div>
      <div className="col">
        <h3>Contact</h3>
        <Link to='/'>+03-29303920-3</Link>
        <Link to='/'>peter@gmail.com</Link>
        <Link to='/'>kevin@gmail.com</Link>
        <Link to='/'>2830 sec Dublin near link list</Link>
      </div>
      <div className="col">
        <h3>Get Latest Information</h3>
        <div className="form-group">
          <input type="text" placeholder='Contact' />
          <button><IoSend /></button>
        </div>
      </div>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  display:grid;
  grid-template-columns:29% 19% 19% 29%;
  gap:1rem;

.col{
  h3,h2{
    margin-bottom:1.5rem;
    color:var(--primary)
  }
  a{
    display:block;
    line-height:2rem;
  }

  &:nth-child(1){
  .social{
    display:flex;
    gap:2rem;
    a{
      background-color:var(--secondry);
      display:flex;
      border-radius:3px;
      padding:.8rem;
      color:var(--white)
    }
  }
  }
  &:nth-child(4){
.form-group{
    display:flex;
    align-items:center;
  input{
    flex:9;
  }
  button{
    flex:1;
    display:flex;
    justify-content:center;
    background-color:var(--secondry);
    padding:1rem;
    size:24px;
    border-radius:5px;
    color:var(--white)
  }
}
  }
}


@media screen and (max-width:768px) {
  grid-template-columns:1fr;
}
`

export default Footer