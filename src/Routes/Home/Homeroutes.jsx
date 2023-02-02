import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Homepage/Home";

function Homeroutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default Homeroutes;
