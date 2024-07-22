import React from 'react'
import { styled } from "styled-components"
const Newsletter = () => {
    return (
        <NewsletterWrapper>
            <div className="heading">
                <h2>Subscribe Newsletter</h2>
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

const NewsletterWrapper = styled.section`
background-color:var(--grayColor);
padding:2rem;
form{
    .form-group{
        gap:0;
        input{
            flex:8;
        }
        button{
       flex:2;
        background-color:var(--blackColor);
        color:var(--whiteColor);
        padding:1rem 2rem;
        border-radius:5px;
    }
    }
}

@media screen and (max-width:768px) {
 
}
`

export default Newsletter