'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import './Listings.css'
import { FaStar } from 'react-icons/fa'
import Image from 'next/image'
const Listings = () => {
    const [listings, setListings] = useState([{
        id: 1,
        title: 'Priyank Ocena',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus dignissimos dicta est esse excepturi, nihil eaque ullam commodi nemo enim obcaecati officiis ea mollitia iure sed quam architecto delectus corrupti!',
        price: 20000,
        rating: 4,
        review: ['cool', 'effective', 'superb'],
        image: '/Images/l1.jpg',
        user: 'kevin',
        new: false
    },
    {
        id: 2,
        title: 'xriyank Ocena',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus dignissimos dicta est esse excepturi, nihil eaque ullam commodi nemo enim obcaecati officiis ea mollitia iure sed quam architecto delectus corrupti!',
        price: 220000,
        rating: 4,
        review: ['cool', 'effective', 'superb'],
        image: '/Images/l2.jpg',
        user: 'kevin',
        new: false
    },
    {
        id: 3,
        title: 'ariyank Ocena',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus dignissimos dicta est esse excepturi, nihil eaque ullam commodi nemo enim obcaecati officiis ea mollitia iure sed quam architecto delectus corrupti!',
        price: 20000,
        rating: 4,
        review: ['cool', 'effective', 'superb'],
        image: '/Images/l3.jpg',
        user: 'kevin',
        new: false
    },
    {
        id: 4,
        title: 'Driyank Ocena',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus dignissimos dicta est esse excepturi, nihil eaque ullam commodi nemo enim obcaecati officiis ea mollitia iure sed quam architecto delectus corrupti!',
        price: 10000,
        rating: 5,
        review: ['cool', 'effective', 'superb'],
        image: '/Images/l4.jpg',
        user: 'kevin',
        new: false
    },
    {
        id: 5,
        title: 'Sriyank Ocena',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus dignissimos dicta est esse excepturi, nihil eaque ullam commodi nemo enim obcaecati officiis ea mollitia iure sed quam architecto delectus corrupti!',
        price: 20200,
        rating: 1,
        review: ['cool', 'effective', 'superb'],
        image: '/Images/l5.jpg',
        user: 'kevin',
        new: false
    },
    {
        id: 6,
        title: 'Oriyank Ocena',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus dignissimos dicta est esse excepturi, nihil eaque ullam commodi nemo enim obcaecati officiis ea mollitia iure sed quam architecto delectus corrupti!',
        price: 20020,
        rating: 4,
        review: ['cool', 'effective', 'superb'],
        image: '/Images/l6.jpg',
        user: 'kevin',
        new:false
    },
    {
        id: 7,
        title: 'Hriyank Ocena',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus dignissimos dicta est esse excepturi, nihil eaque ullam commodi nemo enim obcaecati officiis ea mollitia iure sed quam architecto delectus corrupti!',
        price: 20000,
        rating: 2,
        review: ['cool', 'effective', 'superb'],
        image: '/Images/l7.jpg',
        user: 'kevin',
        new: false
    },
    {
        id: 8,
        title: 'Jriyank Ocena',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus dignissimos dicta est esse excepturi, nihil eaque ullam commodi nemo enim obcaecati officiis ea mollitia iure sed quam architecto delectus corrupti!',
        price: 20000,
        rating: 4,
        review: ['cool', 'effective', 'superb'],
        image: '/Images/l8.jpg',
        user: 'kevin',
        new:false
    },
    ])
    return (
        <section className="listings-wrapper">
            <div className="heading-between">
                <div>
                    <h2>Find Your Place to live better With Matrix</h2>
                    <p>Lorem ipsum dolor sit amet convero!</p>
                </div>
                <Link href='' className='cta-white'>View more--</Link>
            </div>

            <div className="card-container grid-4">
                {listings.filter((f) => (
                    f.new !== true
                )).map((item) => (
                    <div className="card" key={item.id}>
                        <div className="card-img">
                            <Image src={item.image} width={200} height={200} layout='responsive' />
                        </div>
                        <div className="card-body">
                            <h3>{item.title}</h3>
                            <div className="flex-row-sm">
                                <p>${item.price}</p>
                                {Array.from({ length: item.rating }, (_, index) => (
                                    <span key={index}><FaStar /></span>
                                ))}
                            </div>
                            <small>({item.review.length})Reviews</small>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Listings