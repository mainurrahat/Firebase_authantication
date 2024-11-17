import React from "react";
import { Outlet } from "react-router-dom";
import Navber from "./Navber";

const Roots = () => {
  return (
    <div>
      <h2>this is from roots</h2>
      <Navber></Navber>
      <Outlet></Outlet>
    </div>
  );
};

export default Roots;
