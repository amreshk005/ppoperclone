import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="row flex-column m-0 mb-5" style={{ maxHeight: "80vh" }}>
      <div className="row col-12 m-0 justify-content-center align-items-center h-25 mb-5">
        <Link to="/pages/iPhone" style={{ textDecoration: "none" }}>
          <h1>Shop all iPhone Magnetic Cases & Mounts →</h1>
        </Link>
      </div>
      <div className="row m-0 mb-5 mt-5">
        <div className="col-2 offset-1">
          <h5 style={{ fontSize: "14px" }}>Shop</h5>
          <ul style={{ listStyle: "none", padding: "0", fontSize: "12px" }}>
            <li>iPad</li>
            <li>iPhone</li>
            <li>Watch</li>
            <li>Business</li>
          </ul>
        </div>
        <div className="col-2 pr-1">
          <h5 style={{ fontSize: "14px" }}>Shop</h5>
          <ul style={{ listStyle: "none", padding: "0", fontSize: "12px" }}>
            <li>About Us</li>
            <li>Help</li>
            <li>Shipping & Returns</li>
            <li>Business</li>
          </ul>
        </div>
        <div className="col-4 d-flex flex-column align-items-center">
          <h5 style={{ fontSize: "14px", width: "58%" }}>About Studio</h5>
          <ul style={{ listStyle: "none", padding: "0", fontSize: "12px" }}>
            <li>Studio Proper is a Melbourne</li>
            <li> based product design studio</li>
            <li> dedicated to simplifying everyday</li>
            <li> experiences with technology.</li>
          </ul>
        </div>
        <div className="col-3 ">
          <div>
            <h5 style={{ fontSize: "14px" }}>Shop</h5>
          </div>
          <ul className="" style={{ listStyle: "none", padding: "0", fontSize: "12px" }}>
            <li>About Us</li>
            <li>Help</li>
            <li>Shipping & Returns</li>
            <li>Business</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
