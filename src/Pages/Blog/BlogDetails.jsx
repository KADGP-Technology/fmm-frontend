import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const BlogDetails = () => {
  const { id } = useParams();
  const [BlogDetails, setBlogDetails] = useState([]);
  const [html, setHTML] = useState({__html: ""});
  const [keepreading, setkeepreading] = useState([]);
  const getBlog = () => {
    axios.get('http://10.10.30.180:8080/blog/'+id)
    .then(function (response) {
      setBlogDetails(response.data)
      setHTML({__html:response.data.content})
      setkeepreading(response.data.keepReadingData)
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  useEffect(() =>{
    getBlog();
   })
   
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
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link className="active">
               {BlogDetails.title}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="blog-details-section">
        <div className="container">
          <div className="blog-date">
            <span>{BlogDetails.date}</span>
          </div>
          <div className="blog-post-name">By {BlogDetails.author_name}</div>
          <div className="row">
            <div className="blog-details-left">
              <h3 className="main-title">
                {BlogDetails.title}
              </h3>
              <div dangerouslySetInnerHTML={html} />
            </div>
            <div className="blog-details-right">
              <h3 className="title">Keep Reading</h3>
              <ul>
                {keepreading.map((data) => {
                  return (
                    <li>
                    <Link to={`/blog-details/${data.blogId}`} style={{color:'#0E6EB8'}}>
                   {data.title}
                  </Link>
                    </li>
                  )
                })}
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
