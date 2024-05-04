import React, { useState } from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import {AiOutlineShoppingCart,AiOutlineUser} from "react-icons/ai";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const[cart,setCart]=useState(0)
  const headerLeftData = [{
    title: 'Accessories',
    path: 'accessories',
  },
  {
    title: 'Mens',
    path: 'mens',
  },
  {
    title: 'Women',
    path: 'women',
  },
  {
    title: 'All',
    path: 'all',
  },
  ]

  const headerRightData = [{
    title: 'About',
    path: 'about',
  },
  {
    title: 'Contact',
    path: 'contact',
  },
  ]
  return (
    <HeaderWrapper>
      <div className="left flexRow">
        <div className="logo">
          <Link to="/">LOGO</Link>
        </div>
        <ul className='flexRow'>
          {headerLeftData.map((item, index) => {
            return <li key={index}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          })}
        </ul>
      </div>
      <div className="right flexRow">
       <ul className='flexRow'>
        {headerRightData.map((item,index)=>{
          return <li key={index}>
            <Link to={item.path}>{item.title}</Link>
          </li>
        })}
           <li className='cart-container'>
            <Link to=""><AiOutlineShoppingCart/></Link>
            <span>{cart}</span>
          </li>
          <li >
            <Link to=""><AiOutlineUser/></Link>
          </li>
          <li className='bar-container'><FaBars/></li>
       </ul>
      </div>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
background-color:rgba(36, 124, 179, 0.618);
padding:40px 3%;
display:flex;
justify-content:space-between;
position:absolute;
width:100%;
.left{
  .logo{
    a{
      color:var(--whiteColor);
      font-size:28px;
      font-weight:'600';}
  }
}
ul{
  a{
    color:var(--whiteColor);
    font-weight:'600';
    text-transform:uppercase;
  }
 .cart-container{
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
 .bar-container{
  background-color:var(--blackColor);
  color:var(--whiteColor);
  padding:.5rem;
  /* display:none; */
 }
}

`
export default Header