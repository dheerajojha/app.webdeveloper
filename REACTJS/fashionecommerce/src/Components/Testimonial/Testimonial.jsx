import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import {Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import './Testionial.css'
import { FaStar } from 'react-icons/fa'
const Testimonial = () => {

  const testimonialData = [{
    id: 1,
    username: 'Kevin Jun',
    rating: 4,
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex debitis praesentium repudiandae iure eius. Fugiat dolorum tenetur, vero quas aliquam consequuntur! Nulla fuga unde',
    designation: 'CEO'
  },
  {
    id: 2,
    username: 'Peter Jun',
    rating: 4,
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex debitis praesentium repudiandae iure eius. Fugiat dolorum tenetur, vero quas aliquam consequuntur! Nulla fuga unde',
    designation: 'SUB CEO'
  },
  {
    id: 3,
    username: 'Tenny Jun',
    rating: 4,
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex debitis praesentium repudiandae iure eius. Fugiat dolorum tenetur, vero quas aliquam consequuntur! Nulla fuga unde',
    designation: 'HOD CEO'
  },
  ]
  const breakpoints = {
    0:{ slidesPerView:1 },
    768:{ slidesPerView: 2 },
    1024:{ slidesPerView: 3 },
  }
  return (
    <section className="testimonial-wrapper">
      <div className="heading">
        <h2>Testimonials</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ab possimus eius sapiente laudantium, a tempore no</p>
      </div>

      <Swiper spaceBetween={30} breakpoints={breakpoints} autoplay modules={[Autoplay]}>
        {testimonialData.map((item) => (
          <SwiperSlide key={item.id} className='card gap'>
            <div className="card-body gap">
              <div>{Array.from({ length: item.rating }, (_, index) => (
                <span key={index}><FaStar /></span>
              ))}</div>
              <p>{item.review}</p>
            </div>
            <div className="card-footer">
              <p>{item.username}</p>
              <small>{item.designation}</small>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonial