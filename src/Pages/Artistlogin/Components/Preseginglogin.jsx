import { ErrorMessage, Field, Form } from "formik";
import React from "react";
import { ApiPost } from "../../../Helpers/API/ApiData";

function Preseginglogin({ formikprops, nextStage, prevStage, changeStage }) {
  console.log("fp", formikprops);
  const validateProfile = () => {
    formikprops.setTouched({
      price: true,
      experience: true,
    });
    formikprops.validateField("price");
    formikprops.validateField("experience");
    if (!(formikprops.errors["price"] || formikprops.errors["experience"])) {
      ApiPost("artist/update/profile", {
        ...formikprops.values,
        profileStatus: 3,
      })
        .then((res) => {
          console.log(res);
          changeStage(4);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <div className="main-presaging-section">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="col-wrapper">
                <h2 className="presaging-title">Presaging</h2>
              </div>
              <div className="presaging-form-section">
                <Form className="presaging-form">
                  <div className="input-field">
                    <label for="services">Services starting at (in ₹)*</label>
                    <ErrorMessage name="price">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </ErrorMessage>
                    <Field
                      type="text"
                      placeholder="Price, eg: ₹500"
                      name="price"
                      required
                    />
                  </div>
                  <div className="input-field-checkbox checkbox-input">
                    <Field
                      type="checkbox"
                      id="isCertified"
                      name="isCertified"
                      value="isCertified"
                    />
                    <label for="isCertified">Are you isCertified?</label>
                    <ErrorMessage name="isCertified">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </ErrorMessage>
                  </div>
                  <div className="field-button">
                    <div className="input-field">
                      <label for="uploadcertificate">
                        Upload your certificate
                      </label>
                      <ErrorMessage name="uploadcertificate">
                        {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                      </ErrorMessage>
                      <Field
                        type="text"
                        placeholder="File name would come here"
                        name="uploadcertificate"
                        required
                      />
                    </div>
                    <button className="upload">upload</button>
                  </div>
                  <div className="input-field">
                    <label for="experience">Experience*</label>
                    <ErrorMessage name="experience">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </ErrorMessage>
                    <Field as="select" name="experience">
                      <option value="none" selected>
                        Select Here
                      </option>
                      <option value="1">1</option>
                      <option value="5">5</option>
                      <option value="10">10</option>
                    </Field>
                  </div>
                  <div className="input-field-checkbox checkbox-input">
                    <Field
                      type="checkbox"
                      id="style"
                      name="style"
                      value="style"
                    />
                    <label for="style">Do you offer Hair Styling?</label>
                    <ErrorMessage name="style">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </ErrorMessage>
                  </div>
                  <div className="input-field">
                    <ErrorMessage name="workingstate">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </ErrorMessage>
                    <Field as="select" name="workingstate">
                      <option value="none" selected>
                        Select states
                      </option>
                      <option value="Bihar">Bihar</option>
                      <option value="Assam">Assam</option>
                      <option value="Gujarat">Gujarat</option>
                    </Field>
                  </div>
                  <div className="input-field">
                    <label for="state">What brands do you use?</label>
                    <ErrorMessage name="brand">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </ErrorMessage>
                    <Field as="select" name="brand">
                      <option value="none" selected>
                        Select Your Product
                      </option>
                      <option value="Amora">Amora</option>
                      <option value="Bata">Bata</option>
                      <option value="Amora">Amora</option>
                    </Field>
                  </div>
                  <div className="input-field-checkbox">
                    <Field
                      type="checkbox"
                      id="profile"
                      name="profile"
                      value="yes"
                    />
                    <label for="profile">
                      I dont want to show this in my profile
                    </label>
                    <ErrorMessage name="profile">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </ErrorMessage>
                  </div>
                </Form>
              </div>
            </div>
            <div className="col-6">
              <div className="image-section">
                <img src="../../Assets/images/presaging-img.png" alt="image" />
              </div>
            </div>
            <div className="button-section">
              <button
                type="button"
                className="next-button back-button"
                onClick={prevStage}
              >
                Back
              </button>
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
    </>
  );
}

export default Preseginglogin;
