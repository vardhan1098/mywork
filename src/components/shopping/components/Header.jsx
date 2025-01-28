import React, { useContext } from "react";
import { ShoppingContext } from "../ProductContext";
import { useNavigate } from "react-router";

const Header = () => {
  const { cartItems } = useContext(ShoppingContext);
  console.log(cartItems);

  const navigate = useNavigate();

  const handleNavigate = () =>{
    navigate("/cart");
  }
  

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "bisque",
        color: "black",
        padding: "10px",
      }}
    >
      <h3>Shop Wise$</h3>
      <nav style={{ display: "flex" }}>
        <ul
          style={{
            display: "flex",
            gap: "20px",
            listStyleType: "none",
          }}
        >
          <li
            style={{
              cursor: "pointer",
              color: "black",
              textDecoration: "none",
            }}
          >
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <div
        style={{
          display: "flex",
          gap: "10px",
          color: "black",
        }}
      >
        <button>User</button>
        <button onClick={handleNavigate}>Cart {cartItems.length || 0}</button>
      </div>
    </div>
  );
};

export default Header;
