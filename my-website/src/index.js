import React from "react";
import ReactDom from "react-dom";

// stateless functional component
// always return JSX
// JSX rules
// always return a component
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

function Greeting() {
  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
}

ReactDom.render(<Greeting />, document.getElementById("root"));
