import React from "react";
import pizzaLogo from "../assets/pizzaLogo.png";
import "./css/Header.css";

function Header() {
  return (
    <div className="header-navBar">
      <div className="leftSide">
        <img src={pizzaLogo} alt="pizzaLogo"></img>
      </div>

      <div className="rightSide">
        <a href="../../public/index.html">Sign In/ Sign Up</a>
        <button className="cartBtn">cart icon</button>
      </div>
    </div>
  );
}

export default Header;
