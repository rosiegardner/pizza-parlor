// Business Logic for Pizza()

function Pizza(pizzaSize, pizzaSauce, pizzaTopping) {
  this.pizzaSize = pizzaSize;
  this.pizzaSauce = pizzaSauce;
  this.pizzaTopping = pizzaTopping;
  this.pizzaPricing = 15;
}


Pizza.prototype.myOrder = function() {
  return this.pizzaSize + " pizza, " + this.pizzaSauce + ", topped with: " + this.pizzaTopping;
};


const myPizza = new Pizza("small", ["pepperoni", "pineapple"]);
const myPizza = new Pizza("small", "red sauce", ["pepperoni", " pineapple"]);
const myPizza = new Pizza("small", "red sauce", ["pepperoni", "pineapple"], 15);