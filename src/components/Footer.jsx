import React from 'react';
import logo from '../../imgs/Logo.png';
import footImg from '../../imgs/iccon.png';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className="footer container">
      <div className="foot-row1">
        <div className="foot-left">
          <img
            src={logo}
            alt=""
            className="foot-logo"
          />
        </div>
        <div className="foot-center">
          <Link className="foot-links">About us</Link>
          <Link className="foot-links">Services</Link>
          <Link className="foot-links">Use Cases</Link>
          <Link className="foot-links">Pricing</Link>
          <Link className="foot-links">Blog</Link>
        </div>
        <div className="foot-right">
          <img
            src={footImg}
            alt=""
          />
        </div>
      </div>
      <div className="foot-row2">
        <div className="foot-box">
          <h3 className="foot-h3">Contact us:</h3>
          <p className="foot-text">Email: info@positivus.com</p>
          <p className="foot-text">Phone: 555-567-8901</p>
          <p className="foot-text">Address: 1234 Main St</p>
          <p className="foot-text">Moonstone City, Stardust State 12345</p>
        </div>
        <div className="foot-box">
          <div className="foot-bgbox">
            <input
              placeholder="Email"
              type="text"
              name=""
              id=""
              className="foot-inp"
            />
            <button className="foot-btn">Subscribe to news</button>
          </div>
        </div>
      </div>
      <div className="hr"></div>
      <div className="foot-row3">
        <p className="foot-text2">© 2023 Positivus. All Rights Reserved.</p>
        <p className="foot-text2">Privacy Policy</p>
      </div>
    </div>
  );
}

export default Footer;
