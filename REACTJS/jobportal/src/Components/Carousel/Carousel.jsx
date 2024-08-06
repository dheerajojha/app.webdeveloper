import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import './Carousel.css'
const API_URL = 'http://localhost:1337/api';
const Carousel = () => {
const breakpoint = {
    0:{slidesPerView:1},
    768:{slidesPerView:2},
}
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getAllServices = async () => {
        try {
            const res = await axios.get(`${API_URL}/services?populate=*`);
            if (res.data && res.data.data) {
                setServices(res.data.data);
                setLoading(false)
            } else {
                setError('No data found');
            }
        } catch (error) {
            setError('Error fetching services');
            console.error(error);
        }
    };
    console.log(services)
    useEffect(() => {
        getAllServices();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }
    return (
        <section className="carousel-wrapper">
            <div className="heading">
                <h2>Easy Way to Get Your Next Job</h2>
                <p>Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to</p>
            </div>
            <div className="row gap">
                <div className="col-l">
                    <Swiper spaceBetween={10} breakpoints={breakpoint} autoplay modules={[Autoplay]} className='card-container'>
                        {services.map((service) => (
                            <SwiperSlide className='card' key={service.id}>
                                <div className="card-body">
                                    <div className="card-img">
                                        {service.attributes.backgroundimage &&
                                            <img src={`http://localhost:1337${service.attributes.backgroundimage.data.attributes.url}`} alt={service.attributes.title} height={300} width={'100%'} />

                                        }
                                    </div>
                                    <div className="card-body">
                                        <h3>{service.attributes.title}</h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="col-r gap">
                    <h3>Get Your Job Today the Job You Love</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus praesentium iusto voluptatum est esse incidunt quas, accusantium inventore corporis consequuntur quasi dolorum provident minima dignissimos iste, adipisci sint aperiam deserunt.</p>
                    <div className="apply-btn">
                        <button className='cta'>Apply Now</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Carousel