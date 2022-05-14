import React, { Component } from "react";
import Menu from "./Menu";
import menuItems from "../MenuItems";
import Basket from "./Basket";
import "./css/Main.css";

/*function Main() {
  return (
    <div className="container-main">
      <Menu menuItems={menuItems} />
      <Basket />
    </div>
  );
}

export default Main;*/

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: [],
      setCartItems: "",
    };
  }

  addToBasket = (event) =>{
    this.setState({cartItems:["hello", "how"]})
  }

  render() {
    if (this.state.cartItems.length !== 0) {
      return (
        <div className="container-main">
          <Menu menuItems={menuItems} />
          <Basket cartItems={this.state.cartItems.length}/>
        </div>
      );
    } else {
      return (
        <div className="container-main">
          <Menu menuItems={menuItems} />
        </div>
      );
    }
  }
}
