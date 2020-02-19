import React from "react";
import "./style.scss";

export default function UserQuantityDisplay(props) {
  return (
    <div className="user-quantity-display">
      <h3>
        {props.title}: {props.quantity.length}
      </h3>
    </div>
  );
}
