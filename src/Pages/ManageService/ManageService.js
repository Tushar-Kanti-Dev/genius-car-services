import React from 'react';
import useServices from '../../hooks/useServices';

const ManageService = () => {
    const [services , setService] = useServices();

    const handleDelete = id =>{
        const proceed = window.confirm('Agree Or Not');
        if(proceed){
            const url = `http://localhost:5000/service/${id}`;
            fetch(url, {
                method: 'delete'
            })
            .then(res => res.json())
            .then(data => {
                
                console.log(data)
                const remainingService = services.filter(service => service._id !== id);
                setService(remainingService);
            })
        }
    }

    return (
        <div className='w-50 mx-auto text-center'>
            <h2>Manage Services</h2>
            <div>
                {
                    services.map(service => 
                        <div className='d-flex flex-row align-items-center justify-content-center my-2 gap-4'
                        key={service._id}
                        >
                            <h6>{service.name}</h6>
                            <img style={{width:'100px'}} className='rounded' src={service.img} alt="" />
                            <button onClick={()=>handleDelete(service._id)} className='text-danger py-1 px-3 rounded fw-bold'>X</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ManageService;