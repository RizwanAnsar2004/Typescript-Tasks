// Unchanged Magicians: Start with your work from Exercise 40.

// Call the function make_great() with a copy of the array of magicians’ names.

// Because the original array will be unchanged, return the new array and store it in a separate array.

// Call show_magicians() with each array to show that you have one array of the original names

// and one array with the Great added to each magician’s name.



var name_43:string[] = ["rizwan", "faizan", "sarwan", "jawad", "admin"];

function make_great_42(array:string[]):string[]{
    let arr2:string[]=[...array];
    for (let i = 0; i < arr2.length; i++) {
        const element = arr2[i] + " the Great";
        arr2[i]=element;       
    }
    return arr2;
}


function show_magicians_42(array:string[]):void{
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}


console.log("NEW ARRAY:");
let new_arr_43:string[]=make_great_42(name_43);
show_magicians_42(new_arr_43);
console.log("OLD ARRAY:");
console.log(name_43);
