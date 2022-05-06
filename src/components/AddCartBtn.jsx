import React from "react";
import "./css/AddCartBtn.css"
function AddCartBtn() {
  return (
    <div className="container-cart-btn">
      <button className="add-to-cart-btn">
        <span class="material-icons cart-icon">shopping_cart</span><p>Add to Cart</p>
      </button>
    </div>
  );
}

export default AddCartBtn;
