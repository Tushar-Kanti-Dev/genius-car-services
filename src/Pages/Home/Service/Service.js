import React from 'react';

const Service = ({service}) => {
    const {name, id, desc, img, price} = service;
    return (
        <div>
            <img src={img} alt="" />
            <h2>{name}</h2>
        </div>
    );
};

export default Service;