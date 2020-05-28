import React from "react";
import style from "./Header.module.css";

const Header = (props) => {
  console.log(props);
  return (
    <div className={style["Header"] + " col-12"} style={{ backgroundImage: `url("${props.header.image}")` }}>
      <div className="row flex-column justify-content-center align-items-start offset-1" style={{ width: "80%", height: "100%" }}>
        <h1>{props.header.heading}</h1>
        <p>{props.header.des}</p>
      </div>
    </div>
  );
};

export default Header;
