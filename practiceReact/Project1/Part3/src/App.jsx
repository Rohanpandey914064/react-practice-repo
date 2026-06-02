import React from "react";
import { useState } from "react";

function App() {
  const [quantity, setQuantity] = useState(1);
  const foodName = "Burger";
  const price = 150;

  function increaseQuantity() {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  }

  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  const totalAmount = quantity * price;


  return (
    <div>
      <h1>QuickBite Order Manager</h1>

      <h2>{foodName}</h2>
      <h3>Price: ₹{price}</h3>

      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <button onClick={decreaseQuantity}>-</button>
        <h3>{quantity}</h3>
        <button onClick={increaseQuantity}>+</button>
      </div>

      <h2>Total Amount: ₹{totalAmount}</h2>
    </div>
  );
}

export default App;
