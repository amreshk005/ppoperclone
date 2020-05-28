import React from "react";

const Cart = (props) => {
  console.log("props", props.cart.length);
  let total = null;
  if (props.cart.length !== 0) {
    total =
      Math.floor(
        props.cart.reduce((a, b) => {
          return a + b.price;
        }, 0) * 100
      ) / 100;
    console.log(total);
  }

  return (
    <div className="row flex-column  align-items-center justify-content-center m-0 mb-5" style={{ minHeight: "50vh" }}>
      {props.cart.map((e) => {
        return (
          <div className="card w-50 flex-row mt-2">
            <img className="card-img-top" style={{ width: "150px", height: "150px" }} src={`${e.image}`} alt="Card image cap" />
            <div className="card-body">
              <p className="card-title">{e.Model}</p>
              <p className="card-title">{e.ProductName}</p>
              <p className="card-title">Hello</p>
            </div>
            <div className="row align-items-center m-0 ">
              <div className="btn btn-danger h-25">remove</div>
            </div>
          </div>
        );
      })}
      {total !== null ? (
        <div className="card w-50">
          {/* <h5 className="card-header">Total Price</h5> */}
          <div className="card-body">
            <h5 className="card-title">Total Price</h5>
            <p className="card-text">{total}</p>
          </div>
        </div>
      ) : (
        <div>Cart is Empty</div>
      )}
    </div>
  );
};

export default Cart;
