import React, { Component } from "react";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { userName: "", password: "" };
  }

  changeHandler = event => {
    const { name, value } = event.target;
    //console.log("handler.target", name, value);
    this.setState({ [name]: value });
  };

  formLogin = event => {
    event.preventDefault();
    console.log("handler.target", this.state); //this will give full values
    props.changeNameFun(this.state.userName); ///this value will go into store
  };

  // handleLogin = e => {
  //   console.log("Login Successfull222", e.name);
  // };
  render() {
    console.log(this.props.cname);
    let sucess = "";
    if (this.props.myname === "devesh")
      sucess = <p>the login is success and he name is : {this.props.myname}</p>;
    else sucess = <p>failure</p>;

    return (
      <div>
        <form onSubmit={this.formLogin}>
          <h1>Enter Login</h1>
          <input type="text" name="userName" onChange={this.changeHandler} />
          <br />
          <input type="text" name="password" onChange={this.changeHandler} />
          <br />
          <button>Login</button>
          {sucess}
        </form>
      </div>
    );
  }
}

//mapStateToProps -- this is to access data
//state here means the store
const mapStateToProps = state => ({
  myname: state.cname
  ////state flow=>reducer>{props.myname}
});

//mapDispatchToProps -- this is to dispatch data
const mapDispatchToProps = dispatch => ({
  changeNameFun: cname => {
    dispatch({ type: "USER_NAME", payload: cname });
  }
});

const mapDispatch = dispatch => ({
  changeNameFun: cname => {
    dispatch({ type: "MOGA_MBO", payload: cname });
  }
});

export default connect(
  mapStateToProps,
  mapDispatch
)(Login);
