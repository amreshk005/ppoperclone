import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../../ContextProvider";

const ProductCard = (props) => {
  // console.log(props.match, props.location);
  console.log("props", props);
  return (
    <>
      <Context.Consumer>
        {(value) => {
          // console.log(value);
          let getUrl = props.match.url.slice(1);
          console.log("value", value, getUrl);
          return value[getUrl].map((e, index) => {
            return (
              <Link key={index + Date.now()} className="mx-3" to={`${props.match.url}/${e.id}`} style={{ width: "30%", height: "50%" }}>
                <div className="card border-0 mt-5">
                  <img src={e.image} className="card-img-top" alt="..." style={{ height: "16rem" }} />
                  <div className="card-body">
                    <p className="card-text" style={{ font: "monospace", fontWeight: "300", fontSize: "13px" }}>
                      ${e.price}
                    </p>
                  </div>
                </div>
              </Link>
            );
          });
        }}
      </Context.Consumer>
    </>
  );
};
export default ProductCard;
