import React from 'react'
import styled from 'styled-components'
import { bg1 } from '../assets/Images'
const Hero = () => {
    return (
        <HeroWrapper>
            <div className="col-l">
                <article className='gap'>
                    <span>Hellow there</span>
                    <h1>I'm Kevin Smith Product Designer Based in Dublin</h1>
                    <p>I' Experienced Product Designer with 2-3 Year Experience in Given Field, collaborating with Varius Companies</p>
                    <div className="hero-btn">
                        <button className='cta-green'>View my Portfolio</button>
                        <button className='cta'>Hire me</button>
                    </div>
                </article>

            </div>
            <div className="col-r">
                {/* <span /> */}
                <img src={bg1} alt="" />
            </div>
        </HeroWrapper>
    )
}

const HeroWrapper = styled.section`
display:grid;
grid-template-columns:repeat(2,1fr);
align-items:center;
article{
    span{
        color:var(--primary);
        font-weight:600;
    }
}
.hero-btn{
    button{
        margin-right: 1rem;
    }
}
.col-r{ 
    position:relative;
    span{
            position:absolute;
            top:30%;
            left:5%;
            width:300px;
            height:300px;
            background-color:var(--primary);
            border-radius:50%;       
            z-index: -1;
    }
}

@media screen and (max-width:768px) {
    grid-template-columns:1fr;
}
`

export default Hero