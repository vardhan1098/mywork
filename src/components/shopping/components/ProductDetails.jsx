import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { ShoppingContext } from "../ProductContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, fetchProducts, handleAddtoCart } = useContext(ShoppingContext);

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts(); // Fetch the products if they haven't been loaded yet
    }
  }, [fetchProducts, products.length]);

  // Find the product by id
  const product = products.find((product) => product.id === parseInt(id));

  // If the product is not found, show a message
  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div>
      <h3>Product Details</h3>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "20px",
          padding: "20px",
        }}
      >
        <div
          style={{
            border: "1px solid black",
            padding: "10px",
            flex: "1 1 30.333%",
          }}
        >
          <img src={product.image} width={200} alt={product.title} />
          <h4>{product.title}</h4>
          <p>$:{product.price}</p>
          <p>{product.description}</p>
          <button
            style={{
              padding: "8px 10px",
              backgroundColor: "black",
              color: "white",
              borderRadius: "10px",
              border: "none",
            }}
            onClick={() => handleAddtoCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
