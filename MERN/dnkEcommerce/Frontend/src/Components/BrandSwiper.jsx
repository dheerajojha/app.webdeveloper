import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import { asset1, asset2, asset3, asset4, asset5 } from '../assets';
import "swiper/css"

const BrandSwiper = () => {
    const swiperImg = [asset1,asset2,asset3,asset4,asset5,asset2,asset1,];
    return (
        <section>
            <Swiper
             breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 80 },
                480: { slidesPerView: 3, spaceBetween: 150 },
                768: { slidesPerView: 3, spaceBetween: 50 },
                1024: { slidesPerView: 6, spaceBetween: 150 },
              }}
                modules={[Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                spaceBetween={50}
                slidesPerView={4}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {swiperImg.map((item,index) => (
                    <SwiperSlide key={index} style={{justifyContent:'center',display:'flex'}}>
                        <img src={item} />
                    </SwiperSlide>
                ))}

            </Swiper>
        </section>
    )
}

export default BrandSwiper;