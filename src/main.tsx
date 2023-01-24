import React from "react";
import ReactDOM from "react-dom/client";
import { ZustandImmer } from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ZustandImmer />
  </React.StrictMode>
);
