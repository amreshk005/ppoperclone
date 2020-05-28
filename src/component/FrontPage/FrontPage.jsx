import React, { Component } from "react";
// import "./FrontPage.module.css";
import Header from "./FronPageComponents/FrontHeader/FrontHeader";
import MainBody from "./FronPageComponents/MainBody/MainBody";

class FrontPage extends Component {
  render() {
    return (
      <div className="row flex-column m-0">
        <Header />
        <MainBody />
      </div>
    );
  }
}
export default FrontPage;
