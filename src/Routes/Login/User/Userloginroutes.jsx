import React from "react";
import { Route, Routes } from "react-router-dom";
import Userlogin from "../../../Pages/Userlogin/Userlogin";
function Userloginroutes() {
  return (
    <Routes>
      <Route path="/userlogin" element={<Userlogin />}></Route>
    </Routes>
  );
}

export default Userloginroutes;
