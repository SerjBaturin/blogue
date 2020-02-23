import React from "react";
import Blog from "../Blog";
import "./style.scss";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Blog />
      </div>
    </BrowserRouter>
  );
};

export default App;
