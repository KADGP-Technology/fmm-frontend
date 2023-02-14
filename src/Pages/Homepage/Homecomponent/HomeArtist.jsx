import React from "react";
import SwiperArtist from "../../../Components/Swiper/SwiperArtist";
import { useSwiper } from "swiper/react";
function HomeArtist() {
  const swiper = useSwiper();
  return (
    <>
      <section className="artists-section">
        <div className="container">
          <h2 className="section-title">
            artists in demand
            <a href="#" className="view-all-link">
              View All
            </a>
          </h2>
          <div className="artists-section-inner">
            <SwiperArtist />
            {/* </div>
              <div className="swiper-pagination"></div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
export default HomeArtist;