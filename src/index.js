import React from "react";
import ReactDOM from "react-dom";

const date = new Date().getHours();

var whatTimeOfDay = "";
var customColor = "";

if(date < 12) {
  whatTimeOfDay =  "morning";
  customColor = "red";
} else if(date >= 12 && date <=18) {
  whatTimeOfDay = "afternoon";
  customColor = "green";
} else {
  whatTimeOfDay = "night";
  customColor = "blue";
}

var customCss = {
  color: customColor
}

console.log(date);

ReactDOM.render(
  <div style={customCss}>
    <h1>Good {whatTimeOfDay}</h1>
  </div>,
  document.getElementById("root")
);