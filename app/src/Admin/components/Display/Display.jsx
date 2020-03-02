import React from "react";

export default function Display(props) {
  return (
    <div className="Admin__Display">
      <h3>
        {props.title}: {props.quantity}
      </h3>
    </div>
  );
}
