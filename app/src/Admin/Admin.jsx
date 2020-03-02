import React from "react";
import { Route } from "react-router-dom";
import Sidebar from "./containers/Sidebar";
import Header from "./containers/Header";
import Dashboard from "./containers/Dashboard";
import Users from "./containers/Users";
import Posts from "./containers/Posts";

const Admin = () => {
  return (
    <div className="Admin">
      <Sidebar />
      <div className="Admin__container">
        <Header />
        <Route path="/admin/dashboard" component={Dashboard} />
        <Route path="/admin/users" component={Users} />
        <Route path="/admin/posts" component={Posts} />
      </div>
    </div>
  );
};

export default Admin;
