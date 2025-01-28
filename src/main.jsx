import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import ProductContext from "./components/shopping/ProductContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProductContext>
  </StrictMode>
);
