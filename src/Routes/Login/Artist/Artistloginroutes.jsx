import React from "react";
import { Route, Routes } from "react-router-dom";
import Artistlogin from "../../../Pages/Artistlogin/Artistlogin";

function Artistloginroutes() {
  return (
    <Routes>
      <Route path="/artistlogin" element={<Artistlogin />}></Route>
    </Routes>
  );
}

export default Artistloginroutes;
