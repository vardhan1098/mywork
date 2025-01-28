import React, { useContext } from "react";
import { ShoppingContext } from "../ProductContext";

const CartItems = () => {
  const { cartItems } = useContext(ShoppingContext);

  return (
    <div>
      <h3>Cart Items</h3>
      <div>
        {cartItems.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.title} width={100} />
            <h4>{item.title}</h4>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.qty}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItems;
