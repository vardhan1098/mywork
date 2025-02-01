import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Blog from "./Blog/Blog.jsx";
import Todo from "./Redux_Todo/components/Todo.jsx";
import { Provider } from "react-redux";
import store from "./Redux_Todo/Redux/Store.jsx";
import Mod from "./Redux_Todo/components/Mod.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Mod/>
  </StrictMode>
);
