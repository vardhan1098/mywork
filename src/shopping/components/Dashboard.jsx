import React from "react";
import { ProductContext } from "../Context";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const { products, isLoading, error } = React.useContext(ProductContext);
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/product/${id}`);
  };

  if (isLoading) return <div>Loading..</div>;

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid black",
            padding: 10,
            flex: "1 1 30.333%",
            margin: 5,
            cursor: "pointer",
          }}
          onClick={() => handleNavigate(product.id)}
        >
          <img src={product.image} width={200} alt="" />
          <h2>{product.title}</h2>
          <p>$:{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
