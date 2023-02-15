import { Form, Field, ErrorMessage } from "formik";
import React, { useState } from "react";

import { ApiPost, ApiPostNoAuth } from "../../../Helpers/API/ApiData";

import { useRef } from "react";
import { toast, ToastContainer, Zoom } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { artisttokenset } from "../../../Redux/Auth/ArtistAuth/actionCreator";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "react-avatar-edit";

function Profilelogin({ formikprops, nextStage, changeStage, stage }) {
  const dispatch = useDispatch();
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [open, setOpen] = useState(false);
  const [sendOtp, setSendOtp] = useState(false);
  const otpref = useRef(null);
  const navigate = useNavigate();

  const validateProfile = () => {
    formikprops.setTouched({
      fillRule: true,
      lastName: true,
      gender: true,
      email: true,
      phone: true,
    });
    formikprops.validateField("firstName");
    formikprops.validateField("lastName");
    formikprops.validateField("gender");
    formikprops.validateField("email");
    formikprops.validateField("phoneNumber");

    if (
      !(
        formikprops.errors["firstName"] ||
        formikprops.errors["lastName"] ||
        formikprops.errors["gender"] ||
        formikprops.errors["eamil"] ||
        formikprops.errors["phoneNumber"]
      ) &&
      formikprops.dirty
    ) {
      // ApiPost("artist/update/profile", {
      // ApiPost("user/signUp", {
      //   ...formikprops.values,
      //   // profileStatus: 0,
      //   userType:1
      // })
      //   .then((res) => {
      //     nextStage();
      //   })
      //   .catch((err) => toast.error(err.message));

      nextStage()
    }
  };

  const openImage = () => {
    setOpen(!open);
  };
  const closeImage = () => {
    setOpen(false);
  };

  const saveimg = async () => {
    formikprops.setValues((data) => {
      console.log("DATAAA",data);
      return {
        ...data,
        profilePhoto: avatarPreview,
      };
    });
    closeImage();
  };

  const varifyMobile = () => {
    if (
      formikprops.values.phoneNumber.length == 10 &&
      formikprops.values.phoneNumber &&
      !formikprops.values.ismobilevarified
    ) {
      ApiPostNoAuth("user/verify/mobile", {
        phoneNumber: formikprops.values.phoneNumber,
        userType: 1,
      })
        .then((res) => {
          if (res.status == "200") {
            toast.success("Message Send Successfully");
            setSendOtp(true);
          } else {
            toast.error(res.message);
          }
        })
        .catch((error) => toast.error(error.message));
    } else {
      formikprops.values.ismobilevarified
        ? toast.error("Number Already Varified")
        : toast.error("Enter valid Number");
    }
  };
  const handleotpSubmit = () => {
    ApiPostNoAuth("user/verifyOtp", {
      otp: otpref.current.value,
      phoneNumber: formikprops.values.phoneNumber,
      userType: 1,
    })
      .then((res) => {
        console.log("res",res)
        dispatch(
          artisttokenset({
            token: res.data.data.token,
            usertype: res.data.data.userType,
          })
        );
        if (res?.data?.data?.data?.profileStatus == 4) {
          navigate("/artistlogin");
        }
        res?.data?.data?.data?.profileStatus != 0 &&
          changeStage(res?.data?.data?.data?.profileStatus + 1);

        formikprops.setValues((data) => {
          return {
            ...data,
            ...res.data.data.data,
            ismobilevarified: true,
          };
        });
        setSendOtp(false);
        toast.success(res.message);
      })
      .catch((error) => toast(error.message));
  };
  // useMemo(() => {
  //   ApiGet("artist/profile").then((res) => {
  //     console.log(res);
  //     formikprops.setValues({ ...formikprops.values, ...res.data.data });
  //     // changeStage(Number(res.data.data.profileStatus) + 1);
  //   });
  // }, [stage]);

  return (
    <>
      <div className="main-login-section">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="col-wrapper">
                <div className="header-top">
                  <h2 className="login-title">About Me</h2>
                  {!formikprops.values.profileimage &&
                  !formikprops.values.profilePhoto ? (
                    <img
                      className="upload-image"
                      src="../../../Assets/images/login-top-img.png"
                      alt="image"
                      id="profileimg"
                      onClick={openImage}
                    />
                  ) : (
                    // <ReactRoundedImage
                    //   image={formikprops.values.profilePhoto}
                    //   roundedColor="#C7C7C7"
                    //   imageWidth="85"
                    //   imageHeight="85"
                    //   roundedSize="5"
                    //   borderRadius="70"
                    //   className="upload-image"
                    // />
                    <img
                      src={
                        avatarPreview ||
                        formikprops.values.profileimage ||
                        formikprops.values.profilePhoto
                      }
                      style={{ width: "100px" }}
                      alt=""
                      srcset=""
                    />
                  )}
                </div>
              </div>
              <div className="login-form-section">
                <Form className="login-form">
                  <div className="input-field">
                    <label htmlFor="firstName">First Name*</label>
                    <ErrorMessage name="firstName">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </ErrorMessage>
                    <Field
                      type="text"
                      placeholder="Enter First name"
                      name="firstName"
                      required
                    />
                  </div>
                  <div className="two-field">
                    <div className="input-field">
                      <label htmlFor="lastName">Last Name*</label>
                      <ErrorMessage name="lastName">
                        {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                      </ErrorMessage>
                      <Field
                        type="text"
                        placeholder="Last name"
                        name="lastName"
                        required
                      />
                    </div>
                    <div className="input-field">
                      <label htmlFor="gender"> Select you gender*</label>
                      <ErrorMessage name="gender">
                        {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                      </ErrorMessage>
                      <Field as="select" name="gender">
                        <option value="none">Select Gender</option>
                        <option value={0}>Male</option>
                        <option value={1}>Femail</option>
                        <option value={2}>Tranc</option>
                      </Field>
                    </div>
                  </div>
                  {!sendOtp ? (
                    <div className="input-field contact-number">
                      <label htmlFor="phone">
                        Contact Number*{" "}
                        <ErrorMessage name="phone">
                          {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                        </ErrorMessage>{" "}
                      </label>

                      <Field
                        type="tel"
                        id="phone"
                        name="phoneNumber"
                        placeholder="+91 1234567890"
                        readOnly={
                          formikprops.values.ismobilevarified ? true : false
                        }
                      />
                      <svg
                        className="phone-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_516_8878)">
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
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={varifyMobile}
                      >
                        {formikprops.values.ismobilevarified ? (
                          " Verified"
                        ) : (
                          <p style={{ color: "red", fontSize: "10px" }}>
                            Verify
                          </p>
                        )}
                      </span>
                    </div>
                  ) : (
                    <div className="input-field contact-number">
                      <label htmlFor="otp">Enter OTP</label>

                      <input
                        type="text"
                        id="otp"
                        name="otp"
                        onChange={(e) =>
                          e.target.value.length == 6 ? handleotpSubmit() : null
                        }
                        ref={otpref}
                      />
                    </div>
                  )}
                  <div className="input-field">
                    <label htmlFor="email">Enter your email*:</label>
                    <ErrorMessage name="email">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </ErrorMessage>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email Address"
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="message">
                      <span>Bio For Your Profile</span>
                      <span className="word">Within 200 Words</span>
                    </label>
                    <ErrorMessage name="message">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </ErrorMessage>
                    <Field
                      as="textarea"
                      name="bio"
                      rows="6"
                      cols="50"
                      placeholder="Bio"
                    ></Field>
                  </div>
                </Form>
              </div>
            </div>
            <div className="col-6">
              <div className="image-section">
                <img src="./Assets/images/login-right-img.png" alt="image" />
              </div>
            </div>
            <div className="login-button">
              <button
                type="button"
                className="next-button"
                onClick={validateProfile}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      {open ? (
        <div className={`image-model opened`}>
          <div className="image-model-wrapper">
            <div className="model-header">
              <h2>Add Profile Image</h2>
              <svg
                className="close-model"
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                onClick={() => setOpen(!open)}
              >
                <path
                  d="M1 1L14 14M14 1L1 14L14 1Z"
                  stroke="#1A1A1A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="model-center">
              {/* <input
                type="file"
                name="a"
                id="profileimage"
                hidden
                onChange={previewimage}
              ></input>
              <img
                src="./Assets/images/upload-img.png"
                id="forpreview"
                alt="image"
              ></img>
              <label htmlFor="profileimage">
                <div className="text" style={{ cursor: "pointer" }}>
                  Drag or drop a photo <span>Browse</span>
                </div>
              </label> */}
              <Avatar
                width={400}
                height={300}
                src={avatarUrl}
                onCrop={(view) => setAvatarPreview(view)}
                onClose={() => setAvatarPreview(null)}
              ></Avatar>
            </div>

            <div className="model-footer">
              {" "}
              <button className="upload-button" onClick={saveimg}>
                Uplaod Profile Photo
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <ToastContainer
        autoClose={1500}
        transition={Zoom}
        hideProgressBar={true}
      />
    </>
  );
}

export default Profilelogin;
