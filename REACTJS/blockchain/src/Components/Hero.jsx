import React from 'react'
import { styled } from "styled-components"
import bg1 from '../assets/Images/bg1.jpg'
const Hero = () => {
    return (
        <HeroContainer>
            <article>
                <h1>Community Owned API of Block Chain</h1>
                <p className='gap'>It is long established fact that reader will be distracted by thecontent of pages
                    when looking at its layout
                </p>
                <button className='cta'>Get Started</button>
            </article>
        </HeroContainer>
    )
}


const HeroContainer = styled.div`
background-image:url(${bg1});
width:100%;
height:90vh;
background-size:cover;
background-position:center;
display:flex;
align-items:center;
justify-content:center;
flex-direction:columns;
article{
    max-width:600px;
    text-align:center;
    h1,p{
        color:var(--whiteColor)
    }
}
`
export default Hero