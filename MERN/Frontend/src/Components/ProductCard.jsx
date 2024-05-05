import React from 'react'
import styled from "styled-components";
import { BiStar } from "react-icons/bi"
const ProductCard = ({ data }) => {
    return (
        <ProductCardWrapper>
        <div className="heading">
            <h2>Featured Products</h2>
            <span></span>
        </div>
            <div className="card-container">
                {data.map((item, index) => (
                    <div className="card" key={index}>
                        <img src={item.image} alt="" />
                        <div className="card-body">
                            <h4>{item.title}</h4>
                            <small>{item.category}</small>
                            <h2>${item.price}</h2>
                            <div className='flexRow'>
                                <span><BiStar /></span>
                                <span>{item.rating}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </ProductCardWrapper>
    )
}

const ProductCardWrapper = styled.section`
.card-container{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(200px,auto));
    justify-content:center;
    gap:2rem;
    img{
        width:100%;
        height:auto;
        border-radius:5px;
    }
}
`
export default ProductCard