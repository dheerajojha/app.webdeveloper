import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Special = () => {
  return (
   <SpecialWrapper>
    <article className='gap'>
      <h4>Limited Time Offer</h4>
      <h2>Special Edition</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</p>
      <h3>Buy This T-shirt At 20% Discount, Use Code OFF20</h3>
     <div>
     <Link to="" className='cta-white'>Shop Now</Link>
     </div>
    </article>
   </SpecialWrapper>
  )
}
const SpecialWrapper = styled.section`
background-image:url('https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2019/12/banner-03.jpg');
height:50vh;
width:100%;
background-position:center;
background-size:cover;
background-attachment:fixed;
display:flex;
align-items:center;
color:var(--whiteColor);
`

export default Special