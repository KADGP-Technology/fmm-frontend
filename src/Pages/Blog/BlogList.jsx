import React from "react";
import { Link } from "react-router-dom";
import ArtistInDemand from "./BlogListComponent/ArtistInDemand";
import Blogs from "./BlogListComponent/Blogs";
import NewsLatter from "./BlogListComponent/NewsLatter";

const BlogList = () => {
  return (
    <>
      <div className="banner-section blog-banner">
        <div className="container">
          <h2 className="banner-title">Wall Of Findmymua</h2>
        </div>
      </div>

      <div className="breadcrumb">
        <div className="container">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="#" className="active">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Blogs />
      {/* <ArtistInDemand />
      <NewsLatter /> */}
    </>
  );
};

export default BlogList