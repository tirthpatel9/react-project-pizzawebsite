import Header from "./components/Header";
import Menu from "./components/Menu";
import Basket from "./components/Basket";
import menuItems from "./MenuItems";
import round2Decimal from "./Utility";
import "./App.css";

import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: [],
      total: 0,
    };
  }

  //add menu item to basket
  addToBasket = (item) => {
    let matchedIndex = this.state.cartItems.findIndex(
      (cartitem) => cartitem.item.id === item.id
    );
    if (matchedIndex < 0) {
      const cartItem = {
        item: item,
        qty: 1,
        price: item.price,
      };
      this.setState({
        cartItems: [...this.state.cartItems, cartItem],
        total: this.state.total + item.price,
      });
    } else {
      let cartItemsCopy = [...this.state.cartItems];
      let matchedCartItem = cartItemsCopy[matchedIndex];
      matchedCartItem.qty += 1;
      matchedCartItem.price = matchedCartItem.item.price * matchedCartItem.qty;
      this.setState({
        cartItems: [...cartItemsCopy],
        total: round2Decimal(this.state.total + matchedCartItem.item.price),
      });
    }
  };

  removeFromBasket = (cartItemToRemove) => {
    this.setState({
      cartItems: this.state.cartItems.filter(
        (cartItem) => cartItem.item.id !== cartItemToRemove.item.id
      ),
      total: round2Decimal(this.state.total - cartItemToRemove.price),
    });
  };

  updateCart = (event, cartItemToUpdate) => {
    let matchedIndex = this.state.cartItems.findIndex(
      (cartItem) => cartItem.item.id === cartItemToUpdate.item.id
    );

    let cartItemsCopy = [...this.state.cartItems];
    let matchedCartItem = cartItemsCopy[matchedIndex];
    matchedCartItem.qty = Number(event.target.value); //event.target.value is updated quantity of the item in cart
    let prevMatchedCartItemPrice = matchedCartItem.price;
    matchedCartItem.price = matchedCartItem.item.price * matchedCartItem.qty;
    this.setState({
      cartItems: [...cartItemsCopy],
      total: round2Decimal(
        this.state.total - prevMatchedCartItemPrice + matchedCartItem.price
      ),
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Menu menuItems={menuItems} onAdd={this.addToBasket} />
        <Basket
          cartItems={this.state.cartItems}
          total={this.state.total}
          onRemove={this.removeFromBasket}
          onUpdate={this.updateCart}
        />
      </div>
    );
  }
}

export default App;
