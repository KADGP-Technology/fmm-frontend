import React from "react";

function Blogcard(props) {
  return (
    <>
      <div className="blog-slide swiper-slide">
        <div className="image-section">
          <img src={props.src} alt="image" />
        </div>
        <div className="blog-content">
          <div className="blog-tag">
            <span>SKIN CARE</span>
            <span>BEAUTY</span>
            <span>SKIN CARE</span>
          </div>
          <h3 className="blog-title">Modern Salon</h3>
          <p className="description">
            Modern Salon provides salon professionals with how-to education,
            creative inspiration, and validation of their work and passion
            <span>READ MORE</span>
          </p>
          <div className="main-blog-title">
            By <span className="name">Ayush Arora</span> 3 Days ago
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogcard;
