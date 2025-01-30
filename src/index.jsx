import React from "react";
import { Route, Routes } from "react-router";
import Dashboard from "./shopping/components/Dashboard";
import ProductDetails from "./shopping/components/productDetails";
import Header from "./shopping/components/Header";
import Cart from "./shopping/components/cart";
import Register from "./shopping/components/auth/Register";
import Login from "./shopping/components/auth/Login";

const index = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
      </Routes>
    </>
  );
};

export default index;
