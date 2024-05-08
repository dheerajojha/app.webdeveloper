import React from 'react'
import { useParams,Link } from 'react-router-dom';
import styled from "styled-components";
import {asset16} from "../assets";
const ProductDetail = () => {
  const params = useParams()
  console.log(params.id);

  return (
    <ProductDetailWrapper>
           {/* left side start */}
        <div className="left">
        <img src={asset16} alt={asset16}  />
        </div>
        {/* right side start */}
        <div className="right">
        <article className='gap'>
          <small>Home / Men / DNK Yellow Shoes</small>
          <p>Men</p>
          <h2>DNK Yellow Shoes</h2>
         <div className="flexRow">
         <h2>$900</h2><h2>$999</h2>
         </div>
          <p>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.</p>
          <Link className="cta">Add to Cart</Link>
          <input type="number" placeholder='quantity' min={0} />
        </article>
        </div>
    </ProductDetailWrapper>
  )
}

const ProductDetailWrapper = styled.section`
display:grid;
grid-template-columns:1fr 1fr;
gap:2rem;
height:100%;
width:100%;
padding-top:10rem;
padding-bottom:10rem;

.left{
  img{
    width:90%;
    height:auto;
    object-fit:cover;
  }
}

.right{
 .flexRow{
  h2{
    &:nth-child(1){
      color:var(--graycolor);
      text-decoration:line-through;
    }
  }
 }
}

@media screen and (max-width:768px) {
  grid-template-columns:1fr;
}
`
export default ProductDetail