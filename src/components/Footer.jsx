import React from "react";
import logo from "../images/DE.png";

const Footer = () => {
  return (
    <footer className="container-fluid p-lg-5 p-2 border-top">
      <div className="container">
        <div className="d-flex align-items-center p-2">
          <img src={logo} alt="logo" width={70} />
          <h2>Darpan Enterprises</h2>
        </div>
        <p className="p-2">
          Crafts stunning, functional spaces with expert design, construction,
          and glass & aluminum work.
        </p>
        <div className="social d-flex gap-3 fs-4 p-2">
          <i className="bi bi-facebook"></i>
          <i className="bi bi-twitter"></i>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-linkedin"></i>
        </div>
        <div className="d-flex justify-content-between align-items-start p-2 flex-wrap gap-5">
          <div>
            <h4>Menu</h4>
            <p><a href="/">Home</a></p>
            <p><a href="/about">About</a></p>
            <p><a href="/services">Services</a></p>
            <p><a href="/contact">Contact</a></p>
          </div>
          <div>
            <h4>Tech Stack</h4>
            <p><a href="https://getbootstrap.com/" target="_blank">Bootstrap 5 Framework</a></p>
            <p><a href="https://react.dev/" target="_blank">React.js Library</a></p>
            <p><a href="https://react-bootstrap.netlify.app" target="_blank">React-bootstrap</a></p>
          </div>
          <div>
            <h4>Social</h4>
            <p><a href="">Facebook</a></p>
            <p><a href="">Twitter</a></p>
            <p><a href="">Instagram</a></p>
            <p><a href="">LinkedIn</a></p>
          </div>
        </div>

        <p className="p-4">© 2000 Darpan Enterprises | Site <a href="https://vatsalsaxena22.github.io" target="_blank">Developed</a> & Designed by <a href="https://enkidu.in" target="_blank">Enkidu Technologies Pvt. Ltd.</a> | Made in India</p>

      </div>
    </footer>
  );
};

export default Footer;
