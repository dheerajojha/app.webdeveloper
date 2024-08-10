import React, { useEffect, useState } from 'react'
import './Popular.css'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
const API_URL = 'http://localhost:1337/api'
const Popular = () => {
    const [popular, setPopular] = useState([])
    const [popularImage, setPopularImage] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoaading] = useState(true)
    const getAllPopular = async () => {
        try {
            const res = await axios.get(`${API_URL}/populars?populate=*`)
            console.log(res.data)
            if (res.data) {
                const imageUrl = res.data.data.flatMap(item =>
                    item.attributes.image.data.map(img => img.attributes.url)
                );
                setPopularImage(imageUrl)
                setPopular(res.data.data)
                setLoaading(false)
            }
            console.log(popular)
        } catch (error) {
            console.log(error)
            setError(true)
        }
    }

    useEffect(() => {
        getAllPopular()
    }, [])

    if (loading) {
        return <div>Loading..</div>
    }
    if (error) {
        return <div>error...</div>
    }
    return (
        <section className="popular-wrapper">
            <div className="heading">
                <h2>Popular This Week</h2>
                <div className="flex-row-md">
                    <span>All</span>
                    <span>Men</span>
                    <span>Women</span>
                </div>
            </div>

            <Swiper classNamecard='container' slidesPerView={3} spaceBetween={15}>
                {popularImage.map((url, index) => (
                    <SwiperSlide key={index}>
                        <img src={`http://localhost:1337${url}`} alt={`carousel-${index}`} width={'100%'} height={400} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Popular