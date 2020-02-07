import React from "react";
import Admin from "./Admin";
import Dashboard from "./Dashboard";
import "./style.scss";

export default function Display() {

  return (
    <div className="Display">
      <Admin />
      <Dashboard />
    </div>
  );
}
