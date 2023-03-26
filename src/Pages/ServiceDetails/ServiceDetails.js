
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    
    // if(serviceId === services.id){
    //     setService(service);
    // }
    return (
        <div>
            <h2>Service details: {serviceId}</h2>
            <div className="proced-button text-center">
                <Link to='/procedcheck'><button className='text-white bg-dark p-2 rounded'>Proced Check Out</button></Link>
            </div>
        </div>
    );
};

export default ServiceDetails;