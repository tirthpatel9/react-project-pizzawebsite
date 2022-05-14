import React from "react";
import AddCartBtn from "./AddCartBtn";
import "./css/MenuItem.css";

function MenuItem({ item, onAdd }) {
  return (
    <div className="menuItem">
      <img src={item.image} alt="pizzapic" />
      <h3>{item.name}</h3>
      <p>{item.desc}</p>
      <AddCartBtn item={item} onAdd={onAdd} />
    </div>
  );
}

export default MenuItem;
