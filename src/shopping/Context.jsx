import React, { useEffect } from "react";

export const ProductContext = React.createContext();
const Context = ({ children }) => {
  const [products, setProducts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [cart, setCart] = React.useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };

  React.useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddCart = (selectedProduct) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.id === selectedProduct.id
      );
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === selectedProduct.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...selectedProduct, quantity: 1 }];
      }
    });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  let values = {
    products,
    isLoading,
    error,
    fetchProducts,
    cart,
    setCart,
    handleAddCart,
  };
  return (
    <>
      <ProductContext.Provider value={values}>
        {children}
      </ProductContext.Provider>
    </>
  );
};

export default Context;
