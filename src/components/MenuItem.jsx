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

/*export class MenuItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      basket: "",
    };
  }

  
  addToCart = (event) => {
    console.log(event);
  };

  render() {
    const { name, desc, price, image } = this.props;
    return (
      <div className="menuItem">
        <img src={image} alt="pizzapic" />
        <h3>{name}</h3>
        <p>{desc}</p>
        <AddCartBtn price={price} onClickAdd={this.addToCart} />
      </div>
    );
  }
}

export default MenuItem;*/
