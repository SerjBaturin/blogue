import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const AuthWrapper = styled.div`
  margin-right: 2em;

  a,
  span {
    color: black;
    font-weight: 100;
  }
`;

const Auth = props => {
  return (
    <AuthWrapper>
      <NavLink to="/login">Login </NavLink>
      <span>/</span>
      <NavLink to="/registration"> Registration</NavLink>
    </AuthWrapper>
  );
};

export default Auth;
