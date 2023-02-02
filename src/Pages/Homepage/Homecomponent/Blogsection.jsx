import React from "react";
import SwiperBlog from "../../../Components/Swiper/SwiperBlog";

function Blogsection() {
  return (
    <>
      <section className="blog-section">
        <div className="row">
          <div className="col-3">
            <h2 className="section-title">
              Blogs <br /> Of the week
            </h2>
          </div>
          <div className="col-7">
            <div className="blog-slider-section swiper">
              <div className="swiper-wrapper">
                <SwiperBlog />
                {/* <div className="blog-slide swiper-slide">
                  <div className="image-section">
                    <img src="assets/images/blog-img1.png" alt="image" />
                  </div>
                  <div className="blog-content">
                    <div className="blog-tag">
                      <span>SKIN CARE</span>
                      <span>BEAUTY</span>
                      <span>SKIN CARE</span>
                    </div>
                    <h3 className="blog-title">Modern Salon</h3>
                    <p className="description">
                      Modern Salon provides salon professionals with how-to
                      education, creative inspiration, and validation of their
                      work and passion
                      <span>READ MORE</span>
                    </p>
                    <div className="main-blog-title">
                      By <span className="name">Ayush Arora</span> 3 Days ago
                    </div>
                  </div>
                </div>
                <div className="blog-slide swiper-slide">
                  <div className="image-section">
                    <img src="assets/images/blog-img2.png" alt="image" />
                  </div>
                  <div className="blog-content">
                    <div className="blog-tag">
                      <span>SKIN CARE</span>
                      <span>BEAUTY</span>
                      <span>SKIN CARE</span>
                    </div>
                    <h3 className="blog-title">Modern Salon</h3>
                    <p className="description">
                      Modern Salon provides salon professionals with how-to
                      education, creative inspiration, and validation of their
                      work and passion
                      <span>READ MORE</span>
                    </p>
                    <div className="main-blog-title">
                      By <span className="name">Ayush Arora</span> 3 Days ago
                    </div>
                  </div>
                </div>
                <div className="blog-slide swiper-slide">
                  <div className="image-section">
                    <img src="assets/images/blog-img1.png" alt="image" />
                  </div>
                  <div className="blog-content">
                    <div className="blog-tag">
                      <span>SKIN CARE</span>
                      <span>BEAUTY</span>
                      <span>SKIN CARE</span>
                    </div>
                    <h3 className="blog-title">Modern Salon</h3>
                    <p className="description">
                      Modern Salon provides salon professionals with how-to
                      education, creative inspiration, and validation of their
                      work and passion
                      <span>READ MORE</span>
                    </p>
                    <div className="main-blog-title">
                      By <span className="name">Ayush Arora</span> 3 Days ago
                    </div>
                  </div>
                </div>
                <div className="blog-slide swiper-slide">
                  <div className="image-section">
                    <img src="assets/images/blog-img2.png" alt="image" />
                  </div>
                  <div className="blog-content">
                    <div className="blog-tag">
                      <span>SKIN CARE</span>
                      <span>BEAUTY</span>
                      <span>SKIN CARE</span>
                    </div>
                    <h3 className="blog-title">Modern Salon</h3>
                    <p className="description">
                      Modern Salon provides salon professionals with how-to
                      education, creative inspiration, and validation of their
                      work and passion
                      <span>READ MORE</span>
                    </p>
                    <div className="main-blog-title">
                      By <span className="name">Ayush Arora</span> 3 Days ago
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogsection;
