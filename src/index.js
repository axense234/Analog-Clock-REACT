import React from "react";
import { createRoot } from "react-dom/client";
// Main App
import App from "./Clock";
// Global CSS
import "./styles/globals.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
