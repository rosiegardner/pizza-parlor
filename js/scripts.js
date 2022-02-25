// Business Logic for Pizza()

function Pizza(pizzaSize, pizzaCrust, pizzaSauce, pizzaTopping) {
  this.pizzaSize = pizzaSize;
  this.pizzaCrust = pizzaCrust;
  this.pizzaSauce = pizzaSauce;
  this.pizzaTopping = pizzaTopping;
  this.pizzaPricing = 15;
}


Pizza.prototype.myOrder = function() {
  return this.pizzaSize + " pizza, " + this.pizzaCrust + " with " + this.pizzaSauce + ", topped with: " + this.pizzaTopping;
};

Pizza.prototype.totalOrder = function() {
  if (this.pizzaSize === "medium-13inch") {
    this.pizzaPricing += 3;
  }
  if (this.pizzaSize === "large-16inch") {
    this.pizzaPricing += 6;
  }
  if (this.pizzaCrust === "Thick Crust") {
    this.pizzaPricing += 3;
  }
  if (this.pizzaCrust === "Stuffed Crust") {
    this.pizzaPricing += 2;
  } 
  if (this.pizzaTopping === " ") {
    this.pizzaPricing += 1;
  } else {
    this.pizzaPricing += 0;
  }
  return this.pizzaPricing;
};

// User Interface Logic

$(document).ready(function() {
  $("#pizzaOrder").submit(function(event) {
    event.preventDefault();
    let pizzaSize = $("input#pizza-size").val();
    let pizzaSauce = $("input#pizza-slime").val();
    let pizzaCrust = $("input#pizza-crust").val();

    const myPizza = new Pizza(pizzaSize, pizzaCrust, pizzaSauce, pizzaTopping, pizzaPrice);
  });
});