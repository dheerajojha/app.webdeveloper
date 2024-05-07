import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import {asset25,asset26,asset27} from "../assets";
const CategoryCard = () => {
    const [category,setCategory]=useState([{
        id:1,
        title:"Mens",
        image:asset25,
        description:'All About Mens Wear'
      },
      {
        id:2,
        title:"Women",
        image:asset26,
        description:'All About Women Wear'
      },
      {
        id:3,
        title:"Kids",
        image:asset27,
        description:'All About Kids Wear'
      },
      ])
    return (
        <CategoryCardContainer>
            <div className='card-container'>
                {category.map((item, index) => (
                    <div className="card" key={index}>
                        <img src={item.image} alt={item.title} />
                        <div className="card-body gap">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <div className='cta-white'>
                                <Link to=''>Shop Now</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </CategoryCardContainer>
    )
}

const CategoryCardContainer = styled.section`
.card-container{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(300px,auto));
gap:2rem;
.card{
    position:relative;
    color:var(--whiteColor);
    &::after{
            content:'';
            position: absolute;
            top:0%;
            left:0%;
            width:100%;
            height:100%;
            background-color:rgba(0,0,0,0.2);
        }
    img{
        width:100%;
        height:500px;
        object-fit:cover;
        border-radius:5px;
        position: relative;
       
    }
    .card-body{
        position:absolute;
        left:10%;
        bottom:10%;
    }
}
}

`
export default CategoryCard