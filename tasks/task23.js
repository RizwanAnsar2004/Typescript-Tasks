// Conditional Tests: Write a series of conditional tests.
//  Print a statement describing each test and your prleediction for the results of each test.
//   Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
var num_23_1 = 10;
var num_23_2 = 5;
console.log("Is num1 > num2? I predict True.");
console.log(num_23_1 > num_23_2); // Output: True
var name_23 = "John";
console.log("Is name == 'John'? I predict True.");
console.log(name_23 == "John"); // Output: True
var isStudent_23 = true; // Change value to true
console.log("Is isStudent_23 === true? I predict True.");
console.log(isStudent_23 === true); // Output: True
var age = 20;
console.log("Is age >= 18? I predict True.");
console.log(age >= 18); // Output: True
var x = 0;
var y = null;
console.log("Is x != y? I predict True.");
console.log(x !== y); // Output: True
var result = 10 / 0;
console.log("Is result a finite number? I predict False.");
console.log(Number.isFinite(result)); // Output: False
var isCloudy = true;
var isWarm = false;
console.log("Is it both cloudy and warm? I predict False.");
console.log(isCloudy && isWarm); // Output: False
var dayOfWeek = 'Monday';
console.log("Is it the weekend? I predict False.");
console.log(dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday'); // Output: False
var isMorning = false;
var isCold = true;
console.log("Is it morning and cold? I predict False.");
console.log(isMorning && isCold); // Output: False
var isHoliday = false;
var isWorking = true;
console.log("Is it a holiday and not working? I predict False.");
console.log(isHoliday && !isWorking); // Output: False
