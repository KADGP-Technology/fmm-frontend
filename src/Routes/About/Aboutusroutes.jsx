import React from "react";
import { Route, Routes } from "react-router-dom";
import Aboutus from "../../Pages/Aboutus/Aboutus";

function Aboutusroutes() {
  return (
    <>
      <Routes>
        <Route path="/aboutus" element={<Aboutus />} />
      </Routes>
    </>
  );
}

export default Aboutusroutes;
