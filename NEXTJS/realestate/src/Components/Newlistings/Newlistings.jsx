'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import './Newlistings.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import {Autoplay,Pagination } from 'swiper/modules'
import { FaStar } from 'react-icons/fa'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
const Newlistings = () => {
    const breakpoints = {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    }
    const [tab, setTab] = useState(0)
    const [newlistings, setNewlistings] = useState([{
        id: 1,
        title: 'Criyank Ocena',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus dignissimos dicta est esse excepturi, nihil eaque ullam commodi nemo enim obcaecati officiis ea mollitia iure sed quam architecto delectus corrupti!',
        price: 20000,
        rating: 5,
        review: ['cool', 'effective', 'superb'],
        image: '/Images/l9.jpg',
        user: 'kevin',
        type: 'sell'
    },
    {
        id: 2,
        title: 'Priyank Ocena',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus dignissimos dicta est esse excepturi, nihil eaque ullam commodi nemo enim obcaecati officiis ea mollitia iure sed quam architecto delectus corrupti!',
        price: 10000,
        rating: 3,
        review: ['cool', 'effective', 'superb'],
        image: '/Images/l10.jpg',
        user: 'kevin',
        type: 'rent'
    },
    {
        id: 3,
        title: 'Sriyank Ocena',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus dignissimos dicta est esse excepturi, nihil eaque ullam commodi nemo enim obcaecati officiis ea mollitia iure sed quam architecto delectus corrupti!',
        price: 50000,
        rating: 4,
        review: ['cool', 'effective', 'superb'],
        image: '/Images/l11.jpg',
        user: 'kevin',
        type: 'sell'
    },
    {
        id: 4,
        title: 'Wriyank Ocena',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus dignissimos dicta est esse excepturi, nihil eaque ullam commodi nemo enim obcaecati officiis ea mollitia iure sed quam architecto delectus corrupti!',
        price: 20000,
        rating: 2,
        review: ['cool', 'effective', 'superb'],
        image: '/Images/l12.jpg',
        user: 'kevin',
        type: 'rent'
    },
    {
        id: 5,
        title: 'Oriyank Ocena',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus dignissimos dicta est esse excepturi, nihil eaque ullam commodi nemo enim obcaecati officiis ea mollitia iure sed quam architecto delectus corrupti!',
        price: 24000,
        rating: 5,
        review: ['cool', 'effective', 'superb'],
        image: '/Images/l9.jpg',
        user: 'kevin',
        type: 'rent'
    },
    {
        id: 6,
        title: 'Wriyank Ocena',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus dignissimos dicta est esse excepturi, nihil eaque ullam commodi nemo enim obcaecati officiis ea mollitia iure sed quam architecto delectus corrupti!',
        price: 30000,
        rating: 4,
        review: ['cool', 'effective', 'superb'],
        image: '/Images/l10.jpg',
        user: 'kevin',
        type: 'sell'
    },
    {
        id: 7,
        title: 'Hriyank Ocena',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus dignissimos dicta est esse excepturi, nihil eaque ullam commodi nemo enim obcaecati officiis ea mollitia iure sed quam architecto delectus corrupti!',
        price: 40000,
        rating: 4,
        review: ['cool', 'effective', 'superb'],
        image: '/Images/l9.jpg',
        user: 'kevin',
        type: 'sell'
    },
    ])
    return (
        <section className="newlistings-wrapper">
            <div className="heading-between">
                <div className="flex-row-md">
                    <h2>New Listings</h2>
                    <ul className='flex-row-md'>
                        <li style={{backgroundColor:tab===0 && 'gray'}} onClick={() => setTab(0)}>All</li>
                        <li style={{backgroundColor:tab===1 && 'gray'}} onClick={() => setTab(1)}>Sell</li>
                        <li style={{backgroundColor:tab===2 && 'gray'}} onClick={() => setTab(2)}>Rent</li>
                    </ul>
                </div>
                <Link href='' className='cta-white'>Explore more</Link>
            </div>
            <Swiper pagination modules={[Autoplay,Pagination]}  autoplay={{delay:1000}}  breakpoints={breakpoints} spaceBetween={10} className='card-container'>
                {tab === 1 && <>
                    {newlistings.filter((f) => (
                        f.type === 'sell'
                    )).map((item) => (
                        <SwiperSlide key={item.id} className='card'>
                            <div className="card-img">
                                <Image src={item.image} width={200} height={200} layout='responsive' />
                            </div>
                            <div className="card-body">
                                <h3>{item.title}</h3>
                                <div className="flex-row-md">
                                    <p>${item.price}</p>
                                    {Array.from({ length: item.rating }, (_, index) => (
                                        <span key={index}><FaStar /></span>
                                    ))}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </>}

                {tab === 2 && <>
                    {newlistings.filter((f) => (
                        f.type === 'rent'
                    )).map((item) => (
                        <SwiperSlide key={item.id} className='card'>
                            <div className="card-img">
                                <Image src={item.image} width={200} height={200} layout='responsive' />
                            </div>
                            <div className="card-body">
                                <h3>{item.title}</h3>
                                <div className="flex-row-md">
                                    <p>${item.price}</p>
                                    {Array.from({ length: item.rating }, (_, index) => (
                                        <span key={index}><FaStar /></span>
                                    ))}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </>}

                {tab === 0 && <>
                    {newlistings.map((item) => (
                        <SwiperSlide key={item.id} className='card'>
                            <div className="card-img">
                                <Image src={item.image} width={200} height={200} layout='responsive' />
                            </div>
                            <div className="card-body">
                                <h3>{item.title}</h3>
                                <div className="flex-row-md">
                                    <p>${item.price}</p>
                                    {Array.from({ length: item.rating }, (_, index) => (
                                        <span key={index}><FaStar /></span>
                                    ))}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </>}
            </Swiper>
        </section>
    )
}

export default Newlistings