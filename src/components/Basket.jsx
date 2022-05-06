import React from "react";
import "./css/Basket.css";

function Basket() {
  return (
    <div className="container-basket">
      <h2>Your Basket</h2>
      <div className="basket-items">
        <p>
          Your basket looks a little empty. Start adding food from our menu.
        </p>
      </div>
    </div>
  );
}

export default Basket;
