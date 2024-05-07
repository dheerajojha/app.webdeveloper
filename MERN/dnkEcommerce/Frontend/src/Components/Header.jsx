import React, { useState } from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { logo } from "../assets"

const Header = () => {
  const[borderMenu,setBorderMenu]=useState(false)
  const [toggleMenu, setToggleMenu] = useState(false);
  const [cart, setCart] = useState(0)
  const headerData = [{
    title: 'Accessories',
    path: 'accessories',
  },
  {
    title: 'Men',
    path: '/men',
  },
  {
    title: 'Women',
    path: '/women',
  },
  {
    title: 'All',
    path: '/all',
  },
  ]


  return (
    <HeaderWrapper>
      <div className="left flexRow">
        <div className="logo">
          <Link to="/"><img src={logo} /></Link>
        </div>
        <ul className={`flexRow ${toggleMenu && 'hideMenu'}`}>
          {headerData.map((item, index) => {
            return <li key={index}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          })}
        </ul>
      </div>
      <div className="right flexRow">
        <ul className='flexRow'>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/cart"><AiOutlineShoppingCart /></Link>
            <span>{cart}</span>
          </li>

          <li onClick={() => setToggleMenu(!toggleMenu)}><FaBars /></li>
        </ul>
      </div>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
background-color:rgba(36, 124, 179, 0.618);
padding:20px 3%;
display:flex;
justify-content:space-between;
position:absolute;
width:100%;
a{
    color:var(--whiteColor);
    font-weight:'600';
    text-transform:uppercase;
  }
.left{
  ul{
    &.hideMenu{
    right:0;
  }
  }
}

.right{
  li{
      /* login cta */
    &:nth-child(1){
    padding: .7rem 1rem;
    border:1px solid var(--whiteColor);
    border-radius:2%;
    }
    &:nth-child(2){
      position:relative;
  span{
    position:absolute;
    right:-15px;
    top:-15px;
    color:var(--whiteColor);
    background-color:red;
    width:20px;
    height:20px;
    border-radius:50%;
    display:grid;
    place-content:center;
    font-size:14px;
  }
    }
    /* menu */
    &:nth-child(3){
      background-color:var(--blackColor);
      color:var(--whiteColor);
      padding:.5rem;
      display:none; 
    }
  }
}


@media screen and (max-width:768px) {
  .left{
    ul{
      position:absolute;
      right:-100%;
      top:100%;
      flex-direction:column;
      align-items:flex-start;
      background-color:var(--whiteColor);
      height:100vh;
      width:90%;
      padding:1rem;
      transition:right .5s ease;
      a{
        color:var(--blackColor);
        display:block;
        border-bottom:1px solid var(--grayColor);
      }
    }
  }
  .right{
    li{
      &:nth-child(3){
        display:block; 
      }
    }
    
  }
}

`
export default Header