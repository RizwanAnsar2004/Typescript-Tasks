// More Conditional Tests: You don’t have to limit the number of tests you create to 10. 

// If you want to try more comparisons, write more tests. Have at least one True 

// and one False result for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, 

// greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array


let city_24_1:string = 'New York';
let city_24_2:string = 'New York';
console.log("Are city1 and city2 equal? I predict True.");
console.log(city_24_1 === city_24_2);

let text_24_1:string = 'HELLO';
let text_24_2:string = 'hello';
console.log("Are text1 and text2 equal after lowercasing? I predict True.");
console.log(text_24_1.toLowerCase() === text_24_2.toLowerCase());

let num_24_1:number = 15;
let num_24_2:number = 10;
console.log("Is num1 greater than num2? I predict True.");
console.log(num_24_1 > num_24_2);

let isSunny_24:boolean = true;
let isWarm_24:boolean = true;
console.log("Is it both sunny and warm? I predict True.");
console.log(isSunny_24 && isWarm_24);

let isCold_24:boolean = false;
let isRainy_24:boolean = true;
console.log("Is it either cold or rainy? I predict True.");
console.log(isCold_24 || isRainy_24);

let fruits_24:string[] = ['apple', 'orange', 'banana'];
console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits_24.includes('banana'));

let city_241:string = 'New York';
let city_242:string = 'Los Angeles';
console.log("Are city1 and city2 equal? I predict False.");
console.log(city_241 === city_242);

let text_241:string = 'HELL';
let text_242:string = 'hello';
console.log("Are text1 and text2 equal after lowercasing? I predict False.");
console.log(text_241.toLowerCase() === text_242.toLowerCase());

let num_241:number = 15;
let num_242:number = 20;
console.log("Is num2 less than num1? I predict False.");
console.log(num_241 > num_242);
console.log("Is num1 greater than or equal to num2? I predict False.");
console.log(num_241 >= num_242);

let is_24Cold:boolean = false;
let is_24Rainy:boolean = false;
console.log("Is it either cold or rainy? I predict False.");
console.log(is_24Cold || is_24Rainy);

let fruits_24_:string[] = ['apple', 'orange', 'banana'];
console.log("Is 'grape' in the fruits array? I predict False.");
console.log(fruits_24_.includes('grape'));