'use client'
import React, { useState } from 'react'
import './Testimonial.css'
import { Swiper, SwiperSlide } from "swiper/react"
import {Autoplay } from "swiper/modules"
import { FaStar } from "react-icons/fa"
import 'swiper/css'
import 'swiper/css/autoplay'
const Testimonial = () => {
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
    const [testimonial, setTestimonial] = useState([{
        id: 1,
        username: 'kevin',
        designation: 'CEO',
        review: '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fugit placeat ducimus nam doloremque error harum nesciunt fugiat, quia veritatis aspernatur hic quo itaque voluptatum quam, beatae reprehenderit autem officia.',
        rating: 4,
    },
    {
        id: 2,
        username: 'Peter Siddle',
        designation: 'CEO HOD',
        review: '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fugit placeat ducimus nam doloremque error harum nesciunt fugiat, quia veritatis aspernatur hic quo itaque voluptatum quam, beatae reprehenderit autem officia.',
        rating: 5,
    },
    {
        id: 3,
        username: 'Mike Tyson',
        designation: 'DOB CEO',
        review: '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fugit placeat ducimus nam doloremque error harum nesciunt fugiat, quia veritatis aspernatur hic quo itaque voluptatum quam, beatae reprehenderit autem officia.',
        rating: 3,
    },
    {
        id: 4,
        username: 'Henry Son',
        designation: 'PE CEO',
        review: '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fugit placeat ducimus nam doloremque error harum nesciunt fugiat, quia veritatis aspernatur hic quo itaque voluptatum quam, beatae reprehenderit autem officia.',
        rating: 5,
    },
    ])
    return (
        <section className="testimonial-wrapper">
            <div className="heading">
                <h2>What our Trusted Clients Say</h2>
                <p>Lorem ipsum dolor sitem volup amet repellat voluptas sed inventore nemo omnis dolorem cumque qui repudiandae, recusandae consectetur.</p>
            </div>


            <Swiper modules={[Autoplay]} loop={true} autoplay={{delay:1000}}breakpoints={breakpoint }>
                {testimonial.map((item) => (
                    <SwiperSlide className='card' key={item.id}>
                        <div className="card-body">
                            {Array.from({ length: item.rating }, (_, index) => (
                                <span key={index}><FaStar color='yellow' /></span>
                            ))}
                            <p>{item.review}</p>
                        </div>
                        <div className="card-footer">
                            <p>{item.username}</p>
                            <span>{item.designation}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Testimonial