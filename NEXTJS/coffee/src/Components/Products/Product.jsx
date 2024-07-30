'use client'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import 'swiper/css'
import 'swiper/css/autoplay'
import './Product.css'
import Image from 'next/image'
const Product = () => {
    const [activeTab, setActiveTab] = useState(0)
    const [product, setProduct] = useState([{
        id: 1,
        category: 'popular',
        title: 'Candi Coated',
        image: "/Images/pic1.jfif"
    },
    {
        id: 2,
        category: 'popular',
        title: 'Tuisted Coated',
        image: "/Images/pic2.jfif"
    },
    {
        id: 3,
        category: 'popular',
        title: 'Urban Coated',
        image: "/Images/pic3.jfif"
    },
    {
        id: 4,
        category: 'popular',
        title: 'Jazzy Coated',
        image: "/Images/pic4.jfif"
    },

    {
        id: 5,
        category: 'licise',
        title: 'Techno Coated',
        image: "/Images/pic5.jfif"
    },
    {
        id: 6,
        category: 'licise',
        title: 'Unlisted Coated',
        image: "/Images/pic6.jfif"
    },
    {
        id: 7,
        category: 'licise',
        title: 'Zuzi Coated',
        image: "/Images/pic3.jfif"
    },
    {
        id: 8,
        category: 'licise',
        title: 'seasonal Coated',
        image: "/Images/pic4.jfif"
    },
    {
        id: 9,
        category: 'seasonal',
        title: 'sCandi Coated',
        image: "/Images/pic1.jfif"
    },
    {
        id: 10,
        category: 'seasonal',
        title: 's Tuisted Coated',
        image: "/Images/pic2.jfif"
    },
    {
        id: 11,
        category: 'seasonal',
        title: 'Urban Coateds',
        image: "/Images/pic3.jfif"
    },
    {
        id: 12,
        category: 'seasonal',
        title: 'Sazzy Coated',
        image: "/Images/pic4.jfif"
    },

    ])
    const breakpoint = {
        0: { slidesPerView: 1, },
        768: { slidesPerView: 2, },
        1024: { slidesPerView: 3, },

    }
    return (
        <section className="product-wrapper">
            <div className="heading">
                <h2>Our Products</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque labore quibusdam ducimus suscipit iste exercitationem t a.</p>
            </div>
            <div className="row">
                <div className="col-l">
                    <ul>
                        <li style={{ color: activeTab === 1 && '#b37760' }} onClick={() => (setActiveTab(1))}>Popular</li>
                        <li style={{ color: activeTab === 2 && '#b37760' }} onClick={() => (setActiveTab(2))}>Licise</li>
                        <li style={{ color: activeTab === 3 && '#b37760' }} onClick={() => (setActiveTab(3))}>Seasonal</li>
                        <li style={{ color: activeTab === 0 && '#b37760' }} onClick={() => (setActiveTab(0))}>All</li>
                    </ul>
                </div>
                <div className="col-r">
                    <Swiper className='card' breakpoints={breakpoint} spaceBetween={15} modules={[Autoplay]} autoplay>
                        {activeTab === 1 &&
                            product.filter((f) => (
                                f.category === 'popular'
                            )).map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="card-image">
                                        <Image src={item.image} width={200} height={200} />
                                    </div>
                                    <div className="card-body gap">
                                        <h3>{item.title}</h3>
                                        <p>{item.category}</p>
                                        <button className='cta'>Explore more</button>
                                    </div>
                                </SwiperSlide>
                            ))
                        }

                        {activeTab === 2 &&
                            product.filter((f) => (
                                f.category === 'licise'
                            )).map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="card-image">
                                        <Image src={item.image} width={200} height={200} />
                                    </div>
                                    <div className="card-body gap">
                                        <h3>{item.title}</h3>
                                        <p>{item.category}</p>
                                        <button className='cta'>Explore more</button>
                                    </div>
                                </SwiperSlide>
                            ))
                        }

                        {activeTab === 3 &&
                            product.filter((f) => (
                                f.category === 'seasonal'
                            )).map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="card-image">
                                        <Image src={item.image} width={200} height={200} />
                                    </div>
                                    <div className="card-body gap">
                                        <h3>{item.title}</h3>
                                        <p>{item.category}</p>
                                        <button className='cta'>Explore more</button>
                                    </div>
                                </SwiperSlide>
                            ))
                        }

                        {activeTab === 0 &&
                            product.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="card-image">
                                        <Image src={item.image} width={200} height={200} />
                                    </div>
                                    <div className="card-body gap">
                                        <h3>{item.title}</h3>
                                        <p>{item.category}</p>
                                        <button className='cta'>Explore more</button>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Product