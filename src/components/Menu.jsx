import React from "react";
import MenuItem from "./MenuItem";
import "./css/Menu.css";

function Menu({ menuItems }) {
  return (
    <div className="container-menu">
      <h1>Our Menu</h1>
      <div className="container-menuItems">
        {menuItems.map((item) => {
          console.log(item.name + " " + item.id);
          return (
            <MenuItem
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
  //menuItems.map((item => {return <MenuItem key={item.id} name={item.name} price={item.price} image={item.image}/>}));
}
//menuItems.map((pizza, i => <MenuItem name={pizza[i].name} price={pizza[i].price} image={pizza[i].image}/>))
export default Menu;
