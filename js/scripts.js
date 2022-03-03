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
  if (this.pizzaSize === "Med-13inch") {
    this.pizzaPricing += 3; 
  }
  if (this.pizzaSize === "Lrg-16inch") {
    this.pizzaPricing += 6; 
  }
  if (this.pizzaCrust === "Thick Crust") {
    this.pizzaPricing += 3; 
  }
  if (this.pizzaCrust === "Stuffed Crust") {
    this.pizzaPricing += 2; 
  } 
  if (this.pizzaTopping === "Mold'eroni & Rancid ArtiCHOKEs") { 
  this.pizzaPricing += 2; 
  }
  if (this.pizzaTopping === "Hazard Ham & Spoiled Pineapple") {
    this.pizzaPricing += 2;
  } 
  if (this.pizzaTopping === "Acidic Anchovies & Aged Fly Larvae") {
    this.pizzaPricing += 2;
  }
  if (this.pizzaTopping === "Rotten Red Onion & Kale") {
    this.pizzaPricing += 2;
  } else {
    this.pizzaPricing += 0;
  }
  return this.pizzaPricing; 
};

// User Interface Logic

$(document).ready(function() {
  $("form#pizzaOrder").submit(function(event) {
    event.preventDefault();
    let pizzaSize = $("input:radio[name=pizza-size]:checked").val();
    let pizzaCrust = $("input:radio[name=pizza-crust]:checked").val();
    let pizzaSauce = $("input:radio[name=pizza-slime]:checked").val();
    let pizzaTopping = $("input:radio[name=pizza-topping]:checked").val();
    const myPizza = new Pizza(pizzaSize, pizzaCrust, pizzaSauce, pizzaTopping);
    let pizzaPricing = myPizza.totalOrder();

    $("input:radio[name=pizza-size]:checked").val();
    $("input:radio[name=pizza-crust]:checked").val();
    $("input:radio[name=pizza-slime]:checked").val();
    $("input:radio[name=pizza-topping]:checked").val();

    $(".your-size").text(pizzaSize);
    $(".your-crust").text(pizzaCrust);
    $(".your-slime").text(pizzaSauce);
    $(".your-trash").text(pizzaTopping);
    $(".your-total").text(pizzaPricing);
    $("#show-myGremlin").show();
  });
});