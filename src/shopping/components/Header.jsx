import React, { useContext, useState } from "react";
import { ProductContext } from "../Context";
import { useNavigate, Link } from "react-router";
import Register from "./auth/Register";


const Header = () => {
  const { cart } = useContext(ProductContext);
  const navigate = useNavigate();
  const [isRegisterOpen, setIsRegisterOpen] = useState(false); 

  const handleNavigate = () => {
    navigate("/cart");
  };

  let quantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div
      style={{
        display: "flex",
        background: "bisque",
        color: "black",
        padding: "10px 20px",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>ShoppingCart</h2>
      <nav>
        <ul style={{ display: "flex", gap: "15px", listStyle: "none" }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div>
       
        <button
          onClick={() => setIsRegisterOpen(true)}
          style={{ cursor: "pointer", marginRight: "10px" }}
        >
          Register
        </button>

        <button onClick={handleNavigate}>
          Cart {quantity > 0 ? `(${quantity})` : ""}
        </button>
      </div>

      {/* ✅ Register Modal - Only renders when isRegisterOpen is true */}
      {isRegisterOpen && <Register closeModal={() => setIsRegisterOpen(false)} />}
    </div>
  );
};

export default Header;
