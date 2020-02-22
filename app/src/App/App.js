import React from "react";
import Blog from "../Blog";
import Admin from "../Admin";
import Login from "../Auth/Login";
import "./style.scss";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Blog />
      </div>
    </BrowserRouter>
  );
};

export default App;
