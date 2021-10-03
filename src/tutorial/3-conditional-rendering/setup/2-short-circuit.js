import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  // const firstValue = text || "hello world"; // takes first one to be true
  // const secondValue = text && "hello world";
  const [isError, setIsError] = useState(false);

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>Value: {secondValue}</h1> */}
      <h1>{text || "Yo whats up"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        togle error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? (
        <p>There is an error</p>
      ) : (
        <div>
          <h2>There is NO error</h2>
        </div>
      )}
    </>
  );
};
// 5:59

export default ShortCircuit;
