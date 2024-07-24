import React from 'react'
import Styled, { styled } from "styled-components"
import { aboutPic } from "../assets/Images"
const About = () => {
    return (
        <AboutWrapper>
            <div className="col-l">
                <div className="about-img">
                    <img src={aboutPic} alt="" />
                </div>
            </div>
            <div className="col-r gap">
                <article className='gap'>
                    <span>About me</span>
                    <h2>Who Tenny Smith</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, voluptatem aspernatur. Provident itaque temporibus, fuga excepturi cumque corporis laboriosam similique eveniet? Accusamus in animi quod unde nihil temporibus numquam est.</p>
                </article>
                <div className="flex-row">
                    <div><h2>30+</h2>
                        <p>PROJECT COMPLETED</p>
                    </div>
                    <div><h2>20+</h2>
                        <p>INDUSTRY COVERED</p>
                    </div>
                    <div><h2>2+</h2>
                        <p>YEARS OF EXPERIENCE</p>
                    </div>
                </div>
                <button className='cta'>Download Cv</button>
            </div>
        </AboutWrapper>
    )
}

const AboutWrapper = styled.div`
background-color:var(--secondry);
padding:8%;
display:grid;
grid-template-columns:repeat(2,1fr);
align-items:center;
gap:1rem;
.col-l{
    display:grid;
    justify-content:center;
    .about-img{
        max-width:320px;
        max-height:320px;
        background-color:var(--primary);
        border-radius:50%;
        overflow:hidden;  
    }
}

.col-r{
    color:var(--white);
    h2{
        color:var(--primary)
    }
}

@media screen and (max-width:768px){
    grid-template-columns:1fr;
}

`

export default About