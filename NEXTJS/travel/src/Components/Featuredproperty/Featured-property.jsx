'use client'
import React, { useState } from 'react'
import './Featured-property.css'
import Image from 'next/image'
import { FaLocationArrow } from 'react-icons/fa'
const Featuredproperty = () => {
    const [fProperty, setFProperty] = useState([{
        id: 1,
        title: 'Prime Residence',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni magnam impedit doloribus temporibus, omnis ab eius blanditiis culpa quasi quod aperiam quae nesciunt soluta quidem. Ipsum corrupti enim porro expedita.',
        date: '17/23/2002',
        location: 'Downtown, dublin 2393-2',
        price: 1000,
        category: 'rent',
        recent: false,
        image: '/Images/fp2.jpg'
    },
    {
        id: 2,
        title: 'Suarace Residence',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni magnam impedit doloribus temporibus, omnis ab eius blanditiis culpa quasi quod aperiam quae nesciunt soluta quidem. Ipsum corrupti enim porro expedita.',
        date: '17/23/2002',
        location: 'Downtown, dublin 2393-2',
        price: 1000,
        category: 'rent',
        recent: false,
        image: '/Images/fp1.jpg'
    },
    {
        id: 3,
        title: 'Agenta Residence',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni magnam impedit doloribus temporibus, omnis ab eius blanditiis culpa quasi quod aperiam quae nesciunt soluta quidem. Ipsum corrupti enim porro expedita.',
        date: '17/23/2002',
        location: 'Downtown, dublin 2393-2',
        price: 1000,
        category: 'rent',
        recent: false,
        image: '/Images/fp3.jpg'
    },
    {
        id: 4,
        title: 'Laurence Residence',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni magnam impedit doloribus temporibus, omnis ab eius blanditiis culpa quasi quod aperiam quae nesciunt soluta quidem. Ipsum corrupti enim porro expedita.',
        date: '17/23/2002',
        location: 'Downtown, dublin 2393-2',
        price: 1000,
        category: 'rent',
        recent: true,
        image: '/Images/fp4.jpg'
    },
    {
        id: 5,
        title: 'Tenny Residence',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni magnam impedit doloribus temporibus, omnis ab eius blanditiis culpa quasi quod aperiam quae nesciunt soluta quidem. Ipsum corrupti enim porro expedita.',
        date: '17/23/2002',
        location: 'Downtown, dublin 2393-2',
        price: 1000,
        category: 'rent',
        recent: true,
        image: '/Images/fp5.jpg'
    },
    {
        id: 6,
        title: 'Jacob Residence',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni magnam impedit doloribus temporibus, omnis ab eius blanditiis culpa quasi quod aperiam quae nesciunt soluta quidem. Ipsum corrupti enim porro expedita.',
        date: '17/23/2002',
        location: 'Downtown, dublin 2393-2',
        price: 1000,
        category: 'rent',
        recent: true,
        image: '/Images/fp6.jpg'
    },

    ])
    return (
        <section className="featured-property-wrapper">
            <div className="heading-left">
                <h2>Featured Property</h2>
            </div>
            <div className="card-container">
                {fProperty.filter((val) => (
                    val.recent != true
                )).map((item) => (
                    <div className={`card ${item.id ==1 && 'card-span'}`} key={item.id}>
                        <div className="card-image">
                        <Image src={item.image} width={200} height={200} objectFit="cover" alt={item.title} />
                        </div>
                        <div className="card-body">
                            <h3>{item.title}</h3>
                            <div className="flex-row-s">
                                <FaLocationArrow size={14} />
                                <p>{item.location}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Featuredproperty