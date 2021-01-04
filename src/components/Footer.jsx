import React from 'react';
import "../CSS/Footer.scss"

const Footer = () => {
  return (
    <section className='boarder'>
      <div>
        <div className='footer'>
          <h3 className="footerTitle">Three Angels Painting </h3>
          <h5>&#169; 2020 All Rights Reserved.</h5>
        </div>
        <div className='contact'>
          <h2>Contact</h2>
          <h2 className='email'>Email: jrrizek@gmail.com</h2>
          <h2 className='phone'>Phone: 828-332-1311</h2>
          <h2 className='office'>Office Hours</h2>
          <h2 className='hours'>Monday-Friday 8 AM - 6 PM</h2>
        </div>
      </div>
    </section>
  );
}

export default Footer;