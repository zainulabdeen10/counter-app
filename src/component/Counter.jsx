import React, { useEffect, useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);
  let [Square, setSquare] = useState(0);
  useEffect(() => {
    setSquare(count * count);
  }, [count]);
  const Addvalue = () => {
    setCount(count + 1);
  };
  const RemoveValue = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Counter App</h1>
      <h3>Counter={count}</h3>
      <button onClick={Addvalue} style={{ color: "green", background: "pink" }}>
        Add Value
      </button>
      <button onClick={RemoveValue}>Remove Value</button>
      <p>This will show you the Square of the Current State{Square}</p>
    </div>
  );
};

export default Counter;
