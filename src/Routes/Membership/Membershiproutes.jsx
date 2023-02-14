import React from "react";
import { Route, Routes } from "react-router-dom";
import Membership from "../../Pages/Membership/Membership";

function Membershiproutes() {
  return (
    <>
      <Routes>
        <Route path="/membership" element={<Membership />} />
      </Routes>
    </>
  );
}

export default Membershiproutes;
