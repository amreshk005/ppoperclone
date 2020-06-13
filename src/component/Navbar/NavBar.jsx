import React from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import { Context } from "../../ContextProvider";

const Navbar = (props) => {
  return (
    <>
      <Context.Consumer>
        {(value) => {
          let cartLength = value.cart.length;
          return (
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
                      <Link className="nav-link" to="/ipad">
                        iPad
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/iphone">
                        iPhone
                      </Link>
                    </li>

                    <li className="nav-item">
                      {value.isLogged === false ? (
                        <Link className="nav-link" to="/login">
                          Login
                        </Link>
                      ) : (
                        <span className="nav-link" onClick={() => value.getHandledLogout()}>
                          Logout
                        </span>
                      )}
                    </li>

                    <li className="nav-item" style={{ height: "50px", width: "50px", position: "relative" }}>
                      <Link className="nav-link" style={{ position: "absolute", height: "100%", width: "100%", top: "-7px" }} to="/Cart">
                        <img className="mt-2" style={{ height: "20px", width: "20px", z: "1", position: "absolute" }} src="/images/icons/cart.png" alt="cart" />
                        <div className="" style={{ height: "40px", width: "40px", zIndex: "2", position: "relative" }}>
                          <span className="bg-info ml-3 mb-3" style={{ height: "21px", width: "21px", borderRadius: "50%", zIndex: "2", position: "absolute", textAlign: "center", fontSize: "13px", color: "#fff" }}>
                            {cartLength}
                          </span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          );
        }}
      </Context.Consumer>
    </>
  );
};

export default Navbar;
