import React from "react";
import ReactDOM from "react-dom/client"; // Change to import from 'react-dom/client'
import "./index.css";
import App from "./App";

// Create a root using ReactDOM.createRoot()
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component inside the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
