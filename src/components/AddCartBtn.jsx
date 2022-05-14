import React from "react";
import "./css/AddCartBtn.css";

function AddCartBtn({ item, onAdd }) {
  return (
    <div className="container-cart-btn">
      <button className="add-to-cart-btn" onClick={() => onAdd(item)}>
        Add to Basket
      </button>
    </div>
  );
}

export default AddCartBtn;
