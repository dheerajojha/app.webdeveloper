import React, { useState } from 'react'
import styled from 'styled-components'
import { FaStar, FaRegStar, FaStarHalf } from "react-icons/fa"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { testipic1, testipic2, testipic3, testipic4 } from '../assets/Images'
const Testimonial = () => {
    const [testimonial, setTestimonial] = useState([{
        id: 1,
        username: 'Tenny Mike',
        designation: 'Ceo Heo',
        image: testipic1,
        rating: 4.3,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit possimus voluptate minima similique quaerat fugit tempora ad deserunt porro, autem eligendi accusantium qui ipsam doloremque amet ab, asperiores animi a?'
    },
    {
        id: 2,
        username: 'Peter Henry',
        designation: 'Hod Heo',
        image: testipic2,
        rating: 4.8,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit possimus voluptate minima similique quaerat fugit tempora ad deserunt porro, autem eligendi accusantium qui ipsam doloremque amet ab, asperiores animi a?'
    },
    {
        id: 3,
        username: 'Ellisa Mike',
        designation: 'Ceo Leo',
        image: testipic3,
        rating: 3,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit possimus voluptate minima similique quaerat fugit tempora ad deserunt porro, autem eligendi accusantium qui ipsam doloremque amet ab, asperiores animi a?'
    },
    {
        id: 4,
        username: 'jenny Mike',
        designation: 'Dop Heo',
        image: testipic4,
        rating: 3,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit possimus voluptate minima similique quaerat fugit tempora ad deserunt porro, autem eligendi accusantium qui ipsam doloremque amet ab, asperiores animi a?'
    },
    ])
    const breakpoint = {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
    };

    return (
        <TestimonialWrapper>
            <div className="heading">
                <span>Client Testimonial</span>
                <h2>The Impact of My Work</h2>
                <h2>Client Testimonial</h2>
            </div>

            <Swiper modules={[Autoplay]}
                slidesPerView={3}
                loop={true}
                autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                breakpoints={breakpoint}
                className='card-container' spaceBetween={30}>
                {testimonial.map((item) => (
                    <SwiperSlide className='card gap' key={item.id}>
                        <div className="card-body">
                            {Array.from({ length: item.rating }, (_, index) => (
                                <span><FaStar key={index} color="#faae18" /></span>
                            ))}
                            <p>{item.description}</p>
                        </div>
                        <div className="card-footer flex-row">
                            <div className="card-img">
                                <img src={item.image} alt="" />
                            </div>
                            <div>
                                <h3>{item.username}</h3>
                                <p>{item.designation}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </TestimonialWrapper>
    )
}

const TestimonialWrapper = styled.section`
/* background-color:var(--cardBg); */
.card{
    background-color:var(--white);
    padding:1rem;
    border:1px solid var(--card-bg);
    .card-footer{
        .card-img{
        max-width:80px;
        max-height:80px;
        background-color:var(--cardBg);
        border-radius:50%;
        overflow:hidden;
        }
    }
   
}
`

export default Testimonial