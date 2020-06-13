import React from "react";
import style from "./FrontHeader.module.css";

const FrontHeader = () => {
  return (
    <div className={style["FrontHeader"] + " col-12"}>
      <div className="row flex-column justify-content-center align-items-start offset-1" style={{ width: "80%", height: "100%" }}>
        <h1>Wireless Charger for AirPods</h1>
        <p>Keep your AirPods always within arm's reach, always charged</p>
        <div style={{ width: "35%" }}>
          <button type="button" className="btn btn-info btn-lg">
            Pre-Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrontHeader;
