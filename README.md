Describe: Pizza()

Test: "It should return a Pizza object with 2 properties for size, sauce, and toppings"
Code: const myPizza = new Pizza("small", ["pepperoni", "pineapple"]);
Expected Output: Pizza { 'small', ['pepperoni', 'pineapple'] }

Test: "It should return Pizza object with 3 properties for size, crust, sauce, and toppings"
Code: const myPizza = new Pizza("small", "red sauce", ["pepperoni", "pineapple"]);
Expected Output: Pizza { 'small', 'red sauce', ['pepperoni', 'pineapple'] }

Test: "It should return a base price of 15"
Code: this.pizzaPricing = 15;
Expected Output: true;

Test: "It should return Pizza object with 3 properties and conditional base price of 15"
Code: const myPizza = new Pizza("small", "red sauce", ["pepperoni", "pineapple"], 15);
Expected Output: Pizza { 'small', 'red sauce', ['pepperoni', 'pineapple'] 15}

Test: "It should return Pizza object with 4 properties and base price of 15"
Code: const myPizza = new Pizza("small-10inch", "thick crust", "red sauce", ["pepperoni", " pineapple"] 15);
Expected Output: Pizza { 'small-10inch', 'thick crust', 'red sauce', ['pepperoni', 'pineapple'] 15}


Describe: Pizza.prototype.myOrder()

Test: "This prototype should return the Pizza() order concatenated together".
Code: myPizza.myOrder();
Expected Output: 'small pizza, red sauce, topped with: pepperoni, pineapple'

Test: "This prototype should return the Pizza() order concatenated together including the base price of 15"
Code: myPizza.myOrder();
Expected Output: 'small pizza, red sauce, topped with: pepperoni, pineapple will be $15'

Test: "This prototype should return the Pizza() order concatenated together to include crust style"
Code: myPizza.myOrder();
Expected Output: 'small-10inch pizza, thick crust with red sauce, topped with: pepperoni, pineapple will be $15'
