// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

// • If the person is less than 2 years old, print a message that the person is a baby.

// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.

// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.

// • If the person is age 65 or older, print a message that the person is an elder.

let age_28_1:number=1;
let age_28_2:number=3;
let age_28_3:number=5;
let age_28_4:number=18;
let age_28_5:number=25;
let age_28_6:number=66;

function age_check(age: number): void {
    if(age>0){
        if (age < 2) {
            console.log("PERSON IS A BABY");
          } else if ((age >= 2) && age < 4) {
            console.log("PERSON IS TODDLER");
          } else if (age>= 4 && age < 13) {
            console.log("PERSON IS A KID");
          } else if (age >= 13 && age < 20) {
            console.log("PERSON IS A TEENAGER");
          } else if (age >= 20 && age < 65) {
            console.log("PERSON IS AN ADULT");
          } else {
            console.log("PERSON IS AN ELDER");
          }
    }
    else{
        console.log("PLEASE  ENTER  VALID AGE");
    }    
}


age_check(0);
age_check(-1);
age_check(age_28_1);
age_check(age_28_2);
age_check(age_28_3);
age_check(age_28_4);
age_check(age_28_5);
age_check(age_28_6);
