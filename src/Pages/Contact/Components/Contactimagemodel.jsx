import React from "react";

function Contactimagemodel() {
  return (
    <>
      <div className="image-model">
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
            <img src="assets/images/upload-img.png" alt="image" />
            <div className="text">
              Drag or drop a photo <span>Browse</span>
            </div>
          </div>
          <div className="model-footer">
            <button className="upload-button">Uplaod Profile Photo</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactimagemodel;
