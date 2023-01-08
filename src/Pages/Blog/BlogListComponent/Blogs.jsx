import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Blogs = () => {
  
const [blogcards, setblogcards] = useState([])

const getdata = () => {
  axios.get('http://10.10.30.180:8080/blog/get')
  .then(function (response) {
    setblogcards(response.data)
  })
  .catch(function (error) {
    console.log(error);
  })
}


useEffect(() =>{
 getdata();
})


  return (
    <>
      <div className="blog-list-section">
        <div className="container">
          <div className="row">

        {blogcards.map((data) => {
          return ( <div className="blog-list-item  col-4">
          <div className="image-section">
            <img
            src={data.image}
              alt="image"
            />
          </div>
          <div className="content-section">
            <h2 className="main-title">{data.title}</h2>
            {/* <p className="description">
             {data.description}
            </p> */}
            <div className="blog-bottom-section">
              <span>{data.author_name}</span>
              <span>{data.published}</span>
              <span><img
              src = {data.author_image}
              alt="image"
            /></span>
            </div>
            <Link to={`/blog-details/${data.blogId}`}>Read This</Link>
          </div>
        </div>
        
          )
        })}
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs