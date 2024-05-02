import React from 'react'
import styled from "styled-components"
import bgImg from "../assets/asset24.jpeg";
import { Link } from "react-router-dom"
const HomeBanner = () => {
  return (
    <HomeBannerWrapper>
        <article>
          <h1> Raining Offers For Hot Summer!</h1>
          <h3>25% Off On All Products</h3>
          <div className="buttons gap">
            <Link className='cta-white'>Shop Now</Link>
            <Link className='cta-transparent'>Shop Now</Link>
          </div>
        </article>
    </HomeBannerWrapper>
  )
}

const HomeBannerWrapper = styled.section`
background-image:url(${bgImg});
height:100vh;
width:100%;
background-position:'center';
background-size:'cover';
display:'flex';
justify-content:'center';
align-items:'center';

`

export default HomeBanner