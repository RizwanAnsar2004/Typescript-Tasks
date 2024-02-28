// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
//  The function should have one parameter that collects as many items as the function call provides, 
// and it should print a summary of the sandwich that is being ordered. Call the function three times, 
// using a different number of arguments each time.
function make_sandwiches_44(array) {
    var items = "Sandwiches  with " + array.join(',');
    console.log(items);
}
var array_44 = ["Roasted chicken breast", "sun-dried tomatoes", "mozzarella cheese", "pesto spread", "focaccia bread"];
var array_44_2 = ["Sliced avocado", "black bean spread", "pepper jack cheese", "lettuce", "tomato", "red onion", "whole wheat tortilla"];
make_sandwiches_44(array_44);
make_sandwiches_44(array_44_2);
