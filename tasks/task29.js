// Favorite Fruit: Make a array of your favorite fruits, and then write a series of 
// independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. 
// If the fruit is in your array, the if block should print a statement, such as You really like bananas!
var fav_fruit = ["Banana", "Apple", "Grapes", "Pomegranate"];
for (var i = 0; i < fav_fruit.length; i++) {
    if (fav_fruit[i].toLowerCase() == "mango") {
        console.log("you really like " + fav_fruit[i]);
    }
    else if (fav_fruit[i].toLowerCase() == "grapes") {
        console.log("you really like " + fav_fruit[i]);
    }
    else if (fav_fruit[i].toLowerCase() == "banana") {
        console.log("you really like " + fav_fruit[i]);
    }
    else if (fav_fruit[i].toLowerCase() == "apple") {
        console.log("you really like " + fav_fruit[i]);
    }
    else if (fav_fruit[i].toLowerCase() == "coconut") {
        console.log("you really like " + fav_fruit[i]);
    }
    else if (fav_fruit[i].toLowerCase() == "pomegranate") {
        console.log("you really like " + fav_fruit[i]);
    }
}
