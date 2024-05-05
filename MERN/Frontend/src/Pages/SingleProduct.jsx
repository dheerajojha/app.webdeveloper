import React from 'react'
import styled from "styled-components";
const SingleProduct = () => {
  return (
    <SingleProductWrapper>
        <div className="left">
            <h1>left</h1>
        </div>
        <div className="right">
        <h1>right</h1>
        </div>
    </SingleProductWrapper>
  )
}

const SingleProductWrapper = styled.section`
display:grid;
grid-template-columns:50% 50%;
gap:2rem;
height:100vh;
width:100%;
`
export default SingleProduct