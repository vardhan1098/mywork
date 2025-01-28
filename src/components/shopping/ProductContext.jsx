import React, { createContext, useEffect, useState } from "react";

export const ShoppingContext = createContext();

const ProductContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const handleAddtoCart = (product) => {
    console.log("Current Cart Items:", cartItems);
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      console.log("Item already exists. Incrementing quantity.");
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      console.log("Adding new item to the cart.");
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  


  useEffect(() => {
    fetchProducts();
  }, []);

  let values = {
    products,
    loading,
    error,
    fetchProducts,
    cartItems,
    setCartItems,
    handleAddtoCart,
  };
  return (
    <ShoppingContext.Provider value={values}>
      {children}
    </ShoppingContext.Provider>
  );
};

export default ProductContext;
