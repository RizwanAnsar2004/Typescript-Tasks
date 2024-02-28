// Conditional Tests: Write a series of conditional tests.
//  Print a statement describing each test and your prleediction for the results of each test.
//   Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.



let num_23_1:number = 10;
let num_23_2:number = 5;
console.log("Is num1 > num2? I predict True.");
console.log(num_23_1 > num_23_2); // Output: True


let name_23:string = "John";
console.log("Is name == 'John'? I predict True.");
console.log(name_23 == "John"); // Output: True

let isStudent_23: boolean = true; // Change value to true
console.log("Is isStudent_23 === true? I predict True.");
console.log(isStudent_23 === true); // Output: True

let age:number = 20;
console.log("Is age >= 18? I predict True.");
console.log(age >= 18); // Output: True


let x:number = 0;
let y = null;
console.log("Is x != y? I predict True.");
console.log(x !== y); // Output: True


let result:number = 10 / 0;
console.log("Is result a finite number? I predict False.");
console.log(Number.isFinite(result)); // Output: False


let isCloudy:boolean = true;
let isWarm:boolean = false;
console.log("Is it both cloudy and warm? I predict False.");
console.log(isCloudy && isWarm);  // Output: False

let dayOfWeek:string = 'Monday';
console.log("Is it the weekend? I predict False.");
console.log(dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday');// Output: False

let isMorning:boolean = false;
let isCold:boolean = true;
console.log("Is it morning and cold? I predict False.");
console.log(isMorning && isCold);// Output: False

let isHoliday:boolean = false;
let isWorking:boolean = true;
console.log("Is it a holiday and not working? I predict False.");
console.log(isHoliday && !isWorking);// Output: False
