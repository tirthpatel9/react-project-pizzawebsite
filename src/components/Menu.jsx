import React from "react";
import MenuItem from "./MenuItem";
import "./css/Menu.css";

function Menu({ menuItems, onAdd}) {
  return (
    <div className="container-menu">
      <h1>Our Menu</h1>
      <div className="container-menuItems">
        {menuItems.map((item) => {
          //console.log(item.name + " " + item.id);
          return (
            <MenuItem
              /*key={item.id}
              name={item.name}
              price={item.price}
              desc={item.desc}
              image={item.image}*/
              key = {item.id}
              item = {item}
              onAdd={onAdd}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
