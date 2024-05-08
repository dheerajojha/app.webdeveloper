import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useLocation,Link } from "react-router-dom";
import styled from "styled-components";

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
            <div className="card" key={index}>
              <img src={item.image} alt="" />
              <div className="card-body">
                <h5>{item.title}</h5>
                <small>{item.category}</small>
                <h5>${item.price}</h5>
              </div>
            </div>
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