import React from 'react'
import {styled} from "styled-components"
const Newsletter = () => {
  return (
    <NewsletterWrapper>
      <div className="heading">
      <h3>Subscribe Newsletter</h3>
      <span>Financial Transsaction used remotedely</span>
      </div>
        <form action="">
            <div className="form-group flex-row">
                <input type="text" placeholder='Enter your email' />
                <button>Get Started</button>
            </div>
        </form>
    </NewsletterWrapper>
  )
}

const NewsletterWrapper= styled.section`
background-color:var(--grayColor);
padding:2rem;
form{
    .form-group{
        gap:0;
        input{
            width:70%;
        }
        button{
            width:30%;
        background-color:var(--blackColor);
        color:var(--whiteColor);
        padding:1rem 1.5rem;
        border-radius:5px;
    }
    }
   
}
`

export default Newsletter