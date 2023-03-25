
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    
    // if(serviceId === services.id){
    //     setService(service);
    // }

    return (
        <div>
            <h2>Service details: {serviceId}</h2>
        </div>
    );
};

export default ServiceDetails;