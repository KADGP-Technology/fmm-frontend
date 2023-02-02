import { Field, Form } from "formik";
import React, { useState } from "react";
import services from "../../../Constants/Servicesdata/services";
import Preseginglogin from "./Preseginglogin";

function Servicelogin({ formikprops, nextStage, prevStage, changeStage }) {
  console.log("fp", formikprops);
  const [serviceOption, setServiceOption] = useState(1);
  console.log("res", services[serviceOption]);
  return (
    <>
      <div className="services-section new-services">
        <div className="container">
          <h2>Services</h2>
          <p className="sub-title">
            What's your specialisation?
            <span>( Select any one specialisation )</span>
          </p>
          <div className="row">
            <div
              className={`services-items  ${
                serviceOption == 1 ? "active" : null
              }`}
              onClick={() => setServiceOption(1)}
            >
              <span>Bridal Makeup</span>
            </div>
            <div
              className={`services-items  ${
                serviceOption == 2 ? "active" : null
              }`}
              onClick={() => setServiceOption(2)}
            >
              <span>Party Makeup</span>
            </div>
            <div
              className={`services-items  ${
                serviceOption == 3 ? "active" : null
              }`}
              onClick={() => setServiceOption(3)}
            >
              <span>Body & Face Art</span>
            </div>
            <div
              className={`services-items  ${
                serviceOption == 4 ? "active" : null
              }`}
              onClick={() => setServiceOption(4)}
            >
              <span>BCinematic Makeup</span>
            </div>
            <div
              className={`services-items  ${
                serviceOption == 5 ? "active" : null
              }`}
              onClick={() => setServiceOption(5)}
            >
              <span>High-fashion Makeup</span>
            </div>
          </div>
        </div>
      </div>
      <div className="offer-section">
        <div className="container">
          <h2 className="services-header">Services Offered</h2>
          <div className="row">
            <div className="col-6">
              {services[serviceOption].map((data, idx) => {
                return (
                  <div className="content-section">
                    <div className="input-field-checkbox">
                      <input
                        type="checkbox"
                        id={data}
                        name={data}
                        value={data}
                      />
                      <label htmlFor={data}>{data}</label>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="col-6">
              <div className="image-section">
                <img src="../../Assets/images/services-offer.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Preseginglogin
        nextStage={nextStage}
        prevStage={prevStage}
        formikprops={formikprops}
        changeStage={changeStage}
      />
    </>
  );
}

export default Servicelogin;
