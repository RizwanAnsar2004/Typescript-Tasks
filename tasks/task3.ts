// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase

let person_name: string = "RIzwAn ANSar";

console.log("Name in Lower Case\t" + person_name.toLowerCase() + "\n");
console.log("Name in Upper Case\t" + person_name.toUpperCase() + "\n");
console.log("Name in Title Case\t" + titlecase(person_name) + "\n");

function titlecase(input: string): string {
  let words: string[] = input.split(" ");
  let p_name: string[] = words.map((word) => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  });
  let final: string = p_name.join(" ");
  return final;
}
