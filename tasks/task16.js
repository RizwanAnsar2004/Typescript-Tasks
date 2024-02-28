// More Guests: You just found a bigger dinner table,
//  so now more space is available. Think of three more guests to invite to dinner.
var old_guests_16 = ["Rizwan", "Sarwan", "Faizan"];
var message16 = " , You are cordially invited to our family dinner! Please give us a chance to enjoy your presence in our dinner thanks";
var new_guests_15 = ["Taimoor", "Jawad", "Ali"];
for (var i = 0; i < new_guests_15.length; i++) {
    console.log(new_guests_15[i] + " " + message16);
}
var final_guests_16 = old_guests_16.concat(new_guests_15);
console.log("THE FINALIZED LIST OF GUESTS ARE \n" + final_guests_16);
