import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import loginAction from "../../redux/actions/login";

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
