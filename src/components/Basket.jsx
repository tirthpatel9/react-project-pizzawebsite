import React from "react";
import RemoveItemBtn from "./RemoveItemBtn";
import "./css/Basket.css";

function ItemQtyInput({ item, onUpdate }) {
  return (
    <div>
      <input
        type="number"
        value={item.qty}
        onChange={(event) => onUpdate(event, item)}
      ></input>
    </div>
  );
}
function Basket({ cartItems, total, onRemove, onUpdate }) {
  if (!!cartItems && cartItems.length === 0) {
    return (
      <div className="container-basket">
        <h2>Your Basket</h2>
        <div className="basket-items">
          Your basket looks a little empty. Start adding food from our menu.
        </div>
      </div>
    );
  } else {
    return (
      <div className="container-basket">
        <h2>Your Basket</h2>
        <div className="basket-items">
          {cartItems.map((cartItem, i) => (
            <div key={i}>
              {cartItem.item.name} {cartItem.item.price}{" "}
              <ItemQtyInput item={cartItem} onUpdate={onUpdate} />{" "}
              <RemoveItemBtn item={cartItem} onRemove={onRemove} />
            </div>
          ))}
        </div>
        <div>Total: {total}</div>
      </div>
    );
  }
}

export default Basket;
