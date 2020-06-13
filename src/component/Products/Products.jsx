import React from "react";
import Header from "../Header/Header";
import ProductCard from "../ProductCard/ProductCard";

import { Context } from "../../ContextProvider";
// import ProductCard from "../ProductCard/ProductCard";

const Products = (props) => {
  // console.log(this.state.data);
  console.log(props);
  return (
    <Context.Consumer>
      {(value) => {
        return (
          <div className="row flex-column justify-content-center m-0" style={{ minHeight: "100vh" }}>
            <Header {...props} />
            <div className="Product-Main row m-0 mt-5" style={{ marginBottom: "10rem !important" }}>
              <div className="row flex-column text-center m-0 justify-content-center" style={{ width: "100%" }}>
                <h1>Proper iPad Connect Series</h1>
                <p>Mount your iPad to a range of home, office, and travel accessories with a simple twist+click.</p>
              </div>

              <div className="col-12 row m-0 p-5 mb-5" style={{ height: "60%" }}>
                <ProductCard {...props} />
              </div>
            </div>
          </div>
        );
      }}
    </Context.Consumer>
  );
};

export default Products;
