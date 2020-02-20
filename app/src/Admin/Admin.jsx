import React from "react";
import "./style.scss";
import Sidebar from "./containers/Sidebar";
import Header from "./containers/Header";
import Dashboard from "./containers/Dashboard";
import Users from "./containers/Users";
import Posts from "./containers/Posts";

const Admin = () => {
  return (
    <div className="admin">
      <Sidebar />
      <div className="admin__container">
        <Header />
        <Dashboard />
        <Users />
        <Posts />
      </div>
    </div>
  );
};

export default Admin;
