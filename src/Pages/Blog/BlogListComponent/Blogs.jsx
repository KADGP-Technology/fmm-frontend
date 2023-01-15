import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import config from '../../../config/API/api-prod.js'
import ContentLoader from 'react-content-loader'

const Blogs = ( props ) => {

const [blogcards, setblogcards] = useState([])

const [isloading, setLoading] = useState(true)

const getdata = () => {
  axios.get(config.hostUrl+'/blog/get')
  .then(function (response) {
    setblogcards(response.data)
    if(blogcards.length != 0) setLoading(false)
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
    {isloading ? (
      Array.apply(null, { length: 6 }).map((e, i) => (
        <ContentLoader
           width={450}
           height={400}
           viewBox="0 0 450 400"
           backgroundColor="#f0f0f0"
           foregroundColor="#dedede"
           {...props}
         >
           <rect x="43" y="304" rx="4" ry="4" width="271" height="9" />
           <rect x="44" y="323" rx="3" ry="3" width="119" height="6" />
           <rect x="42" y="77" rx="10" ry="10" width="388" height="217" />
         </ContentLoader>
      ))
): ( 
  <div className="blog-list-section">
  <div className="container">
    <div className="row">

  {blogcards && blogcards.map((data) => {
    return ( <div className="blog-list-item  col-4">
    <div className="image-section">
      <img
      src={data.image}
        alt="image"
      />
    </div>
    <div className="content-section">
      <h2 className="main-title">{data.title}</h2>
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
)}
     
    </>
  );
  
};

export default Blogs