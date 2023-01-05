import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivacyPolicy from "../../Pages/Privacy-Policy/PrivacyPolicy";
// import Home from "../../Pages/Homepage/Home";

function PrivacyPolicyroutes() {
  return (
    <>
      <Routes>
        <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
      </Routes>
    </>
  );
}

export default PrivacyPolicyroutes;
