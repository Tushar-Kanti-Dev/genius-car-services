import React from 'react';

const Footer = () => {
    const today = new Date();
    // const year = today.getFullYear();
    const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  
    return (
        <footer className='text-center mt-3 mb-5'>
            <h4><small>Date is: {date}</small></h4>
        </footer>
    );
};

export default Footer;