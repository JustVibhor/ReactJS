import React from "react";

const date = new Date();
const currentDay = date.getHours();

let greeting;

const customStyle = {
  color: ""
};

if (currentDay < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (currentDay > 12 && currentDay < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Night";
  customStyle.color = "blue";
}

function Heading() {
  return <h1 style={customStyle}>{greeting}</h1>;
}

export default Heading;
