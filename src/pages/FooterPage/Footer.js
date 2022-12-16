import React from "react";
import "./Footer.css";
import Logo from "../../assest/Logo.jpg";
import Facebook from '../../assest/Facebook.png';
import Instagram from '../../assest/Instagram.png';
import Twitter from '../../assest/Twitter.png';
export default function Footer() {
  return (
    <>
      <div className="footer-content-wapper">
        <div className="row  footer-content">
          <div className="col-md-6">
                <img src={Logo} />
                <p className="footer-title">
                  <strong>LaslesVPN</strong> is a private virtual network that
                  <br />
                  has unique features and has high security.
                </p>
              <div className="social-icons-holder">
                <span><img src={Facebook}/></span>
                <span><img src={Instagram} /></span>
                <span><img src={Twitter} /></span>
              </div>
               <p>©2020LaslesVPN</p>
          </div>
          <div className="col-md-2">
            <p><strong>Product</strong></p>
            <p>Download </p>
            <p>Pricing</p>
            <p>Locations</p>
            <p>Server</p>
            <p>Countries</p>
          </div>
          <div className="col-md-2">
            <p><strong>Engage</strong></p>
            <p>Download </p>
            <p>Pricing</p>
            <p>Locations</p>
            <p>Server</p>
            <p>Countries</p>
          </div>
          <div className="col-md-2">
            <p><strong>Earn Money</strong></p>
            <p>Download </p>
            <p>Pricing</p>
            
          </div>
        </div>
      </div>
    </>
  );
}
