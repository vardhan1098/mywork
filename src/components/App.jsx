// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Navbar from "./Navbar";
import PostForm from "./PostForm";
import PostDetail from "./PostDetail";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create" element={<PostForm />} />
        <Route path="/edit/:id" element={<PostForm />} />
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
