// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
var places18 = ["Makkah", "Melbourne", "Sydney", "Tokyo", "Seoul", "Beijing", "Milan", "Munich", "Berlin"];
console.log("THE ORIGINAL ORDER OF PLACES ARE: \n" + places18);
var places18_1 = places18.map(function (word) { return word.toLowerCase(); });
var final_places_18 = places18_1.map(function (word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
});
console.log("The sorted list is \n" + final_places_18.sort());
console.log("THE ORIGINAL ORDER OF PLACES ARE: \n" + places18);
console.log("The Reverse sorted list is \n" + final_places_18.sort().reverse());
console.log("THE ORIGINAL ORDER OF PLACES ARE: \n" + places18);
console.log("THE REVERSE ORDER OF ORIGINAL ORDER: \n" + places18.reverse());
console.log("THE REREVERSE ORDER OF ORIGINAL ORDER: \n" + places18.reverse());
places18 = places18.sort();
console.log("Sorting original list: \n" + places18);
console.log("Sorting original list in reverse alphabetical orders: \n" + places18.reverse());
