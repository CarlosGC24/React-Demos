import React, { useState } from "react";

// Always starts with 'use' for the export
// component name must be uppercase
// cannot call conditionally

const UseStateBasics = () => {
  // console.log(useState("hellow there"));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);
  // useState returns a pair: the current state value and a function that lets you update it.

  const [text, setText] = useState("Random Title");

  const handleClick = () => {
    text === "Random Title"
      ? setText("New Random Title")
      : setText("Random Title");
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        Random Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
