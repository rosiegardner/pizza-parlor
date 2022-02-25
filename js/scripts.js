// Business logic for PizzaParty()
// Business Logic for Pizza()

function Pizza(pizzaSize, pizzaSauce, pizzaTopping) {
  this.pizzaSize = pizzaSize;
  this.pizzaSauce = pizzaSauce;
  this.pizzaTopping = pizzaTopping;
}


Pizza.prototype.myOrder = function() {
  return this.pizzaSize + " pizza, " + this.pizzaSauce + ", topped with: " + this.pizzaTopping;
};

Pizza.prototype.addPricing = function () {

}

let smallPizza = 5;
let mediumPizza = 10;
let largePizza = 15;
let protein = 2;
let veggie = 1;

const myPizza = new Pizza("small", ["pepperoni", "pineapple"]);
const myPizza = new Pizza("small", "red sauce", ["pepperoni", " pineapple"]);



