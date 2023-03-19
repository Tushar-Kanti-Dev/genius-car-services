import React from 'react';

const Footer = () => {
    const today = new Date();
  const year = today.getFullYear();
    return (
        <footer>
            <h4><small>Date is:{year}</small></h4>
        </footer>
    );
};

export default Footer;