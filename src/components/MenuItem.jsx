import React from "react";
import AddCartBtn from "./AddCartBtn";
import "./css/MenuItem.css";

function MenuItem({name, price, image}) {
  return (
    <div className="menuItem">
      <img src={image} alt="pizzapic" />
      <h3>{name}</h3>
      <p>${price}</p>
      <AddCartBtn />
      {/*<div>Add to cart<span class="material-icons shopping-cart">shopping_cart</span></div>*/}
    </div>
  );
}

export default MenuItem;