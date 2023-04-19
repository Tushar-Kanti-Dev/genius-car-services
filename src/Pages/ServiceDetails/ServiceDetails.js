
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    const [service , setService] = useState({});
    useEffect(()=>{
        const url = `http://localhost:5000/service/${serviceId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data))
    }, [])
    
    return (
        <div className='w-50 mx-auto text-center'>
            <h2>Service details: {service.name}</h2>
            <div className="proced-button text-center">
                <Link to='/procedcheck'><button className='text-white bg-dark p-2 rounded'>Proced Check Out</button></Link>
            </div>
        </div>
    );
};

export default ServiceDetails;