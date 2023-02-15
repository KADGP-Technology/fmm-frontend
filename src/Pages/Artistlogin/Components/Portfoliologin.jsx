import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { artistlogin } from "../../../Redux/Auth/ArtistAuth/actionCreator";
import { Slide, toast, ToastContainer, Zoom } from "react-toastify";
import { ApiPost, ApiUpload } from "../../../Helpers/API/ApiData";
import { Field, Form } from "formik";
import { artistdata } from "../../../Redux/Artistdata/actionReducer";

function Portfoliologin({ prevStage, formikprops, nextStage }) {
  console.log("fp", formikprops);
  const dispatch = useDispatch();
  const [imageArray, setImageArray] = useState([]);
  const [videoArray, setVideoArray] = useState([]);
  const [albumImg, setAlbumImg] = useState(null);
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const loginArtist = () => {
    // ApiPost("artist/update/profile", {
    //   ...formikprops.values,
    //   profileStatus: 4,
    // }).then((res) => {
    //   console.log(res);
    //   dispatch(artistdata(res?.data?.data));
    //   navigate("/");
    // });
    ApiPost("user/signUp", {
      ...formikprops.values,
      profileStatus: 1,
      userType:1
    })
      .then((res) => {
        console.log(res);
        navigate("/");
        toast.success(res.data.message);

      })
      .catch((err) => console.log(err));
    nextStage()
  };
  const previewImage = (evt) => {
    const file = evt.target.files[0];
    let allowedExtensions = /(\/jpg|\/jpeg|\/png|\/gif)$/i;
    console.log(file);
    if (allowedExtensions.exec(file.type)) {
      setImageArray((olddata) => {
        return [...olddata, URL.createObjectURL(file)];
      });
      let temp_photo = [...imageArray, URL.createObjectURL(file)];
      formikprops.setValues((data) => {
        return { ...data, photos: temp_photo };
      });
    } else {
      let id = toast.error("Invalid File ! Plz Upload Image File", {
        theme: "dark",
        icon: true,
        pauseOnFocusLoss: false,
        toastId: "custom-id-yes", // for Prevent duplicate
      });
      // toast.update(id, {
      //   render: "New Content",
      //   type: toast.TYPE.INFO,
      //   //Here the magic
      //   delay: 1000,
      //   autoClose: 3000,
      // });
      console.log(id);
    }
  };
  const previewVideo = (evt) => {
    const file = evt.target.files[0];
    console.log("vf", file.type);
    let allowedExtensions = /(\/x-matroska|\/mp4|\/mkv|\.gif)$/i;
    if (allowedExtensions.exec(file.type)) {
      setVideoArray((olddata) => {
        return [...olddata, URL.createObjectURL(file)];
      });
      let temp_video = [...videoArray, URL.createObjectURL(file)];
      formikprops.setValues((data) => {
        return { ...data, videos: temp_video };
      });
    } else {
      let id = toast.error("Invalid File ! Plz Upload Video File", {
        theme: "dark",
        icon: true,
        pauseOnFocusLoss: false,
        toastId: "custom-id-yes", // for Prevent duplicate
      });
    }
  };

  const albumImgUpload = async (evt) => {
    let file = evt.target.files[0];
    console.log(file);
    if (file) {
      setAlbumImg(file);
      let temp_file = file;
      temp_file.fileURL = URL.createObjectURL(temp_file);
      let formData = new FormData();
      formData.append("image", temp_file);
      await ApiUpload("upload/profile", formData)
        .then((res) => {
          formikprops.setValues((data) => {
            return { ...data, albumUrl: res?.data?.data?.image };
          });
        })
        .catch((err) => toast.error(err.message));
    }
  };
  const removeImg = (id) => {
    let tempArr = imageArray;
    tempArr = tempArr.filter((data, idx) => idx != id);
    setImageArray(tempArr);
    formikprops.setValues((data) => {
      return { ...data, photos: tempArr };
    });
  };
  const removeVid = (id) => {
    let tempArr = videoArray;
    tempArr = tempArr.filter((data, idx) => idx != id);
    setVideoArray(tempArr);
    formikprops.setValues((data) => {
      return { ...data, videos: tempArr };
    });
  };

  return (
    <>
      {step == 1 ? (
        <>
          <div class="portfolio-section new-portfolio-section">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <div class="col-wrapper">
                    <h2 class="presaging-title">Portfolio</h2>
                  </div>
                  <div class="portfolio-inner-section">
                    {!formikprops.values.albumUrl && !albumImg ? (
                      <div class="file-uploder">
                        <h2 class="title">Create Your Album</h2>
                        <div class="file-upload-img">
                          <img src="../../../Assets/images/upload-img.png" />
                        </div>
                        <div class="file-upload-img">
                          <img src="../../../Assets/images/add-upload-img.png" />
                        </div>
                        <label htmlFor="albumimg">
                          <div class="img-upload-text">
                            <p class="sub-img-title">
                              Drag or drop a photo <span>Browse</span>
                            </p>
                          </div>
                        </label>
                        <input
                          type="file"
                          name="albumimg"
                          id="albumimg"
                          hidden
                          onChange={albumImgUpload}
                        />
                      </div>
                    ) : (
                      <>
                        <div
                          class="file-upload-img albumimgback"
                          style={{ border: "1px solid #ddd", padding: "24px" }}
                        >
                          <img
                            src={
                              albumImg
                                ? URL.createObjectURL(albumImg)
                                : formikprops.values?.albumUrl
                            }
                            style={{
                              maxWidth: "65%",
                              display: "flex",
                              margin: "auto",
                              border: "1px solid #ddd",
                              padding: "24px",
                              borderRadius: "12px",
                            }}
                          />
                        </div>

                        <label htmlFor="albumimg" style={{ display: "inline" }}>
                          <div class="img-upload-text">
                            <p class="sub-img-title">
                              Drag or drop a photo <span>Browse</span>
                            </p>
                          </div>
                        </label>
                        <input
                          type="file"
                          name="albumimg"
                          id="albumimg"
                          hidden
                          onChange={albumImgUpload}
                        />
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
      {step == 2 ? (
        <>
          <div class="portfolio-section portfolio-section-2">
            <div class="container">
              <div class="row">
                <div class="col-6">
                  <div class="col-wrapper">
                    <h2 class="presaging-title">Portfolio</h2>
                  </div>
                  <h3>Album Name</h3>
                  <Form>
                    <div class="serch-bar">
                      <Field
                        class="search-box-input"
                        type="text"
                        placeholder="Serch Your Rasoi’s Locality"
                        id="search"
                        name="albumName"
                      />
                      <div class="input-field">
                        <Field as="select" name="albumCategory">
                          <option value="none" selected="">
                            Category
                          </option>
                          <option value="category2">Category2</option>
                          <option value="category3">Category3</option>
                          <option value="category4">Category4</option>
                        </Field>
                      </div>
                    </div>
                    <div class="portfolio-inner-section portfolio-inner-section-wrapper">
                      <p class="sub-title">
                        Photos<span>(upto 3)</span>
                      </p>
                      <div class="file-uploder">
                        {imageArray?.map((url) => {
                          return (
                            <div
                              class="image"
                              style={{ width: "120px", height: "120px" }}
                            >
                              <img
                                src={url}
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                  borderRadius: "15px",
                                }}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div class="row">
                      {imageArray.map((data, idx) => {
                        return (
                          <div class="image-thumb">
                            <img src={data} />
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                              onClick={() => removeImg(idx)}
                            >
                              <circle
                                cx="16"
                                cy="16"
                                r="15"
                                fill="#FF385C"
                                stroke="#323232"
                                stroke-opacity="0.2"
                                stroke-width="0.5"
                              />
                              <path
                                d="M10.9895 10.9895C11.3088 10.6702 11.8265 10.6702 12.1458 10.9895L16 14.8437L19.8543 10.9895C20.1736 10.6702 20.6912 10.6702 21.0105 10.9895C21.3298 11.3088 21.3298 11.8264 21.0105 12.1457L17.1563 16L21.0105 19.8542C21.3298 20.1735 21.3298 20.6912 21.0105 21.0105C20.6912 21.3298 20.1735 21.3298 19.8543 21.0105L16 17.1563L12.1458 21.0105C11.8265 21.3298 11.3088 21.3298 10.9895 21.0105C10.6702 20.6912 10.6702 20.1735 10.9895 19.8542L14.8437 16L10.9895 12.1457C10.6702 11.8264 10.6702 11.3088 10.9895 10.9895Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                        );
                      })}

                      <label htmlFor="addAlbumImg">
                        {imageArray.length <= 2 ? (
                          <div class="image-thumb text-image-tumb">
                            <span>Add Image</span>
                          </div>
                        ) : null}
                      </label>

                      <input
                        type="file"
                        name="albumImg"
                        id="addAlbumImg"
                        hidden
                        onChange={previewImage}
                      />
                    </div>
                    <div class="portfolio-inner-section video-section">
                      <p class="sub-title">
                        Videos<span>(upto 1)</span>
                      </p>
                      <div class="file-uploder">
                        <div class="file-upload-img">
                          <img src="../../../Assets/images/upload-img.png" />
                        </div>
                        <div class="file-upload-img">
                          <img src="../../../Assets/images/add-upload-img.png" />
                        </div>
                        <div class="img-upload-text">
                          <p class="sub-img-title">
                            Drag or drop a photo <span>Browse</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="image-thumb">
                        <img src="../../../Assets/images/upload-img.png" />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <circle
                            cx="16"
                            cy="16"
                            r="15"
                            fill="#FF385C"
                            stroke="#323232"
                            stroke-opacity="0.2"
                            stroke-width="0.5"
                          />
                          <path
                            d="M10.9895 10.9895C11.3088 10.6702 11.8265 10.6702 12.1458 10.9895L16 14.8437L19.8543 10.9895C20.1736 10.6702 20.6912 10.6702 21.0105 10.9895C21.3298 11.3088 21.3298 11.8264 21.0105 12.1457L17.1563 16L21.0105 19.8542C21.3298 20.1735 21.3298 20.6912 21.0105 21.0105C20.6912 21.3298 20.1735 21.3298 19.8543 21.0105L16 17.1563L12.1458 21.0105C11.8265 21.3298 11.3088 21.3298 10.9895 21.0105C10.6702 20.6912 10.6702 20.1735 10.9895 19.8542L14.8437 16L10.9895 12.1457C10.6702 11.8264 10.6702 11.3088 10.9895 10.9895Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div class="image-thumb">
                        <img src="../../../Assets/images/upload-img.png" />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <circle
                            cx="16"
                            cy="16"
                            r="15"
                            fill="#FF385C"
                            stroke="#323232"
                            stroke-opacity="0.2"
                            stroke-width="0.5"
                          />
                          <path
                            d="M10.9895 10.9895C11.3088 10.6702 11.8265 10.6702 12.1458 10.9895L16 14.8437L19.8543 10.9895C20.1736 10.6702 20.6912 10.6702 21.0105 10.9895C21.3298 11.3088 21.3298 11.8264 21.0105 12.1457L17.1563 16L21.0105 19.8542C21.3298 20.1735 21.3298 20.6912 21.0105 21.0105C20.6912 21.3298 20.1735 21.3298 19.8543 21.0105L16 17.1563L12.1458 21.0105C11.8265 21.3298 11.3088 21.3298 10.9895 21.0105C10.6702 20.6912 10.6702 20.1735 10.9895 19.8542L14.8437 16L10.9895 12.1457C10.6702 11.8264 10.6702 11.3088 10.9895 10.9895Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div class="image-thumb">
                        <img src="../../../Assets/images/upload-img.png" />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <circle
                            cx="16"
                            cy="16"
                            r="15"
                            fill="#FF385C"
                            stroke="#323232"
                            stroke-opacity="0.2"
                            stroke-width="0.5"
                          />
                          <path
                            d="M10.9895 10.9895C11.3088 10.6702 11.8265 10.6702 12.1458 10.9895L16 14.8437L19.8543 10.9895C20.1736 10.6702 20.6912 10.6702 21.0105 10.9895C21.3298 11.3088 21.3298 11.8264 21.0105 12.1457L17.1563 16L21.0105 19.8542C21.3298 20.1735 21.3298 20.6912 21.0105 21.0105C20.6912 21.3298 20.1735 21.3298 19.8543 21.0105L16 17.1563L12.1458 21.0105C11.8265 21.3298 11.3088 21.3298 10.9895 21.0105C10.6702 20.6912 10.6702 20.1735 10.9895 19.8542L14.8437 16L10.9895 12.1457C10.6702 11.8264 10.6702 11.3088 10.9895 10.9895Z"
                            fill="white"
                          />
                        </svg>
                      </div>

                      <div class="image-thumb text-image-tumb">
                        <span>Add Image</span>
                      </div>
                    </div>
                  </Form>
                </div>
                <div class="col-6">
                  <div class="image-section">
                    <img
                      src="../../../Assets/images/Skincare-bro 1.png"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
      <div className="button-section">
        {step == 1 ? (
          <button
            type="button"
            className="next-button back-button"
            onClick={prevStage}
          >
            Back
          </button>
        ) : (
          <button
            type="button"
            className="next-button back-button"
            onClick={() => setStep(1)}
          >
            Back
          </button>
        )}
        {step == 1 ? (
          <button
            type="button"
            className="next-button"
            onClick={() => setStep(2)}
          >
            Continue
          </button>
        ) : (
          <button type="button" className="next-button" onClick={loginArtist}>
            Finish
          </button>
        )}
      </div>
      <ToastContainer
        autoClose={1500}
        transition={Zoom}
        hideProgressBar={true}
      />
    </>
  );
}

export default Portfoliologin;
