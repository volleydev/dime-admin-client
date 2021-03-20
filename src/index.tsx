import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./app";

import dotenv from "dotenv";

dotenv.config();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
