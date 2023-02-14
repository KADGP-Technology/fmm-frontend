import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import Adresslogin from "./Components/Adresslogin";
import Dashboardentry from "./Components/Dashboardentry";
import Portfoliologin from "./Components/Portfoliologin";
import Preseginglogin from "./Components/Preseginglogin";
import Profilelogin from "./Components/Profilelogin";
import Progressbar from "./Components/Progressbar";
import Servicelogin from "./Components/Servicelogin";
import artistlogininitialvalues from "../../Constants/FormInitialvalues/artistlogininitialvalues";
import artistloginschema from "../../Schema/Yupschema/artistschema";
import { ApiGet } from "../../Helpers/API/ApiData";
function Artistlogin() {
  const [stage, setStage] = useState(1);
  const [savedData, setSavedData] = useState({});
  const nextStage = () => {
    setStage(stage + 1);
  };
  const prevStage = () => {
    setStage(stage - 1);
  };
  const changeStage = (stageNo) => {
    setStage(stageNo);
  };

  return (
    <>
      <Dashboardentry />
      <Progressbar stage={stage} changeStage={changeStage} />
      <Formik
        initialValues={artistlogininitialvalues}
        validationSchema={artistloginschema}
        // validateOnBlur={false}
        // validateOnChange={false}
      >
        {(formikprops) => {
          return (
            <>
              {stage == 1 && (
                <Profilelogin
                  nextStage={nextStage}
                  prevStage={prevStage}
                  formikprops={formikprops}
                  changeStage={changeStage}
                  stage={stage}
                />
              )}
              {stage == 2 && (
                <Adresslogin
                  nextStage={nextStage}
                  prevStage={prevStage}
                  formikprops={formikprops}
                />
              )}
              {stage == 3 && (
                <Servicelogin
                  nextStage={nextStage}
                  prevStage={prevStage}
                  formikprops={formikprops}
                  changeStage={changeStage}
                />
              )}

              {stage == 4 && (
                <Portfoliologin
                  nextStage={nextStage}
                  prevStage={prevStage}
                  formikprops={formikprops}
                />
              )}
            </>
          );
        }}
      </Formik>
    </>
  );
}

export default Artistlogin;
