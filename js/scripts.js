// Business Logic for Pizza()

function Pizza(pizzaSize, pizzaCrust, pizzaSauce, pizzaTopping) {
  this.pizzaSize = pizzaSize;
  this.pizzaCrust = pizzaCrust;
  this.pizzaSauce = pizzaSauce;
  this.pizzaTopping = pizzaTopping;
}

const myPizza = new Pizza("small", "red sauce", ["pepperoni", "pineapple"]);