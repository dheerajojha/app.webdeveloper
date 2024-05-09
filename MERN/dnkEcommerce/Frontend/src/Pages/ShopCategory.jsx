import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useLocation,Link } from "react-router-dom";
import styled from "styled-components";
import {Item} from "../Components"

const ShopCategory = () => {
  const location = useLocation()
  const path = location.pathname;
  const { products } = useContext(ShopContext);

  return (
    <ShopCategoryWrapper>
      <div className="heading">
        <h2>Shop Category</h2>
      </div>

      {/* filter title */}
      <div className="flexBetween">
        <p><span>Showing 1-12</span> Products Of Total 36 Products </p>
        <select name="" id="">
          <option value="">Sort by</option>
          <option value="">Less to High</option>
          <option value="">High to Less</option>
        </select>
      </div>

      {/* products card start */}
      <div className="card-container">
        {products.filter((val) => (
          val.category.toLowerCase() === path.toLowerCase().slice(1))).map((item, index) => (
            <Item key={index} id={item.id} title={item.title} image={item.image} 
            oldprice={item.oldPrice} newprice={item.newPrice} category={item.category}/> 
          ))}
      </div>

      <div style={{textAlign:'center',marginTop:'3rem'}}>
        <Link to="/" className="cta">Explore more</Link>
      </div>
    </ShopCategoryWrapper>

  )
}

const ShopCategoryWrapper = styled.section`
padding-top:10rem;
.flexBetween{
  span{
    font-weight:600;
  }
}
.card-container{
 display:flex;
 gap:1rem;
  margin-top:1rem;
}
`

export default ShopCategory