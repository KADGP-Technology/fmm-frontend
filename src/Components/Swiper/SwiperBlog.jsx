import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import blogData from "../../Constants/SupportData/blogData";
import Blogcard from "../Cards/Blogcard";
function SwiperBlog() {
  return (
    <>
      <Swiper
        // effect={"cube"}
        grabCursor={true}
        // centeredSlides={true}
        slidesPerView={2.3}
        // coverflowEffect={{
        //   rotate: 50,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 1,
        //   slideShadows: false,
        // }}
        // onSlideChange={(e) => e.activeIndex}
        loop={true}
        // navigation={{
        //   nextEl: ".next",
        // }}
        spaceBetween={103}
        // speed={800}
        // autoplay={4000}
        breakpoints={{
          200: {
            slidesPerView: 1.3,
            spaceBetween: 30,
          },
          600: {
            slidesPerView: 2.5,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 1.5,
            spaceBetween: 30,
          },
          850: {
            slidesPerView: 2.3,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 2.3,
          },
        }}
      >
        {blogData.map(({ img }) => {
          return (
            <SwiperSlide>
              <Blogcard src={img} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default SwiperBlog;