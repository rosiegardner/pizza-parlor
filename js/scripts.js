// Business Logic for Pizza()

function Pizza(pizzaSize, pizzaCrust, pizzaSauce, pizzaTopping) {
  this.pizzaSize = pizzaSize;
  this.pizzaCrust = pizzaCrust;
  this.pizzaSauce = pizzaSauce;
  this.pizzaTopping = pizzaTopping;
  this.pizzaPricing = 15;
}


Pizza.prototype.myOrder = function() {
  return this.pizzaSize + " pizza, " + this.pizzaCrust + " with " + this.pizzaSauce + ", topped with: " + this.pizzaTopping + " will be $" + this.pizzaPricing;
};


const myPizza = new Pizza("small", ["pepperoni", "pineapple"]);
const myPizza = new Pizza("small", "red sauce", ["pepperoni", " pineapple"]);
const myPizza = new Pizza("small", "red sauce", ["pepperoni", " pineapple"], 15);
const myPizza = new Pizza("small-10inch", "thick crust", "red sauce", ["pepperoni", " pineapple"], 15);