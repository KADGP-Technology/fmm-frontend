import React from "react";
import { Route, Routes } from "react-router-dom";
import Faq from "../../Pages/faq/Faq";
// import Home from "../../Pages/Homepage/Home";

function Faqroutes() {
  return (
    <>
      <Routes>
        <Route path="/faq" element={<Faq />}></Route>
      </Routes>
    </>
  );
}

export default Faqroutes;
