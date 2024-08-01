'use client'
import React, { useState } from 'react'
import './Testimonial.css'
import { FaStar } from "react-icons/fa"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
const Testimonial = () => {
    const [testimonial, setTestimonial] = useState([{
        id: 1,
        username: 'Mike Son',
        designation: 'Ceo',
        rating: 3,
        review: '   Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolores veritatis ab, amet itaque voluptate saepe? Voluptates iste et possimus optio autem culpa ratione? Vitae tempora sint necessitatibus iusto. Esse.',
        image: ''
    },
    {
        id: 2,
        username: 'Janny Chain',
        designation: 'Ceo',
        rating: 4,
        review: '   Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolores veritatis ab, amet itaque voluptate saepe? Voluptates iste et possimus optio autem culpa ratione? Vitae tempora sint necessitatibus iusto. Esse.',
        image: ''
    },
    {
        id: 3,
        username: 'Jenny Kiyo',
        designation: 'Ceo',
        rating: 5,
        review: '   Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolores veritatis ab, amet itaque voluptate saepe? Voluptates iste et possimus optio autem culpa ratione? Vitae tempora sint necessitatibus iusto. Esse.',
        image: ''
    },
    ])
    return (
        <section className="testimonial-wrapper">
            <div className="heading">
                <span>Testimonials</span>
                <h2>What Our <span>Clients Say</span></h2>
            </div>

            <Swiper modules={[Autoplay]} autoplay>
                {testimonial.map((item) => (
                    <SwiperSlide className='card' key={item.id}>
                        <div className="card-body" key={item.id}>
                            {Array.from({ length: item.rating }, (_, index) => (
                                <span key={index}>{<FaStar />}</span>
                            ))}
                            <p>{item.review}</p>
                        </div>
                        <div className="card-footer">
                            <h4>{item.username}</h4>
                            <p>{item.designation}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>

    )
}

export default Testimonial