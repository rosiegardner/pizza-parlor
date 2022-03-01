// Business Logic for Pizza()

function Pizza(pizzaSize, pizzaCrust, pizzaSauce, pizzaTopping) {
  this.pizzaSize = pizzaSize; // Size of pizza - SM/MD/LG
  this.pizzaCrust = pizzaCrust; // Style of Crust(4)
  this.pizzaSauce = pizzaSauce; // Sauce Selection (2)
  this.pizzaTopping = pizzaTopping; // Toppings
  this.pizzaPricing = 15; // Base Value of Pizza (SM)
}


Pizza.prototype.myOrder = function() {
  return this.pizzaSize + " pizza, " + this.pizzaCrust + " with " + this.pizzaSauce + ", topped with: " + this.pizzaTopping;
};

Pizza.prototype.totalOrder = function() {
  if (this.pizzaSize === "13inch") {
    this.pizzaPricing += 3; 
  }
  if (this.pizzaSize === "16inch") {
    this.pizzaPricing += 6; 
  }
  if (this.pizzaCrust === "thick") {
    this.pizzaPricing += 3; 
  }
  if (this.pizzaCrust === "stuffed") {
    this.pizzaPricing += 2; 
  } 
  if (this.pizzaTopping === "topping") { 
  this.pizzaPricing += 1; // This will increase the value by 1 for all Toppings
  } else {
    this.pizzaPricing += 0;
  }
  return this.pizzaPricing; // This will return the total Value of my Order
};
//work on checkbox form

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
    console.log(pizzaPricing);

    $("input:radio[name=pizza-size]:checked").val();
    console.log(pizzaSize);
    $("input:radio[name=pizza-crust]:checked").val();
    console.log(pizzaCrust);
    $("input:radio[name=pizza-slime]:checked").val();
    console.log(pizzaSauce);
    $("input:radio[name=pizza-topping]:checked").val();
    console.log(pizzaTopping);

    $("#show-myGremlin").show();
    $(".your-size").show(myPizza.pizzaSize);
    $(".your-crust").show(myPizza.pizzaCrust);
    $(".your-slime").show(myPizza.pizzaSauce);
    $(".your-trash").show(myPizza.pizzaTopping);
    $(".your-total").show(myPizza.pizzaPricing);
    ////WHY WONT YOU WORK
  });
});