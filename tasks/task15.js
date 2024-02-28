// Changing Guest List: You just heard that one of your guests can’t make the dinner,
//  so you need to send out a new set of invitations.
//  You’ll have to think of someone else to invite.
//extension of task14
var din_guests = ["Rizwan", "Sarwan", "Faizan"];
console.log("THE EXECTED  SET OF GUESTS: \n" + din_guests);
console.log("However due to some problem Mr." + din_guests[0] + " would not be available ");
din_guests[0] = "zeeshan";
var message15 = " , You are cordially invited to our family dinner! Please give us a chance to enjoy your presence in our dinner thanks";
console.log("the guest is replaced by " + din_guests[0]);
console.log("THE NEW INVITATIONS ARE:");
for (var i = 0; i < din_guests.length; i++) {
    console.log(din_guests[i] + " " + message15);
}
