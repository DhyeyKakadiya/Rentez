import React from "react";
import { Link } from "react-router-dom";
import logo from '../assests/logo/Logo-svg-rbg.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="company-logo">
          <Link to='/'>
            <img style={{height:'100%', width:'150px'}}  src={logo} alt='logo' />
          </Link>
        </div>

        <hr className="footer-hr clearfix w-100 d-md-none pb-0"/>

        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Email: example@example.com</p>
          <p>Phone: +1 123-456-7890</p>
        </div>

        <div className="footer-section">
          <h2>Follow Us</h2>
          <p>Twitter</p>
          <p>Facebook</p>
          <p>Instagram</p>
        </div>

        <div className="footer-section">
          <h2>Quick Links</h2>
          <p>Home</p>
          <p>About Us</p>
          <p>Services</p>
          <p>Contact</p>
        </div>

      </div>
      
      <div className="footer-bottom">
        <p> &copy;2024 Rentez. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
