import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {_id, name, desc, img, price} = service;
    const navigate = useNavigate();
    const hadleAddToBook = id =>{
        navigate(`/service/${id}`)
    }
    return (
        <div className='service-container'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <p><small>{desc}</small></p>
            <button onClick={()=> hadleAddToBook(_id)} className='book-button'>BOOK:{name}</button>
        </div>
    );
};

export default Service;