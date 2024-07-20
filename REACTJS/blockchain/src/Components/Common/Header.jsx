import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import { FaBars, FaSkullCrossbones } from "react-icons/fa"
import { styled } from "styled-components"
const Header = () => {
  const [toggleNav, setToggleNav] = useState(false)
  return (
    <HeaderWrapper>
      <div className="logo">
        <h3>BlockChain</h3>
      </div>

      <nav className={`${toggleNav && 'toggle-nav'}`}>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/'>About</NavLink></li>
          <li><NavLink to='/'>Contact</NavLink></li>
          <li><NavLink to='/'>Demo</NavLink></li>
        </ul>
      </nav>


      <div className="toggle-btn" onClick={() => setToggleNav(!toggleNav)}>
        {toggleNav ? <FaSkullCrossbones /> : <FaBars />}
      </div>

    </HeaderWrapper>
  )
}


const HeaderWrapper = styled.header`
display:flex;
justify-content:space-between;
align-items:center;
padding:1rem;
position:fixed;
width:100%;
.logo{
  h3{
    color:var(--whiteColor);
    font-style:italic;
    letter-spacing:.4rem;
  }
}
nav{
  display:none;
  ul{
    display:flex;
    align-items:center;
    gap:1rem;
    position:absolute;
    right:2%;
    top:100%;
    background-color:#eee;
    flex-direction:column;
    padding:1rem;
    transition:.5s ease;
    border-radius:5px;
  a{
    color:#000;
  
  }
  }
}

.toggle-btn{
  color:var(--whiteColor);
}
.toggle-nav{
  display:block; 
}

`
export default Header