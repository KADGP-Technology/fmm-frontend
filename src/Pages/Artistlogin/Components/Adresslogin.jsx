import { ErrorMessage, Field, Form } from "formik";
import React, { useEffect } from "react";
import { ApiPost } from "../../../Helpers/API/ApiData";

function Adresslogin({ formikprops, nextStage, prevStage }) {
  console.log("fp", formikprops);
  const validateProfile = () => {
    formikprops.setTouched({
      houseNumber: true,
      country: true,
      city: true,
      state: true,
    });
    formikprops.validateField("houseNumber");
    formikprops.validateField("country");
    formikprops.validateField("city");
    formikprops.validateField("state");

    if (
      !(
        formikprops.errors["houseNumber"] ||
        formikprops.errors["country"] ||
        formikprops.errors["city"] ||
        formikprops.errors["state"]
      )
    ) {
      // ApiPost("artist/update/profile", {
      // ApiPost("user/signUp", {
      //   ...formikprops.values,
      //   profileStatus: 1,
      //   userType:1
      // })
      //   .then((res) => {
      //     console.log(res);
      //     nextStage();
      //   })
      //   .catch((err) => console.log(err));
      nextStage()
    }
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }, []);

  return (
    <>
      <div className="address-section">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="map-section">
                <h2>Address Details</h2>
                <div className="serch-bar">
                  <svg
                    className="location-search-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                  >
                    <path
                      d="M15.7004 16.6076L9.98542 10.8916C7.44309 12.6991 3.93985 12.257 1.92629 9.87456C-0.0872736 7.49214 0.0605769 3.96422 2.26642 1.75863C4.47168 -0.447923 7.99994 -0.596414 10.3828 1.41705C12.7657 3.4305 13.208 6.93408 11.4004 9.47663L17.1154 15.1926L15.7014 16.6066L15.7004 16.6076ZM6.50842 2.00062C4.61212 2.00019 2.97611 3.33131 2.59089 5.18807C2.20568 7.04482 3.17713 8.9169 4.9171 9.67087C6.65706 10.4248 8.68732 9.85346 9.77866 8.30268C10.87 6.7519 10.7225 4.64795 9.42542 3.26463L10.0304 3.86463L9.34842 3.18463L9.33642 3.17263C8.58821 2.41981 7.56981 1.99776 6.50842 2.00062Z"
                      fill="#606734"
                    />
                  </svg>
                  <Form>
                    <Field
                      className="search-box-input"
                      type="text"
                      placeholder="Serch Your Rasoi’s Locality"
                      id="search"
                      name="search"
                    />
                    <ErrorMessage name="search">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </ErrorMessage>
                  </Form>
                  <span className="location">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <path
                        d="M12.8162 16C15.029 16 16.8228 14.2091 16.8228 12C16.8228 9.79086 15.029 8 12.8162 8C10.6034 8 8.80957 9.79086 8.80957 12C8.80957 14.2091 10.6034 16 12.8162 16Z"
                        fill="#FF385C"
                      />
                      <path
                        d="M13.818 4.069V2H11.8147V4.069C10.0521 4.29368 8.41407 5.09617 7.15759 6.35057C5.90111 7.60497 5.09729 9.2403 4.87224 11H2.7998V13H4.87224C5.09696 14.7598 5.90067 16.3953 7.15722 17.6498C8.41376 18.9043 10.052 19.7066 11.8147 19.931V22H13.818V19.931C15.5809 19.7068 17.2192 18.9045 18.4757 17.65C19.7323 16.3955 20.536 14.7599 20.7605 13H22.833V11H20.7605C20.5358 9.24017 19.7321 7.60466 18.4756 6.3502C17.219 5.09574 15.5808 4.29335 13.818 4.069V4.069ZM12.8164 18C9.5019 18 6.80644 15.309 6.80644 12C6.80644 8.691 9.5019 6 12.8164 6C16.1309 6 18.8263 8.691 18.8263 12C18.8263 15.309 16.1309 18 12.8164 18Z"
                        fill="#FF385C"
                      />
                    </svg>
                    Location
                  </span>
                </div>
                <div className="map-img">
                  <div style={{ width: "100%" }}>
                    <iframe
                      width="100%"
                      height="422px"
                      frameBorder="0"
                      scrolling="no"
                      marginheight="0"
                      marginwidth="0"
                      onChange={(e) => console.log("ww", e)}
                      src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    >
                      <a href="https://www.maps.ie/distance-area-calculator.html">
                        measure distance on map
                      </a>
                    </iframe>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="adress-form-section">
                <Form>
                  <div className="input-field">
                    <label for="houseNumber">House Number *</label>
                    <ErrorMessage name="houseNumber">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </ErrorMessage>
                    <Field
                      type="text"
                      placeholder="Enter House Number"
                      name="houseNumber"
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label for="area">Area, Street, Sector</label>
                    <ErrorMessage name="area">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </ErrorMessage>
                    <Field
                      type="text"
                      placeholder="Select Here"
                      name="area"
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label for="landMark">Land Mark</label>
                    <ErrorMessage name="landMark">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </ErrorMessage>
                    <Field
                      type="text"
                      placeholder="Enter Land Mark"
                      name="landMark"
                      required
                    />
                  </div>
                  <div className="input-field">
                    <label for="country">Country*</label>
                    <ErrorMessage name="country">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </ErrorMessage>
                    <Field
                      as="select"
                      placeholder="select country"
                      name="country"
                    >
                      <option value="France">France</option>
                      <option value="Albania">Albania</option>
                      <option value="Canada">Canada</option>
                    </Field>
                  </div>
                  <div className="input-field">
                    <label for="city">City*</label>
                    <ErrorMessage name="city">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </ErrorMessage>
                    <Field as="select" name="city">
                      <option value="none" selected>
                        Select Here
                      </option>
                      <option value="surat">surat</option>
                      <option value="vapi">vapi</option>
                      <option value="mubai">mubai</option>
                    </Field>
                  </div>
                  <div className="input-field">
                    <label for="state">State*</label>
                    <ErrorMessage name="state">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </ErrorMessage>
                    <Field as="select" name="state">
                      <option value="none" selected>
                        Select Here
                      </option>
                      <option value="Bihar">Bihar</option>
                      <option value="Assam">Assam</option>
                      <option value="Gujarat">Gujarat</option>
                    </Field>
                  </div>
                </Form>
              </div>
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
    </>
  );
}

export default Adresslogin;
