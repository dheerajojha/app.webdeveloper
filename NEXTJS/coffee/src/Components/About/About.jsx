import React from 'react'
import './About.css'
import Image from 'next/image'
const About = () => {
    return (
        <section className="about-wrapper grid-2">
            <div className="col-l">
                <div className="image-gallery-container">
                    <Image src='/Images/gallery-pic1.jpg' width={200} height={200} />
                    <Image src='/Images/gallery-pic2.jpg' width={200} height={200} />
                    <Image src='/Images/gallery-pic3.jpg' width={200} height={200} />
                </div>
            </div>
            <div className="col-r gap">
                <article className='gap'>
                    <h2>About us</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa asperiores voluptatibus voluptatem porro autem corrupti, quas consequuntur consectetur necessitatibus eligendi eius magni officiis quae! Earum corrupti deleniti sapiente voluptate ullam!<br/><br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, cumque! Amet unde similique provident rerum, eligendi delectus odio ipsum voluptate labore quod iure esse dolor neque ad minus cumque mollitia.<br/><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, voluptatibus explicabo, at aliquam earum pariatur quaerat et id necessitatibus eius recusandae ducimus. Impedit veritatis voluptates architecto reiciendis, aperiam soluta tenetur.</p>
                </article>
                <div className="about-btn">
                    <button className='cta'>Shop Now</button>
                </div>
            </div>
        </section>
    )
}

export default About