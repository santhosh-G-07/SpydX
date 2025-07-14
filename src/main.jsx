import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

document.title = "SpydX - Free Online Tools and Productivity Utilities";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <App />
  </React.StrictMode>
);
