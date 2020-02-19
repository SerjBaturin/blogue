import React from "react";
import Sidebar from "../Admin/containers/Sidebar";
import Header from "../Admin/containers/Header";
import Dashboard from "../Admin/containers/Dashboard";
import Users from "../Admin/containers/Users";
import Posts from "../Admin/containers/Posts";
import "./style.scss";

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="container">
        <Header />
        <Dashboard />
        <Users />
        <Posts />
      </div>
    </div>
  );
};

export default App;
