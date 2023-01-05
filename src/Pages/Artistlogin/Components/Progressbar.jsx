import React from "react";

function Progressbar({ stage, changeStage }) {
  console.log("stg", stage);
  return (
    <div className="login-tab-section">
      <div className="container">
        <ul>
          <li
            onClick={() => changeStage(1)}
            className={"main-tab" + (stage >= 1 ? " active" : null)}
          >
            <a style={{ cursor: "pointer" }}>
              <span className="number">1</span>
              <div className="tab-title">Profile</div>
            </a>
          </li>
          <li
            onClick={() => changeStage(2)}
            className={"main-tab" + (stage >= 2 ? " active" : null)}
          >
            <a style={{ cursor: "pointer" }}>
              <span className="number">2</span>
              <div className="tab-title">Address Details</div>
            </a>
          </li>
          <li
            onClick={() => changeStage(3)}
            className={"main-tab" + (stage >= 3 ? " active" : null)}
          >
            <a style={{ cursor: "pointer" }}>
              <span className="number">3</span>
              <div className="tab-title">Services</div>
            </a>
          </li>
          <li className={"main-tab" + (stage >= 4 ? " active" : null)}>
            <a style={{ cursor: "pointer" }}>
              <span className="number">4</span>
              <div className="tab-title">Presaging</div>
            </a>
          </li>
          <li
            onClick={() => changeStage(4)}
            className={"main-tab" + (stage >= 4 ? " active" : null)}
          >
            <a style={{ cursor: "pointer" }}>
              <span className="number">5</span>
              <div className="tab-title">Portfolio</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Progressbar;
