import React, { Component } from "react";
import { Link } from "react-router-dom";

// import ProductCard from "../ProductCard/ProductCard";

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newData: props.data.filter((e) => e.id === props.match.params.id * 1),
    };
  }
  //   let [newData] = props.data.filter((e) => e.id === props.match.params.id * 1);
  //   console.log(newData.image, props.match.params.id);
  addToCart = () => {
    console.log("productDetail", this.state.newData);
    this.props.Addtocart(this.state.newData);
  };

  render() {
    // console.log(this.props);
    let [newData] = this.state.newData;
    if (newData) {
      return (
        <div>
          <div className="row justify-content-center m-0 mb-5 mt-5" style={{ minHeight: "100vh" }}>
            <div className="col-8 mt-5">
              <img style={{ height: "70%", width: "100%" }} src={newData.image} alt="" />
            </div>
            <div className="col-3">
              <div className="row m-0 flex-column justify-content-between" style={{ height: "100%" }}>
                <h1 className="pt-5">{newData.ProductName}</h1>

                <button type="button" className="btn" style={{ backgroundColor: "Transparent", border: "1px solid #000", fontSize: "12px" }}>
                  <h5 className="btn text-center" style={{ fontSize: "14px" }}>
                    {newData.Model}
                  </h5>
                </button>

                <h1 className="p-0">${newData.price}</h1>

                <Link to="/cart">
                  <button className="btn btn-info mb-5" onClick={this.addToCart}>
                    Buy Now
                  </button>
                </Link>
                <p className="pb-5">{newData.des}</p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <>
          <div className="row justify-content-center align-items-center vh-100">
            <h1>Product not Found, invalid id</h1>
          </div>
        </>
      );
    }
  }
}
export default ProductDetail;
