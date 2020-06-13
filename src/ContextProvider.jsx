import React, { createContext } from "react";

import Ipad from "./component/data/iPad.json";
import Iphone from "./component/data/iphone.json";

export const Context = createContext();

class ContextProvider extends React.Component {
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
      ipad: [...Ipad],
      iphone: [...Iphone],
      cart: [],
      isLogged: false,
      email: "amreshk005@mail.com",
      password: "admin",
    };
  }

  handleCart = (newData) => {
    console.log("app", newData);
    this.setState({ cart: this.state.cart.concat(newData) });
  };

  handleAuth = (getemail, getpassword) => {
    // console.log("handleAuth");
    // const { location } = this.props;

    let { email, password } = this.state;
    if (getemail === email && getpassword === password) {
      // console.log("logged in", this.props);
      // this.props.history.push('')
      this.setState({
        isLogged: true,
      });
    }
  };
  handleLogout = () => {
    this.setState({
      isLogged: !this.state.isLogged,
    });
  };

  render() {
    // let isAuth = this.state.isLogged;
    let newState = {
      ...this.state,
      getHandledLogin: this.handleAuth,
      getHandledLogout: this.handleLogout,
      getHandledCart: this.handleCart,
    };
    return <Context.Provider value={newState}>{this.props.children}</Context.Provider>;
  }
}

export default ContextProvider;
