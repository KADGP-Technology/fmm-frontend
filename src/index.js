import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import "./Assets/css/fonts.css";
import "./Assets/css/swiper-bundle.min.css";
import "./Assets/css/style.css";
import "./Assets/css/myindex.css";
// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";
// import "./Style/tailindex.css"
import { Provider } from "react-redux";
import store, { persistor } from "./Redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store} persistor={persistor}>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
