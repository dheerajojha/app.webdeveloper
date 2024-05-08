import React, { useContext } from 'react'
import styled from "styled-components";
import {ShopContext} from "../Context/ShopContext";
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = () => {
  const {products} = useContext(ShopContext)
  console.log(products)
  return (
    <CartWrapper>
      <div className="cart-title grid-6">
        <h5>Products</h5>
        <h5>Title</h5>
        <h5>Price</h5>
        <h5>Quantity</h5>
        <h5>Total</h5>
        <h5>Remove</h5>
      </div>  
      {products.map((item,index)=>(
        <div className="cart grid-6" key={index}>
          <img src={item.image} alt={item.title} />
          <h4>{item.title}</h4>
          <h4>{item.price}</h4>
          <h4>{item.category}</h4>
          <h4>{item.rating}</h4>
          <h5><RiDeleteBin6Line color="red"/></h5>
        </div>
      ))}
    </CartWrapper>
  )
}

const CartWrapper = styled.section`
padding-top:10rem;
.grid-6{
display:grid;
grid-template-columns:0.5fr 2fr 1fr 1fr 1fr 1fr;
align-items:center;
justify-content:center;
gap:2rem;
margin-bottom:2rem;
}
.cart{
  border:2px solid var(--grayColor);
  img{
  width:100px;
  height:100px;
  border-radius:5px;
}
}

`
export default Cart