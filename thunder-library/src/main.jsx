import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";
import ContextProvider from "./context/Context";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <Router>
        <Toaster position="bottom-right" reverseOrder={false} />
          <App />
      </Router>
    </ContextProvider>
  </React.StrictMode>
);
