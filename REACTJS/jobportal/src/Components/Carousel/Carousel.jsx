import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
const API_URL = 'http://localhost:1337/api';
const Carousel = () => {

    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getAllServices = async () => {
        try {
            const res = await axios.get(`${API_URL}/services?populate=*`);
            if (res.data && res.data.data) {
                setServices(res.data.data);
                setLoading(false)
                console.log(services)
            } else {
                setError('No data found');
            }
        } catch (error) {
            setError('Error fetching services');
            console.error(error);
        }
    };

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
            <div className="row">
                <div className="col-l">
                    <Swiper>
                        {services.map((service) => (
                            <SwiperSlide className='card' key={service.attributes.id}>
                                <div className="card-body">
                                    <div className="card-img">
                                        {service.attributes.backgroundimage &&
                                            <img src={`http://localhost:1337/${service.attributes.backgroundimage.data.attributes.url}`} alt={service.attributes.title} />
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