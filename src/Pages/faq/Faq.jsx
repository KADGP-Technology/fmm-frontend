import React, { useEffect, useState } from "react";
import $ from "jquery";

const Faq = () => {
  const [start, setStart] = useState(true);

  const Start = () => {

    if(start) {
      console.log("hey")
      function resizeFun() {
        $(".answer-wrapper").each(function (index) {
          var contentHeight = $(this).innerHeight();
          $(this).parent(".bottom-wrapper").css("height", contentHeight);
        });
      }
      resizeFun();
  
      $(window).resize(function () {
        resizeFun();
      });
  
      $(document).on("click", ".top-wrapper", function () {
        if (!$(this).parent().hasClass("top-click")) {
          resizeFun();
        }
        $(this)
          .parent()
          .toggleClass("top-click")
          .parents()
          .siblings()
          .children()
          .removeClass("top-click");
      });

      setStart(false)
    }

 
  };
  

  useEffect(() => {
    document.querySelector("body").classList.add("main-faq-section");

    return () => {
      document.querySelector("body").classList.remove("main-faq-section");
    };
  }, []);
  return (
    <>
      <div>
        <div className="breadcrumb">
          <div className="container">
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="faq.html" className="active">
                  Faq’s
                </a>
              </li>
            </ul>
          </div>
        </div>

        <section
          onMouseEnter={() => {
            Start();
          }}
          className="faq-section"
        >
          <div className="container">
            <h2 className="section-heading">Frequently Asked Questions</h2>
            <div className="row">
              <div className="col-12">
                <div className="col-wrapper">
                  <div className="top-wrapper">
                    <div className="question-wrapper">
                      <h5 className="question">
                        <span>Q:</span>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry?
                      </h5>
                      <svg
                        className="detail-open-arrow"
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="11"
                        viewBox="0 0 17 11"
                        fill="none"
                      >
                        <path
                          d="M1.9975 0L8.5 6.37085L15.0025 0L17 1.96133L8.5 10.3074L0 1.96133L1.9975 0Z"
                          fill="#E0E0E0"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="bottom-wrapper">
                    <div className="answer-wrapper">
                      <p className="answer">
                        <span>A:</span>Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum is the
                        simply dummy text of the printing and typesetting
                        industry.Lorem Ipsum is the simply dummy text of the
                        printing and typesetting industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="col-wrapper">
                  <div className="top-wrapper">
                    <div className="question-wrapper">
                      <h5 className="question">
                        <span>Q:</span>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry?
                      </h5>
                      <svg
                        className="detail-open-arrow"
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="11"
                        viewBox="0 0 17 11"
                        fill="none"
                      >
                        <path
                          d="M1.9975 0L8.5 6.37085L15.0025 0L17 1.96133L8.5 10.3074L0 1.96133L1.9975 0Z"
                          fill="#E0E0E0"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="bottom-wrapper">
                    <div className="answer-wrapper">
                      <p className="answer">
                        <span>A:</span>Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum is the
                        simply dummy text of the printing and typesetting
                        industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="col-wrapper">
                  <div className="top-wrapper">
                    <div className="question-wrapper">
                      <h5 className="question">
                        <span>Q:</span>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry?
                      </h5>
                      <svg
                        className="detail-open-arrow"
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="11"
                        viewBox="0 0 17 11"
                        fill="none"
                      >
                        <path
                          d="M1.9975 0L8.5 6.37085L15.0025 0L17 1.96133L8.5 10.3074L0 1.96133L1.9975 0Z"
                          fill="#E0E0E0"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="bottom-wrapper">
                    <div className="answer-wrapper">
                      <p className="answer">
                        <span>A:</span>Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum is the
                        simply dummy text of the printing and typesetting
                        industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="col-wrapper">
                  <div className="top-wrapper">
                    <div className="question-wrapper">
                      <h5 className="question">
                        <span>Q:</span>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry?
                      </h5>
                      <svg
                        className="detail-open-arrow"
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="11"
                        viewBox="0 0 17 11"
                        fill="none"
                      >
                        <path
                          d="M1.9975 0L8.5 6.37085L15.0025 0L17 1.96133L8.5 10.3074L0 1.96133L1.9975 0Z"
                          fill="#E0E0E0"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="bottom-wrapper">
                    <div className="answer-wrapper">
                      <p className="answer">
                        <span>A:</span>Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum is the
                        simply dummy text of the printing and typesetting
                        industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="col-wrapper">
                  <div className="top-wrapper">
                    <div className="question-wrapper">
                      <h5 className="question">
                        <span>Q:</span>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry?
                      </h5>
                      <svg
                        className="detail-open-arrow"
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="11"
                        viewBox="0 0 17 11"
                        fill="none"
                      >
                        <path
                          d="M1.9975 0L8.5 6.37085L15.0025 0L17 1.96133L8.5 10.3074L0 1.96133L1.9975 0Z"
                          fill="#E0E0E0"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="bottom-wrapper">
                    <div className="answer-wrapper">
                      <p className="answer">
                        <span>A:</span>Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum is the
                        simply dummy text of the printing and typesetting
                        industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="col-wrapper">
                  <div className="top-wrapper">
                    <div className="question-wrapper">
                      <h5 className="question">
                        <span>Q:</span>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry?
                      </h5>
                      <svg
                        className="detail-open-arrow"
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="11"
                        viewBox="0 0 17 11"
                        fill="none"
                      >
                        <path
                          d="M1.9975 0L8.5 6.37085L15.0025 0L17 1.96133L8.5 10.3074L0 1.96133L1.9975 0Z"
                          fill="#E0E0E0"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="bottom-wrapper">
                    <div className="answer-wrapper">
                      <p className="answer">
                        <span>A:</span>Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum is the
                        simply dummy text of the printing and typesetting
                        industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="col-wrapper">
                  <div className="top-wrapper">
                    <div className="question-wrapper">
                      <h5 className="question">
                        <span>Q:</span>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry?
                      </h5>
                      <svg
                        className="detail-open-arrow"
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="11"
                        viewBox="0 0 17 11"
                        fill="none"
                      >
                        <path
                          d="M1.9975 0L8.5 6.37085L15.0025 0L17 1.96133L8.5 10.3074L0 1.96133L1.9975 0Z"
                          fill="#E0E0E0"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="bottom-wrapper">
                    <div className="answer-wrapper">
                      <p className="answer">
                        <span>A:</span>Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum is the
                        simply dummy text of the printing and typesetting
                        industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Faq;
