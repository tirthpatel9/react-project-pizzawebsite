import veggiePizza from "./assets/vegetarian-pizza.jpg";
import cheesePizza from "./assets/cheese-pizza.jpg";
import hawaiianPizza from "./assets/hawaiian-pizza.jpg";
import pepperoniPizza from "./assets/pepperoni-pizza.jpg";
import expensivePizza from "./assets/very-expensive-pizza.jpg";
import createOwn from "./assets/create-your-own.jpg";
import smallPizza from "./assets/small-pizza.jpg";
import veganPizza from "./assets/vegan-pizza.jpg";
import squarePizza from "./assets/square-pizza.jpg";
const menuItems = [
  {
    id: 1,
    name: "Vegetarian Pizza",
    price: 11.99,
    image: veggiePizza,
  },
  {
    id: 2,
    name: "Cheese Pizza",
    price: 9.99,
    image: cheesePizza,
  },
  {
    id: 3,
    name: "Hawaiian Pizza",
    price: 15.94,
    image: hawaiianPizza,
  },
  {
    id: 4,
    name: "Pepperoni Pizza",
    price: 17.28,
    image: pepperoniPizza,
  },
  {
    id: 5,
    name: "Small Pizza",
    price: 19.62,
    image: smallPizza,
  },
  {
    id: 6,
    name: "Square Pizza",
    price: 22.47,
    image: squarePizza,
  },
  {
    id: 7,
    name: "Vegan Pizza",
    price: 25.39,
    image: veganPizza,
  },
  {
    id: 8,
    name: "Very Expensive Pizza",
    price: 36.99,
    image: expensivePizza,
  },
  {
    id: 9,
    name: "Create Your Own",
    price: 4.99,
    image: createOwn,
  },
];

export default menuItems;
