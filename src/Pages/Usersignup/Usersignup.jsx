import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast, ToastContainer, Zoom } from "react-toastify";
import usersignupinitialvalues from "../../Constants/FormInitialvalues/usersignupinitialvalues";
import { ApiPost, ApiPostNoAuth, ApiPostuser } from "../../Helpers/API/ApiData";
import {
  usersignup,
  usertokenset,
} from "../../Redux/Auth/UserAuth/actionReducer";
import axios from "axios";
import config from '../../config/API/api-prod'

import userSchema from "../../Schema/Yupschema/userSchema";

function Usersignup() {
  const [otpsend, setOtpsend] = useState(false);
  const [signup, setSignup] = useState(false);
  const dispatch = useDispatch();
  const otpref = useRef(null);
  const confirmpassword = useRef(null);
  const phoneNumberref = useRef(null);
  let phonenumber = ''

  const navigate = useNavigate();
  const sendotp = () => {
    console.log(phoneNumberref.current.value);
    phonenumber = phoneNumberref.current.value
    if (
      phoneNumberref.current.value &&
      phoneNumberref.current.value.length == 10
    ) {
      axios.post(config.hostUrl+'/user/verify/mobile', { 
        phoneNumber: phoneNumberref.current.value,
        userType: 0,}) .then((res) => {
          console.log(res);
          setOtpsend(true);
          toast.success("OTP Sent Successfully");
        })
        .catch((err) => toast.error(err));
    } else {
      toast.error("Enter Valid Number");
    }
  };
  const handleOTPsubmit = () => {
    if (otpref.current.value && otpref.current.value.length == 6) {
      axios.post(config.hostUrl + "/user/verifyOtp", {
        otp: otpref.current.value,
        phoneNumber: phoneNumberref.current.value,
        userType: 0,
      })
        .then((res) => {
          console.log(res);
          res.status == "200" && toast.success(res.message);
          dispatch(usertokenset({ token: res.data.data.token }));
          setSignup(!signup);
        })
        .catch((err) => toast.error(err.message));
    } else {
      toast.error("Enter 6 digit  OTP");
    }
  };
  const validation = (email) => {
    const result = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return result.test(String(email).toLowerCase());
}

  const handlesignup = (obj) => {
    // console.log(obj);
    
    if(obj.firstName.length <= 2 || obj.firstName.length >=15) return toast.warning("Enter Your Correct First Name")
    if(obj.lastName.length <=2 || obj.lastName.length >= 15) return toast.warning("Enter Your Correct Last Name")
    if(!validation(obj.email)) return toast.warning("Enter Correct Email")
    if(obj.password !== obj.confirmpassword) return toast.warning("Re-enter Password Not Same as Password")
    axios.post(config.hostUrl + "/user/signUp", {
      ...obj,
      phoneNumber: phonenumber,
      userType: 0,
    })
      .then((res) => {
        console.log(res)
        res.status == "200"
          ? toast.success("Sign UP Completed")
          : toast.error(res.message);
        dispatch(
          usersignup({
            username: obj.firstName,
          })
        );
        // navigate("/");
      })
      .catch((err) => toast.error(err));
    console.log("first");
  };
  return (
    <>
      {!signup ? (
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
                    <h2>Sign Up</h2>
                    <div className="login-form-section">
                      <form className="contact-form" action="" method="post">
                        <div className="input-field contact-number">
                          <label for="phone">Contact Number*</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="+91 00 000 000"
                            ref={phoneNumberref}
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
                        {otpsend && (
                          <div className="input-field contact-number">
                            <label for="phone">Enter OTP</label>
                            <input
                              type="text"
                              id="otp"
                              name="otp"
                              ref={otpref}
                            />
                          </div>
                        )}
                        <div className="button-section">
                          {!otpsend ? (
                            <button
                              type="button"
                              className="login-button"
                              onClick={sendotp}
                              style = {{cursor:'pointer'}}
                            >
                              Send OTP
                            </button>
                          ) : (
                            <button
                              type="button"
                              className="login-button"
                              onClick={handleOTPsubmit}
                              style = {{cursor:'pointer'}}
                            >
                              Sign Up
                            </button>
                          )}
                        </div>
                        <div className="or">
                          <span>OR</span>
                        </div>
                        <div className="signup-button-section">
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
                            Sign Up With Google
                          </button>
                        </div>
                        <div className="login-button-line">
                          Already Have Account
                          <Link to="/userlogin">Log In</Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password : '',
            confirmpassword : '',
          }}
          onSubmit={handlesignup}
        >
          <Form>
            <div className="login-page">
              <div className="main-user-login-section">
                <div className="container">
                  <div className="row">
                    <div className="col-6">
                      <div className="image-section">
                        <img
                          src="../../Assets/images/user-login.png"
                          alt="iamge"
                        />
                      </div>
                      <h2 className="title">Welcome to Findmymua</h2>
                      <p className="description">
                        Explore through thousands of Makeup Artists & Book the
                        right one for you.
                      </p>
                    </div>
                    <div className="col-6">
                      <div className="login-section">
                        <h2>FINISH SIGNING UP</h2>
                        <div className="login-form-section">
                          <div className="input-field contact-number">
                            <label for="firstName">First Name*</label>
                            <Field
                              type="text"
                              id="firstName"
                              name="firstName"
                              
                            />
                          </div>
                          <div className="input-field contact-number">
                            <label for="lastName">Last Name*</label>
                            <Field type="text" id="lastName" name="lastName" />
                          </div>
                          <div className="input-field contact-number">
                            <label for="email">Email Id*</label>
                            <Field type="email" id="email" name="email" />
                          </div>
                          <div className="input-field contact-number">
                            <label for="password">Password</label>
                            <Field
                              type="password"
                              id="password"
                              name="password"
                            />
                          </div>
                          <div className="input-field contact-number">
                            <label for="confirmpassword">Re-enter Password</label>
                            <Field
                              type="password"
                              id="confirmpassword"
                              name="confirmpassword"
                            />
                          </div>
                         

                          <div className="button-section">
                            <button type="submit" className="login-button">
                              Continue
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      )}
      <ToastContainer
        autoClose={1500}
        transition={Zoom}
        hideProgressBar={true}
      />
    </>
  );
}

export default Usersignup;
