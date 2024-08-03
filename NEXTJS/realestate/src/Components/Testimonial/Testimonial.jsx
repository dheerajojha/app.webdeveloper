'use client'
import React, { useState } from 'react'
import './Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
const Testimonial = () => {
    const [testimonial, setTestimonial] = useState([{
        id: 1,
        username: 'peter',
        designation: 'Ceo',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga possimus cum facilis sed commodi odit nostrum qui nisi eos adipisci error eum, consequuntur quos distinctio doloribus deserunt optio! Facilis, at?",

    },
    {
        id: 2,
        username: 'Chang Mang',
        designation: 'Ceo',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga possimus cum facilis sed commodi odit nostrum qui nisi eos adipisci error eum, consequuntur quos distinctio doloribus deserunt optio! Facilis, at?",

    },
    {
        id: 3,
        username: 'Wnag Chu',
        designation: 'Ceo',
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga possimus cum facilis sed commodi odit nostrum qui nisi eos adipisci error eum, consequuntur quos distinctio doloribus deserunt optio! Facilis, at?",

    },
    ])
    return (
        <div className="testimonial-wrapper">
            <div className="heading">
                <h2>Testimonial</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
            </div>
            <Swiper modules={[Autoplay]} autoplay>
                {testimonial.map((item) => (
                    <SwiperSlide className='card'>
                        <div className="card-body gap">
                            <h4>{item.review}</h4>
                            <p>{item.username}🫥</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    )
}

export default Testimonial