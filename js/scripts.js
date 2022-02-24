// Business Logic for Pizza()

function Pizza(pizzaSize, pizzaCrust, pizzaSauce, pizzaTopping) {
  this.pizzaSize = pizzaSize;
  this.pizzaCrust = pizzaCrust;
  this.pizzaSauce = pizzaSauce;
  this.pizzaTopping = pizzaTopping;
}

Pizza.prototype.myOrder = function() {
  return this.pizzaSize + " pizza, " + this.pizzaCrust + " crust with " + this.pizzaSauce + ", topped with: " + this.pizzaTopping;
};

const myPizza = new Pizza("small", "red sauce", ["pepperoni", "pineapple"]);
const myPizza = new Pizza("small", "thick", "red sauce", ["pepperoni", " pineapple"]);