import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>This is Navbar</h1>
      <Button name="Register" />
      <Button name="Login" />
      <Button name="Logout" />
      <Button />
      <h1>This is footer</h1>
      
    </div>
  );
};

export default Home;
