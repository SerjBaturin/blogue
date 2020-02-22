import React from "react";
import "./style.scss";

export default function Display(props) {
  return (
    <div className="display">
      <h3>
        {props.title}: {props.quantity}
      </h3>
    </div>
  );
}