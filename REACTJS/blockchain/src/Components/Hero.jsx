import React from 'react'
import { styled } from "styled-components"
import { bg1, user } from '../assets/Images'

const Hero = () => {
    return (
        <HeroContainer>
            <article>
                <h1>Community <span>Owned API</span> of Block Chain</h1>
                <p>It is long established fact that reader will be distracted by thecontent of pages
                    when looking at its layout
                </p>
                <button className='cta'>Get Started</button>
            </article>
            <div className="hero-img">
                <img src={user} />
            </div>
        </HeroContainer>
    )
}


const HeroContainer = styled.div`
background-image:linear-gradient(rgba(0,0,0,0.7),rgba(255,255,255,0.3)),url(${bg1});
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
    span{
        -webkit-text-fill-color:transparent;
        -webkit-text-stroke:1px var(--whiteColor);
    }
    h1,p{
        color:var(--whiteColor)
    }
    button{
        margin-top:1rem;
    }
}

.hero-img{
    position:absolute;
    bottom:-20px;
    max-width:200px;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 50%;
    border: 10px solid rgba( 255, 255, 255, 0.18 );
    img{
        width:100%;
    }
}
`
export default Hero