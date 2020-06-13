import React from "react";
import { Context } from "../../ContextProvider";

const ProductDetail = (props) => {
  let geturl = props.match.url.replace(/[/\d{1,}]/g, "");
  let id = props.match.params.id;

  return (
    <Context.Consumer>
      {(value) => {
        let data = geturl === "ipad" ? value.ipad : value.iphone;
        let [dataWithId] = data.filter((e) => e.id === id * 1);
        const addToCart = () => {
          let { isLogged } = value;

          if (isLogged !== false) {
            value.getHandledCart(dataWithId);
            props.history.push({
              pathname: "/cart",
              state: {
                from: { ...props.location },
              },
            });
          } else {
            console.log("inside else");
            props.history.push({
              pathname: "/login",
              state: {
                from: { ...props.location },
              },
            });
          }
        };
        if (dataWithId) {
          return (
            <div>
              <div className="row justify-content-center m-0 mb-5 mt-5" style={{ minHeight: "100vh" }}>
                <div className="col-8 mt-5">
                  <img style={{ height: "70%", width: "100%" }} src={dataWithId.image} alt="" />
                </div>
                <div className="col-3">
                  <div className="row m-0 flex-column justify-content-between" style={{ height: "100%" }}>
                    <h1 className="pt-5">{dataWithId.ProductName}</h1>

                    <button type="button" className="btn" style={{ backgroundColor: "Transparent", border: "1px solid #000", fontSize: "12px" }}>
                      <h5 className="btn text-center" style={{ fontSize: "14px" }}>
                        {dataWithId.Model}
                      </h5>
                    </button>

                    <h1 className="p-0">${dataWithId.price}</h1>

                    <button className="btn btn-info mb-5" onClick={addToCart}>
                      Buy Now
                    </button>
                    <p className="pb-5">{dataWithId.des}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <>
              <Context.Consumer>
                {(value) => {
                  console.log("value detail", value);
                  return (
                    <div className="row justify-content-center align-items-center vh-100">
                      <h1>Product not Found, invalid id</h1>
                    </div>
                  );
                }}
              </Context.Consumer>
            </>
          );
        }
      }}
    </Context.Consumer>
  );
};
export default ProductDetail;

// You are given two positive integers L and R . Find the number of integers in the range [L,R] that can be represented as the difference of two squares. In other words, find the number of integers X in the range [L,R] such that X=P^2 - Q^2 where P and Q are integers.
