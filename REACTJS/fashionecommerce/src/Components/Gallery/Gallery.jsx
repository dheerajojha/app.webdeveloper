import React, { useEffect, useState } from 'react'
import './Gallery.css'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
const API_URL = 'http://localhost:1337/api'
const Gallery = () => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [gallery, setGallery] = useState([])
  const getAllGallery = async () => {
    try {
      const res = await axios.get(`${API_URL}/galleries?populate=*`)
      if (res.data) {
        const imageUrls = res.data.data.flatMap(item =>
          item.attributes.swiperimage.data.map(img => img.attributes.url)
        );
        setGallery(imageUrls);
        console.log(imageUrls)
        setLoading(false)
      }
    } catch (error) {
      console.log(error)
      setError(true)
    }
  }

  useEffect(() => {
    getAllGallery()
  }, [])

  if (error) return <div>error</div>

  if (loading) return <div>Loading...</div>
  return (
    <section className="gallery-wrapper">
      <div className="heading-left">
        <h2>Gallery</h2>
      </div>
      <Swiper slidesPerView={3} spaceBetween={15} className='card-container'>
        {gallery.map((url, index) => (
          <SwiperSlide key={index} className={`${index==0 && 'grid-span'}`}>
            <img key={index} src={`http://localhost:1337${url}`} alt={`carousel-${index}`} width={'100%'} height={400} />
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  )
}

export default Gallery