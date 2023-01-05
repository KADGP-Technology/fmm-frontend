import React, { useRef, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { ApiPostNoAuth } from "../../Helpers/API/ApiData";
import { artisttokenset } from "../../Redux/Auth/ArtistAuth/actionCreator";
import { useDispatch, useSelector } from "react-redux";
import { usertokenset } from "../../Redux/Auth/UserAuth/actionReducer";
import { toast, ToastContainer, Zoom } from "react-toastify";

function Userlogin() {
  const otpref = useRef(null);
  const phone = useRef(null);
  const navigate = useNavigate();
  const [isOtpSend, setIsOtpSend] = useState(false);

  const dispatch = useDispatch();

  const handleGoogleLogin = (user) => {
    localStorage.setItem("socialAccData", JSON.stringify(user));

    console.log(user);

    const parsedsocialAccData = JSON.parse(JSON.stringify(user));
    const body = {
      accessToken: parsedsocialAccData?.accessToken,
      idToken: parsedsocialAccData?.tokenId,
      userType: 0,
    };

    ApiPostNoAuth("user/auth/google", body).then((res) => {
      console.log(res);
      dispatch(
        usertokenset({
          token: res.data.data.token,
          usertype: res.data.data.userType,
        })
      );
      navigate("/");
    });
  };
  const handlesendotp = () => {
    if (phone.current.value && phone.current.value.length == 10) {
      ApiPostNoAuth("user/login", {
        phoneNumber: phone.current.value,
        userType: 0,
      })
        .then((res) => {
          console.log(res);
          toast.success("OTP send Successfully");
          setIsOtpSend(true);
        })
        .catch((err) => {
          toast.error(err.message);
        });
    } else {
      toast.error("Enter Valid Number");
    }
  };
  const handlesubmitotp = () => {
    if (otpref.current.value && otpref.current.value.length == 6) {
      ApiPostNoAuth("user/verify/mobile", {
        otp: otpref.current.value,
        phoneNumber: phone.current.value,
        userType: 0,
      })
        .then((res) => {
          toast.success("OTP Varified Successfully");
          dispatch(
            usertokenset({
              token: res.data.data?.token,
              usertype: res.data.data?.userType,
            })
          );
          navigate("/");
        })
        .catch((err) => toast.error(err));
    } else {
      toast.error("Enter Valid Number");
    }
  };
  return (
    <>
      <div className="login-page">
        <div className="main-user-login-section">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className="image-section">
                  <img src="../../Assets/images/user-login.png" alt="iamge" />
                </div>
                <h2 className="title">Welcome to Findmymua</h2>
                <p className="description">
                  Explore through thousands of Makeup Artists & Book the right
                  one for you.
                </p>
              </div>
              <div className="col-6">
                <div className="login-section">
                  <h2>Log In</h2>
                  <div className="login-form-section">
                    <form className="contact-form" action="" method="post">
                      <div className="input-field contact-number">
                        <label for="phone">Contact Number*</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="+91 00 000 000"
                          ref={phone}
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
                        <span style={{ color: "red" }}>Not Verified</span>
                      </div>
                      {isOtpSend && (
                        <div className="input-field contact-number">
                          <label for="phone">Enter OTP</label>
                          <input type="text" id="otp" name="otp" ref={otpref} />
                        </div>
                      )}
                      <div className="button-section">
                        {!isOtpSend ? (
                          <button
                            type="button"
                            className="login-button"
                            onClick={handlesendotp}
                          >
                            Send OTP
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="login-button"
                            onClick={handlesubmitotp}
                          >
                            Varify OTP
                          </button>
                        )}
                      </div>
                      <div className="or">
                        <span>OR</span>
                      </div>

                      <GoogleLogin
                        clientId={
                          "1045891194371-ak7uqmuqeuah1mt1rnd36rvehc3l2dtl.apps.googleusercontent.com"
                        }
                        render={(renderProps) => (
                          // <button
                          //   className="btn btn-normal2 mt-4 google border30 text-white my-auto  align-items-center"
                          //   onClick={renderProps.onClick}
                          // >
                          //   <div className='d-flex justify-content-center align-items-center '>

                          //   <div>
                          //   <AiOutlineGoogle className='mr-5' />
                          //   </div>
                          //   <div className='ml-5' style={{marginLeft:"10px"}}>Continue With Google</div>
                          //   </div>
                          // </button>
                          <div
                            className="signup-button-section"
                            onClick={renderProps.onClick}
                          >
                            <button type="button" className="sign-up-button">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                fill="none"
                              >
                                <path
                                  d="M27.2569 12.5519H26.25V12.5H15V17.5H22.0644C21.0338 20.4106 18.2644 22.5 15 22.5C10.8581 22.5 7.5 19.1419 7.5 15C7.5 10.8581 10.8581 7.5 15 7.5C16.9119 7.5 18.6513 8.22125 19.9756 9.39937L23.5112 5.86375C21.2787 3.78312 18.2925 2.5 15 2.5C8.09688 2.5 2.5 8.09688 2.5 15C2.5 21.9031 8.09688 27.5 15 27.5C21.9031 27.5 27.5 21.9031 27.5 15C27.5 14.1619 27.4137 13.3438 27.2569 12.5519Z"
                                  fill="#FFC107"
                                />
                                <path
                                  d="M3.94141 9.18187L8.04828 12.1937C9.15953 9.4425 11.8508 7.5 15.0002 7.5C16.912 7.5 18.6514 8.22125 19.9758 9.39937L23.5114 5.86375C21.2789 3.78312 18.2927 2.5 15.0002 2.5C10.1989 2.5 6.03516 5.21062 3.94141 9.18187Z"
                                  fill="#FF3D00"
                                />
                                <path
                                  d="M15.0002 27.4995C18.2289 27.4995 21.1627 26.2638 23.3808 24.2545L19.5121 20.9807C18.2149 21.9672 16.6299 22.5007 15.0002 22.4995C11.7489 22.4995 8.98832 20.4263 7.94832 17.5332L3.87207 20.6738C5.94082 24.722 10.1421 27.4995 15.0002 27.4995Z"
                                  fill="#2AAA8A"
                                />
                                <path
                                  d="M27.2569 12.5519H26.25V12.5H15V17.5H22.0644C21.5714 18.8853 20.6833 20.0957 19.51 20.9819L19.5119 20.9806L23.3806 24.2544C23.1069 24.5031 27.5 21.25 27.5 15C27.5 14.1619 27.4138 13.3437 27.2569 12.5519Z"
                                  fill="#1976D2"
                                />
                              </svg>
                              Sign In With Google
                            </button>
                          </div>
                        )}
                        buttonText=""
                        onSuccess={handleGoogleLogin}
                        onFailure={(e) => {
                          console.log(e);
                        }}
                        cookiePolicy={"single_host_origin"}
                      />

                      <div className="login-button-line">
                        Don't Have an account?
                        <Link to="/usersignup">Sign Up</Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        autoClose={1500}
        transition={Zoom}
        hideProgressBar={true}
      />
    </>
  );
}

export default Userlogin;
