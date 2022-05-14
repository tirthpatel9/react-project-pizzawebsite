import React from "react";
import MenuItem from "./MenuItem";
import "./css/Menu.css";

function Menu({ menuItems, onAdd }) {
  return (
    <div className="container-menu">
      <h1>Our Menu</h1>
      <div className="container-menuItems">
        {menuItems.map((item) => {
          return <MenuItem key={item.id} item={item} onAdd={onAdd} />;
        })}
      </div>
    </div>
  );
}

export default Menu;
