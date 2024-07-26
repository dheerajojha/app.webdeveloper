import React, { useState } from 'react'
import styled from "styled-components"
import { Link, NavLink } from "react-router-dom"
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
const Header = () => {
  const [toggleBtn, setToggleBtn] = useState(false)
  return (
    <HeaderWrapper>
      <div className="logo">
        <Link to='/'>
          <span>O</span>
          <span>Olivia</span>
        </Link>
      </div>

      <nav>
        <ul className={`flex-row ${toggleBtn && 'left-0'}`}>
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
      <div className="toggle-btn" onClick={() => setToggleBtn(!toggleBtn)}>
        <span>{toggleBtn ? <IoClose />:<FaBars />}</span>
      </div>

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
      -webkit-text-stroke:1px var(--black);
      width:40px;
      height:40px;
      display:flex;
      justify-content:center;
      align-items:center;
    }

  }
}
nav{
  ul{
  transition:.5s ease;
    a{
    color:var(--white)
  }
  }
}

.toggle-btn{
  display:none;
  span{
    display:flex;
    color:var(--white);
    font-size:24px;
    border:1px solid var(--primary);
    border-radius:5px;
    padding:.6rem;
    cursor:pointer;
  }
}

.left-0{
  left:0;
}

@media screen and (max-width:768px) {
  nav{
    ul{
      align-items:center;
      justify-content:center;
      flex-direction:column;
      width:100%;
      height:100vh;
      position:absolute;
      top:15%;
      left:-100%;
      background-color:var(--primary);
      padding:1rem;
      border-radius:2px;
      z-index:1000;
      a{
        line-height:3rem;
      }

    }
  }
  .toggle-btn{
    display:block;
  }
}
`

export default Header