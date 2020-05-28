import React from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img style={{ height: "35px", width: "35px" }} src="/logo192.png" alt="" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end pr-5" style={{ width: "100%" }} id="navbarSupportedContent">
          <div>
            <ul className={style["getNav"] + " navbar-nav mr-auto"} style={{ width: "100%" }}>
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pages/ipad">
                  iPad
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/pages/iPhone">
                  iPhone
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Cart">
                  <img style={{ height: "20px", width: "20px" }} src="/images/icons/cart.png" alt="cart" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
