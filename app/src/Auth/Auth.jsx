import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const AuthWrapper = styled.div`
  margin-right: 2em;

  a,
  span {
    color: black;
    font-weight: 100;
  }

  .Auth__Nav {
    display: flex;
    align-items: center;

    span {
      margin-left: 0.5em;
      margin-right: 0.5em;
    }

    .Auth__Icon_Exit {
      cursor: pointer;
    }
  }
`;

const Auth = props => {
  return (
    <AuthWrapper>
      {props.user ? (
        <div className="Auth__Nav">
          <AccountCircleIcon style={{ fontSize: 16 }} />
          <span>{props.user}</span>
          <ExitToAppIcon
            style={{ fontSize: 16, color: "red" }}
            className="Auth__Icon_Exit"
          />
        </div>
      ) : (
        <Fragment>
          <NavLink to="/login">Login </NavLink>
          <span>/</span>
          <NavLink to="/registration"> Registration</NavLink>
        </Fragment>
      )}
    </AuthWrapper>
  );
};

export default Auth;
