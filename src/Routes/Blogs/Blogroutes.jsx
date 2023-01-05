import React from "react";
import { Route, Routes } from "react-router-dom";
import BlogDetails from "../../Pages/Blog/BlogDetails";
import BlogList from "../../Pages/Blog/BlogList";
// import Faq from "../../Pages/faq/Faq";
// import Home from "../../Pages/Homepage/Home";

function Blogroutes() {
  return (
    <>
      <Routes>
        <Route path="/blog-list" element={<BlogList />}></Route>
        <Route path="/blog-details" element={<BlogDetails />}></Route>
        
      </Routes>
    </>
  );
}

export default Blogroutes;
