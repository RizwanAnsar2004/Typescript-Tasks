// Pizzas: Think of at least three kinds of your favorite pizza.

// Store these pizza names in a array, and then use a for loop to print the name of each pizza.

// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. 

// For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. 

// The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence,

// such as I really love pizza!

let pizza_34:string[]=["BBQ Pizza","Pepperoni Pizza","Cheese Pizza"];

for (let i = 0; i < pizza_34.length; i++) {
    console.log(`${pizza_34[i]}`);    
}


// modifying above code

for (let i = 0; i < pizza_34.length; i++) {
    console.log(`I like  ${pizza_34[i]} `);
}
console.log("I have a penchant for various types of pizzas. Among my top picks are BBQ Pizza, Pepperoni Pizza, and Cheese Pizza. Each slice is a delightful experience, and every bite brings joy to my taste buds\nI really love Pizza!");