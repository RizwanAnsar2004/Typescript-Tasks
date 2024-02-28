// More Guests: You just found a bigger dinner table,
//  so now more space is available. Think of three more guests to invite to dinner.

let old_guests_16:string[]=["Rizwan","Sarwan","Faizan"];
let message16:string=" , You are cordially invited to our family dinner! Please give us a chance to enjoy your presence in our dinner thanks";
let new_guests_15=["Taimoor","Jawad","Ali"];
for (let i = 0; i< new_guests_15.length; i++) {
  console.log(new_guests_15[i]+" "+message16);
    }

let final_guests_16:string[]=old_guests_16.concat(new_guests_15);

console.log("THE FINALIZED LIST OF GUESTS ARE \n"+final_guests_16);