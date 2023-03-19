import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {name, id, desc, img, price} = service;
    return (
        <div className='service-container'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <p><small>{desc}</small></p>
            <button className='book-button'>BOOK:{name}</button>
        </div>
    );
};

export default Service;