import React from "react";

function Contactform() {
  return (
    <>
      <div className="main-login-section contact-form-section">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="col-wrapper">
                <div className="header-top">
                  <h2 className="login-title">Contact Us</h2>
                </div>
              </div>
              <div className="login-form-section">
                <form className="login-form" action="" method="post">
                  <div className="input-field">
                    <label for="experience">How can we help you?*</label>
                    <select name="experience">
                      <option value="none" selected>
                        Select Here
                      </option>
                      <option value="1">
                        Lorem Ipsum is simply dummy text
                      </option>
                      <option value="5">
                        Lorem Ipsum is simply dummy text
                      </option>
                      <option value="10">
                        Lorem Ipsum is simply dummy text
                      </option>
                    </select>
                  </div>
                  <div className="input-field">
                    <label for="firstname">First Name*</label>
                    <input
                      type="text"
                      placeholder="Enter First name"
                      name="firstname"
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label for="email">Email Address*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email Address"
                    />
                  </div>
                  <div className="input-field contact-number">
                    <label for="phone">Mobile Number*</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+91 7748077770"
                    />
                    <svg
                      className="phone-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_516_8878)">
                        <path
                          d="M0 22.4993C0 23.3834 0.35119 24.2312 0.976311 24.8564C1.60143 25.4815 2.44928 25.8327 3.33333 25.8327H26.6667C27.5507 25.8327 28.3986 25.4815 29.0237 24.8564C29.6488 24.2312 30 23.3834 30 22.4993V19.166H0V22.4993Z"
                          fill="#138808"
                        />
                        <path
                          d="M0 10.834H30V19.1673H0V10.834Z"
                          fill="#EEEEEE"
                        />
                        <path
                          d="M30 10.8327V7.49935C30 6.61529 29.6488 5.76745 29.0237 5.14233C28.3986 4.5172 27.5507 4.16602 26.6667 4.16602H3.33333C2.44928 4.16602 1.60143 4.5172 0.976311 5.14233C0.35119 5.76745 0 6.61529 0 7.49935L0 10.8327H30Z"
                          fill="#FF9933"
                        />
                        <path
                          d="M14.9998 18.3327C16.8408 18.3327 18.3332 16.8403 18.3332 14.9993C18.3332 13.1584 16.8408 11.666 14.9998 11.666C13.1589 11.666 11.6665 13.1584 11.6665 14.9993C11.6665 16.8403 13.1589 18.3327 14.9998 18.3327Z"
                          fill="#000080"
                        />
                        <path
                          d="M15 17.5C16.3807 17.5 17.5 16.3807 17.5 15C17.5 13.6193 16.3807 12.5 15 12.5C13.6193 12.5 12.5 13.6193 12.5 15C12.5 16.3807 13.6193 17.5 15 17.5Z"
                          fill="#EEEEEE"
                        />
                        <path
                          d="M15 12.5L15.1217 14.3867L15.9558 12.6908L15.3475 14.48L16.7675 13.2317L15.52 14.6525L17.3092 14.0433L15.6133 14.8783L17.5 15L15.6133 15.1217L17.3092 15.9558L15.52 15.3475L16.7675 16.7675L15.3475 15.52L15.9558 17.3092L15.1217 15.6133L15 17.5L14.8783 15.6133L14.0433 17.3092L14.6525 15.52L13.2317 16.7675L14.48 15.3475L12.6908 15.9558L14.3867 15.1217L12.5 15L14.3867 14.8783L12.6908 14.0433L14.48 14.6525L13.2317 13.2317L14.6525 14.48L14.0433 12.6908L14.8783 14.3867L15 12.5Z"
                          fill="#6666B3"
                        />
                        <path
                          d="M14.9998 15.8327C15.4601 15.8327 15.8332 15.4596 15.8332 14.9993C15.8332 14.5391 15.4601 14.166 14.9998 14.166C14.5396 14.166 14.1665 14.5391 14.1665 14.9993C14.1665 15.4596 14.5396 15.8327 14.9998 15.8327Z"
                          fill="#000080"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_516_8878">
                          <rect width="30" height="30" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="input-field">
                    <label for="message">
                      <span>Type Text*</span>
                    </label>
                    <textarea
                      name="message"
                      rows="6"
                      cols="50"
                      placeholder="Type Text"
                    ></textarea>
                  </div>
                  <div className="login-button">
                    <button type="button" className="next-button">
                      SUBMIT
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-6">
              <div className="image-section">
                <img src="assets/images/contact-img.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactform;
