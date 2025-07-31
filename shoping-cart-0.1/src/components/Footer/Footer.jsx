import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-field">
      <div className="container">
         <ul>
          <li class="list-title">Categories</li>
          <li><a href="#">Wateches</a></li>
          <li><a href="#" >Cameras</a></li>
          <li><a href="#" >Phones</a></li>
          <li><a href="#" >Tablets</a></li>
          <li><a href="#" >Computers</a></li>
        </ul>
        <ul>
          <li class="list-title">About us</li>
          <li><a href="#" >Our Story</a></li>
          <li><a href="#" >Press</a></li>
          <li><a href="#" >Blog</a></li>
          <li><a href="#" >Awards</a></li>
          <li><a href="#" >Stores</a></li>
        </ul>
        <ul>
          <li class="list-title">Social Media</li>
          <li><a href="#" >Facebook</a></li>
          <li><a href="#" >Instagram</a></li>
          <li><a href="#" >Twitter</a></li>
          <li><a href="#" >whatsapp</a></li>
          <li><a href="#" >Youtube</a></li>
        </ul>
        <ul>
          <li class="list-title">Customer Service</li>
          <li><a href="#" >Live Chat</a></li>
          <li><a href="#" >Contact us</a></li>
          <li><a herf ="#">Terms & Condition</a></li>
          <li><a href="#" >Delivery & Returns</a></li>
          <li><a href="#" >Finance</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;