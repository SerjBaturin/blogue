import React from "react";
import "./style.scss";
import { Route, NavLink } from "react-router-dom";
import Login from "./Login";
import Registration from "./Registration";

const Auth = props => {
  return (
    <div className="Auth">
      <div className="Auth__Nav">
        <NavLink to="/login">Login</NavLink>
        <span>/</span>
        <NavLink to="/registration">Registration</NavLink>
      </div>
    </div>
  );
};

export default Auth;
