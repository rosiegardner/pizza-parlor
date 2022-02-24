Describe: Pizza()

Test: "It should return a Pizza object with 3 properties for size, sauce, and toppings"
Code: const myPizza = new Pizza("small", "red sauce", ["pepperoni", "pineapple"]);
Expected Output: Pizza { 'small', 'red sauce', ['pepperoni', 'pineapple'] }

Test: "It should return Pizza object with 4 properties for size, crust, sauce, and toppings"
Code: const myPizza = new Pizza("small", "thick", "red sauce", ["pepperoni", "pineapple"]);
Expected Output: Pizza { 'small', 'thick', 'red sauce', ['pepperoni', 'pineapple'] }

Describe Pizza.prototype.myOrder()

Test: "This prototype should return the Pizza() order concatenated together".
Code: myPizza.myOrder();
Expected Output: 'small pizza, thick crust with red sauce, topped with: pepperoni, pineapple'