import React, { Fragment, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { connect } from "react-redux";
import loggedAction from "../redux/actions/logged";
import adminRedirect from "../redux/actions/adminRedirect";
import { Redirect } from "react-router-dom";

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
  useEffect(() => {
    props.getLogged();
  }, []);

  if (props.logged !== "guest" && props.logged !== "admin") {
    return (
      <AuthWrapper>
        <div className="Auth__Nav">
          <AccountCircleIcon style={{ fontSize: 16 }} />
          <span>{props.logged}</span>
          <ExitToAppIcon
            style={{ fontSize: 16, color: "red" }}
            className="Auth__Icon_Exit"
          />
        </div>
      </AuthWrapper>
    );
  }

  if (props.logged === "admin") {
    props.getAdmin();
    return <Redirect to="/" />;
  }

  return (
    <AuthWrapper>
      <Fragment>
        <NavLink to="/login">Login </NavLink>
        <span>/</span>
        <NavLink to="/registration"> Registration</NavLink>
      </Fragment>
    </AuthWrapper>
  );
};

const mapStateToProps = state => {
  return {
    logged: state.logged,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getLogged: () => dispatch(loggedAction()),
    getAdmin: () => dispatch(adminRedirect()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
