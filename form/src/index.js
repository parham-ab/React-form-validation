import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// react-router-dom
import { BrowserRouter } from "react-router-dom";
// styles
import "./assets/styles/index.scss";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
