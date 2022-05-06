import React from "react";
import Menu from "./Menu";
import menuItems from "../MenuItems";
import Basket from "./Basket";
import "./css/Main.css";

function Main() {
  return (
    <div className="container-main">
      <Menu menuItems={menuItems} />
      <Basket />
    </div>
  );
}

export default Main;
