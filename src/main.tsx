import React from "react";
import ReactDOM from "react-dom/client";
import "./database/database.ts";
import App from "./interface/App.tsx";
import "./styles.css";

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
