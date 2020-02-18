import React from "react";
import "./style.scss";

export default function UserQuantityDisplay(props) {
  return (
    <div className="user-quantity-display">
      <h3>Users: {props.quantity}</h3>
    </div>
  );
}
