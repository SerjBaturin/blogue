import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import loginAction from "../../redux/actions/login";
import "./style.scss";

const Login = props => {
  const inputLogin = useRef(null);
  const getUser = () => {
    props.setUser(inputLogin.current.value);
  };

  return (
    <div className="Login">
      <h2>Login</h2>

      <input ref={inputLogin} type="text" placeholder="Login" required />
      <button onClick={getUser}>Click</button>
      {props.user.role}
      <h4>{props.user.name}</h4>
      <h4>{props.user.email}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.login,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUser: login => dispatch(loginAction(login)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
