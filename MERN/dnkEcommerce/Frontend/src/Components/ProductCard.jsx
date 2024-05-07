import React, { useState } from 'react'
import styled from "styled-components";
import { BiStar } from "react-icons/bi"
import {useNavigate,Link,} from "react-router-dom";
import {asset9,asset10,asset11,asset12,asset13,asset14,asset15,asset16,asset17} from "../assets";
const ProductCard = () => {

    const [product,setProduct]=useState([{
        id:1,
        title:"Mens Luxury Shoes",
        category:'Men',
        image:asset9,
        price:2000,
        description:'All About Mens Wear',
        rating:3.5,
      },
      {
        id:2,
        title:"Mens Luxury Shoes",
        category:'Men',
        image:asset10,
        price:2000,
        description:'All About Mens Wear',
        rating:3.5,
      },
      {
        id:3,
        title:"Women Luxury Shoes",
        category:'Women',
        image:asset11,
        price:1999,
        description:'All About Mens Wear',
        rating:3.5,
      },
      {
        id:4,
        title:"Mens Luxury Shoes",
        category:'Men',
        image:asset12,
        price:2000,
        description:'All About Mens Wear',
        rating:3.5,
      },
    
      {
        id:5,
        title:"Mens Luxury Shoes",
        category:'Men',
        image:asset13,
        price:2000,
        description:'All About Mens Wear',
        rating:3.5,
      },
      {
        id:6,
        title:"Mens Luxury Shoes",
        category:'Men',
        image:asset14,
        price:2000,
        description:'All About Mens Wear',
        rating:3.5,
      },
      {
        id:7,
        title:"Women Luxury Shoes",
        category:'Women',
        image:asset15,
        price:1999,
        description:'All About Mens Wear',
        rating:3.5,
      },
      {
        id:8,
        title:"Mens Luxury Shoes",
        category:'Men',
        image:asset16,
        price:2000,
        description:'All About Mens Wear',
        rating:3.5,
      },
      {
        id:9,
        title:"Mens Luxury Shoes",
        category:'Men',
        image:asset17,
        price:2000,
        description:'All About Mens Wear',
        rating:3.5,
      },
      {
        id:10,
        title:"Women Luxury Shoes",
        category:'Women',
        image:asset15,
        price:2999,
        description:'All About Mens Wear',
        rating:3.5,
      },
     
      ])
    const navigate = useNavigate()
    return (
        <ProductCardWrapper>
        <div className="heading">
            <h2>Featured Products</h2>
           <hr />
        </div>
            <div className="card-container">
                {product.map((item, index) => (
                   <Link key={index} to={`product/${item.id}`}>
                    <div className="card" >
                        <img src={item.image} alt={item.title} />
                        <div className="card-body">
                            <h5>{item.title}</h5>
                            <small>{item.category}</small>
                            <h5>${item.price}</h5>
                            <div className='flexRow'>
                                <span><BiStar /></span>
                            </div>
                        </div>
                    </div>
                   </Link>
                ))}
            </div>
        </ProductCardWrapper>
    )
}

const ProductCardWrapper = styled.section`
.heading{
  justify-content:center;
  align-items:center;
  display:flex;
  flex-direction:column;
  gap:1rem;
  h2{
    font-size:var(--fortyTwoPx);
}
hr{
  width:200px;
  height:8px;
  background-color:var(--primaryColor);
  border-radius:10px;

}
}
.card-container{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(200px,auto));
    gap:2rem;
    a{
        color:var(--blackColor);
    }
    img{
        width:100%;
        height:auto;
        border-radius:5px;
    }
}
`
export default ProductCard