import React from "react";
import { connect } from "react-redux";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import "./style.scss";

function Admin(props) {
  return (
    <div className="Admin">
      <nav>
        <AccountCircleIcon className="admin-icon" />
        <span>{props.toDashboard}</span>
        <ExitToAppIcon className="exit-icon"/>
      </nav>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    toDashboard: state.dashboard,
  };
};

export default connect(mapStateToProps)(Admin);
