import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css"; //App.js burada çağırıldığı için bootstrap modulü buraya eklenir
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
