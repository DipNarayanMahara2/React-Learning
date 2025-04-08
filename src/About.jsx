import { useState } from "react";
import Button from "./Button";
import "./App.css";

function About() {
  // const state =useState("Dipak")
  // console.log(state)

  // const state = useState(0);
  // const firstState = state[0];
  // const secondState = state[1];

  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };

  const [decreaseCount, setDecreaseCount] = useState(20);
  const DecreaseCount = () => {
    setDecreaseCount(decreaseCount - 1);
  };

  return (
    <>
      <h1>Hello this is About page</h1>
      <Button name="Learn More" />
      <div className="style">
        <h1>counter</h1>
        <h1>{count}</h1>
        <button onClick={increaseCount}>+</button>
      </div>
      <div className="style">
        <h1>Decreasing Counter</h1>
        <h1>{decreaseCount}</h1>
        <button onClick={DecreaseCount}>-</button>
      </div>
    </>
  );
}

export default About;
