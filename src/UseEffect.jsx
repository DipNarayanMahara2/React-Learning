import React, { useEffect, useState } from "react";
import "./App.css";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // first type of useEffect
  useEffect(() => {
    console.log("Hello inside from useEffect");
  }, []);

  // second type of useEffect
  useEffect(() => {
    console.log("second type of useEffect");
  }, [count]);

  // Third type of useEffect
  useEffect(() => {
    console.log("Third type of useEffect");
  });

  return (
    <div>
      <h1>This is useEffect Demo page</h1>
      <div className="style">
        <h1>counter</h1>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div className="style">
        <h1>Decreasing counter</h1>
        <h1>{count2}</h1>
        <button onClick={() => setCount2(count2 - 1)}>-</button>
      </div>
    </div>
  );
};

export default UseEffect;
