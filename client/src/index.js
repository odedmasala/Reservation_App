import React from "react";
import reactDOM from "react-dom/client";
import App from "./App";
import "../src/index.css";
import { SearchContextProvider } from "./context/SearchContext";
const root = reactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <SearchContextProvider>
      <App />
    </SearchContextProvider>
  </React.StrictMode>
);
