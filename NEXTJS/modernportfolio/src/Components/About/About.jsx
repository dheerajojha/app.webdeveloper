import React from 'react'
import './About.css'
import { FaArrowRight } from "react-icons/fa"
import Image from 'next/image'
const About = () => {
    return (
        <section className="about-wrapper grid-2">
            <div className="col-l">
               <Image src='/Images/aboutpic.png' layout='responsive' alt='aboutpic' width={500} height={500}/>
            </div>
            <div className="col-r gap">
                <div className="heading-right gap">
                    <div className="flex-row-sm">
                        <span>-</span>
                        <span>About me</span>
                    </div>
                    <h2>Whi Is <span>Tenny Mike?</span></h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta repudiandae dolor quo eveniet incidunt nam explicabo dignissimos eligendi magnam dolorum, exercitationem f?</p>
                </div>
                <div className="grid-2">
                    <div>
                        <h2>600+</h2>
                        <p>Project Completed</p>
                    </div>
                    <div>
                        <h2>65+</h2>
                        <p>Industry Covered</p>
                    </div>
                </div>

                <div className="about-btn">
                    <button className='cta'>
                        <span><FaArrowRight /></span>
                        <small>Download Now</small>
                    </button>

                </div>
            </div>
        </section>
    )
}

export default About