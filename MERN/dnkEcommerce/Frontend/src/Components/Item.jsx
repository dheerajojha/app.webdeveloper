import React from 'react'
import styled from "styled-components"
const Item = (props) => {
  return (
    <ItemWrapper>
      <div className="card">
        <img src={props.image} alt={Item.title} />
        <div className="card-body">
          <h5>{props.title}</h5>
          <h5>{props.newprice}</h5>
          <h5>{props.oldprice}</h5>
          <p>{props.category}</p>
        </div>
      </div>
    </ItemWrapper>
  )
}
const ItemWrapper = styled.div`
.card{
  width:300px;
}
`

export default Item