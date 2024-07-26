import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { IoSend } from "react-icons/io5";
const Footer = () => {
  return (
    <FooterWrapper>
      <div className="col">
        <h2>Olivia</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eligeipsum fuga?</p>
        <div className="social">
          <span>Facebok </span>
          <span>Insta</span>
          <span>Twitter </span>
          <span>Linkedin </span>
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
  grid-template-columns:400px 1fr 1fr 400px;
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
  button{
    background-color:var(--secondry);
    padding:1rem;
    size:24px;
    border-radius:5px;
    display:flex;
    color:var(--white)
  }

  &:nth-child(4){
.form-group{
  display:flex;
  align-items:center;
}
  }
}


@media screen and (max-width:768px) {
  grid-template-columns:1fr;
}
`

export default Footer