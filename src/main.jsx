import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App.jsx";
import Index from "./index.jsx";
import Context from "./shopping/Context.jsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Context>
        <Index />
      </Context>
    </BrowserRouter>
  </StrictMode>
);
