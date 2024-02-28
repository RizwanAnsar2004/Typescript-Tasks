// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

let  name_31:string[]=["rizwan","faizan","sarwan","jawad","admin"];
let  ln_31:number=name_31.length
for (let i = 0; i <= ln_31; i++) {
    if(name_31.length==0){
        console.log("LIST IS EMPTY ! WE NEED MORE USERS");
    }
    else{
    console.log(`USER ${name_31.pop()} IS DELETED..`);}
}