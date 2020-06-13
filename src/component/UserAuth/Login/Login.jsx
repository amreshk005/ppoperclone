import React from "react";
import { Context } from "../../../ContextProvider";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  render() {
    console.log(this.props);
    console.log(this.state.email, this.state.password);
    return (
      <Context.Consumer>
        {(value) => {
          const handlechange = (e) => {
            // console.log(e);
            this.setState({
              [e.target.name]: e.target.value,
            });
          };
          const handleLogData = (event) => {
            event.preventDefault();
            let { location } = this.props;
            let { email, password } = this.state;
            value.getHandledLogin(email, password);
            console.log("props", location.state);
            if (location.state && location.state.from) {
              this.props.history.push(location.state.from.pathname);
            } else {
              this.props.history.push("/");
            }
          };
          console.log("consumer", value);
          return (
            <div className="row justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
              <form onSubmit={handleLogData}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.username} onChange={handlechange} />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.password} onChange={handlechange} />
                </div>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </form>
            </div>
          );
        }}
      </Context.Consumer>
    );
  }
}

export default Login;
