import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./students.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <div>
            <h1>Select a course to find out more...</h1>
            <div className="services-container">
                {
                    services.map(service => <Service key={service.id} service={service} ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;