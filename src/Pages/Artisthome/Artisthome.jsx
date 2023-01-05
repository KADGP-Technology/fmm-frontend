import React from "react";
import { Link } from "react-router-dom";

function Artisthome() {
  return (
    <section className="hero-slider-section">
      <div className="main-hero-slider swiper">
        <div className="swiper-wrapper">
          <div class="slider-item swiper-slide">
            <img
              src="../../Assets/images/slider-img-1.png"
              alt="Slider Image"
            />
            <div class="content-section" style={{ width: "100%", top: "35%" }}>
              <h2 class="main-title" style={{ textAlign: "center" }}>
                Why Join FMM?
              </h2>
              <p
                class="sub-text"
                style={{
                  textAlign: "center",
                  width: "80%",
                  margin: "auto",
                  marginTop: "40px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                consequuntur quidem nobis accusamus quisquam ratione soluta,
                voluptatem assumenda natus, sit nihil deserunt illum, omnis
                dignissimos molestiae magnam. Iusto nobis excepturi sapiente,
                odio officiis tempore dolorum nihil error quam voluptatibus quos
                natus sit corrupti hic. Vel vero harum nesciunt dicta
                consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Reiciendis non accusamus tempore ut laudantium velit
                aliquid dolore assumenda eaque iusto sint molestias, voluptatum
                eveniet nobis aut magnam illo expedita consectetur!
              </p>
            </div>

            <div
              class="button alreadyMember"
              style={{
                left: "40%",
                backgroundColor: "transparent",
              }}
            >
              <Link
                to="/artistlogin"
                style={{
                  backgroundColor: "transparent",
                  border: "2px solid White",
                }}
              >
                Already A Member? Login.
              </Link>
            </div>
            <div class="button" style={{ right: "40%" }}>
              <Link to="/artistsignup">New Here? Register.</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Artisthome;
