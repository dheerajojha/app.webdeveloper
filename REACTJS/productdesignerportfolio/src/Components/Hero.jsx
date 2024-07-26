import React from 'react'
import styled from 'styled-components'
import { bg1 } from '../assets/Images'
const Hero = () => {
    return (
        <HeroWrapper>
            <div className="row grid-2">
                <div className="col-l">
                    <article className='gap'>
                        <span>Hellow there</span>
                        <h1>I'm <span>Kevin Smith </span> Product Designer Based in Dublin</h1>
                        <p>I' Experienced Product Designer with 2-3 Year Experience in Given Field, collaborating with Varius Companies</p>
                        <div className="hero-btn grid-2">
                            <button className='cta-green'>View my Portfolio</button>
                            <button className='cta'>Hire me</button>
                        </div>
                    </article>

                </div>
                <div className="col-r">
                    <img src={bg1} alt="" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h2>App Designer | Web desginer | Graphic Designer | WireFrame Expo | App Designer | Web </h2>
                </div>
                <div className="col">
                </div>
            </div>
        </HeroWrapper>
    )
}

const HeroWrapper = styled.div`
.row{
    /* row-1 */
    &:nth-child(1){
        width: 80%;
        margin: auto;
        padding: 40px 0 0 0;
        .col-l{
        article{
    span{
        color:var(--primary);
        font-weight:600;
    }
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
    }
   
 /* row-2 */
    &:nth-child(2){
        padding:0 0 40px 0;
        margin-top:-.5rem;
        .col{
            overflow:hidden;
            padding:1rem;
            color:var(--white);
            &:nth-child(1){
                transform:rotate(1deg);
                background-color:var(--primary);
            }
            &:nth-child(2){
                transform:rotate(1.2deg);
                background-color:var(--secondry);
            }
            h2{
                text-align:center;
                -webkit-text-fill-color:transparent;
                -webkit-text-stroke:1px var(--secondry);
            }
          
        }
    }



}

`

export default Hero