import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import config from '../../config/API/api-prod'
import ContentLoader from 'react-content-loader'

const BlogDetails = ( props ) => {
  const { id } = useParams();
  const [BlogDetails, setBlogDetails] = useState([]);
  const [html, setHTML] = useState({__html: ""});
  const [keepreading, setkeepreading] = useState([]);
const [isloading, setLoading] = useState(true)

  const getBlog = () => {
    axios.get(config.hostUrl+'/blog/'+id)
    .then(function (response) {
      setBlogDetails(response.data)
      setHTML({__html:response.data.content})
      if(response.data) setLoading(false)
      setkeepreading(response.data.keepReadingData)
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  const HandleKeepReading = () =>{
    setLoading(true)
    setHTML({__html: ""})
    setBlogDetails([])
    getBlog();
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
          
          {isloading ? (
            <ContentLoader viewBox="0 0 400 130" height={130} width={400} {...props}>
    <rect x="0" y="0" rx="3" ry="3" width="250" height="10" />
    <rect x="20" y="20" rx="3" ry="3" width="220" height="10" />
    <rect x="20" y="40" rx="3" ry="3" width="170" height="10" />
    <rect x="0" y="60" rx="3" ry="3" width="250" height="10" />
    <rect x="20" y="80" rx="3" ry="3" width="200" height="10" />
    <rect x="20" y="100" rx="3" ry="3" width="80" height="10" />
  </ContentLoader>
): ( 
<div>
<div className="blog-date">
   <span>{BlogDetails.date}</span>
   </div>
    <div className="blog-post-name">By {BlogDetails.author_name}</div>
              </div>
    )}
    
          <div className="row">
            <div className="blog-details-left">
              <h3 className="main-title">
                {BlogDetails.title}
              </h3>
              {isloading ? (
                <ContentLoader viewBox="0 0 500 280" height={700} width={1100} backgroundColor="#d9d9d9"
    foregroundColor="#ffffff" {...props}>
    <rect x="3" y="3" rx="10" ry="10" width="300" height="180" />
    <rect x="4" y="190" rx="0" ry="0" width="292" height="10" />
    <rect x="4" y="210" rx="0" ry="0" width="239" height="10" />
    <rect x="4" y="230" rx="0" ry="0" width="274" height="10" />
  </ContentLoader>
): (
  <div dangerouslySetInnerHTML={html} />
)}     
            </div>
            <div className="blog-details-right">
              <h3 className="title">Keep Reading</h3>
              <ul>
              {isloading ? (
                Array.apply(null, { length: 10 }).map((e, i) => (
  <ContentLoader viewBox="0 0 400 31" height={51} width={400} backgroundColor="#d9d9d9"
    foregroundColor="#ffffff" {...props}>
      <rect height="5.5" rx="1" ry="1" width="340" x="3" y="5" />
      <rect height="5.5" rx="1" ry="1" width="340" x="31" y="15" />
    </ContentLoader>
                ))
            ): ( 
              <ul>
              {keepreading && keepreading.map((data) => {
                return (
                  <li>
                <Link  to={`/blog-details/${data.blogId}`} onClick={() => HandleKeepReading() }  style={{color:'#0E6EB8'}}>
              {data.title}
              </Link>
                </li>
              )
  })}
  </ul>
)}
               
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
