// Hello Admin: Make a array of five or more usernames, including the name 'admin'.

// Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

let  name_30:string[]=["rizwan","faizan","sarwan","jawad","admin"];

for (let i = 0; i < name_30.length; i++) {
    if(name_30[i]=="admin"){
        console.log(`HELLO ${name_30[i]} WOULD  YOU LIKE TO  SEE A  STATUS REPORT....`);
    }
    else{
        console.log(`Hello  ${name_30[i]}, Thank you for logging in again`);
    }
    
}