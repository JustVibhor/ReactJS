import React from "react";
import ReactDOM from "react-dom";
import add, { subtract, multiply, divide } from "./calculator";

ReactDOM.render(
  <div>
    <ul>
      <li>{add(1, 2)}</li>
      <li>{subtract(1, 2)}</li>
      <li>{divide(1, 2)}</li>
      <li>{multiply(1, 2)}</li>
    </ul>
  </div>,
  document.getElementById("root")
);
