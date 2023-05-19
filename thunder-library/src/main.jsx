import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer position="bottom-left" theme="dark"/>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
