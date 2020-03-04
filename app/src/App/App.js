import React from "react";
import Blog from "../Blog";
import Admin from "../Admin";
import "./style.scss";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Admin /> */}
      <Blog />
    </BrowserRouter>
  );
};

export default App;
