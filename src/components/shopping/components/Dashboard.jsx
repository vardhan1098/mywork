import React, { useContext } from "react";
import { ShoppingContext } from "../ProductContext";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const { products } = useContext(ShoppingContext);

  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/Details/${id}`);
  };

  return (
    <div>
      <h3>Shopping Cart</h3>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "20px",
          padding: "20px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid black",
              padding: "10px",
              flex: "1 1 30.333%",
              cursor: "pointer",
            }}
            onClick={() => handleNavigate(product.id)}
          >
            <img src={product.image} width={200} alt="" />
            <h4>{product.title}</h4>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
