import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import { createRoot } from "react-dom/client";
import "../src/components/shared/styles/index.scss";

const root = createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter basename="/backendless-app">
        <App />
    </BrowserRouter>
);
