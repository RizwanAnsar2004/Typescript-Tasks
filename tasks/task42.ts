// Great Magicians: Start with a copy of your program from Exercise 39. 
// Write a function called make_great() that modifies the array of magicians 
// by adding the phrase the Great to each magician’s name. Call show_magicians()
//  to see that the list has actually been modified.

var name_42:string[] = ["rizwan", "faizan", "sarwan", "jawad", "admin"];

function make_great(array:string[]):string[]{
    for (let i = 0; i < array.length; i++) {
        const element = array[i] + " the Great";
        array[i]=element;       
    }
    return array;
}


function show_magicians(array:string[]):void{
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
show_magicians(make_great(name_42));