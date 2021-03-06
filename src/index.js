//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>Vacation Spots</h1>
    <ul>
      <li>Fiji</li>
      <li>Bora Bora</li>
      <li>Maldives</li>
    </ul>

    <h1>Favorite Food</h1>
    <ul>
      <li>Grouper</li>
      <li>Mahi Mahi</li>
      <li>Crabcakes</li>
    </ul>
  </div>,
  document.getElementById("root")
);
