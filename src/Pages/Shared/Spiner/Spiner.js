import React from 'react';
import { Spinner } from 'react-bootstrap';

const Spiner = () => {
    return (
        <div className='d-flex align-items-center justify-content-center w-100 mt-5'>
            <Spinner animation="grow" />
        </div>
    );
};

export default Spiner;