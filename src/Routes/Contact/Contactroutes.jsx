import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Contact from "../../Pages/Contact/Contact";

function Contactroutes() {
  return (
    <>
      <Routes>
        <Route path="/contactus" element={<Contact />} />
      </Routes>
    </>
  );
}

export default Contactroutes;
