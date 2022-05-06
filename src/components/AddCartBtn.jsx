import React from "react";
import "./css/AddCartBtn.css";
function AddCartBtn({ price }) {
  return (
    <div className="container-cart-btn">
      <button className="add-to-cart-btn">
        <div className="leftSide">
          <span class="material-icons cart-icon">shopping_cart</span>
          <p>Add to cart</p>
        </div>
        <div className="rightSide">
          <p className="price">${price}</p>
        </div>
      </button>
    </div>
  );
}

export default AddCartBtn;
