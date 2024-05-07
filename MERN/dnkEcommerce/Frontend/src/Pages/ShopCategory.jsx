import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import {AiOutlineRight} from "react-icons/ai"

const ShopCategory = () => {
  const location = useLocation()
  const path = location.pathname;
  const { products } = useContext(ShopContext);

  return (
    <ShopCategoryWrapper>
      <div className="heading">
        <h1>Shop Category</h1>
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
            <div className="card" key={index}>
              <img src={item.image} alt="" />
              <div className="card-body">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
      </div>
    </ShopCategoryWrapper>

  )
}

const ShopCategoryWrapper = styled.section`
padding-top:10rem;
padding-bottom:10rem;
.flexBetween{
  span{
    font-weight:600;
  }
}
.card-container{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(250px,auto));
  gap:2rem;
  margin-top:1rem;
}
`

export default ShopCategory