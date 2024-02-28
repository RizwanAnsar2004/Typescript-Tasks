// Unchanged Magicians: Start with your work from Exercise 40.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Call the function make_great() with a copy of the array of magicians’ names.
// Because the original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original names
// and one array with the Great added to each magician’s name.
var name_43 = ["rizwan", "faizan", "sarwan", "jawad", "admin"];
function make_great_42(array) {
    var arr2 = __spreadArray([], array, true);
    for (var i = 0; i < arr2.length; i++) {
        var element = arr2[i] + " the Great";
        arr2[i] = element;
    }
    return arr2;
}
function show_magicians_42(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
console.log("NEW ARRAY:");
var new_arr_43 = make_great_42(name_43);
show_magicians_42(new_arr_43);
console.log("OLD ARRAY:");
console.log(name_43);
