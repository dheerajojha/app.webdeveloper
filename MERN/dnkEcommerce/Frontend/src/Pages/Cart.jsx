import React, { useContext } from 'react'
import styled from "styled-components";
import { ShopContext } from "../Context/ShopContext";
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = () => {
  const { products } = useContext(ShopContext)
  console.log(products)
  return (
    <CartWrapper>
      {/* cart table start */}
      <div className="row-1">
        <div className="col">
          <h5>Products</h5>
          <h5>Title</h5>
          <h5>Price</h5>
          <h5>Quantity</h5>
          <h5>Total</h5>
          <h5>Remove</h5>
        </div>
        {products.map((item, index) => (
          <div key={index} className='col'>
            <img src={item.image} alt={item.title} />
            <h5>{item.title}</h5>
            <h5>{item.price}</h5>
            <h5>{item.category}</h5>
            <h5>{item.rating}</h5>
            <h5><RiDeleteBin6Line color="red" /></h5>
          </div>
        ))}
      </div>

      {/* total start */}
      <div className="row-2">
        <div className="col">
          <h4>Cart Total</h4>
         <ul>
          <li>
            <h5>Subtotal</h5>
            <p>100</p>
          </li>
          <li>
            <h5>Shopping Fee</h5>
            <p>500</p>
          </li>
          <li>
            <h5>Total</h5>
            <p>1000</p>
          </li>
         </ul>
          <button className='cta'>Proceed to Checkout</button>
        </div>
        <div className="col">
          <h4>Promo Code</h4>
          <div className="form-group">
            <input type="text" />
            <button className='cta'>Proceed</button>
          </div>
        </div>
      </div>

    </CartWrapper>
  )
}

const CartWrapper = styled.section`
padding-top:10rem;
.row-1{
.col{
display:grid;
grid-template-columns:0.5fr 2fr 1fr 1fr 1fr 1fr;
align-items:center;
justify-content:center;
gap:2rem;
border:1px solid var(--grayColor);
padding:1rem;
h5{
  text-align:center;
}
img{
  width:80px;
  height:80px;
  border-radius:5px;
} }
}

.row-2{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:1rem;
  margin-top:2rem;
  h4{
    margin-bottom:1rem;
  }
  ul{
   li{
    display:flex;
    justify-content:space-between;
    border-bottom:1px solid var(--grayColor);
    padding:1rem;
   }
  }
}



`
export default Cart