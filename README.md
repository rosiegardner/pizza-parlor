Describe: Pizza()

Test: "It should return a Pizza object with 2 properties for size, sauce, and toppings"
Code: const myPizza = new Pizza("small", ["pepperoni", "pineapple"]);
Expected Output: Pizza { 'small', ['pepperoni', 'pineapple'] }

Test: "It should return Pizza object with 3 properties for size, crust, sauce, and toppings"
Code: const myPizza = new Pizza("small", "red sauce", ["pepperoni", "pineapple"]);
Expected Output: Pizza { 'small', 'red sauce', ['pepperoni', 'pineapple'] }

Describe: Pizza.prototype.myOrder()

Test: "This prototype should return the Pizza() order concatenated together".
Code: myPizza.myOrder();
Expected Output: 'small pizza, red sauce, topped with: pepperoni, pineapple'

