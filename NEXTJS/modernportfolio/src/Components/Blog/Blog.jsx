'use client'

import React, { useState } from 'react'
import './Blog.css'
import Image from 'next/image'
import { FaArrowAltCircleRight, FaRegArrowAltCircleRight } from 'react-icons/fa'
const Blog = () => {
    const [blog, setBlog] = useState([{
        id: 1,
        title: 'Design Urevieled during the course of action',
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora ex aliquam accusantium esse nam sit pariatur, aliquid officia non et! Aperiam, enim facilis facere in dolor saepe velit sit perferendis?",
        user: "Tenny",
        date: '21-12-2023',
        image: '/Images/blogpic1.jpg',
        category: 'App Design',
    },
    {
        id: 2,
        title: 'Aqua Urevieled during the course of action',
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora ex aliquam accusantium esse nam sit pariatur, aliquid officia non et! Aperiam, enim facilis facere in dolor saepe velit sit perferendis?",
        user: "Suniyo Jain",
        date: '11-12-2023',
        image: '/Images/blogpic7.png',
        category: 'Web Design',
    },
    {
        id: 3,
        title: 'Modern Urevieled during the course of action',
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora ex aliquam accusantium esse nam sit pariatur, aliquid officia non et! Aperiam, enim facilis facere in dolor saepe velit sit perferendis?",
        user: "Tenny",
        date: '21-12-2023',
        image: '/Images/blogpic3.jpg',
        category: 'App Design',
    },

    ])
    return (
        <section className="blog-wrapper">
            <div className="heading-left">
                <h2>From My Blog Posts</h2>
            </div>
            <div className="card-container grid-3">
                {blog.map((item) => (
                    <div className="card gap" key={item.id}>
                        <div className="card-header">
                           <FaRegArrowAltCircleRight />
                        </div>
                        <div className="card-img">
                            <Image layout='responsive' src={item.image} alt={item.title} width={200} height={150} />
                        </div>
                        <div className="card-body">
                            <small>{item.category}</small>
                            <h3>{item.title}</h3>
                            <div className="flex-between">
                                <p>🫥{item.user}</p>
                                <p>🫥{item.date}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Blog