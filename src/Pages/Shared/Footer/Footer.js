import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  
    return (
        <footer>
            <h4><small>Date is: {date}{year}</small></h4>
        </footer>
    );
};

export default Footer;