import React from 'react'
import styled from "styled-components";
function App() {
  return (
    <CardWrapper>
      <div className="card">
        <h1>Text Reveal Animation</h1>
      </div>
    </CardWrapper>
  )
}
export default App

const CardWrapper = styled.div`
display:grid;
place-content:center;
height:100vh;
.card{
  width:400px;
  height:400px;
  box-shadow:0 40px 60px rgba(0,0,0,0.2);
  background-color:azure;
  display:flex;
  justify-content:center;
  align-items:center;
  overflow:hidden;
 h1{
  filter:opacity(0);
  transform:scaleX(2.5);
  transition:.5s ease;
  
 }
 &:hover{
  h1{
    filter:opacity(1);
  transform:scaleX(1);
  cursor:pointer;
  }
 }
}
`
