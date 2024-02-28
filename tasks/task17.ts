// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list,

// print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program

let old_guests_17: string[] = [
  "Rizwan",
  "Sarwan",
  "Faizan",
  "Taimoor",
  "Jawad",
  "Ali",
];
let message17: string =
  " , We regret to inform you that due to space constraint we are unable to invite you to dinner we do appreciate  the sense of companionship that you feel towards u.\nSorry!.";

for (let i = old_guests_17.length; i >2; i--) {
    console.log(old_guests_17.pop() + message17);
  
}
let message17_2: string = "The Finalized list of guests are: \n";
console.log(message17_2 + old_guests_17);
