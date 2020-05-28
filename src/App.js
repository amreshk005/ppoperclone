import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./component/Navbar/NavBar";
import Footer from "./component/Footer/Footer";
import FrontPage from "./component/FrontPage/FrontPage";
import Products from "./component/Products/Products";
import ProductDetail from "./component/ProductDetail/ProductDetail";
import NotFound from "./component/NotFound/NotFound";
import Cart from "./component/Cart/Cart";

import Ipad from "./component/data/iPad.json";
import Iphone from "./component/data/iphone.json";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Header: [
        {
          heading: "iPad",
          des: "Cases, mounts, & accesories",
          image: "/images/ipad-collection-banner.jpg",
        },
        {
          heading: "iPhone",
          des: "Cases, mounts, & accesories",
          image: "/images/iphone-cases-mounts-stands-banner_1200x.jpg",
        },
      ],
      iPad: [...Ipad],
      iPhone: [...Iphone],
      cart: [],
    };
  }

  handleCart = (newData) => {
    console.log("app", newData);
    this.setState({ cart: this.state.cart.concat(newData) });
  };

  render() {
    return (
      <div className="container-fluid p-0">
        <Navbar />
        <Switch>
          <Route path="/" exact component={FrontPage} />
          <Route path="/pages/ipad" exact render={(props) => <Products data={this.state.iPad} Header={this.state.Header[0]} {...props} />} />
          <Route path="/pages/iPhone" exact render={(props) => <Products data={this.state.iPhone} Header={this.state.Header[1]} {...props} />} />
          <Route path="/pages/ipad/:id" exact render={(props) => <ProductDetail data={this.state.iPad} Addtocart={this.handleCart} {...props} />} />
          <Route path="/pages/iPhone/:id" exact render={(props) => <ProductDetail data={this.state.iPhone} Addtocart={this.handleCart} {...props} />} />
          <Route path="/cart" render={(props) => <Cart cart={this.state.cart} Addtocart={this.handleCart} {...props} />} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
