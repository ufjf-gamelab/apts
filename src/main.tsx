import React from "react";
import ReactDOM from "react-dom/client";

import "./database/database.ts";
import App from "./interface/App.tsx";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
