import React, { useContext} from 'react'
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import { ShopContext } from '../Context/ShopContext';
import Item from './Item';

const ProductCard = () => {
const{products} = useContext(ShopContext)
    const navigate = useNavigate()
    return (
        <FeaturedProductWrapper>
        <div className="heading">
            <h2>Featured Products</h2>
           <hr />
        </div>
            <div className="card-container">
                {products.map((item, index) => (                
                   <Item key={index} id={item.id} title={item.title} image={item.image} 
                   oldprice={item.oldPrice} newprice={item.newPrice} category={item.category}/>              
                ))}
            </div>
        </FeaturedProductWrapper>
    )
}

const FeaturedProductWrapper = styled.section`
.heading{
  justify-content:center;
  align-items:center;
  display:flex;
  flex-direction:column;
  gap:1rem;
hr{
  width:200px;
  height:8px;
  background-color:var(--primaryColor);
  border-radius:10px;
}
}
.card-container{
    display:flex;
    gap:1rem;
    flex-wrap:wrap;
    justify-content:center;
}
`
export default ProductCard