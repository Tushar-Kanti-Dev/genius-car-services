import React, { useEffect, useState } from 'react';
import useServices from '../../../hooks/useServices';

import Service from '../Service/Service';
import './Services.css'
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Services = () => {
    const [services, setServices] = useServices();
    
    return (
        <div id='services' className='container'>
            <PageTitle title='Services'/>
            <div className="row">
            <h1 className='services-title mt-5'>...Our Services...</h1>  
            <div className="services-container">
            {
                services.map(service => <Service
                    key={service.id}
                    service = {service}
                ></Service>)
            }
            </div>
            </div>
        </div>
    );
};

export default Services;