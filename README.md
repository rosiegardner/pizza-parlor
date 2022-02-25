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


Describe: Pizza.prototype.totalOrder()

Test: "This prototype should return the base price of 15 increased by 3 for a medium-13inch pizza."
Code: myPizza.totalOrder();
Input: "medium-13inch";
Expected Output: 18;

Test: "This prototype should return the base price increased by 6 for a large-16inch pizza."
Code: myPizza.totalOrder();
Input: "large-16inch";
Expected Output: 21;

Test: "This prototype should return the base price increased by 3 for a "Thick Crust" medium or large pizza."
Code: myPizza.totalOrder();
Input: "Thick Crust"
Expected Output: 21/24;

Test: "This prototype should return the base price increased by 2 for a "Stuffed Crust" medium or large pizza."
Code: myPizza.totalOrder();
Input: "Stuffed Crust"
Expected Output: 20/22;