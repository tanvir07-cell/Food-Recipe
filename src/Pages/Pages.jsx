import React, { useState } from "react";
import DarkMode from "../components/DarkMode";
import Home from "./Home";

const Pages = () => {
  return (
    <>
      <DarkMode></DarkMode>

      <div>
        <Home></Home>
      </div>
    </>
  );
};

export default Pages;
