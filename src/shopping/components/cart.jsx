import React, { useContext } from "react";
import { ProductContext } from "../Context";

const Cart = () => {
  const { cart, setCart } = useContext(ProductContext);

  if (!cart || cart.length === 0) {
    return <h3>Your cart is empty.</h3>;
  }

  const handleIncrease = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCart(
      (prevCart) =>
        prevCart
          .map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter((item) => item.quantity > 0) // Remove if quantity reaches 0
    );
  };

  const handleDelete = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce(
    (prev, item) => prev + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h3>Cart Items</h3>
      <div>
        <table style={{ margin: 10, borderCollapse: "collapse", width: "80%" }}>
          <thead>
            <tr>
              <th style={{ padding: 10, border: "1px solid black" }}>ID</th>
              <th style={{ padding: 10, border: "1px solid black" }}>Title</th>
              <th style={{ padding: 10, border: "1px solid black" }}>Image</th>
              <th style={{ padding: 10, border: "1px solid black" }}>
                Quantity
              </th>
              <th style={{ padding: 10, border: "1px solid black" }}>Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td style={{ padding: 10, border: "1px solid black" }}>
                  {item.id}
                </td>
                <td style={{ padding: 10, border: "1px solid black" }}>
                  {item.title}
                </td>
                <td style={{ padding: 10, border: "1px solid black" }}>
                  <img src={item.image} alt={item.title} width={100} />
                </td>
                <td style={{ padding: 10, border: "1px solid black" }}>
                  <button onClick={() => handleIncrease(item.id)}>+</button>{" "}
                  {item.quantity}{" "}
                  <button
                    onClick={() => handleDecrease(item.id)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <button onClick={() => handleDelete(item.id)}>Remove</button>
                </td>
                <td style={{ padding: 10, border: "1px solid black" }}>
                  ${item.price * item.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <>
          <h3>TotalCart Price : ${totalPrice}</h3>
          <button
            style={{
              padding: "10px",
              background: "black",
              color: "white",
              border: "none",
              borderRadius: "10px",
            }}
          >
            ProceedToCheckOut
          </button>
        </>
      </div>
    </div>
  );
};

export default Cart;
