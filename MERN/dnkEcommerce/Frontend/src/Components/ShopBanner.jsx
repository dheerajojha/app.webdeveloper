import React from 'react'
import styled from "styled-components"
import bgImg from "../assets/asset24.jpeg";
import { Link } from "react-router-dom"
const ShopBanner = () => {
  return (
    <ShopBannerWrapper>
      <article className='gap'>
        <h1> Raining Offers For Hot Summer!</h1>
        <h3>25% Off On All Products</h3>
        <div className="buttons flexRow">
          <Link className='cta-white'>Shop Now</Link>
          <Link className='cta-transparent'>Shop Now</Link>
        </div>
      </article>
    </ShopBannerWrapper>
  )
}

const ShopBannerWrapper = styled.section`
  background: 
    linear-gradient(
      rgba(0, 106, 255, 0.45), 
      rgba(54, 134, 204, 0.45)
      
    ),
    url(${bgImg});
height:100vh;
width:100%;
background-position:center;
background-attachment:fixed;
background-size:cover;
display:flex;
align-items:center;
article{
  width:50%;
  color:var(--whiteColor);
}
@media screen and (max-width:768px) {
  article{
  width:90%;
}
  
}
`

export default ShopBanner