import React from "react";
import { Route, Routes } from "react-router";
import Dashboard from "./components/shopping/components/Dashboard";
import ProductDetails from "./components/shopping/components/ProductDetails";
import Header from "./components/shopping/components/Header";
import CartItems from "./components/shopping/components/CartItems";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Details/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartItems />} />
      </Routes>
    </>
  );
};

export default App;
