// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.

//  The function should have one parameter that collects as many items as the function call provides, 

// and it should print a summary of the sandwich that is being ordered. Call the function three times, 

// using a different number of arguments each time.

function make_sandwiches_44(array:string[]):void{
    let items:string=  "Sandwiches  with "+array.join(',');
    console.log(items);
}


let array_44:string[]=["Roasted chicken breast", "sun-dried tomatoes", "mozzarella cheese", "pesto spread", "focaccia bread"];
let array_44_2:string[]=["Sliced avocado", "black bean spread", "pepper jack cheese", "lettuce", "tomato", "red onion", "whole wheat tortilla"];

make_sandwiches_44(array_44);
make_sandwiches_44(array_44_2);
