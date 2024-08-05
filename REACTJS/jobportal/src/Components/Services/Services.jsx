import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Services.css'
const API_URL = 'http://localhost:1337/api';

const Services = () => {
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
        <div className="services-wrapper">
            <div className="heading">
                <h2>Job Category</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicsciunt.</p>
            </div>

            <div className="card-container grid-3">
                {services.map((service) => (
                    <div className="card gap" key={service.id}>
                        <div className="card-img">
                         {service.attributes.image && (
                                <img
                                    src={`http://localhost:1337${service.attributes.image.data.attributes.url}`}
                                    alt={service.attributes.title}
                                    width="40"
                                />
                            )}
                     </div>
                        <div className="card-body">
                            <h3>{service.attributes.title}</h3>
                            <p>{service.attributes.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;