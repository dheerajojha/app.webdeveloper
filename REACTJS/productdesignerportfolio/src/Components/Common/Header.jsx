import React from 'react'
import styled from "styled-components"
import { Link, NavLink } from "react-router-dom"
const Header = () => {
  return (
    <HeaderWrapper>
      <div className="logo">
        <Link to='/'>
          <span>O</span>
          <span>Olivia</span>
        </Link>
      </div>

      <nav>
        <ul className='flex-row'>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/'>Services</NavLink>
          </li>
          <li>
            <NavLink to='/'>About</NavLink>
          </li>
          <li>
            <NavLink to='/'>Projects</NavLink>
          </li>
          <li>
            <NavLink to='/'>Blogs</NavLink>
          </li>
          <li>
            <NavLink to='/'>Testimonials</NavLink>
          </li>
        </ul>
      </nav>

      <div className="btn">
        <button className='cta'>Contact me</button>
      </div>

    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
display:flex;
justify-content:space-between;
align-items:center;
background-color:var(--secondry);
.logo{
  a{
    color:var(--white);
    display:flex;
    align-items:center;
    gap:.4rem;
    span:nth-child(1){
      font-size:34px;
      background-color:var(--primary);
      padding:.5rem;
      border-radius:50%;
      -webkit-text-fill-color:transparent;
      -webkit-text-stroke:1px var(--white);
      width:40px;
      height:40px;
      display:flex;
      justify-content:center;
      align-items:center;
    }

  }
}
nav{
  a{
    color:var(--white)
  }
}
`

export default Header