import React, { useEffect, useState } from 'react'
import './Popular.css'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
const API_URL = 'http://localhost:1337/api'
const Popular = () => {
    const breakpoint = {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    }
    const [popular, setPopular] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoaading] = useState(true)
    const [category, setCategory] = useState('all')
    const getAllPopular = async () => {
        try {
            let url = `${API_URL}/populars?populate=*`;
            if (category !== 'all') {
                url += `&filters[category][$eq]=${category}`;
            }
            const res = await axios.get(url);
            if (res.data) {
                const imageUrl = res.data.data.flatMap(item =>
                    item.attributes.image.data.map(img => img.attributes.url)
                );
                setPopular(imageUrl)
                setLoaading(false)
                console.log(res.data)
            }
        } catch (error) {
            console.log(error)
            setError(true)
        }
    }

    useEffect(() => {
        getAllPopular()
    }, [category])

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
                    <span style={{ background: category === 'all' && '#ececea' }} onClick={() => setCategory('all')}>All</span>
                    <span style={{ background: category === 'man' && '#ececea' }} onClick={() => setCategory('man')}>Man</span>
                    <span style={{ background: category === 'women' && '#ececea' }} onClick={() => setCategory('women')}>Women</span>
                </div>
            </div>

            <Swiper autoplay modules={[Autoplay]} classNamecard='container' breakpoints={breakpoint} spaceBetween={15}>
                {popular.map((url, index) => (
                    <SwiperSlide key={index}>
                        <img src={`http://localhost:1337${url}`} alt={`carousel-${index}`} width={'100%'} height={400} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Popular