// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase
var person_name = "RIzwAn ANSar";
console.log("Name in Lower Case\t" + person_name.toLowerCase() + "\n");
console.log("Name in Upper Case\t" + person_name.toUpperCase() + "\n");
console.log("Name in Title Case\t" + titlecase(person_name) + "\n");
function titlecase(input) {
    var words = input.split(' ');
    var p_name = words.map(function (word) { return word[0].toUpperCase() + word.slice(1).toLowerCase(); });
    var final = p_name.join(" ");
    return final;
}
