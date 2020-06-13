import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Navbar from "./component/Navbar/NavBar";
import Footer from "./component/Footer/Footer";
import FrontPage from "./component/FrontPage/FrontPage";
import Products from "./component/Products/Products";
import ProductDetail from "./component/ProductDetail/ProductDetail";
import NotFound from "./component/NotFound/NotFound";
import Cart from "./component/Cart/Cart";
import Login from "./component/UserAuth/Login/Login";

import ContextProvider from "./ContextProvider";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    return (
      <ContextProvider>
        <div className="container-fluid p-0">
          <Navbar />
          <Switch>
            <Route path="/" exact component={FrontPage} />
            <Route path="/login" exact render={(props) => <Login {...props} />} />
            <Route path="/ipad" exact render={(props) => <Products {...props} />} />
            <Route path="/iphone" exact render={(props) => <Products {...props} />} />
            <Route path="/ipad/:id" exact render={(props) => <ProductDetail {...props} />} />
            <Route path="/iphone/:id" exact render={(props) => <ProductDetail {...props} />} />
            <Route path="/cart" render={(props) => <Cart {...props} />} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </ContextProvider>
    );
  }
}

export default App;
