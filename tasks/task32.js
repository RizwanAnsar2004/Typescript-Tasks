// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used.
// If it has, print a message that the person will need to enter a new username.
// If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted
var current_users_32 = ["rizwan", "faizan", "sarwan", "jawad", "admin"];
var new_users_32 = ["RIZWAN", "Shehzad", "faiZan", "Babar", "SaRwan"];
for (var i = 0; i < new_users_32.length; i++) {
    for (var j = 0; j < current_users_32.length; j++) {
        if (new_users_32[i].toLowerCase() == current_users_32[j].toLowerCase()) {
            console.log("".concat(new_users_32[i], " already exists!\n Please try another username"));
        }
        else {
            continue;
        }
    }
}
