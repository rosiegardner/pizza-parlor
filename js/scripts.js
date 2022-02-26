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
  if (this.pizzaSize === "medium-13inch") {
    this.pizzaPricing += 3; // This will increase the value by 3 for MD
  }
  if (this.pizzaSize === "large-16inch") {
    this.pizzaPricing += 6; // This will increase the value by 6 for LG
  }
  if (this.pizzaCrust === "Thick Crust") {
    this.pizzaPricing += 3; // This will increase the value by 3 for all Sizes
  }
  if (this.pizzaCrust === "Stuffed Crust") {
    this.pizzaPricing += 2; // This will increase the value by 2 for all Sizes
  } 
  if (this.pizzaTopping === " ") { 
  this.pizzaPricing += 1; // This will increase the value by 1 for all Toppings
  } else {
    this.pizzaPricing += 0;
  }
  return this.pizzaPricing; // This will return the total Value of my Order
};

// User Interface Logic

$(document).ready(function() {
  $("form#pizzaOrder").submit(function(event) {
    event.preventDefault();
    let pizzaSize = $("input:radio[name=pizza-size]:checked").val();
    let pizzaCrust = $("input:radio[name=pizza-crust]:checked").val();
    let pizzaSauce = $("input:radio[name=pizza-slime]:checked").val();
    let pizzaTopping = $("input:checkbox[name=pizza-topping]:checked").val();
    let pizzaPricing = myPizza.totalOrder();

    $("input:radio[name=pizza-size]:checked").val();
    $("input:radio[name=pizza-crust]:checked").val();
    $("input:radio[name=pizza-slime]:checked").val();
    $("input:checkbox[name=pizza-topping]:checked").val();
    
    const myPizza = new Pizza(pizzaSize, pizzaCrust, pizzaSauce, pizzaTopping, pizzaPricing);
    
    $("#show-myGremlin").show();
    $(".your-size").show(myPizza.pizzaSize);
    $(".your-crust").show(myPizza.pizzaCrust);
    $(".your-slime").show(myPizza.pizzaSauce);
    $(".your-trash").show(myPizza.pizzaTopping);
    $(".your-total").show(myPizza.pizzaPricing);
    
  });
});