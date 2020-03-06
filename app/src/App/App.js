import React from "react";
import Blog from "../Blog";
import Admin from "../Admin";
import "./style.scss";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";

const App = props => {
  return (
    <BrowserRouter>
      {props.isAdmin === true && <Admin />}
      {props.isAdmin === false && <Blog />}
    </BrowserRouter>
  );
};

const mapStateToProps = state => {
  return {
    isAdmin: state.adminRedirect,
  };
};

export default connect(mapStateToProps)(App);
