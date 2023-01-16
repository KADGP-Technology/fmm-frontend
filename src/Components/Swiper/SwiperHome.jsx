import React from "react";
import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
function SwiperHome({ setSwiperActiveidx }) {
  return (
    <>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        modules={[Navigation, Pagination]}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        loop={true}
        onSlideChange={(e) => setSwiperActiveidx(e.activeIndex)}
        className="mySwiper"
        speed={800}
        pagination={{
          clickable: true,
        }}
      >
        <SwiperSlide>
          <div class="slider-item swiper-slide">
            <img
              src="../../Assets/images/slider-img-1.png"
              alt="Slider Image"
            />
            <div class="content-section">
              <h2 class="main-title">Makeup Artist?</h2>
              <p class="sub-text">
                Find all you need in the <span>Artist Corner.</span>
              </p>
            </div>
            <div class="button">
              <Link to="/explore-makeupartist">
                Find a makeup artist
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M17.3672 8.43281L8.5125 0.747656C8.44453 0.689062 8.35781 0.65625 8.26641 0.65625H6.19219C6.01875 0.65625 5.93906 0.871875 6.07031 0.984375L14.2781 8.10938H0.5625C0.459375 8.10938 0.375 8.19375 0.375 8.29688V9.70312C0.375 9.80625 0.459375 9.89062 0.5625 9.89062H14.2758L6.06797 17.0156C5.93672 17.1305 6.01641 17.3438 6.18984 17.3438H8.33438C8.37891 17.3438 8.42344 17.3273 8.45625 17.2969L17.3672 9.56719C17.4483 9.49663 17.5134 9.40949 17.558 9.31164C17.6025 9.2138 17.6256 9.10752 17.6256 9C17.6256 8.89248 17.6025 8.7862 17.558 8.68836C17.5134 8.59051 17.4483 8.50337 17.3672 8.43281Z"
                    fill="#F8F8F8"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="slider-item swiper-slide">
            <img
              src="../../Assets/images/slider-img-2.png"
              alt="Slider Image"
            />
            <div class="content-section">
              <h2 class="main-title">Makeup Artist?</h2>
              <p class="sub-text">
                Find all you need in the <span>Artist Corner.</span>
              </p>
            </div>
            <div class="button">
              <Link to="/explore-makeupartist">
                Find a makeup artist
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M17.3672 8.43281L8.5125 0.747656C8.44453 0.689062 8.35781 0.65625 8.26641 0.65625H6.19219C6.01875 0.65625 5.93906 0.871875 6.07031 0.984375L14.2781 8.10938H0.5625C0.459375 8.10938 0.375 8.19375 0.375 8.29688V9.70312C0.375 9.80625 0.459375 9.89062 0.5625 9.89062H14.2758L6.06797 17.0156C5.93672 17.1305 6.01641 17.3438 6.18984 17.3438H8.33438C8.37891 17.3438 8.42344 17.3273 8.45625 17.2969L17.3672 9.56719C17.4483 9.49663 17.5134 9.40949 17.558 9.31164C17.6025 9.2138 17.6256 9.10752 17.6256 9C17.6256 8.89248 17.6025 8.7862 17.558 8.68836C17.5134 8.59051 17.4483 8.50337 17.3672 8.43281Z"
                    fill="#F8F8F8"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="slider-item swiper-slide">
            <img
              src="../../Assets/images/slider-img-3.png"
              alt="Slider-Image"
            />
            <div class="content-section">
              <h2 class="main-title">Makeup Artist?</h2>
              <p class="sub-text">
                Find all you need in the <span>Artist Corner.</span>
              </p>
            </div>
            <div class="button">
              <Link to="/explore-makeupartist">
                Find a makeup artist
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M17.3672 8.43281L8.5125 0.747656C8.44453 0.689062 8.35781 0.65625 8.26641 0.65625H6.19219C6.01875 0.65625 5.93906 0.871875 6.07031 0.984375L14.2781 8.10938H0.5625C0.459375 8.10938 0.375 8.19375 0.375 8.29688V9.70312C0.375 9.80625 0.459375 9.89062 0.5625 9.89062H14.2758L6.06797 17.0156C5.93672 17.1305 6.01641 17.3438 6.18984 17.3438H8.33438C8.37891 17.3438 8.42344 17.3273 8.45625 17.2969L17.3672 9.56719C17.4483 9.49663 17.5134 9.40949 17.558 9.31164C17.6025 9.2138 17.6256 9.10752 17.6256 9C17.6256 8.89248 17.6025 8.7862 17.558 8.68836C17.5134 8.59051 17.4483 8.50337 17.3672 8.43281Z"
                    fill="#F8F8F8"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SwiperHome;
